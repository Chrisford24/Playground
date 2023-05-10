function tipCalculator(){
    let bill =Number( document.getElementById("bill").value);
    let tip = Number(document.getElementById("tip").value);
    
    total = bill + (bill * (tip/100));
    document.getElementById("amount").innerHTML = total;
    
}

