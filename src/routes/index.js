import { Router } from "express";

import rutaDash from "./routes.dash";

const ruta = Router();

ruta.use("/dash",rutaDash);

export default ruta;