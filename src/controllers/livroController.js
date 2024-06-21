import { Autores } from "../models/Autor.js";
import Livros from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res, next) {
        try {
            const listaLivros = await Livros.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            next(erro);
        }
    }

    static async listarLivroPorId(req, res, next) {
        try {
            const id = req.params.id;
            const livroEncontrado = await Livros.findById(id);

            if (livroEncontrado !== null) {
                res.status(200).json(livroEncontrado);
            } else {
                res.status(204).json({ message: "Livro não encontrado" });
            }

        } catch (erro) {
            next(erro);
        }
    }

    static async cadastrarLivro(req, res, next) {
        const novoLivro = req.body;
        let montandoNovoLivro = { ...novoLivro };
        try {
            const autorEncontrado = await Autores.findById(novoLivro.autor);

            if (autorEncontrado) {
                montandoNovoLivro.autor = { ...autorEncontrado._doc };
            }

            const cadastrandoNovoLivro = await Livros.create(montandoNovoLivro);
            res.status(201).json({ message: "criado com sucesso", livro: cadastrandoNovoLivro });
        } catch (erro) {
            next(erro);
        }
    }

    static async atualizarLivro(req, res, next) {
        try {
            const id = req.params.id;
            const livroAtualizando = await Livros.findByIdAndUpdate(id, req.body);

            if (livroAtualizando !== null) {
                res.status(200).json({ message: "livro atualizado", mudanca: livroAtualizando });
            } else {
                res.status(404).json({ message: "O livro a ser atualizado não foi encontrado" });
            }

        } catch (erro) {
            next(erro);
        }
    }

    static async deletarLivro(req, res, next) {
        try {
            const id = req.params.id;
            const livroDeletado = await Livros.findByIdAndDelete(id);

            if (livroDeletado !== null) {
                res.status(200).json({ message: "O livro foi deletado com sucesso", livro: livroDeletado });
            } else {
                res.status(404).json({ message: "O livro a ser deletado não foi encontrado" });
            }

        } catch (erro) {
            next(erro);
        }
    }

    static async listarLivrosPorEditora(req, res, next) {
        const editoraBuscada = req.query.editora;
        try {
            const livrosPorEditora = await Livros.find({ editora: editoraBuscada });
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            next(erro);
        }
    }
}

export default LivroController;
