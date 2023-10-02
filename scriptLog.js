var email = document.getElementById('email')
var senha1 = document.getElementById('senha1')
var msg = document.getElementById('msg')

function cad(){
    if (email.value === '' || senha1.value === ''){
        msg.hidden = false
    } else {

        if (String(email.value).includes('@' && '.com' || '.org')){

            if (String(senha1.value).length > 8){

                window.location.href = 'index.html'

            } else {
                msg.innerHTML = 'Por favor, insira uma senha válida.'
            }
        } else {
            msg.innerHTML = 'Por favor, insira um email válido'
            msg.hidden = false
            email.value = ''
        }
}
}

function load(){
    msg.hidden = true
}