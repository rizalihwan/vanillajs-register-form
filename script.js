const password = document.querySelector('#confirmpassword');
password.addEventListener('keyup', function(){
    let pw = document.getElementById('password').value;
    let confirmpw = document.getElementById('confirmpassword').value;
    let hasil = document.querySelector('b');
    if(confirmpw != pw){
        hasil.style.color = 'red';
        hasil.innerHTML = 'Password Tidak Sama';
    }else{
        hasil.style.color = 'green';
        hasil.innerHTML = 'Password Succes';
    }
});