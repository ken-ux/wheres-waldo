# wheres-waldo

This is a browser game based on _Where's Waldo?_, a series of children's puzzle books. Users choose a difficulty mode to play and are tasked with finding three characters in an image with many distracting elements. Users get a score based on how fast they completed a game and can submit their scores to a leaderboard.

Guesses for character locations are validated in the backend. The backend interacts with a PostGreSQL database that also stores the leaderboard data. Refer to [where's-waldo-api](https://github.com/ken-ux/wheres-waldo-api) for the backend's repository.

Live version can be found here: https://wheres-waldo-ken.netlify.app/

## Technology Used

- React
- TypeScript
- Tailwind CSS

## Lessons Learned

- Using URL parameters to dynamically render page content with React Router.
- Normalizing click coordinates on different screen sizes.
  - The main action users take is clicking on different parts of the _Where's Waldo_ images and guessing what's there. When this happens, an event listener registers the coordinates of the click. However, since the image size is proportional to screen size, a click in the corner of a 1280px-wide image does not have the same coordinates if it's resized to 640px.
  - The website, and therefore the _Where's Waldo_ scenes, have a max-width. Based on this, I figured out that I could use the native `currentTarget.width` property of the event listener to record the current size of the image and calculate how much smaller it might be. Then, I could use that ratio to adjust the coordinates to what they should be at the image's max-width.
- Creating mock data to fill spots in the frontend where I planned for queried data to be later on since the frontend was made before creating the backend.
