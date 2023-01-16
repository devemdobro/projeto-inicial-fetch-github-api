const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
            <div class="data">
                <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                <p>${user.bio ?? 'Não possui descrição 😓'}</p>
                <p>${user.followers} seguidores</p>
                <p>Seguindo ${user.following}</p>
            </div>
         </div>`

         let repositoriesItems = ''
         user.repositories.forEach(repo => {
            repositoriesItems += `<li><a href= "${repo.html_url}" target="_blank">${repo.name}</a></li>`
         })

         if(user.repositories.length > 0){
            this.userProfile.innerHTML += 
            `<div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItems}</ul> 
            </div>`
         }

         let eventsItems = ''
         user.events.forEach(event => {
            if(event.type === "CreateEvent" || event.type === "PushEvent"){
                eventsItems += `<li><h4>${event.repo.name}:</h4><p>${event.payload.description}</p></li>`
                }
         })

         this.userProfile.innerHTML =  
            `<div class="events section">
                <h2>Eventos</h2>
                <ul>${eventsItems}</ul> 
            </div>`

    },

    renderNotFound(){
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export { screen }