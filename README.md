# Snake CHUNK.js Kata
A step-by-step guide to making a javascript snake game with CHUNK.js

## Prerequisites

This kata assumes you:

1. Are on a mac (for now!)
1. Have [installed git](https://help.github.com/articles/set-up-git)
2. Have installed [Sublime](http://www.sublimetext.com/) and enabled the
   [command line tools](http://www.sublimetext.com/docs/2/osx_command_line.html)
3. Have enabled the web developer tools in
   [Chrome](https://developers.google.com/chrome-developer-tools/docs/console),
   [Safari](http://superuser.com/questions/302014/safari-web-developer-tools#302016)
   or [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Web_Console)
4. Are willing to open a terminal.

## Running the Kata

To walk through the kata, open a terminal and run the following commands:

    cd ~/Desktop           # Change the terminals working directory to your
                           #  Desktop
    git clone https://github.com/zspencer/snake-chunk-js-kata.git
                           # Download the code for the kata from github
    cd snake-chunk-js-kata # Change the terminals working directory to the
                           #  directory containing the code
    bin/rewind             # Go to the beginning of the kata (ignore the
                           # warning about a 'detached head')
    open index.html        # Open the game in your browser
    subl index.html snake.js  # Open the code in the Sublime text editor

Read through the index.html file. It mainly sets up an 800x600 canvas and loads
the snake and chunk javascript files.

Read through the snake.js file. When you get to the bottom there are suggestions
on how to change the game. Make any changes you want and then refresh the browser
to see the code run. Don't worry about making a mistake - all your changes will be
erased when you move on to the next lesson.

## Moving on to the Next Lesson

Once you've read the code and are ready to move to the next step, go back to
your terminal and type:

    bin/next               # replaces the code with the next lesson

Refresh the page in your browser to see the new
code run! (Sublime will automatically update the code).
