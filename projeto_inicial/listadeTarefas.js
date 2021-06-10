/*-Metodo Criando Tarefa------------------------------------------------------------------------*/

( ()=> {
    const criarTarefa = (evento) => {

        /*-preventDefault: Previnir comportamento padrão---------------------*/
        evento.preventDefault();

        /*-Buscando o elemento da <ul> */
        const lista = document.querySelector('[data-list]');

        /*-Capturando input----------------------------------------------------*/
        const input = document.querySelector('[data-form-input]');
        const valor = input.value;

        /*Criando um elemento html <li> */
        const tarefa = document.createElement('li');

        /*Acessando a lista de classe dentro do elemento <li> e add nova classe */
        tarefa.classList.add('task');

        /*Criando uma template para o paragrafo: template string*/
        const recebeconteudo = `<p class="content">${valor}</p>`;

        /*acessando o elemento e atribuindo o conetudo do paragrafo <p> */
        tarefa.innerHTML = recebeconteudo;

        /*Colocando botão dentro ta tarefa <li> */
        tarefa.appendChild(BotaoConclui());

        tarefa.appendChild(Botaoremove());

        /*appendChild: cria um elemento filho dentro de um elemento pai */
        lista.appendChild(tarefa);
        input.value = "";
    }
    /*  document: Para cada página carregada no browser, existe um objeto Document.
        A interface Document serve como um ponto de entrada para o conteúdo da Página
        ( a árvore DOM, incluindo elementos como <body> e <table>) e provê funcionalidades
        globais ao documento (como obter a URL da página e criar novos elementos no documento).

        querySelector(): Retorna o primeiro elemento dentro do documento que
        corresponde ao grupo especificado de seletores.

    *-Capturando botão----------------------------------------------------*/
    const novaTarefa = document.querySelector('[data-form-button]');
    /*-Escutador ------------------------------------------------------/
     1 - evento = click
     2 - local do evento = novaTarefa
     3 - ação: ()=>{}

    addEventListener: Metodo para escutar o evento 'Click'.
    ()=>{}: Função anonima. serve para execultar o bloco de codigo.
    */
    novaTarefa.addEventListener('click', criarTarefa);

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
    /*-Componente Botao remove-----------------------------------------------------------------*/
    const Botaoremove = ()=>{
        const botaoremove = document.createElement('button');
        botaoremove.innerText = "Remover";
        botaoremove.addEventListener('click', removetarefa);
        return botaoremove;
    }
    const removetarefa = (evento)=>{
        const botaoRemove  = evento.target;
        const tarefacompleta = botaoRemove.parentElement;
        tarefacompleta.remove();
        return botaoRemove
    }
})(); /* () Função de invocação imediata*/

