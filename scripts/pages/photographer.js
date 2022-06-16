//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    fetch("./data/photographers.json")
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(data){
        const photographers = data.photographers;
        //console.log(photographers);
        const photographersSection = document.querySelector(".photograph-header");
        const Params = (new URL(document.location).searchParams);
        const Id = Number(Params.get("id"));
        photographers.forEach((photographer) => {
            if (photographer.id === Id) {
                const photographerModel = photographerFactory(photographer);
                const userCardDOM = photographerModel.user();
                photographersSection.append(userCardDOM);   
            }
        });
    })  
    .catch(function(err){
        console.log(err);
    })
    // et bien retourner le tableau photographers seulement une fois
}    

// funzione da sistemare... bisogna prendere i media dopo aver creato un constructor
async function getMedias(){
    fetch('./data/photographers.json')
    .then(function(res){
        if(res.ok){
            return res.json()
        }
    })
    .then(function(data){
        const medias = data.media;
        const mediaSection = document.querySelector(".photograph-body");
        const Params = (new URL(document.location).searchParams);
        const Id = Number(Params.get("id"));
        medias.forEach((media) => {
            if(media.photographerId === Id){
                const mediaModel = photographerFactory(media);
                const userCardDOM = mediaModel.media();
                mediaSection.append(userCardDOM);
            }   
        });
    })
}
async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
    const medias = await getMedias();
};
init();