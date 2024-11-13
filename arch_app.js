const reviews = [
    {
        id:1,
        name: "Skyrise Apartments",
        img:
            "arch_1.jpg",
        text:
            "Taken in Downtown Houston, 6/9/24",
    },
    {
        id:2,
        name: "Big Ben",
        img:
            "arch_2.jpg",
        text:
            "Taken in London, 6/17/24",       
    },
    {
        id:3,
        name: "Parking Garage",
        img:
            "arch_3.jpg",
        text:
            "Taken in London, 6/17/24",       
    },
    {
      id:4,
      name: "Stairway",
      img:
        "arch_4.jpg",
      text:
        "Taken in Versailles, 6/20/24",  
    },
    {
        id:5,
        name: "Eiffel Abstraction",
        img:
          "arch_5.jpg",
        text:
          "Taken in Paris, 6/19/24",  
    },
    {
        id:6,
        name: "Louvre Thirds",
        img:
          "arch_6.jpg",
        text:
          "Taken in Paris, 6/21/24",  
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
