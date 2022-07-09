
//Adapter
class AdaptedFilter{
    constructor(media){
        this.clicked = false;
        this.media = media;
        this.filterItem = document.querySelectorAll('.filter-item');
        this.filterItem.forEach(item => item.addEventListener('click', function(){
            this.selectedFilter = document.querySelector('.selected').innerHTML = item.textContent; 
            if(!this.clicked){
                if (this.selectedFilter === 'Popularité'){
                    console.log('filtre popularité')
                    //applicare filtro likes
                    filterLikes(media);
                }if (this.selectedFilter === 'Date'){
                    console.log('filtre date')
                    //applicare filtro per la data 
                    filterDate(media);
                }if(this.selectedFilter === 'Titre'){
                    //this.clicked = true;
                    console.log('filtre titre')
                    filterTitle(media);
                    //applicare filtro per il titolo
                }
            }  
        }))
    }
}

//Adapter





