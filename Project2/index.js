let container = document.querySelector('.container');
let heart_icon= document.querySelector('#heart_icon');

container.addEventListener('dblclick',()=>
{        
        //it will enlarge heart icon which is disappered ins css after user doubleclicks on photo.
        heart_icon.style.transform=' translate(-50%,-50%) scale(1)';   
        //if user double clicks again & again thsi line of code is very helpful for that 
        heart_icon.style.opacity=0.9;   

        // after 1s heart will disappear
        setTimeout(() => {
            heart_icon.style.opacity='0'; 
        }, 1000);


})
