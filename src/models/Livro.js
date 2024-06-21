import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {
        type: mongoose.Schema.Types.String,
        required: [true, "O título do livro é obrigatório."]
    },
    editora: { type: mongoose.Schema.Types.String },
    preco: {
        type: mongoose.Schema.Types.Number,
        required: [true, "O preço do livro é obrigatório"]
    },
    paginas: { type: mongoose.Schema.Types.Number },
    autor: autorSchema
}, { versionKey: false });

const Livros = mongoose.model("livros", livroSchema);

export default Livros;
