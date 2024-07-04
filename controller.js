function acessar(){
   let loginEmailm = document.getElementById('loginEmail').value;
   let loginSenha = document.getElementById('loginSenha').value;

      if(!loginEmailm || !loginSenha){
         alert('favor preencher todos os campos');

      } else{
         alert('campos preenchisdos com sucesso')
      }
}