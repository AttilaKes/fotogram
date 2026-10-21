let myImgs = [
    "anime-neonstadt-7815432_1280.jpg",
    "alpensee-6279104_1280.jpg",
    "sturmmeer-5891327_1280.jpg",
    "schneeleopard-7519023_1280.jpg",
    "coding-4381269_1280.jpg",
    "sportwagen-6128047_1280.jpg",
    "eisvogel-7251438_1280.jpg",
    "sternenwanderer-8304721_1280.jpg",
    "fruehstuecksterrasse-5482716_1280.jpg",
    "meeresschildkroete-8245631_1280.jpg",
    "japan-kirschblueten-6935217_1280.jpg",
    "bitcoin-krypto-6719042_1280.jpg",
];

const cardWrapperRef = document.getElementById("cardWrapper");
const dialogRef = document.getElementById("myDialog");

function init() {
    render();
}

function render() {
    for (let i = 0; i < myImgs.length; i++) {
        cardWrapperRef.innerHTML += getImgHTML(i);
    }
}

function openDetail(i) {
    dialogRef.innerHTML = getDialogHTML(i);

    dialogRef.showModal();
    dialogRef.classList.add("opened");
}

function closeDetail() {
    dialogRef.close();
    dialogRef.classList.remove("opened");
}

function closeStyling() {
    dialogRef.classList.remove("opened");
}

function changeImage(i) {
    if (i < 0) {
        i = myImgs.length - 1;
    }
    if (i >= myImgs.length) {
        i = 0;
    }
    dialogRef.innerHTML = getDialogHTML(i);
}

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
