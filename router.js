import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("uesr index"));
userRouter.get("/edit", (req, res) => res.send("uesr edit"));
userRouter.get("/password", (req, res) => res.send("uesr password"));