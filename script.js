const email = document.querySelector('.input-email');
const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(email.value.trim()===''|| validateEmail(email.value.trim())===false ){
        form.classList.add('error');
        email.value='';     
    } else{
        form.classList.remove('error');  
    }

})

email.addEventListener('focus', ()=>form.classList.remove('error'));
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}