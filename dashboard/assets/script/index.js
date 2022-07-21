var targetDiv = document.getElementById("booking-form");
const btn = document.getElementById("select");
btn.addEventListener("click", function handleclick() {
  if (targetDiv.style.display !== "block") {
    targetDiv.style.display = "block";
  } 
console.log('we are live')
}) ;

btn.addEventListener("click", function handleclick2(){
    if (targetDiv2.style.dispaly !== "none"){
        targetDiv2.style.display = "none";
    }
})

var targetDiv2 = document.getElementById("confirm-form");
const btn2 = document.getElementById("submitButton");
btn2.addEventListener("click", function handleclick3() {
  if (targetDiv2.style.display !== "block") {
    targetDiv2.style.display = "block";
  }; 
}) ;
btn2.addEventListener('click', function invisibleform(){
    if (targetDiv2.style.display === "block"){
        targetDiv.style.display = "none";
    }
})
document.getElementById('bookform').addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(document.getElementById('hostel').value)
    document.getElementById("message1").innerHTML = document.getElementById('hostel').value;
})

document.getElementById('bookform').addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(document.getElementById('blocktype').value)
    document.getElementById("message2").innerHTML = document.getElementById('blocktype').value;
})

document.getElementById('bookform').addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(document.getElementById('room').value)
    document.getElementById("message3").innerHTML = document.getElementById('room').value;
})