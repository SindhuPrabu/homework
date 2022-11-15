// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!

function switchGray() {
    document.body.style.backgroundColor = 'gray';
    document.body.style.color = 'white';
  }
  
  function switchWhite() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
  const grayButton = document.querySelector('#grayButton');
  const whiteButton = document.querySelector("#whiteButton");
  
  grayButton.addEventListener("click", switchGray);
  whiteButton.addEventListener("click", switchWhite);