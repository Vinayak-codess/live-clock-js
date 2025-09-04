function time() {
    let fullDate = new Date();
    let hours = fullDate.getHours();
    let min = fullDate.getMinutes();
    let sec = fullDate.getSeconds();
    console.log(hours, min, sec);


    const hours_div = document.querySelector(".hour"); // selects hours class and puts it in a variable hours_div
    const min_div = document.querySelector(".min");
    const sec_div = document.querySelector(".sec");

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    hours_div.innerHTML = hours 
    min_div.innerHTML = min
    sec_div.innerHTML = sec
}

setInterval(time, 500)