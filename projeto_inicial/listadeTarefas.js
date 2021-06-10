const criarTarefa = (evento)=>{

    /*-preventDefault: Previnir comportamento padrão---------------------*/
    evento.preventDefault();

    /*-Capturando input----------------------------------------------------*/
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    console.log(valor);
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

    /*-Escutador ---------------------------------------------------------------
     1 - evento = click
     2 - local do evento = novaTarefa
     3 - ação:

    addEventListener: Metodo para escutar o evento 'Click'.
    ()=>{}: Função anonima. serve para execultar o bloco de codigo.
    */
novaTarefa.addEventListener('click', criarTarefa);


