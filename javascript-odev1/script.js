let kadi=prompt("İsminiz nedir?");

let isim=document.getElementById('isim');
isim.innerHTML=kadi;

let tarih=document.getElementById('tarih');


function verSaat()
{
    let gunismi;
    let simdi = new Date();
    gun=simdi.getDay();
    let gunler=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    gunismi=gunler[gun];
    tarih.innerHTML=simdi.toLocaleTimeString()+" "+gunismi;
   
}
verSaat();

setInterval("verSaat()", 1000);
