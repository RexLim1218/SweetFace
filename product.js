window.onload = date;
var grandtotal;
 var amt1, amt2, amt3,amt4,amt5, stotal;


/*display*/
function quantity(){
    for(num=0; num<=10 ; num++)
    { /*printf*/
        document.write("<option>" + num + "</option>");
    }
  
}
/*shipping fee*/
function shipprice(){
   
    var shipprice = parseFloat(document.getElementById('ship').value);
    calculate();
    grandtotal =  stotal + shipprice;
    document.getElementById('shipping').innerHTML = "RM " + shipprice.toFixed(2);
    document.getElementById('total').innerHTML = "RM " + grandtotal.toFixed(2);
}
/*Storage*/
function shippingaddress(){
    localStorage.clear();
    var address = document.getElementById('address').value;
    var state = document.getElementById('state').value;
    var postcode = document.getElementById('postcode').value;
    localStorage.setItem('customerAddress', address);
    localStorage.setItem('customerState', state);
    localStorage.setItem('customerPostcode', postcode);
    localStorage.setItem('totaltotal', grandtotal);
}
/*date*/

function date(){
    var TodayDate = new Date();
    var TodayDay = TodayDate.getDate();
    var TodayMonth = TodayDate.getMonth() + 1;
    var TodayYear = TodayDate.getFullYear();
    document.getElementById('date').value = TodayDay + "/" + TodayMonth + "/" + TodayYear;
    document.getElementById('shipadd').value = localStorage.customerAddress + ", " + localStorage.customerPostcode + " " + localStorage.customerState;
    document.getElementById('total').innerHTML = "RM " + parseFloat(localStorage.totaltotal).toFixed(2);
}




function display(obj , num/*two parameter*/){
        var price = "Price" + num;
        var qty = "Quantity" + num;
        var amount = "Amount" + num;
        /*if book is selected, only display price and enable the quantity*/
        if(obj.selectedIndex !=0){
            /*set the price = selection list selected value */
            document.getElementById(price).value = obj.value;
            document.getElementById(qty).disabled = false; /*enable qty selection*/
            document.getElementById(qty).value = 0;
            document.getElementById(qty).focus();
            document.getElementById(amount).value = "0.00";
        }
        else{
            /*set the price = selection list selected value */
            document.getElementById(price).value = "";
            document.getElementById(qty).disabled = true; /*enable qty selection*/
            document.getElementById(qty).value = 0;
            document.getElementById(amount).value = "0.00";
        }
    
    }

function calculate(){
   
    amt1 = parseFloat(document.getElementById('Amount1').value);
    amt2 = parseFloat(document.getElementById('Amount2').value);
    amt3 = parseFloat(document.getElementById('Amount3').value);
    amt4 = parseFloat(document.getElementById('Amount4').value);
    amt5 = parseFloat(document.getElementById('Amount5').value);

    stotal = amt1 + amt2 + amt3 + amt4 +amt5;
    /*call to display total amount*/
    document.getElementById('subtotal').value="RM" + stotal.toFixed(2);
}

function sub(obj , num){
    var price="Price" + num;
    var amount = "Amount" + num;
    var qty = obj.selectedIndex;

    if(qty > 0 ){
        /*parseFloat() is to convert textbox value to floatinf point number*/
        var subttl = parseFloat(document.getElementById(price).value)*qty;
        /*display into amount textbox and format to 2 decimal places*/
        document.getElementById(amount).value = subttl.toFixed(2);
        
        /*call calculate() to display total amount*/
        calculate();
        shipprice();
    }
}



function submitted() {
    
    if(stotal>0.00){
        //confirm is dialog box with OK & cancel button,OK return 1

        if(confirm("Are you sure to submit book order?") == 1){
            
            alert("Your order has been successfully submitted. You may receive  your order in 10 days time.");
            return true;//submit order
            
        }
        else{
            alert("Please continue order.")
            return false;
        }
    }else{
        alert("No order has been made!!!");
        return false;//stop submission
    }
}


function success() {
    document.getElementById('p1').innerHTML = "</b> Your order <b> RM " + parseFloat(localStorage.totaltotal).toFixed(2) + "</b> has been successfully submitted.";
}

