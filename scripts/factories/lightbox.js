

const lightboxTemplate = 
`<div class="lightbox" role="dialog" aria-label="image closeup view">
    <div class="container">
        <div role="button" class="controls controls-left">
            <span class="img prev-image">
                <img src="assets/icons/prev-icon.svg" alt="previous">
            </span>
            <p class="sr-only">Previous</p>
        </div>
        <div class="carousel">
            <img src="./assets/photographers/Mimi/Animals_Rainbow.jpg" alt="">
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
</div>`;