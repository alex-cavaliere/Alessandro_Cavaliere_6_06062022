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
            console.log(photographers);
            const photographersSection = document.querySelector(".photographer_section");
            photographers.forEach((photographer) => {
                const photographerModel = photographerFactory(photographer);
                const userCardDOM = photographerModel.getUserCardDOM();
                photographersSection.appendChild(userCardDOM);
            });
        })  
        .catch(function(err){
            console.log(err + "error");
        })
        // ho aggiunto fetch alla funzione e ho creato un ciclo for per percorrere gli elementi. 
        // et bien retourner le tableau photographers seulement une fois
    }    
    /*async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };*/
    async function init() {
        // Récupère les datas des photographes
        const photographers = await getPhotographers();
    };
    init();

    