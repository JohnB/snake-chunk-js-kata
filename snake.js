// To get started, let's make a snake:
//
var snake = [{ top: 0, left: 0}];

// If my computer spoke english and was named Sean, this is about how this line
// would read:
//
// "Hey Sean! Please get me a box and label it "snake." Then grab a note-card,
// write the word "top" on it and put a 0 after it. Also, Put the word "left"
// on the card and put a 0 after it, too. Now, put the note-card in the box.
// Thanks!"

// Syntax breakdown:
//
// `var` tells the computer to create a variable (in this case named `snake`)
// that we can assign a value to.
//
// `=` (single equals sign) tells the computer to assign the value on the
// right of the `=` to the variable on the left of the `=`.
//
// `[` and `]` (square brackets) come in pairs. They wrap around one or more
// values to make a list (often called an array).
//
// `{` and `}` (curly braces) also come in pairs. In this case they wrap around
// pairs of names and values to create an `object` (sometimes called a
// `hashmap`). (Note: There is another use of curly braces which we will see
// later.)
//
// `:` (colon) when creating an object says to create a variable within the
// object. It's name (or key) is on the left side of the `:` and it's value is
// on the right.
//
// `,` (comma) when creating an object (i.e. map) is used to separate key/value
// pairs on the object.
//
// `;` (semicolon) says "This line is over. Thanks!"

// Now that we have this amazing snake we want to show it off, right?
// Thankfully, the CHUNK game engine makes it easy to draw on
// the screen. Let's tell CHUNK to `draw` our `snake`!

var drawableSnake = { color: "blue", pixels: snake };
var box = [
	{top: 5, left: 3}, {top: 5, left: 4}, {top: 5, left: 5}, 
	{top: 6, left: 3},                    {top: 6, left: 5}, 
	{top: 7, left: 3}, {top: 7, left: 4}, {top: 7, left: 5}, 
]
var drawableBox = { color: "orange", pixels: box };
CHUNK.draw([drawableSnake, drawableBox]);

// This can be read as:
// "Hey Sean, create a variable called `drawableSnake`. Make it an object with
// a color of blue and pixels of that `snake` variable we defined earlier.
// Thanks!
//
// Hey Sean, create a list that includes the `drawableSnake`. Get the `draw`
// variable from `CHUNK` and to `draw` that list. Thanks!"

// Syntax Breakdown:
//
// `.` (period) is used to get the value stored at a key inside an object.
// `drawableSnake.color` says "get me the value of the color key in the
// drawableSnake variable." What do you think that value is?
//
// `(` and `)` (parenthesis) also come in pairs. When they come after a
// variable, they are saying "run the code stored in this variable." A variable
// that stores code that can be run is called a `function`. Values held within
// the parenthesis are given to the `function` for whatever it's purpose may
// be.  In this case, we want to give a collection of drawable things to
// CHUNK's draw function so it can draw them on the screen.

// Congratulations, by the way! You've drawn a very-short snake on the screen.
// Before you move on, try the following exercises:
//
// * Change the color of the snake.
// * Make the snake longer than just 1 segment!
// * Draw something in addition to the snake. Perhaps an apple or a wall? Make
//   sure it's a different color!
