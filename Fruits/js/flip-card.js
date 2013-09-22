var init = function() {
  var card1 = document.getElementById('circle1');
  var card2 = document.getElementById('circle2');
  var card3 = document.getElementById('circle3');
  var card4 = document.getElementById('circle4');
  
  document.getElementById('circle1').addEventListener( 'mouseover', function(){card1.className = 'flipped';console.log(card1);}, false);
  document.getElementById('circle1').addEventListener( 'mouseout', function(){card1.className = '';}, false);  
  document.getElementById('circle2').addEventListener( 'mouseover', function(){card2.className = 'flipped';}, false);
  document.getElementById('circle2').addEventListener( 'mouseout', function(){card2.className = '';}, false);  
  document.getElementById('circle3').addEventListener( 'mouseover', function(){card3.className = 'flipped';}, false);
  document.getElementById('circle3').addEventListener( 'mouseout', function(){card3.className = '';}, false);  
  document.getElementById('circle4').addEventListener( 'mouseover', function(){card4.className = 'flipped';}, false);
  document.getElementById('circle4').addEventListener( 'mouseout', function(){card4.className = '';}, false);
};

window.addEventListener('DOMContentLoaded', init, false);