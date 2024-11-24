const form = document.getElementById('register-form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    let isValid= true;
//Validacion del nombre
const nameInput = document.getElementById('name');
const nameError = document.querySelector('#name + .error-message');
const nameRegex = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/;

if(nameInput.value.trim() === ''){
    nameError.textContent = 'El nombre es Obligatorio.';
    nameError.style.visibility = 'visible';
    isValid =false;
}else if(!nameRegex.test(nameInput.value.trim())){
    nameError.textContent = 'El nombre no puede contener numeros.';
    nameError.style.visibility = 'visible';
    isValid= false;
}else{
    nameError.textContent = '';
}

//Validad Apellido
const lastnameInput = document.getElementById('lastname');
const lastnameError = document.querySelector('#lastname + .error-message');
const lastnameValid = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/;

if(lastnameInput.value.trim() === ''){
    lastnameError.textContent = 'El apellido es Obligatorio.';
    lastnameError.style.visibility = 'visible';
    isValid= false;
}else if(!lastnameValid.test(lastnameInput.value.trim())){
    lastnameError.textContent = 'El apellido no puede conener numeros.';
    lastnameError.style.visibility = 'visible';
    isValid= false;
}else{
    lastnameError.textContent= '';
}

//Validacion del correo
const emailInput = document.getElementById('email');
const emailError = document.querySelector('#email + .error-message');
const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(emailInput.value.trim() === ''){
    emailError.textContent = 'El correo electrónico es obligatorio.';
    emailError.style.visibility = 'visible';
    isValid= false;
}else if(!emailValid.test(emailInput.value.trim())){
    emailError.textContent = 'El correo electrónico no es válido.';
    emailError.style.visibility = 'visible';
    isValid = false;
}else{
    emailError.textContent = '';
}
//validacion de contraseña
const passInput = document.getElementById('pass');
const passError = document.querySelector('#pass + .error-message');

if(passInput.value.trim() === ''){
    passError.textContent = 'La contraseña es Obligatoria.';
    passError.style.visibility = 'visible';
    isValid = false;
}else{
    passError.textContent ='';
}
//validacion de la confirmar contraseña
const confpassInput = document.getElementById('conf-pass');
const confpassError = document.querySelector('#conf-pass + .error-message');

if(confpassInput.value.trim()=== ''){
    confpassError.textContent = 'Confirmar la contraseña es Obligatorio.';
    confpassError.style.visibility = 'visible';
    isValid = false;
}else if(confpassInput.value.trim() !== passInput.value.trim()){
    confpassError.textContent = 'La contraseña no coinciden.';
    confpassError.style.visibility = 'visible';
    isValid = false;
}else{
    confpassError.textContent = ''; 
}
//si todos los campos son validos
if(isValid){
    alert('Formulario enviado correctamente.');
    form.submit();
    window.location.href = '../servidor/Login.html';
}
});