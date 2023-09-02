var first_number = document.querySelector("#first_number"); 
var second_number = document.querySelector("#second_number"); 
var third_number = document.querySelector("#third_number"); 
var sumdiff = document.querySelector("#sumdiff");
var btn_sumdiff = document.querySelector("#btn_sumdiff");

var fourth_number = document.querySelector("#fourth_number"); 
var fifth_number = document.querySelector("#fifth_number"); 
var sixth_number = document.querySelector("#sixth_number"); 
var multidiv = document.querySelector("#multidiv");
var btn_multidiv = document.querySelector("#btn_multidiv");

var seventh_number = document.querySelector("#seventh_number"); 
var eight_number = document.querySelector("#eight_number"); 
var ninth_number = document.querySelector("#ninth_number"); 
var tenth_number = document.querySelector("#tenth_number");
var summul = document.querySelector("#summul");
var btn_summul = document.querySelector("#btn_summul");

btn_sumdiff.onclick = function()
 {
	
	var nFirst = parseInt(first_number.value); 
	var nSecond = parseInt(second_number.value); 
	var nThird = parseInt(third_number.value); 
    sumdiff.value = (nFirst+nSecond-nThird)+"";
    
}

btn_multidiv.onclick = function()
{

    var nFourth = parseInt(fourth_number.value); 
    var nFifth = parseInt(fifth_number.value); 
    var nSixth = parseInt(sixth_number.value); 
    multidiv.value = (nFourth/nFifth*nSixth)+"";
    

}
btn_summul.onclick = function()
{
    var nSeventh = parseInt(seventh_number.value);
    var nEight = parseInt(eight_number.value);
    var nNinth = parseInt(ninth_number.value);
    var nTenth = parseInt(tenth_number.value);
    summul.value = ((nSeventh+nEight)/(nNinth*nTenth))+"";
}