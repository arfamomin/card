const basketball = document.getElementById('basketball');
const heart = document.getElementById('heart');
const message = document.getElementById('message');
const vernGif = document.getElementById('vernGif');


basketball.addEventListener('click', () => {
  document.body.style.backgroundColor = 'pink';
  basketball.style.display = 'none';
  heart.style.display = 'block';
  document.body.style.color = 'black';
  message.innerHTML = 'sports betting is temporary, love is forever <br> happy vday &lt;3 - arfa'; // Use <br> tag for new line
});

heart.addEventListener('click', () => {
    basketball.style.display = 'none';
    heart.style.display = 'none';
    vern.src = "vern.gif";
    vern.style.display = "block";
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    message.innerHTML = 'damn this guy got a gf'; // Use <br> tag for new line
  });
