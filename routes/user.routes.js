import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";


const router = Router();

// GET All Users
router.get('/', getUsers);

// Create New User
router.post('/', createUser);

export default router;