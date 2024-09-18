document.getElementById("loginBtn").addEventListener("click",function (e){
    e.preventDefault() ;
    let phoneNumber = document.getElementById("phoneNumber").value
    // console.log(phoneNumber)
    let pinNumber = document.getElementById("pinNumber").value
    // console.log(pinNumber)
    if(phoneNumber === '016' && pinNumber === '1234'){
        console.log('logged in')
        window.location.href = './home.html'
    }
    else{
        alert('wrong password or pin number')
    }
} )
