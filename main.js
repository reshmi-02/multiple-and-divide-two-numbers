
let btn1=document.getElementById("btn1")
console.log(btn1);
let btn2=document.getElementById("btn2")
let para=document.getElementById("para1")
btn1.addEventListener("click",function(e){
    
    let num1=Number(document.getElementById("num1").value)
    let num2=Number(document.getElementById("num2").value)
    console.log(num1);
    console.log(num2);

    let c=num1*num2
    para.innerHTML=c

})


btn2.addEventListener("click",function(e){
    let num1=Number(document.getElementById("num1").value)
    let num2=Number(document.getElementById("num2").value)
    console.log(num1);
    console.log(num2);

    let c=num1/num2
    para.innerHTML=c
})

