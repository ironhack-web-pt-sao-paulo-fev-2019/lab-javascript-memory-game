var cards = [{
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  },
  {
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  }
];

window.addEventListener('load', function () {

  var memoryGame = new MemoryGame(cards);
  var first, secc, cont = 0;
  var html = '';
  var clicked = document.getElementById('pairs_clicked');
  var gessed = document.getElementById('pairs_guessed');

  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  if (document.querySelector('#memory_board')) {
    document.querySelector('#memory_board').innerHTML = html;
  }


  // Bind the click event of each element to a function
  var back = document.querySelectorAll('.back');
  back.forEach(function (backItem) {
    backItem.addEventListener('click', function () {
      if (cont == 1) {
        secc = backItem;
        openCard(backItem);
        cont += 1;
        upt();
        return;
      }
      if (cont == 0) {
        first = backItem;
        openCard(backItem);
        cont += 1;
        upt();
        return;
      }
      if (cont > 1) {
        closeCard(backItem);
        upt();
        cont = 0;
      }
    });
  });

  function openCard(backItem) {
    backItem.className = 'front';
    backItem.nextElementSibling.className = 'back';
  }

  function closeCard(backItem) {
    if (memoryGame.checkIfPair(first.getAttribute('name'), secc.getAttribute('name')) == false) {
      first.className = 'back';
      first.nextElementSibling.className = 'front';
      secc.className = 'back';
      secc.nextElementSibling.className = 'front';
    } else {
      first = 0;
      secc = 0;
    }
  }

  function upt() {
    clicked.innerText = memoryGame.pairsClicked;
    gessed.innerText = memoryGame.pairsGuessed;
  }
});