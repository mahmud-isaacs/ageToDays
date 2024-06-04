let button = document.getElementById('convert')

button.addEventListener('click',function(){
    let years = document.querySelector('#years').value
    if (years === ""){
        alert('Please fill out input field!');
        return
    }

    let days = years * 365;

    document.querySelector('#result').innerHTML = days

})