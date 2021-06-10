/*-Componente Botao conclui-----------------------------------------------------------------*/
    const BotaoConclui = () => {
        const botaoConclui = document.createElement('button');
        /*Adicionando classe CSS ao botão*/
        botaoConclui.classList.add('check-button');

        /*Adicionando texto ao botão */
        botaoConclui.innerText = "concluir";
        botaoConclui.addEventListener('click', concluirtarefa);
        return botaoConclui;
    }
    const concluirtarefa = (evento) => {
        const botaoConclui = evento.target;
        const tarefacompleta = botaoConclui.parentElement;
        tarefacompleta.classList.toggle('done');
    }
    export default BotaoConclui

