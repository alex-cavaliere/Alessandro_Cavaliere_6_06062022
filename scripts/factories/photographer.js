function photographerFactory(data) {
    const photographer = new Photographer(data);
    const medias = new Media(data);
    console.log(medias);
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement('a');
        link.setAttribute("href", "./photographer.html?id="+ photographer.id);
        link.setAttribute("aria-label", photographer.name);
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
        const prix = document.createElement('div');
        prix.classList.add('price');
        prix.textContent = photographer.price + "€/Jour";
        link.appendChild(img);
        link.appendChild(h2);
        article.append(link);
        article.appendChild(ville);
        article.appendChild(region);
        article.appendChild(slogan);
        article.appendChild(prix);
        return (article);
    }
    function user(){
        const header = document.querySelector('.photograph-header');
        const btn = document.querySelector('.contact_button');
        const headerContent = document.createElement('div');
        const prix = document.createElement('div');
        prix.classList.add('price');
        prix.textContent = photographer.price + "€/Jour";
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
        headerContent.append(prix);
        headerContent.appendChild(bio);
        headerContent.append(img);
        headerContent.append(btn)
        header.appendChild(headerContent);
        return (headerContent);
    }
    function media() {
        const body = document.querySelector('.photograph-body');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const caption = document.createElement('div');
        const video = document.createElement('video');
        video.setAttribute("src", medias.video);
        caption.classList.add('caption');
        const p = document.createElement('p');
        p.textContent = medias.title;
        const likes = document.createElement('p');
        likes.textContent = medias.likes;
        const heart = document.createElement('span');
        const i = document.createElement('i');
        i.classList.add('fa-regular');
        i.classList.add('fa-heart');
        heart.append(likes);
        heart.append(i);
        caption.append(p);
        caption.append(heart);
        img.classList.add('thumbnail');
        img.setAttribute("src", medias.image);
        img.setAttribute("alt", medias.title);
        figure.append(img);
        figure.append(caption);
        body.append(figure);
        return(figure);
    }
    return { getUserCardDOM, user, media }
}
// la funzione agisce correttamente e recupera i dati in base all'Id 
