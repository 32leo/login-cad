
function acessar(){
   let loginEmail = document.getElementById('loginEmail').value;
   let loginSenha = document.getElementById('loginSenha').value;

      if(!loginEmail || !loginSenha){
         alert('favor preencher todos os campos');

      }else{
       // else{ alert('campos preenchisdos com sucesso'); }
       window.location.hrefc = 'cadastro.html'
      }
}

// FUNÇÃO PARA ARMAZENAMENTO DE NOMES EM ARRAY
//------------------------------------------------------------------------------------------------------------------------
var dadosLista = [];
function salvarUser(){
   let nomeUser = document.getElementById('nomeUser').value;
   let gmailUser = document.getElementById('GmailUser').value;

   if(nomeUser){
      dadosLista.push(nomeUser);
      // console.log(dadosLista);
      criarLista()
      document.getElementById('nomeUser').value = "";
   }else{
      alert('porfavor iforme um nome para cadastro');
   }


}
// funçao para criar listas de usuario
// ----------------------------------------------------------------------------------------------------------------------
function criarLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr> <th>Nome Usuario</th><th>Acões</th></tr>";
    for(let i=0;i <=(dadosLista.length - 1);i++){
         tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
      document.getElementById('tabela').innerHTML = tabela;
    }

}
// função para editar nomes de listas 
// ----------------------------------------------------------------------------------------------------------------------
function editar(i){
   document.getElementById('nomeUser').value = dadosLista[(i-1)]
   dadosLista.splice(dadosLista[(i - 1)],1);
}  
// função para excluir nome de lista 
// ----------------------------------------------------------------------------------------------------------------------
function excluir(i){
   dadosLista.splice((i - 1), 1);
   document.getElementById('tabela').deleteRow(i);

}








