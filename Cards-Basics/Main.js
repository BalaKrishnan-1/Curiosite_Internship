const cards = document.getElementById('cards');
const card1 = document.getElementById('c1');
const card2 = document.getElementById('c2');
const card3 = document.getElementById('c3');
const card4 = document.getElementById('c4');
//MouseEnter Functions
card1.addEventListener('mouseenter', () => {
  document.body.style.backgroundImage = "url('./Assets/Img/Iron_Man_Bg.jpg')"; // New image on hover
  card2.style.visibility="hidden";
  card3.style.visibility="hidden";
  card4.style.visibility="hidden";
   
});

card2.addEventListener('mouseenter', () => {
  document.body.style.backgroundImage = "url('./Assets/Img/Captain_America_Bg.jpg')"; // New image on hover
  card1.style.visibility="hidden";
  card3.style.visibility="hidden";
  card4.style.visibility="hidden";
});

card3.addEventListener('mouseenter', () => {
  document.body.style.backgroundImage = "url('./Assets/Img/Thor_Bg.jpg')"; // New image on hover
  card2.style.visibility="hidden";
  card1.style.visibility="hidden";
  card4.style.visibility="hidden";
});

card4.addEventListener('mouseenter', () => {
  document.body.style.backgroundImage = "url('./Assets/Img/Hulk_Bg.jpg')"; // New image on hover
  card2.style.visibility="hidden";
  card3.style.visibility="hidden";
  card1.style.visibility="hidden";
});

//MouseLeave Functions
card1.addEventListener('mouseleave', () => {
  document.body.style.backgroundImage = "none"; // Reset on leave
  card1.style.order="1"
  card2.style.order="0"
  card2.style.visibility="visible";
  card3.style.visibility="visible";
  card4.style.visibility="visible";
 
});

card2.addEventListener('mouseleave', () => {
  document.body.style.backgroundImage = "none"; // Reset on leave
   card2.style.order="1"
   card3.style.order="0"
  card1.style.visibility="visible";
  card3.style.visibility="visible";
  card4.style.visibility="visible";
 
});

card3.addEventListener('mouseleave', () => {
  document.body.style.backgroundImage = "none"; // Reset on leave
  card3.style.order="1"
  card4.style.order="0"
  card1.style.visibility="visible";
  card2.style.visibility="visible";
  card4.style.visibility="visible";
});

card4.addEventListener('mouseleave', () => {
  document.body.style.backgroundImage = "none"; // Reset on leave
  card4.style.order="1"
  card1.style.order="0"
  card1.style.visibility="visible";
  card2.style.visibility="visible";
  card3.style.visibility="visible";
});



cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered'); // Moves the hovered card
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered'); // Resets position when mouse leaves
  });
});

