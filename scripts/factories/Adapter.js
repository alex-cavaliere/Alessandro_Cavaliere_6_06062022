
//Adapter
class AdaptedFilter{
    constructor(media){
        let clicked = false;
        this.media = media;
        console.log(clicked)
        this.filterItem = document.querySelectorAll('.filter-item');
        this.filterItem.forEach(item => item.addEventListener('click', function(){
            this.selectedFilter = document.querySelector('.selected').innerHTML = item.textContent;
            console.log(this.selectedFilter); 
            if(!clicked){
                clicked = true;
                if (this.selectedFilter === 'Popularité'){
                    console.log('filtre popularité')
                    //applicare filtro likes
                    filterLikes(media);
                }if (this.selectedFilter === 'Date'){
                    console.log('filtre date')
                    //applicare filtro per la data 
                    filterDate(media);
                }if(this.selectedFilter === 'Titre'){
                    console.log('filtre titre')
                    filterTitle(media);
                    //applicare filtro per il titolo
                }
            }
        }))
    }
}

//Adapter





