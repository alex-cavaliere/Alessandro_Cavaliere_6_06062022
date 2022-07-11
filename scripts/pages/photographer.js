//Mettre le code JavaScript lié à la page photographer.html
const next = document.querySelector(".controls-right");
const prev = document.querySelector(".controls-left");
let medias;
let currentMedias = [];

// controls du carousel

prev.addEventListener("click", prevImage)
next.addEventListener("click", nextImage)


function prevImage(){
    let current_img = document.getElementById('current_img');
    let lastId = current_img.getAttribute('data-id');
    let index = currentMedias.findIndex((e) => e.id === parseInt(lastId));
    if(index > 0){
        let currentMedia = currentMedias[index - 1];
        const lightbox = new Lightbox(currentMedia);
        if (currentMedia.hasOwnProperty('image')){
            lightbox.createImgLightbox();
        }else if(currentMedia.hasOwnProperty('video')){
            lightbox.createVidLightbox();
        }
    }
}
function nextImage(){
    let current_img = document.getElementById('current_img');
    let lastId = current_img.getAttribute('data-id');
    let index = currentMedias.findIndex((e) => e.id === parseInt(lastId));
    if(index < currentMedias.length){
        let currentMedia = currentMedias[index + 1];
        const lightbox = new Lightbox(currentMedia);
        if (currentMedia.hasOwnProperty('image')){
            lightbox.createImgLightbox();
        }else if(currentMedia.hasOwnProperty('video')){
            lightbox.createVidLightbox();
        }
    }
}

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
        medias = data.media;
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
                currentMedias.push(media);
                sum += media.likes;
                const likesBlock = document.querySelector(".photograph-likes");
                likesBlock.textContent = sum;
                
                const icon = document.createElement('i');
                icon.classList.add('tot-likes-icon' ,'fa-solid', 'fa-heart');
                likesBlock.append(icon)
                //je verifie si c'est une image ou un video.
                // creazione slides carousel  

                // resoudre le bug de repetition

                const mediaModel = mediasFactory(media);
                let mediaCardDOM;
                if(media.hasOwnProperty('image')){
                    new AdaptedFilter(media);
                    mediaCardDOM = mediaModel.imgTemplate();
                }else if(media.hasOwnProperty('video')){
                    new AdaptedFilter(media);
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