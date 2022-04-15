# TOP-pingu-vs-mum
LIVE: https://woncodes.github.io/TOP-pingu-vs-mum/

This is a Pingu themed rock-paper-scissor game I created as part of the Odin Project Foundation Curriculum.

Below are some notes I've taken in the process for my own reference. 

[basic.js]
- function computerPlay() randomly returns ‘rock’, ‘paper’, or ‘scissors’ ✅
- function playRound() plays a single round of RPS taking two parameters (playerSelection, computerSelection) ✅
- playRound(playerSelection, computerSelection) 
returns roundResult ✅

“You [win/lose]! [R/P/S] beats [R/P/S]” ✅
- playround() must be case insensitive ✅
- game() plays 5 rounds and keeps score ✅
- reports a winner or loser at the end ✅
- compare previous code to new code ✅

[basic-dom.js]

1. remove logic that plays exactly five times ✅

2. create three buttons [R/P/S] ✅

3. add event listeners to buttons that calls playRound function with the correct playerSelection every time a button is clicked ✅

4. add div to display results that previously used console.log using DOM methods; inserting html elements 
- bare-barebones ✅

5. make result display section display only three most recent results & either scrolls or deletes the previous ones 
- (IMPRV) hard to spot the latest result; so it would be better to just remove the previous result entirely 
- only the newest round result shows ✅

6. think of a more fun way to display the results - the message and the formatting and apply ✅
 - title-text fade in from left to right by splitting the title text content, looping through them, 
 adding <span></span> for each of them resulting in the final look to be a continuous horizontal text before transition, 
 remove any text content from the original html of the title-text, looping through each letter span based on timer, 
 when class has been added to each of the letter spans, complete the loop by clearing the interval and setting the timer to null; 
 can mess around with the css of the .fade class to create different animation looks. 

7. create a fadeIn() function so that it could be applied multiple times for multiple elements’ text ✅

8. decide on the beginning animation’s text to be faded in at page load ✅

	(1) Mum challenges Pingu to a game of Rock Paper Scissors . . .
	(2) If Pingu wins, he gets to go play with his sister Pinga !
	(3) If Pingu loses, he has to help Mum with laundry first . . .
	(4) Let’s help him win this game !


9. hide rps buttons that play the game so that players may not play the game any more - 
ONLY play agin button appears in the middle of the screen to reload game page ✅

10. make buttons enlarge (animation) & gets smaller again (transparency changes too) ✅

11. fix the span fade-in effects for beginning animation descriptions - simple typo ✅

12. change description messages in the beginning ✅

13. implement different score display method - separate div/section that remains visible even after the game has 
finished so that it’s more clear who won by how many points ✅

14. move round result text to the very bottom ✅

15. build fadeIn(textElement) & fadeOut(textElement) fxn - test site  ✅

16. implement in the rps site & test ✅

16. apply some style changes to the text (text-shadow, scale on hover, margins, etc.) ✅

16. apply some style changes to the text (text-shadow, scale on hover, margins, etc.) ✅

17. commit & push on github ✅

18. deploy on github pages ✅

19. share on discord channel & get feedback

























