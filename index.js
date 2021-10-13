let submit =document.getElementById("submit");
let time=document.getElementById('appt');
let msg=document.getElementById('message');
const list=document.getElementById("days");
let button=document.getElementById('asd');
var data;
list.addEventListener('click',function date(e){
    console.log(e.target);
    data=e.target;
    data.classList.add("selected");
    console.log(data);
    // return (data); 
    // console.log(date)
});
console.log(data)


submit.addEventListener('click',function x(){
    console.log(data.innerText)
    var time=document.getElementById('appt').value;
    msg.innerText=`meeting on ${data.innerText} at ${time}`  
});

    button.addEventListener('click',function(){
    button.classList.add("buttonstyle");
});






time.addEventListener('click',function(){
    var time=document.getElementById('appt').value;
    console.log(time);
});



















