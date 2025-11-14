import { Request, Response, Router } from "express";
import prisma from "../prisma";
import { attachUser, requireAdmin, requireUser } from "../auth";

const router = Router();

// attach user for all user routes
router.use(attachUser);

// GET /api/users - admin only: list users
router.get(
  "/",
  requireUser,
  requireAdmin,
  async (req: Request, res: Response) => {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });
    res.json(users);
  }
);

// POST /api/users - admin only: create user (admin can set role)
router.post(
  "/",
  requireUser,
  requireAdmin,
  async (req: Request, res: Response) => {
    try {
      const { email, password, name, dob, phone, location, occupation, role } =
        req.body || {};
      if (!email) return res.status(400).json({ error: "Missing email" });

      const safeRole = role === "admin" ? "admin" : "user";
      const passwordHash = password
        ? await import("bcryptjs").then((m) => m.hash(String(password), 10))
        : null;

      const created = await prisma.user.create({
        data: {
          email: String(email),
          name: name ? String(name) : null,
          role: safeRole,
          password: passwordHash,
          dob: dob,
          occupation: occupation,
          phoneNumber: phone,
          location: location,
        },
      });
      return res.status(201).json({ id: created.id, email: created.email });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server error" });
    }
  }
);

// GET /api/users/:id - admin only
router.get(
  "/:id",
  requireUser,
  requireAdmin,
  async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });
    if (!user) return res.status(404).json({ error: "Not found" });
    return res.json(user);
  }
);

// PATCH /api/users/:id - admin only
router.patch(
  "/:id",
  requireUser,
  requireAdmin,
  async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const body = req.body || {};

    const updateData: {
      email?: string;
      name?: string | null;
      role?: string;
      password?: string | null;
    } = {};

    if (body.email) updateData.email = String(body.email);
    if (Object.prototype.hasOwnProperty.call(body, "name"))
      updateData.name = body.name ? String(body.name) : null;
    if (body.role) updateData.role = body.role === "admin" ? "admin" : "user";
    if (body.password)
      updateData.password = await import("bcryptjs").then((m) =>
        m.hash(String(body.password), 10)
      );

    try {
      const updated = await prisma.user.update({
        where: { id },
        data: updateData,
      });
      return res.json({ id: updated.id, email: updated.email });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server error" });
    }
  }
);

// DELETE /api/users/:id - admin only
router.delete(
  "/:id",
  requireUser,
  requireAdmin,
  async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try {
      await prisma.user.delete({ where: { id } });
      return res.status(204).end();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server error" });
    }
  }
);

export default router;
