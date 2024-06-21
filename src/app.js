import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middleware/manipularErros.js";
import rotasNaoEncontradas from "./middleware/notFound.js";

const conectando = await conectaNaDatabase();
const app = express();

conectando.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conectando.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso");
});

app.use(express.json());

routes(app);

app.use(manipuladorDeErros);

app.use(rotasNaoEncontradas);

export default app;
