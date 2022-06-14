function photographerFactory(data) {
    const photographer = new Photographer(data);
    
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
    return { getUserCardDOM }
}
// la funzione agisce correttamente e recupera i dati in base all'Id 
function getUser(data){
    const users = new Photographer(data);
    function user(){
        const header = document.querySelector('.photograph-header');
        const h1 = document.createElement('h1');
        h1.classList.add('h1');
        h1.setAttribute("aria-label", users.name);
        h1.textContent = users.name;
        header.append(h1);
        console.log(users);
    }
    return { user }
}
