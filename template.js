function getImgHTML(i) {
    return `<button onclick="openDetail(${i})">
    <img
        id="card${myImgs[i]}"
        src="./assets/img/${myImgs[i]}"
        alt="${myImgs[i]}"
    /></button>`;
}

function getDialogHTML(i) {
    return `
        <header>
            <h2>${myImgs[i]}</h2>
            <button onclick="closeDetail()"><img class="close-button" src="./assets/icons/close_button.svg" alt="Schließen"/></button>
        </header>

        <section>
            <img
                src="./assets/img/${myImgs[i]}"
                alt="${myImgs[i]}"
            />
        </section>

        <footer>
            <button onclick="changeImage(${i - 1})"><img class="arrow-left" src="./assets/icons/back_button.svg" alt="Zurück"/></button>
            <span>${[i + 1]}/${myImgs.length}</span>
            <button onclick="changeImage(${i + 1})"><img class="arrow-right" src="./assets/icons/back_button.svg" alt="Weiter"/></button>
        </footer>
    `;
}
