console.log('warsztat - obsluga formularza imie i nazwisko')

const submitForm = (event) => {
    event.preventDefault();
    console.log('Submit Form');

    let firstName = document.querySelector('[name="fname"]');
    let lastName = document.querySelector('[name="lname"]');

    console.log(`Imie: ${firstName.value}, Nazwisko: ${lastName.value}`);
}

let form = document.getElementById('form');

form.addEventListener('submit', submitForm);

console.log(form);