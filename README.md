
## Suduko by Thomas Mead

I've used create-react-app to avoid writing boilerplate as much as possible, and React hooks so I could have a play with them.

### Info

To run -

`npm run start`.

To test -

`npm run test`

Refresh to get a new puzzle.

Initial tiles are exposed at random. So it's not guaranteed that each puzzle is definitely solvable from the starting point, although the vast majority will be.
There is a unique solution for each puzzle.

In the interests of time, and not messing around with create-react-app magic, I've not used any libraries. I'd use lodash or similar for some of the set operations in a real project.

I've written an example test for the Cell component, but had some issues as React hooks are still immature. If I was to refactor, I'd probably pull lots of methods out of the Suduko cell class into plain functions to make them easier to test.