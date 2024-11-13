const reviews = [
    {
        id:1,
        name: "Brian Nguyen",
        img:
            "review_photo1.jpg",
        text:
            "Taken in Austin, TX",
    },
    {
        id:2,
        name: "Sahil Veeravalli",
        img:
            "review_photo2.jpg",
        text:
            "Taken in Austin, TX",       
    },
    {
        id:3,
        name: "Ayaan Pirani",
        img:
            "review_photo3.jpg",
        text:
            "Taken in Austin, TX",       
    }
 ];
 
 
 const img = document.getElementById('first-img');
 const author = document.getElementById("author");
 const info = document.getElementById("info");
 
 
 const prevBtn = document.querySelector('.prev-btn');
 const nextBtn = document.querySelector('.next-btn');
 const randomBtn = document.querySelector('.random-btn');
 
 
 // set starting item
 let currentItem = 0;
 
 
 // load initial item onto html
 window.addEventListener("DOMContentLoaded", function (){
    showPerson(currentItem)
 })
 
 
 // show person based on item
 
 
 function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
 }
 
 
 // show next person
 
 nextBtn.addEventListener('click', function(){
    if(currentItem < reviews.length-1)
        currentItem++;
    showPerson(currentItem);
 });
 
 
 prevBtn.addEventListener('click', function(){
    if(currentItem > 0)
        currentItem--;
    showPerson(currentItem);
 });
 
 
 randomBtn.addEventListener('click', function () {
 
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
 
 })

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


navToggle.addEventListener('mouseover', function(){

   links.classList.toggle("show-links");

});

navToggle.addEventListener('mouseout', function(){

    links.classList.toggle("show-links"); 
 
 });


 