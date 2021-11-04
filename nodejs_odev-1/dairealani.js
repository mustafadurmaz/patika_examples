var yaricap=process.argv.slice(2);
var sonuc;
function alan(yaricap){
    sonuc=Math.PI*yaricap*yaricap;
    console.log(`Yarıçapı ${yaricap} olan dairenin alanı:${sonuc}`);
    
}

alan(yaricap[0]*1);