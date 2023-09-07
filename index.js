const copy  = document.getElementById('copy-btn');
const length = document.getElementById('length-input');
const uppercase  = document.getElementById('uppercase-input');
const lowercase  = document.getElementById('lowercase-input');
const number  = document.getElementById('number-input');
const symbols  = document.getElementById('symbols-input');
const generate = document.querySelector('#generate-btn');
const passInput = document.querySelector('#passInput');

const uppercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseStr = 'abcdefghijklmnopqrstuvwxyz';
const numberStr = '0123456789';
const symbolsStr = '!@#$%^&*()_';

generate.addEventListener('click', () => {

    if(!uppercase.checked && !lowercase.checked && !symbols.checked && !number.checked){

        alert("Please check at least one field for password...");
        return
    }
    let str = '';
    if(uppercase.checked){

        str +=uppercaseStr;
    }

    if(lowercase.checked){
        str +=lowercaseStr;
    }

    if(number.checked){
        str +=numberStr;
    }

    if(symbols.checked){
        str +=symbolsStr;
    }

    let password = '';
    for( let i=0; i < length.value; i++ ){
        console.log(str.length,"str.length")
        let index = Math.floor(Math.random() * str.length);
        console.log(index,"index")
        console.log("Math.random()", Math.random())
        console.log("Math.random() * str.length", Math.random() * str.length)
        console.log("Math.floor(Math.random() * str.length)", Math.floor(Math.random() * str.length))
        console.log(str[index])
        password += str[index];
    }
    console.log(password,"password")
    passInput.value = password;

});

copy.addEventListener('click', () => {
    if( passInput.value === '' ){
        alert('Please Generate a Password First');
    }else {
        const newele = document.createElement('textarea');
        newele.value = passInput.value;
        document.body.appendChild(newele);
        newele.select();
        document.execCommand('copy');
        alert('Password Copied to Clipboard');
        newele.remove();
    }
});