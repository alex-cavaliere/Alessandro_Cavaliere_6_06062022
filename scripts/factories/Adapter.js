
//Adapter
class AdaptedFilter{
    constructor(media){
        this.media = media;
        this.filterItem = document.querySelectorAll('.filter-item');
        this.filterItem.forEach(item => item.addEventListener('click', function(){
            this.selectedFilter = document.querySelector('.selected').innerHTML = item.textContent;
            const body = document.querySelector('.photograph-body');
            if (this.selectedFilter === 'Popularité'){
                console.log('filtre popularité')
                //applicare filtro likes
            }if (this.selectedFilter === 'Date'){
                console.log('filtre date')
                //applicare filtro per la data 
            }if(this.selectedFilter === 'Titre'){
                body.innerHTML = "";
                console.log('filtre titre')
                const filteredMedia = filterTitle(media);
                console.log(filteredMedia);
                filteredMedia.forEach(filter => {
                    const model = mediasFactory(filter)
                    let filteredDom;
                    if(filter.hasOwnProperty('image')){
                        filteredDom = model.imgTemplate();
                    }else if(filter.hasOwnProperty('video')){
                        filteredDom = model.videoTemplate();
                    }
                })
                //applicare filtro per il titolo
            }
        }))
    }
}

//Adapter





