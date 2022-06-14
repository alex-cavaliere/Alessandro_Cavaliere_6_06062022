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
        const controls = Number(Params.get("id"));
        photographers.forEach((photographer) => {
            if (photographer.id === controls) {
                const photographerModel = getUser(photographer);
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
async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
};
init();