const hashtags = document.querySelectorAll('.hashtag-item');
const photographersSection = document.querySelector('.photographer_section');
let currentPhotographers = [];
//console.log(hashtags);
async function getPhotographers() {
// Penser à remplacer par les données récupérées dans le json
    fetch('./data/photographers.json')
        .then(function(res){
            if(res.ok){
                return res.json();
            }
        })
        .then(function(data){
            const photographers = data.photographers;
    
            //console.log(photographers);
            photographers.forEach((photographer) => {
                // filter photographer
                let photoHashtag = photographer.hashtag; 
                for (let hashtag of hashtags){
                    //console.log(hashtag);
                    hashtag.addEventListener('click', function(e){
                        let selected = e.target.getAttribute('name');
                        //console.log(selected, photoHashtag);
                        //console.log(photoHashtag.indexOf(selected));
                        // sistemare filtro hashtag
                        if (photoHashtag.indexOf(selected) !== -1){
                            photographersSection.innerHTML = '';
                            currentPhotographers.push(photographer);
                            currentPhotographers.forEach(currentPhotographer =>  displayPhotographers(currentPhotographer, photographersSection));
                        }
                    }, false);
                }
                displayPhotographers(photographer, photographersSection);
            });
        })  
        .catch(function(err){
            console.log(err);
        });
    // et bien retourner le tableau photographers seulement une fois
}    
async function init() {
    // Récupère les datas des photographes
    await getPhotographers();
}

function displayPhotographers(photographer, Section){
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    Section.appendChild(userCardDOM);
}

init();
