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
    paginas: {
        type: mongoose.Schema.Types.Number,
        min: [10, "O número de páginas deve estar entre 10 e 5000"],
        max: [5000, "O número de páginas deve estar entre 10 e 5000"]
    },
    autor: autorSchema
}, { versionKey: false });

const Livros = mongoose.model("livros", livroSchema);

export default Livros;
