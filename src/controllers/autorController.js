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
                res.status(404).json({ message: "Autor não localizado" });
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
            await Autores.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "autor atualizado" });
        } catch (erro) {
            next(erro);
        }
    }

    static async deletarAutor(req, res, next) {
        try {
            const id = req.params.id;
            await Autores.findByIdAndDelete(id);
            res.status(200).json({ message: "O autor foi deletado com sucesso" });
        } catch (erro) {
            next(erro);
        }
    }
}

export default AutorController;
