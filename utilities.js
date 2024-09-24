function getInputValueById(id) {
 let inputValue = document.getElementById(id).value ;
 let inputValueFloat = parseFloat(inputValue)
 return inputValueFloat ;
}

function getInnerTextById(id){
    let idInnerText = document.getElementById(id).innerText
    let idInnerTextFloat = parseFloat(idInnerText)
    return idInnerTextFloat ;
}


function showThisSection(id){
document.getElementById("addMoneyDiv").classList.add('hidden')
document.getElementById("cashOutDiv").classList.add('hidden')
document.getElementById("transactionDiv").classList.add('hidden')

document.getElementById(id).classList.remove("hidden")
}


// add to transaction history 
function transactionHistory(type,amount,newBalance){

    let transactionDiv = document.getElementById("transactionDiv")
    let p = document.createElement('p')
    p.innerText = `${type}: ${amount}TK  New Balance: ${newBalance}TK`
    transactionDiv.appendChild(p)

}