function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/Photographers\ ID\ Photos/${portrait}`;
    console.log(data);

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.classList.add('name');
        h2.textContent = name;
        const ville = document.createElement('div');
        ville.classList.add('city');
        ville.textContent = city + ", " + country;
        const region = document.createElement('div');
        const slogan = document.createElement('div');
        slogan.classList.add('tagline');
        slogan.textContent = tagline;
        const prix = document.createElement('div');
        prix.classList.add('price');
        prix.textContent = price + "€/Jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(ville);
        article.appendChild(region);
        article.appendChild(slogan);
        article.appendChild(prix);
        return (article);
    }
    return {name, id, city, country, tagline, price, portrait, getUserCardDOM }
}
