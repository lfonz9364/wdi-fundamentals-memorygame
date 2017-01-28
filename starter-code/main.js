console.log("JS file is connected to HTML! Woo!")

		var cards = ['queen', 'queen', 'king', 'king'];
		var cardsInPlay = [];
		var gameBoard=document.getElementById('game-board');
		var score = 0;

		var createBoard = function() {
			for (i = 0; i < cards.length; i++){
				var newCard=document.createElement('div');
				newCard.className="card";
				newCard.setAttribute('data-card', cards[i]);
				newCard.addEventListener('click', isTwoCards);
				
				gameBoard.appendChild(newCard);
				gameBoard.appendChild(newCard);
				}
			}


		var isTwoCards = function() {
			cardsInPlay.push(this.getAttribute('data-card'));
				console.log(this.getAttribute('data-card'));
				if (this.getAttribute('data-card') === 'queen') {
					this.innerHTML = '<img src="queen.png" alt="Queen of Hearts" />';	
					} else {
					this.innerHTML = '<img src="king.png" alt="King of Spades" />';
					}
			if (cardsInPlay.length === 2) {
				isMatch(cardsInPlay);
				cardsInPlay = [];
				}
		}	

		var isMatch = function(cards) {
			if (cardsInPlay[0] === cardsInPlay[1]) {
				alert('You found a match!');
				score += 1;
			} else {
				alert('Sorry, try again.');
			}
			alert('score:' + score)
		}

		var resetBoard = function() {
			var resetCard=document.getElementsByTagName('img');
			while (resetCard.length > 0) {
					resetCard[0].parentNode.removeChild(resetCard[0]);
			}

		}
		createBoard();





		