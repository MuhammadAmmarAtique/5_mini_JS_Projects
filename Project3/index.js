let main = document.querySelector('.main');
let circle = document.querySelector('#circle');

main.addEventListener('mousemove', function(event_details) 
{

    // jitna mouse x-axis aur y-axis mai move kr raha hai, utna hee circle ko move kro
circle.style.left= event_details.x +"px";
circle.style.top= event_details.y +"px";

})