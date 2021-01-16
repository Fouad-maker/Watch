var hour=0;
var minute=0;
var second=0;
var date = new Date();

setInterval(
    function(){
        date=new Date();
        second=date.getSeconds() * 6;
        minute=date.getMinutes() * 6;
        hour=date.getHours() * 30 + Math.round(minute/12);
        document.getElementById("seconds").style.transform="rotate(" + second + "deg)";
        document.getElementById("minutes").style.transform="rotate(" + minute + "deg)";
        document.getElementById("hours").style.transform="rotate(" + hour + "deg)";




    },1000

);