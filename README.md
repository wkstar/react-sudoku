
## Suduko by Thomas Mead

[Play now](https://wkstar.github.io/react-sudoku/)

Refresh to get a new puzzle.


To run locally -

`npm run start`

To test -

`npm run test`

### Info

I've used create-react-app to avoid writing boilerplate as much as possible, and React hooks so I could have a play with them.

Initial tiles are exposed at random. So it's not guaranteed that each puzzle is definitely solvable from the starting point, although the vast majority will be.
There is a unique solution for each puzzle.

In the interests of time, and not messing around with create-react-app magic, I've not used any libraries outside of the React ecosystem. I'd use lodash or similar for some of the set operations in a real project.

I've written an example test for the Cell component, but had some issues as React hooks are still immature. If I was to refactor, I'd probably pull lots of methods out of the Suduko cell class into plain functions to make them easier to test.

Only tested on Chrome on my Macbook. I'm sure I'm missing all sorts of polyfills for other browsers.