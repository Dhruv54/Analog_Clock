setInterval(() => {

    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    let hrotation = 30 * htime + mtime / 2;
    let mrotation = 6 * mtime;
    let srotation = 6 * stime;
    // console.log(htime, mtime, stime);
    // console.log(hrotation, mrotation, srotation);

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
let a;
let date;
let time;
const option = {
    weekday: 'long',
    years: 'numeric',
    month: 'long',
    day: 'numeric',
};

setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, option);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time;
    document.getElementById('day').innerHTML = date;
}, 1000);