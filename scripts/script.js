function currentTime() {
    let date = new Date(); 
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hourT = Array.from(`${updateTime(hour)}`);
    let minT = Array.from(`${updateTime(min)}`);
    let secT = Array.from(`${updateTime(sec)}`);


    document.getElementById("hour1").innerHTML = hourT[0]; /* adding time to the div */
    document.getElementById("hour2").innerHTML = hourT[1]; /* adding time to the div */
  
    document.getElementById("min1").innerHTML = minT[0]; /* adding time to the div */
    document.getElementById("min2").innerHTML = minT[1]; /* adding time to the div */
    
    document.getElementById("sec1").innerHTML = secT[0]; /* adding time to the div */
    document.getElementById("sec2").innerHTML = secT[1]; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
    if (k < 10 && k > 0) {
      return "0" + k;
    }
    else if(k == 0){
        return "00";
    }
    else {
      return k;
    }
}

    
currentTime();