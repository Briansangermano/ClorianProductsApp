# Clorian Products App

Clorian Products app is a React app that displays a list of products with their respective names and descriptions. Being able to add the products to a shopping cart.

## Project Structure

The project is structured as follows:

- `src/`: This directory contains all the React components and the main `App.js` file.
  - `components/`: This directory contains all the individual React components used in the application.
  - `data/`: This directory contains both the images and the main json used by the app.
  - `pages/`: This directory contains the main page of the project.
  - `redux/`: This directory contains the entire redux implementation with its reducer, action, selectors, and types.
- `public/`: This directory contains the static files served by the application.
- `package.json`: This file contains the list of project dependencies and scripts.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Components

- `Header`: Displays the header of the application.
- `CartItem`: It contains the main cards where the content of the product added to the shopping cart is rendered.
- `ModalConfirmation`: It is a confirmation modal for the user to ensure their action before deleting the products from the shopping cart.
- `ProductCart`: It contains the main cards where the content of the product is represented on the main page.
- `SearchBar`: It contains the search bar in which the user can search by text and order the search in ascending or descending order.
- `SelectQuantity`: It contains a small component which is used to add the amount of products to be added.
- `ShoppingCart`: Displays and contains the list of purchased products.

## Getting Started

To get started with this project:

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Start the development server with `npm start`.
