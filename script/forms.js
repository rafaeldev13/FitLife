// const form = document.getElementsByTagName("form")[0];

// function handleSubmit(event){
//     event.preventDefault();
//     let arrayValues = [];
//     for (let index = 0; index < form.length; index++) {
//         let errorField = document.getElementById(form[index].id + "-error")

//         if(form[index].id === "name" & !form[index].value) {
//             errorField.textContent = "*Field Required"

//         }

//         if(form[index].id === "lastName" & !form[index].value) {
//             errorField.textContent = "*Field Required"

//         }
//         if(form[index].id === "phone" & !form[index].value) {
//             errorField.textContent = "*Field Required"

//         }
//         if(form[index].id === "email" & !form[index].value) {
//             errorField.textContent = "*Field Required"

//         }
//         if(form[index].id === "message" & !form[index].value) {
//             errorField.textContent = "*Field Required"

//         }

//         arrayValues.push(form[index].value);
//     }
//     console.log(arrayValues) 
// }

const form = document.getElementById("form");
const field = document.querySelectorAll(".required")
const spans = document.querySelectorAll(".error")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let arrayValues = [];
    for (let index = 0; index < form.length; index++) {
        arrayValues.push(form[index].value);
}
    console.log(arrayValues)

    nameValidade();
    validateLastName();
    validateEmail();
    validatephone();

    form.reset()
})

function setError(index){
    field[index].style.border = '2px solid #e63636';
    spans[index].style.display = "block";
}

function removeError(index){
    field[index].style.border = '';
    spans[index].style.display = "none";
}

function nameValidade(){
    if(field[0].value.length < 3){
        setError(0)
    }
    else{
        removeError(0)
    }
}


function validateEmail(){
    if(emailRegex.test(field[3].value)){
        removeError(3)
    } else {
        setError(3)
    }
}


function validateLastName(){
    if(field[1].value.length < 3){
        setError(1)
    }
    else{
        removeError(1)
    }
}

function validatephone(){
    if(field[2].value.length < 10){
        setError(2)
    }
    else{
        removeError(2)
    }
}
