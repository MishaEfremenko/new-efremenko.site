let days=Math.floor((new Date()-new Date(2017,9,10))/(1000*3600*24));
let years = ((days-(days%365)))/365;
let mounths = ((days - (365*years))-(days - (365*years))%30)/30;
days = days-years*365-mounths*30;
console.log(years+' yars '+mounths+' mounths '+days+ ' days ');

$(document).ready(function(){
    $("#y").text(years+'г');
    $("#m").text(mounths+'м');
    $("#d").text(days+'д');
});