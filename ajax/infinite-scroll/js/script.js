console.log('warsztat - infinite scroll');

let endOfThePage = 0;

const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(response => response.json ())
        .then(data) => {
            console.log(data);
        }
        .catch(error => {
            console.error(error);
        });

    
}

const scrollToEndOfPage = () => {
    
    let d = document.documentElement;
    
    let scrollHeight = d.scrollHeight;
    let scrollTop = d.scrollTop;
    let clientHeight = d.clientHeight;
    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);


    console.log(`scrollHeight: ${scrollHeight}`);
    console.log(`sumScrollTopClientHeight: ${sumScrollTopClientHeight}`);
    console.log(`scrollTop: ${scrollTop}`);
    console.log(`clientHeight: ${clientHeight}`);
    console.log(`==========`);

    if (sumScrollTopClientHeight >= scrollHeight) {

        endOfThePage == 1;

        console.log(`Scrolled to the end of page: ${endOfThePage}`);
    }


    getData();
}

window.addEventListener('scroll', scrollToEndOfPage) 