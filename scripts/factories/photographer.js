function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/${portrait}`;
    console.log(data);

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.classList.add('name');
        h2.textContent = name;
        const ville = document.createElement('p');
        ville.classList.add('city');
        ville.textContent = city;
        const region = document.createElement('p');
        region.classList.add('country');
        region.textContent = country;
        const slogan = document.createElement('p');
        slogan.classList.add('tagline');
        slogan.textContent = tagline;
        const prix = document.createElement('p');
        prix.textContent = price;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(ville);
        article.appendChild(region);
        article.appendChild(slogan);
        article.appendChild(prix);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}
