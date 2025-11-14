import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "./prisma";
import type { Request, Response, NextFunction } from "express";
import type { User } from "@prisma/client";

const JWT_SECRET = process.env.JWT_SECRET || "change_me";

export const hashPassword = (pw: string) => bcrypt.hash(pw, 10);
export const verifyPassword = (pw: string, hash: string) =>
  bcrypt.compare(pw, hash);
export const signToken = (payload: { id: number; role: string }) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET) as { id: number; role: string };
  } catch {
    return null;
  }
};

// extend the request type locally for handlers that use req.user
export type ReqWithUser = Request & {
  user?: User;
  cookies?: Record<string, string>;
};

export async function attachUser(
  req: ReqWithUser,
  _res: Response,
  next: NextFunction
) {
  try {
    const token = req.cookies?.token || null;
    if (!token) return next();
    const data = verifyToken(token);
    if (!data?.id) return next();
    const user = await prisma.user.findUnique({
      where: { id: Number(data.id) },
    });
    if (user) req.user = user;
  } catch (e) {
    // ignore
  }
  return next();
}

export function requireUser(
  req: ReqWithUser,
  res: Response,
  next: NextFunction
) {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  return next();
}

export function requireAdmin(
  req: ReqWithUser,
  res: Response,
  next: NextFunction
) {
  const user = req.user;
  if (!user || user.role !== "admin")
    return res.status(403).json({ error: "Forbidden" });
  return next();
}
