let count=0;
let trovato=0;
let num=[];
console.log(bottonestrazione)
function estrai(){
    do{
     valore = Math.round(Math.random() * 90+1);
       document.getElementById("numestratto").innerHTML = "Numero estratto: " + valore;
    if(num.includes(valore)){
        trovato++;
    }else{
        trovato=0;
        num.push(valore);
        document.getElementById("numestratto").innerHTML = "Numero estratto: " + valore;
    }
    
}while(trovato!=0);
count++;
document.getElementById("estrazionin").innerHTML = "Totale numeri estratti: " +count;
    for(let i=0; i<=90; i++){
       if(i==valore){
        document.getElementById(i).style.backgroundColor = "red";
        
    }
   
}
if(count==91){
    document.getElementById("estrazionin").innerHTML = "Tutti i numeri sono stati estratti";
    document.getElementById("numestratto").innerHTML = "Ultimo numero estratto: " + valore;
    document.getElementById("titoloE").innerHTML = "Estrazioni concluse";
}
document.getElementById("bar").ariaValueNow=((num.length/91) *100);
document.getElementById("bar").style.width=((num.length/91) *100)+"%";
document.getElementById("bar").innerHTML=((num.length/91) *100).toFixed(2)+"%";


}
