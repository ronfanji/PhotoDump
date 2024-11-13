const reviews = [
    {
        id:1,
        name: "Brian Nguyen",
        img:
            "/Users/ryanji/Downloads/review_photo1.jpeg",
        text:
            "Stepback Three swishhhh",
    },
    {
        id:2,
        name: "Sahil Veeravalli",
        img:
            "/Users/ryanji/Downloads/review_photo2.jpeg",
        text:
            "Brawwllllll Stawrsss",       
    },
    {
        id:3,
        name: "Ayaan Pirani",
        img:
            "/Users/ryanji/Downloads/review_photo3.jpeg",
        text:
            "Guys I swear my trades are fair",       
    }
 ];
 
 
 const img = document.getElementById('person-img');
 const author = document.getElementById("author");
 const job = document.getElementById("job");
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
    job.textContent = item.job;
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
 