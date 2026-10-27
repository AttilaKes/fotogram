function getImgHTML(i) {
    return `<button onclick="openDetail(${i})">
    <img
        id="card${myImgs[i]}"
        src="./assets/img/${myImgs[i]}"
        alt="${altTexts[i]}"
    /></button>`;
}

function getDialogHTML(i) {
    return `
    <div class="dialogContainer" onclick="event.stopPropagation()">
        <header>
            <h2 id="imageTitle">${myImgs[i]}</h2>
            <button onclick="closeDetail()"><img class="close-button" src="./assets/icons/close_button.svg" alt="close"/></button>
        </header>

        <section>
            <img
                src="./assets/img/${myImgs[i]}"
                alt="${altTexts[i]}"
            />
        </section>

        <footer>
            <button onclick="changeImage(${i - 1})"><img class="arrow-left" src="./assets/icons/back_button.svg" alt="back"/></button>
            <span class="imageCounter">${i + 1}/${myImgs.length}</span>
            <button onclick="changeImage(${i + 1})"><img class="arrow-right" src="./assets/icons/back_button.svg" alt="continue"/></button>
        </footer>
    </div>
        `;
}
