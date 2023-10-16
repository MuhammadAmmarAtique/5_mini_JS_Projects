// 1.(a) Bulb on/off using Dom Manipulation

// let bulb= document.querySelector('#bulb');
// let btn= document.querySelector('#bb');

// btn.addEventListener('click',()=>{
//     bulb.classList.toggle('bb-bg');
// })

// 1. (b) Bulb on/off using Dom Manipulation using if else (way#2)

// let bulb= document.querySelector('#bulb');
// let btn= document.querySelector('#bb');

// let value = 0;

// document.querySelector('#bb').addEventListener('click',()=>{

//     if (value==0) 
//     {
//         bulb.style.backgroundColor = "yellow";
//         value=1;
//     } 
//     else 
//     {
//         bulb.style.backgroundColor = null;
//         value=0;    
//     }
//     // Ya aik conditional statement hai is mai ya tooh sirf "if" chalay ga ya tooh "else" chalaay ga
// })

// 2. .innerHTML vs .textContent

document.querySelector('#box').innerHTML="<h1>hello</h1>";

document.querySelector('#box2').textContent="<h1>hello</h1>";

