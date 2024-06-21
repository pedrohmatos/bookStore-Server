// eslint-disable-next-line no-unused-vars
function rotasNaoEncontradas(req, res, next) {
    res.status(404).json({ message: "Página não encontrada." });
}

export default rotasNaoEncontradas;
