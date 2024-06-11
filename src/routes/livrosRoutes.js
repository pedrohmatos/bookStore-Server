import express from "express";
import LivroController from "../controllers/livroController.js";

const livrosRoutes = express.Router();

livrosRoutes.get("/livros", LivroController.listarLivros);
livrosRoutes.get("/livros/buscar", LivroController.listarLivrosPorEditora);
livrosRoutes.get("/livros/:id", LivroController.listarLivroPorId);
livrosRoutes.post("/livros", LivroController.cadastrarLivro);
livrosRoutes.put("/livros/:id", LivroController.atualizarLivro);
livrosRoutes.delete("/livros/:id", LivroController.deletarLivro);

export default livrosRoutes;
