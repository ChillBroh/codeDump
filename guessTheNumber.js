 // Generate a random number between 1 and 100
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        // Get the input and button elements
        const guessField = document.getElementById('guessField');
        const guessSubmit = document.getElementById('guessSubmit');

        // Get the message element
        const message = document.querySelector('.message');

        // Initialize the number of guesses
        let numberOfGuesses = 0;

        // Function to handle the guess
        function checkGuess() {
            const userGuess = parseInt(guessField.value);
            numberOfGuesses++;

            if (userGuess === randomNumber) {
                message.textContent = `Congratulations! You guessed the number in ${numberOfGuesses} guesses!`;
                message.style.color = 'green';
                guessField.disabled = true;
                guessSubmit.disabled = true;
            } else if (userGuess < randomNumber) {
                message.textContent = 'Too low. Try again.';
                message.style.color = 'red';
            } else {
                message.textContent = 'Too high. Try again.';
                message.style.color = 'red';
            }

            guessField.value = '';
            guessField.focus();
        }

        // Event listener for the submit button
        guessSubmit.addEventListener('click', checkGuess);

        // Event listener for the enter key
        guessField.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                checkGuess();
            }
        });
