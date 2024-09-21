document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    // get phone number and pin====
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value ;

    if(phoneNumber === '5' && pinNumber === '1234'){
        alert('login');
        window.location.href = '/addMony.html';
    }else{
        alert('wrong number or pin');
    }


})