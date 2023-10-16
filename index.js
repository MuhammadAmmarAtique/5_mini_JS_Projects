// 1. Activated "Adding Friends" feature by using both both buttons

// let b1=document.querySelector('#b1');
// let b2=document.querySelector('#b2');
// let text2=document.querySelector('#text2');

// b1.addEventListener('click',()=>{
//     text2.textContent="Stranger";
//     text2.style.color='red';
// })


// b2.addEventListener('click',()=>{
//     text2.textContent="Friends";
//     text2.style.color='green';
// })

// 2. Activated "Adding Friends" feature by using 1 button only

let btn=document.querySelector('button');
let text2=document.querySelector('#text2');


    btn.addEventListener('click',()=>{
    
        if (btn.textContent== "Add Friend") 
        {
        text2.textContent='Friends';
        text2.style.color='green';
        btn.textContent='Remove'; }
        else
        {
        text2.textContent='Stranger';
        text2.style.color='red';
        btn.textContent='Add Friend';
        }
    
    })    

