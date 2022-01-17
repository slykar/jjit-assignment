# Getting Started

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Ideas for Improvement

Things that I would like to have but did not want to spend time on for a take-home assignment.  
There would be more if I thought harder about it :)

### Tooling

- A setup of Prettier that does not depend on the IDE, but is integrated with Eslint
- Git hooks integration to run Eslint, check commit message format, etc.
- More quality and style checks: import sorting, cyclomatic complexity, ordering of CSS class names, etc.
- Setup CI for automated tests and additional code analysis, e.g. SonarQube

### Architecture

- Automated tests - especially filters and sorters
- State management using Mobx
- Lazy loading of images - webp `loading="lazy"`

### UI/UX

- Fix/improve mobile view
- Create or use a complete UI kit - more dumb components to encapsulate tailwind styling
- Virtualized scroll list of job offers for better performance
- More fluid breakpoints/proportions for offers-list/map-view (avoid layout jumps)
- Error-specific messages and user-reportable error codes 
- Highlight marker of the currently displayed offer
- List offers when clicking on a clustered marker
- At least a bit of focus on a11y and keyboard navigation possibilities
- Filters for location with panning to that location
- Keep filter / sort state when navigating between list and details page

### Other

- SEO and user friendly URLs for filters
- Actual 404 response on offer details page if is not found