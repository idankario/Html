var card = document.querySelector('.card');
card.addEventListener( 'mouseover', function() {

});
  card.addEventListener('mouseover', function() {
     card.classList.toggle('is-flipped');
  });
  card.addEventListener('mouseout', function() {
    card.classList.toggle('is-flipped');
  });