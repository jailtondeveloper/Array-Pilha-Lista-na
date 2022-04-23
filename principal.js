
//CRIANDO OS VETORES Pilha e Lista
let vetorPilha=[];
let vetorLista=[];

//Inicio função para guardar no vetor em formato pilha

function inserirPilha(){
   var n1 = document.getElementById('nome1').value
   vetorPilha.unshift(n1);
   console.log(vetorPilha);
   document.getElementById('nome1').value = ""
}

//Inicio função para guardar no vetor em formato lista

function inserirLista(){
    var n2 = document.getElementById('nome2').value
    vetorLista.push(n2);
    console.log(vetorLista);
    document.getElementById('nome2').value = ""
}

//Inativar os botões radio pilha ou fila após inserir de um valor

function inativar() {
    document.getElementById("pilha").disabled = true;
    document.getElementById("lista").disabled = true;
}

//Função para o botão limpar os dados do vetor e a escolha do botão 

function limpar() {
    var div = document.getElementById('dados');
    div.innerHTML = '<p></p>';
    vetorLista=[];
    //console.log(vetorLista)

    var li = document.getElementById("lista");
    var pi = document.getElementById("pilha")

    li.disabled = false
    li.checked = false;

    pi.disabled = false
    pi.checked = false;
}

//função  exibe os dados do vetor pilha

function listarPilha(){
    
    var div = document.getElementById('dados');  

    div.innerHTML = `<p> ${vetorPilha} </p> </br>`
}

//função exibe os dados do vetor lista

function listarLista(){

    var div = document.getElementById('dados');

    div.innerHTML = `<p> ${vetorLista} </p> </br>` 
   }

//função verifica a escolha do formato
//chama a função inserir no vetor pilha ou Lista
//exibe no browser listando os dados 
//chama a função inativar os botões

function salvar (){
    if (document.getElementById("pilha").checked) {
        inserirPilha();
        listarPilha();
        inativar();
       
    } else if (document.getElementById ("lista").checked){
        inserirLista();
        listarLista();
        inativar();
       
    }else{
        alert("Escolha entre formato Pilha ou Lista!")
    }
}
