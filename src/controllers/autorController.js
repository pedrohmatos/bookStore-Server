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

    static async listarAutorPorId(req, res, next) {
        try {
            const id = req.params.id;
            const autorEncontrado = await Autores.findById(id);

            if (autorEncontrado !== null) {
                res.status(200).json(autorEncontrado);
            } else {
                res.status(204).json({ message: "Autor não localizado" });
            }

        } catch (erro) {
            next(erro);
        }
    }

    static async cadastrarAutor(req, res, next) {
        try {
            const novoAutor = await Autores.create(req.body);
            res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
        } catch (erro) {
            next(erro);
        }
    }

    static async atualizarAutor(req, res, next) {
        try {
            const id = req.params.id;
            const atualizandoAutor = await Autores.findByIdAndUpdate(id, req.body);

            if (atualizandoAutor !== null) {
                res.status(200).json({ message: "Autor atualizado", mudanca: atualizandoAutor });
            } else {
                res.status(404).json({ message: "O autor a ser atualizado não foi encontrado" });
            }

        } catch (erro) {
            next(erro);
        }
    }

    static async deletarAutor(req, res, next) {
        try {
            const id = req.params.id;
            const deletandoAutor = await Autores.findByIdAndDelete(id);

            if (deletandoAutor !== null) {
                res.status(200).json({ message: "O autor foi deletado com sucesso", mudanca: deletandoAutor });
            } else {
                res.status(404).json({ message: "O autor a ser deletado não foi encontrado" });
            }

        } catch (erro) {
            next(erro);
        }
    }
}

export default AutorController;
