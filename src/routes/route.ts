import { Router } from "express";
import cityRoute from "./city.route";

const router = Router();

router.use("/v1", cityRoute);

export default router;
