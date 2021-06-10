/*-Componente Botao remove-----------------------------------------------------------------*/
    const Botaoremove = () => {
        const botaoremove = document.createElement('button');
        botaoremove.innerText = "Remover";
        botaoremove.addEventListener('click', removetarefa);
        return botaoremove;
    }
    const removetarefa = (evento) => {
        const botaoRemove = evento.target;
        const tarefacompleta = botaoRemove.parentElement;
        tarefacompleta.remove();
        return botaoRemove
    }
export default Botaoremove;