// setTimeout(() => {
//     document.getElementsByTagName('body')[0].style.backgroundColor = 'green';
// },1000)

let i=0;
document.getElementById('timer').innerHTML="Time elapsed since last refresh: "+i+" seconds"

setInterval(() => {
    i++
    document.getElementById('timer').innerHTML="Time elapsed since last refresh: "+i+" seconds"
}, 1000);