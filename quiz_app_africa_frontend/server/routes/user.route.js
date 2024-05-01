import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

// api route for sign up.
router.get("/", test);

export default router;
