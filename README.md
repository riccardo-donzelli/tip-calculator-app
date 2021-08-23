# Frontend Mentor - Tip calculator app
[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

MY READ ME:

I set up the structure with HTML and styled it with CSS, following the designs of frontenedmentor.

After that the biggest challenge was to make the app work.
I created all the variables, the functions and the event listeners. One for every button.

I wasn't happy as I was sure there was a better way to do it. So I came up with the solution you can see in the JS file:
I put an event listeners on the parent of the buttons, and I added a target to the click event. Doing so I was able to use only one general function
that works with every tip button.
I put a value attribute for every button in the HTML file, so I could use the value in the function to calculate the tip.

If the people amount input is zero, a blur event on the object triggers a style change on the input itself, showing a red warning message that desappears when
people amount is bigger than 0.

Enjoy

Riccardo Donzelli
