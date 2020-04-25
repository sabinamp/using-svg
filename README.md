This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## App Info
if you don't need any dynamic data or local state then you should consider using a stateless component.
PropTypes validations are very important PropTypes is used to document the intended types of properties passed to components. React will check the props passed to your components against those definitions, and it will send a warning in development if they don't match. (npm i prop-types)
components
- layout: Header, Footer, Content
   * sending the title prop to Header because it is the only one that is required.
   * we have passed props as attributes (with self-closed components <Component />), but there is another way to pass props as children (<Component>Children Content</Component>). We sent the  Home component as a child of content to the Content component: 

### Components

**Note: using the Signature as a web component!**
