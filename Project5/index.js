// Storing dp and stories in a array of objects to access them later
let arr = [
    { dp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMG1vZGVsc3xlbnwwfDF8MHx8fDI%3D", story: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8MXwwfHx8Mg%3D%3D" },

    { dp: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMG1vZGVsc3xlbnwwfDF8MHx8fDI%3D", story: "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8MXwwfHx8Mg%3D%3D" },

    { dp: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMG1vZGVsc3xlbnwwfDF8MHx8fDI%3D", story: "https://images.unsplash.com/photo-1647891938250-954addeb9c51?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8MXwwfHx8Mg%3D%3D" },

    { dp: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZSUyMG1vZGVsc3xlbnwwfDF8MHx8fDI%3D", story: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDF8MHx8fDI%3D" },

    { dp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMG1vZGVsc3xlbnwwfDF8MHx8fDI%3D", story: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8MXwwfHx8Mg%3D%3D" },
];

//using foreach function to show story circles in top
arr.forEach((elem,index)=>{

document.querySelector("#stories").innerHTML += 

`<div class="story">
    <img id="${index}" src="${elem.dp}" alt="Model's pic" > 
</div> `;

});

// Applying bubble event

document.querySelector('#stories').addEventListener('click',(element)=>{
    // console.log(element.target); (it is the element we are clicking on)
    // console.log(element.target.id); (it will get the element's id like 0,1,2 )

   //console.log(arr[element.target.id]); //put that numbering inside array as a index to access array elements
  //console.log(arr[element.target.id].story); //to get story inside array

document.querySelector('#show_stories').style.display ='block';
document.querySelector('#show_stories').style.backgroundImage = 'url(' + arr[element.target.id].story + ')';

// After some time story will disappear again
setTimeout(() => {
    document.querySelector('#show_stories').style.display ='none';
}, 3000);

})









