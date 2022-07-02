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
        //
        const medias = data.media;
        //const mediaImg = medias.map(media => new MediaFactory(media, 'img'));
        //const mediaVideo = medias.map(media => new MediaFactory(media, 'video'));
        //const med = mediaImg.concat(mediaVideo);
        //console.log(med);
        const mediaSection = document.querySelector(".photograph-body");
        const Params = (new URL(document.location).searchParams);
        const Id = Number(Params.get("id"));

        // somma likes
        
        let sum = 0;

        medias
        .forEach((media) => {
            // controllo se i media coincidono con l'id del fotografo
            if(media.photographerId === Id){
                // creo e aggiungo la somma dei likes al cratellino del prezzo 
                sum += media.likes;
                const likesBlock = document.querySelector(".photograph-likes");
                const icon = document.createElement('i');
                icon.classList.add('tot-likes-icon' ,'fa-solid', 'fa-heart');
                likesBlock.textContent = sum + " ";
                likesBlock.append(icon);
                
                //je verifie si c'est une image ou un video.
                // creazione slides carousel
                function nextLightbox(){
                    console.log(media);
                }
                next.addEventListener("click", nextLightbox);
                
                const mediaModel = mediasFactory(media);
                let mediaCardDOM;
                if(media.hasOwnProperty('image')){
                    mediaCardDOM = mediaModel.imgTemplate();
                }else if(media.hasOwnProperty('video')){
                    mediaCardDOM = mediaModel.videoTemplate(); 
                }
                mediaSection.append(mediaCardDOM);
            }   
        });
    })
    .catch(function(err){
        console.log(err);
    })
}
async function init() {
    // Récupère les datas des photographes
    await getPhotographers();
    await getMedias();
};
init();