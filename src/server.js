import express from "express";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
// Cargar variables de entorno desde el archivo .en
config();

const server = express();

// Definir __dirname para ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración del directorio de vistas y motor de vistas
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

// Middlewares
server.use(express.json());

//Ruta ejemplo
server.get("/", () => {
  console.log("si funciona");
});

// Configurar el puerto
server.set("port", process.env.PORT || 5000);

export default server;
