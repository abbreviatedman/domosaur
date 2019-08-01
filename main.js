// Change the span with the class `mess-with-me` to have a font size of 3em.


// Change the span with the class `mess-with-me-more` to have the text be colored orange.


// Change the paragraph with the class `mess-with-me` to have a background color of light green.


// Change the first dinosaur image so that the image's dimensions are 324 pixels wide.


// Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space.


// Change the four images in their own `section` to be in a row. Check out the css file to see how this could be easily done!


// Change that row so that the images are _vertically_ centered within their container. If you put the DOM element in a variable, you shouldn't have to query it again!


// Align the second image in the row to the bottom of the container. Feel free to edit the html to make selecting it easier, but you _can_ select it as is!


// Give the "Switch Background Color" button an event listener that launches a function to switch the background color of the row of dinosaurs. You don't have to write the function yet, but give it a name!


// Now make the function you're going to call. Within the function, simply ask it to alert or console out something so we can see that it works.


// Now back in that function right up there, remove the `alert`/`console.log`, and tell it to change the background color of the dinosaur row to black. If you made the dinosaur row container a variable, you should still have access to it there--in every code block, code can still look "up" to see any variable declared in an outer scope! So no need to query again.

/*
  STRETCH GOAL: Allow the button to switch the background color back to white. You can track which state it's currently in with a variable, but remember that at the end of any function or code block, any variable declared within is "garbage collected" and no longer exists in memory. You don't want to lose the state of the background's current color (or you might switch black to... black), so you'll have to store it somewhere _outside_ the function.
  
  Don't forget to change that variable's state every time you toggle!
  
  _Alternately_, you could _read_ the state of the dom and change the state depending on that. No variables that way!
  */

// Now query the first dinosaur picture you saw and set an event listener to run when it's _hovered_. Instead of an `onclick`, you'll use something that starts with `on`, middles with `mouse`, and ends with... something else. Research it! No need to write that function yet.


// Now write a function to make the image grow to 200 pixels wide when hovered. Should be only one line of code if you made the DOM node a variable above! Feel free to set it to console out or alert us when it runs, if you're not sure that it IS running.


// Notice how the image doesn't shrink? Add another event listener and write the accompanying function to shrink it back to its original size. You might have to look around to find where the original size is set.


// And now you're done!