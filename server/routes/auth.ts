import { Request, Response, Router } from "express";
import prisma from "../prisma";
import { hashPassword, verifyPassword, signToken } from "../auth";

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, password, name, dob, phone, location, occupation } =
      req.body || {};
    if (!email || !password)
      return res.status(400).json({ error: "Missing fields" });

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(409).json({ error: "User exists" });

    const passwordHash = await hashPassword(String(password));
    // force role = user
    const user = await prisma.user.create({
      data: {
        email: String(email),
        name: name ? String(name) : null,
        password: passwordHash,
        role: "user",
        dob: dob,
        occupation: occupation,
        phoneNumber: phone,
        location: location,
      },
    });

    const token = signToken({ id: user.id, role: user.role });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res
      .status(201)
      .json({ id: user.id, email: user.email, name: user.name });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password)
      return res.status(400).json({ error: "Missing fields" });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.password)
      return res.status(401).json({ error: "Invalid credentials" });

    const ok = await verifyPassword(String(password), user.password);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });

    const token = signToken({ id: user.id, role: user.role });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.json({ id: user.id, email: user.email, name: user.name });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

router.post("/logout", (_req: Request, res: Response) => {
  res.clearCookie("token");
  return res.json({ ok: true });
});

export default router;
