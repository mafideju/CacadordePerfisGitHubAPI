// INSTANCIAR A CLASSE GITHUB ONDE ESTÁ O ENDEREÇO DO API
const github = new GitHub();
const ui = new UI();
// PEGAR OS DADOS DE UM INPUT FIELD
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', e => {
  const userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // mostra alerta
        ui.showAlert('Perfil Não Encontrado', 'alert alert-danger');
      } else {
        // mostra perfil
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // limpar tudo
    ui.clearProfile();
  }
});
