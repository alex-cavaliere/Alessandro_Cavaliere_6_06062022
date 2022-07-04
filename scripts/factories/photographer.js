function photographerFactory(data) {
    const photographer = new Photographer(data);
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement('a');
        link.setAttribute("href", "./photographer.html?id="+ photographer.id);
        link.classList.add('link');
        const img = document.createElement( 'img' );
        img.setAttribute("src", photographer.portrait);
        img.setAttribute("alt", photographer.name);
        const h2 = document.createElement( 'h2' );
        h2.classList.add('name');
        h2.textContent = photographer.name;
        const ville = document.createElement('div');
        ville.classList.add('city');
        ville.textContent = photographer.city + ", " + photographer.country;
        const region = document.createElement('div');
        const slogan = document.createElement('div');
        slogan.classList.add('tagline');
        slogan.textContent = photographer.tagline;
        const photographerPrice = document.createElement('div');
        photographerPrice.classList.add('price');
        photographerPrice.textContent = photographer.price + "€/Jour";;
        link.appendChild(img);
        link.appendChild(h2);
        article.append(link);
        article.appendChild(ville);
        article.appendChild(region);
        article.appendChild(slogan);
        article.appendChild(photographerPrice);
        return (article);
    }
    function user(){
        const header = document.querySelector('.photograph-header');
        const btn = document.querySelector('.contact_button');
        const headerContent = document.createElement('div');
        const priceCard = document.createElement('div');
        const modal = document.querySelector('.modal-header')
        const modalH3 = document.querySelector('h3');
        modalH3.textContent = photographer.name;
        modal.appendChild(modalH3);
        priceCard.classList.add('price-block');
        const prix = document.createElement('div');
        prix.classList.add('photograph-price');
        prix.textContent = photographer.price + "€/Jour";
        const totLikes = document.createElement('div');
        totLikes.classList.add('photograph-likes');
        priceCard.append(totLikes, prix);
        headerContent.classList.add('header-content');
        const h1 = document.createElement('h1');
        const slogan = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute("alt", photographer.name);
        img.setAttribute("src", photographer.portrait);
        slogan.classList.add('tagline');
        slogan.textContent = photographer.tagline;
        const bio = document.createElement('div');
        bio.classList.add('photographer-label');
        h1.classList.add('h1');
        const country = document.createElement('div');
        country.classList.add('country');
        country.textContent = photographer.city + ", " + photographer.country;
        h1.setAttribute("aria-label", photographer.name);
        h1.textContent = photographer.name;
        bio.append(h1);
        bio.append(country);
        bio.append(slogan);
        headerContent.append(priceCard);
        headerContent.appendChild(bio);
        headerContent.append(img);
        headerContent.append(btn)
        header.appendChild(headerContent);
        return (headerContent);
    }
    return { getUserCardDOM, user }
}

function mediasFactory(data){
    const media = new Media(data);
    const lightbox = new Lightbox(data);
    const body = document.querySelector('.photograph-body');
    const figure = document.createElement('div');
    figure.classList.add('card');
    const a = document.createElement('a');
    a.classList.add('media-link');
    const caption = document.createElement('div');
    caption.classList.add('caption');
    const p = document.createElement('p');
    const likes = document.createElement('p');
    likes.classList.add('counter');
    likes.textContent = media._likes;
    const i = document.createElement('i');
    i.classList.add('fa-regular', 'fa-heart');
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.append(likes);
    heart.append(i);

    const totLikes = document.querySelector('.photograph-likes');
    const icon = document.createElement('i');
    icon.classList.add('tot-likes-icon' ,'fa-solid', 'fa-heart');
    totLikes.append(icon);

    function increment(){
        likes.textContent++;
        totLikes.textContent++;
        totLikes.append(icon);
        i.classList.remove('fa-regular', 'fa-heart');
        i.classList.add('fa-solid', 'fa-heart');
    }
    function decrement(){
        likes.textContent--;
        totLikes.textContent--;
        totLikes.append(icon);
        i.classList.remove('fa-solid', 'fa-heart');
        i.classList.add('fa-regular', 'fa-heart');
    }

    i.addEventListener('click', function(e){
        e.preventDefault();
        if (i.className == "fa-regular fa-heart"){
            return increment();
        }
        else{
            return decrement();
        }
    });
    // ici j'ai stocké 2 fonctions pour les Template des images et videos que 
    // j'ai associé à la Factory.
    function imgTemplate() {
        const picture = new MediaFactory(data, 'img');
        const img = document.createElement('img');
        p.textContent = picture._title;
        // function qui gere les nombres des likes
        caption.append(p);
        caption.append(heart);
        img.classList.add('thumbnail');
        img.setAttribute("src", picture._imagepath);
        img.setAttribute("alt", picture._title);
        a.addEventListener('click', function(e){
            e.preventDefault();
            lightbox.createImgLightbox();
        })
        a.appendChild(img);      
        figure.append(a);
        figure.append(caption);
        body.append(figure);
        return(figure);
    }
    function videoTemplate() {
        const vid = new MediaFactory(data, 'video');
        const video = document.createElement('video');
        const source = document.createElement('source');
        source.setAttribute("src", vid._videopath);
        source.setAttribute("type", "video/mp4");
        video.classList.add('thumbnail');
        video.controls = true;
        video.appendChild(source);
        p.textContent = vid._title;
        caption.append(p);
        caption.append(heart);
        a.setAttribute("href", vid._videopath);
        a.setAttribute("aria-label", "link");
        a.addEventListener('click', function(e){
            e.preventDefault();
            lightbox.createVidLightbox();
        })
        a.appendChild(video);
        figure.append(a);
        figure.append(caption);
        body.append(figure);
        return(figure);
    }
    return { imgTemplate, videoTemplate }
}

