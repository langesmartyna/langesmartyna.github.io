let paragrafTekst = document.getElementById('tekst').innerText;

const wyswietl = () => {
    let paragraf = document.getElementById('tekst');
    paragraf.innerHTML = paragrafTekst;
}

const usun = () => {
    let paragraf = document.getElementById('tekst');
    paragraf.innerHTML = '';
}

document.getElementById('dodaj').addEventListener('click', wyswietl);
document.getElementById('usun').addEventListener('click', usun);