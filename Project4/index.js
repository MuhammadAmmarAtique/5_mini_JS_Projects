// First Applied on only one section

// let section1 = document.querySelector('#section1');
// let img1 =  document.querySelector('#section1 img');

// section1.addEventListener('mousemove',(details)=>{

//     img1.style.left = details.x + "px";
//     img1.style.top = details.y + "px";
// })

// section1.addEventListener('mouseenter',()=>{
//     img1.style.opacity = 1;
// })

// section1.addEventListener('mouseleave',()=>{
//     img1.style.opacity = 0;
// })

// Now Applied on All sections
let sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
    let img = section.querySelector('img'); 

    section.addEventListener('mousemove', (details) => {
        img.style.left = details.x + "px"; 
        // It was causing bug so i commented it.
        // img.style.top = details.y + "px";
    });

    section.addEventListener('mouseenter', () => {
        img.style.opacity = 1;
    });

    section.addEventListener('mouseleave', () => {
        img.style.opacity = 0;
    });
});

