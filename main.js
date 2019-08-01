// Change the span with the class `mess-with-me` to have a font size of 3em.
const biggieSpans = document.querySelector('span.mess-with-me');
biggieSpans.style.fontSize = '3em';


// Change the span with the class `mess-with-me-more` to have the text be colored orange.
const orangeSpan = document.querySelector('span.mess-with-me-more');
orangeSpan.style.color = 'orange';


// Change the paragraph with the class `mess-with-me` to have a background color of light green.
const paragraph = document.querySelector('p.mess-with-me');
paragraph.style.backgroundColor = 'lightgreen';


// Change the first dinosaur image so that the image's dimensions are 324 pixels wide.
const triceratops = document.querySelector('#triceratops');
triceratops.style.width = '324px';


// Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space.
const hideMe = document.querySelector('#hide-me-area');
hideMe.style.display = 'none';


// Change the four images in their own `section` to be in a row. Check out the css file to see how this could be easily done!
const dinosaurContainer = document.querySelector('#make-me-a-row');
dinosaurContainer.style.flexDirection = 'row';

// Change that row so that the images are _vertically_ centered within their container. If you put the DOM element in a variable, you shouldn't have to query it again!
dinosaurContainer.style.alignItems = 'center';

// Align the second image in the row to the bottom of the container. Feel free to edit the html to make selecting it easier, but you _can_ select it as is!
const secondImage = document.querySelector('#bottom-aligned'); // Alternate selector: 'img:nth-child(2)'
secondImage.style.alignSelf = 'flex-end';

// Give the "Switch Background Color" button an event listener that launches a function to switch the background color of the row of dinosaurs. You don't have to write the function yet, but give it a name!
const toggleButton = document.querySelector('#toggle');
toggleButton.onclick = toggleBackgroundColor;

// Now make the function you're going to call. Within the function, simply ask it to alert or console out something so we can see that it works.
function toggleBackgroundColor() {

  dinosaurContainer.style.backgroundColor = 'black';
}

// Now back in that function, remove the `alert`/`console.log`, and tell it to change the background color of the dinosaur row to black. If you made the dinosaur row container a variable, you should still have access to it there--in every code block, code can still look "up" to see any variable declared in an outer scope! So no need to query again.

// STRETCH GOAL: Allow the button to switch the background color back to white. You can track which state it's currently in with a variable, but remember that at the end of any function or code block, any variable declared within is "garbage collected" and no longer exists in memory. You don't want to lose the state of the background's current color (or you might switch black to... black), so you'll have to store it somewhere OUTSIDE the function. ALTERNATELY, you could 