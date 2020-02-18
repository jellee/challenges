$(document).ready(function(){
	$board = [['','',''], ['','',''], ['','','']];
	$updated = 0;
	$human = { name: '', symbol: '' };
	$computerSymbol = '';
	$turn = false;

	// register click and change value, change turns.
	$('.btn').click(function() {
		if($turn === true) {
			var id = $(this).parent().attr('id');
			updateBoard(id, $human.symbol);
		}
	});

	function updateBoard(id, symbol, hideResult) {
		if (id) {
			var x = parseInt(id[0]), 
				y = parseInt(id[1]);

			$board[x][y] = symbol;
			$('#'+id+' .btn').html("<i class='fa fa-"+symbol+" fa-5x'></i>");
			$updated++;
		}

		if (!hideResult) {
			// check who won and displays result
			if (checkWin(symbol, $board)) {
				console.log('board has win');
				$turn = false;
				displayWinMessage(symbol);
			} else if($updated == 9) {
				displayWinMessage();
			} else {
				updateTurnFields(symbol);
				if (symbol == $human.symbol) {
					calculateMove();
				}
			}
		}
	}
	function updateTurnFields(symbol) {
		$turn = !$turn;
		if (symbol == $human.symbol) {
			$('.turn').text('Computer\'s move.').css('color', 'red');
		} else {
			$('.turn').text('Your move.').css('color', 'green');
		}
	}

	// checks the board to see who won and displays the result
	function checkDiagonals(board) {
		if (board[0][0] != '' && board[0][0] == board[1][1] &&
			board[1][1] == board[2][2]) {
			return true;
		}
		return (board[0][2] != '' && board[0][2] == board[1][1] && board[1][1] == board[2][0]);
	}
	function checkXY(board) {
		var i = 3;
		while(i--) {
			if (board[i][0] != '' && board[i][0] == board[i][1] &&
				board[i][1] == board[i][2]) {
				return true;
			} else if (board[0][i] != '' && board[0][i] == board[1][i] &&
				board[1][i] == board[2][i]) {
				return true;
			}
		}
		return false;
	}
	function checkWin(symbol, tempBoard) {
		console.log('checking whether there is a win');
		return (checkXY(tempBoard) || checkDiagonals(tempBoard));
	}
	function displayWinMessage(symbol) {
		var win_string = '', win_color = '';
		$('.status').text("Game Over!");
		$('.turn').text(win_string);

		if (symbol == $human.symbol) {
			win_string = 'Congratulations, you beat the computer!';
			win_color = 'green';
		} else if (symbol == $computerSymbol) {
			win_string = 'Sorry, you lost to the computer :(';
			win_color = 'red';
		} else {
			win_string = 'Looks like you tied!';
			win_color = 'orange';
		}
		$('.result').text(win_string).css('color', win_color);
	}

	function getNum() {
		var currBoard = $.extend(true, $board);
	}

	// calculates computer's next move, change board, update notification fields
	function calculateMove() {
		// go through board - for each open slot, calculate eventual win
		for(var i=0; i < 3; i++) {
			for(var j=0; j < 3; j++) {
				if ($board[i][j] == "") {
					var temp = $.extend(true, {}, $board);
					temp[i][j] = $computerSymbol;
					var newIndex = i.toString() + j.toString();
					if (checkWin($computerSymbol, temp)) { // computer wins with this move
						updateBoard(newIndex, $computerSymbol, true);
						displayWinMessage($computerSymbol);
						return;
					} else { // add the number 
						updateBoard(newIndex, $computerSymbol);	// dumb computer for now
						return;
						// getNum(temp);
					}
				}
			}
		}
		// choose max


		// updateBoard(ij, $computerSymbol);
	}

	// form submit
	$('#formSubmit').click(function(e) {
		if ($(this).val() == 'Start Game') {
			e.preventDefault(); // keep from refreshing page
			$('.board').removeClass('hidden');

			// set icons for human vs. computer
			$human.name = $('input[name=name]').val()
			$human.symbol = $('input[name=symbol]:checked').val();
			$computerSymbol = ($human.symbol == 'apple') ? 'android' : 'apple';
			var isStart = $('input[name=start]:checked').val();
			var starter = (isStart == 1) ? $human.name : 'Computer';

			// set updated fields
			$('#name').html("<h4>Players</h4>"+$human.name+" vs. Computer");
			$('#symbol').html("<h4>Icon Choice</h4>"+$human.name+" is <i class='fa fa-"+$human.symbol+" fa-lg'></i>");
			$('#start').html("<h4>"+starter+" started the game.</h4>");
			$('#formSubmit').prop('value', 'Restart').css('background', 'red');

			// set the initial setting
			$('.status').html("<h4>Game in progress...</h4>");
			updateBoard((isStart == 1)?'':'11', $computerSymbol);
		} else location.reload();
	});
});