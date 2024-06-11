import { Autores } from "../models/Autor.js";

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await Autores.find({});
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await Autores.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do autor` });
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await Autores.create(req.body);
            res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` });
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await Autores.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "autor atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do autor` });
        }
    }

    static async deletarAutor(req, res) {
        try {
            const id = req.params.id;
            await Autores.findByIdAndDelete(id);
            res.status(200).json({ message: `O autor foi deletado com sucesso` });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição delete` });
        }
    }
}

export default AutorController;
