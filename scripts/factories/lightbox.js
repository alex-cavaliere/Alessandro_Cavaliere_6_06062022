// creazione lightbox

/*class Lightbox extends Media{
    constructor(data){
        super(data)
        this._imgpath = `./assets/photographers/thumbnails/${this._image}`
        this._image = data.image 
    }
    get imgpath(){
        return this._imgpath;
    }
    get image(){
        return this._image;
    }
    createLightbox(url){
        const main = document.querySelector('main');
        const lightbox = document.createElement('div');
        lightbox.setAttribute('id', 'lightbox');
        lightbox.setAttribute('role', 'dialog'),
        lightbox.setAttribute('aria-label', 'image closeup view');

        const lightboxTemplate = 
        `
            <div class="container">
                <div role="button" class="controls controls-left">
                    <span class="img prev-image">
                        <img src="assets/icons/prev-icon.svg" alt="previous">
                    </span>
                    <p class="sr-only">Previous</p>
                </div>
                <div class="carousel">
                    <img src=${this._imgpath} alt="">
                    <p class="caption">arc en ciel</p>
                </div>
                <div role="button" class="controls controls-right">
                    <span class="img next-image">
                        <img src="assets/icons/next-icon.svg" alt="next">
                    </span>
                    <p class="sr-only">Next</p>
                </div>
                <div role="button" class="controls controls-close">
                    <span class="img close-image">
                    <img class="close-lightbox" src="assets/icons/close-lightbox.svg" alt="lilac breasted roller"/>
                    </span>
                    <p class="sr-only">Close</p>
                </div>
            </div>
        `;
        lightbox.innerHTML = lightboxTemplate;
        main.append(lightbox);
        return lightbox;
    }

    static init(){
        const links = document.getElementsByClassName('media-link');
        console.log(links);
    }
}
Lightbox.init();
*/