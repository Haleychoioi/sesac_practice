import express from "express"
import prisma from "../utils/prisma/index.js"
const router = express.Router();

router.get("/users", async (req, res, next) => {
  const userList = await prisma.users.findMany();

  return res.send({userList});
})

export default router;