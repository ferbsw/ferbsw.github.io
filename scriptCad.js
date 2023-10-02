var nome = document.getElementById('nome')
var email = document.getElementById('email')
var senha1 = document.getElementById('senha1')
var senha2 = document.getElementById('senha2')
var msg = document.getElementById('msg')

function cad(){

    if (nome.value != '' && email.value != '' && senha1.value != '' && senha2.value != '') {

        if (String(email.value).includes('@')){

            if (String(email.value).includes('.com' || '.org')){

                if (String(senha1.value).length > 8){

                    if (senha1.value === senha2.value){
                        window.location.href = 'pagCadConcluído.html'
                } else {
                    msg.innerHTML = 'Por favor, confira as senhas, elas não estão idênticas.'
                }

            } else {
                msg.innerHTML = 'Por favor, insira uma senha com mais de 8 dígitos.'
            }
            }
            else {
                msg.innerHTML = 'Por favor, insira um email válido'
                msg.hidden = false
                email.value = ''
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