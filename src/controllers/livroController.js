import { Autores } from "../models/Autor.js";
import Livros from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await Livros.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await Livros.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await Autores.findById(novoLivro.autor);
            const montandoNovoLivro = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const cadastrandoNovoLivro = await Livros.create(montandoNovoLivro);
            res.status(201).json({ message: "criado com sucesso", livro: cadastrandoNovoLivro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await Livros.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
        }
    }

    static async deletarLivro(req, res) {
        try {
            const id = req.params.id;
            await Livros.findByIdAndDelete(id);
            res.status(200).json({ message: `O livro foi deletado com sucesso` });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição delete` });
        }
    }

    static async listarLivrosPorEditora(req, res) {
        const editoraBuscada = req.query.editora;
        try {
            const livrosPorEditora = await Livros.find({ editora: editoraBuscada });
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na busca` });
        }
    }
}

export default LivroController;
