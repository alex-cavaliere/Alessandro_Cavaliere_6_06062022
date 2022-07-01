// creare il constructor per i media
class Media{
    constructor(data){
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
    }
    get id(){
        return this._id
    }
    get photographerId(){
        return this._photographerId
    }
    get title() {
        return this._title
    }
    get likes(){
        return this._likes
    }
    get date(){
        return this._date
    }
    get price(){
        return this._price
    }
}
class Picture extends Media{
    constructor(data){
        super(data)
        this._type = 'img'
        this._image = data.image
        this._imagepath = `./assets/photographers/thumbnails/${this._image}`
    }
    get type(){
        return this._type
    }
    get image(){
        return this._image
    }
    get path(){
        return this._imagepath
    }
}
class Video extends Media{
    constructor(data){
        super(data)
        this._type = 'video'
        this._video = data.video
        this._videopath = `./assets/photographers/thumbnails/${this._video}`
    }
    get type(){
        return this._type
    }
    get video(){
        return this._video
    }
    get path(){
        return this._videopath
    }
} 

class Lightbox extends Media{
    constructor(data){
        super(data)
        this._image = data.image
        this._imgpath = `./assets/photographers/thumbnails/${this._image}`
    }
    get image(){
        return this._image;
    }
    get imgpath(){
        return this._imgpath;
    }
    createLightbox(){
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
                    <p class="caption">${this._title}</p>
                </div>
                <div role="button" class="controls controls-right">
                    <span class="img next-image">
                        <img src="assets/icons/next-icon.svg" alt="next">
                    </span>
                    <p class="sr-only">Next</p>
                </div>
                <div role="button" class="controls controls-close">
                    <span class="img close-image">
                    <img class="close-lightbox" src="assets/icons/close-lightbox.svg" alt="lilac breasted roller" onclick="closeModal()"/>
                    </span>
                    <p class="sr-only">Close</p>
                </div>
            </div>
        `;
        lightbox.innerHTML = lightboxTemplate;
        main.append(lightbox);
        return lightbox;
    }
}


