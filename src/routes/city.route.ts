import { Router } from "express";
import { createCity } from "../services/city.service";

const router = Router();

router.post("/city", createCity);

export default router;
