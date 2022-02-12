const Modal = {
    open() {
        //abrir modal
        //adicionar classe

        document.querySelector(".modal-overlay").classList.add("active");

    },
    close() {
        //fechar modal
        //remover classe
        document.querySelector(".modal-overlay").classList.remove("active");

    }
}