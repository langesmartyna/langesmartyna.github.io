console.log('dane programisty');

$(document).ready(function () {

    $('#btn').click(function () {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function(data) {
                
                let pId = $('<p></p>').text(`Imię: ${data.imie}`);
                let pSur = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
                let pOcc = $('<p></p>').text(`Zawód: ${data.zawod}`);
                let pCom = $('<p></p>').text(`Firma: ${data.firma}`);
                let hr = $('<hr />');

                let jqDiv = $('#daneProgramisty');

                jqDiv.append(pId);
                jqDiv.append(pSur);
                jqDiv.append(pOcc);
                jqDiv.append(pCom);
                jqDiv.append(hr);

            })
            .fail(function(error) {
                console.error(error);
            })

        console.log('klik');
    })
});