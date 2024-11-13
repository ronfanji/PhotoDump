const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


navToggle.addEventListener('mouseover', function(){

   links.classList.toggle("show-links");

});

navToggle.addEventListener('mouseout', function(){

    links.classList.toggle("show-links"); 
 
 });
