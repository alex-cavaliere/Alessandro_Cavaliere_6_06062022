
//Adapter
class AdaptedFilter{
    constructor(media){
        let clicked = false;
        this.media = media;
        this.filterItem = document.querySelectorAll('.filter-item');
        this.filterItem.forEach(item => item.addEventListener('click', function(){
            this.selectedFilter = document.querySelector('.selected').innerHTML = item.textContent; 
            if(!clicked){
                clicked = true;
                if (this.selectedFilter === 'Popularité'){
                    console.log('filtre popularité')
                    clearDOM();
                    filterLikes(media);
                    //applicare filtro likes
                }else if (this.selectedFilter === 'Date'){
                    console.log('filtre date')
                    clearDOM();
                    filterDate(media);
                    //applicare filtro per la data 
                }else if(this.selectedFilter === 'Titre'){
                    console.log('filtre titre')
                    clearDOM();
                    filterTitle(media);
                    //applicare filtro per il titolo
                }
            }
            clicked = false;
        }))
    }
}

//Adapter





