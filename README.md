# DDR Xtreme 🏂
(Denver Downtown Rentals)<br>
a React web app for organizing Airbnb data with a SSX Tricky theme!

### Introduction
This was our second project (paired project) from Mod3 at Turing School of Software and Design. We were given six days to build a web app in React that organizes Airbnb listing data with a user-friendly UX/UI. The app uses the `fetch()` method to retrieve data from a live backend server which runs locally on the user's machine. A major learning goal for this project was to create a robust testing suite utilizing Jest and Enzyme to ensure all components function correctly.

### Screenshots
![screenshot 1](https://user-images.githubusercontent.com/53405028/74286261-a011d880-4ce4-11ea-986f-a2c4f9e6e0cd.png)
![screenshot 2](https://user-images.githubusercontent.com/53405028/74286267-a607b980-4ce4-11ea-9844-f9042c292a52.png)
![screenshot 3](https://user-images.githubusercontent.com/53405028/74286277-aa33d700-4ce4-11ea-8570-e43f5c0551b1.png)

### Directions for Use
- On page load you will see a login screen requiring the user to input their name, email, and select their reason for using the app (i.e. 'Business', 'Recreational', or 'EXTREME')
- After selecting the `Send It!` button, a map of four Denver neighborhoods is displayed and the user can hover over each neighborhood block to view more details about the area as well as the listings available in that area.
- The user can then select the `View All Listings` button to see a collapsed card view of each listing displayed. Each card has a `Toggle Details` button that when selected, displays additional information and images on the card for that listing.
- There is pink navigation bar on the top of the page which displays a greeting for the user, their info, and links to their favorite listings and account info.
- Each listing card has a snowflake icon used to favorite a listing. Favorited listings can be viewed from the favorites button on the navigation bar.

### Project Learning Goals  
1. Write squeaky clean, well refactored code using ES6 syntax.
2. Make informed design decisions to create a user-friendly application.
3. Keep state based components to a minimum and leverage more functional components.
4. Use a modular architecture for your application file structure.
5. Think deeply about React Lifecycle Methods.
6. Become familiar with promises, nested fetch requests, and handling the UI based on acceptance of data.
7. Become familiar with routing and how to handle dynamic routes.
8. Use propTypes for every component receiving props.
9. Write tests for React components and some asynchronous functionality.

### Technologies Used
- HTML
- CSS & SASS
- React
- Jest/Enzyme
- NPM

### How to run on a local machine
1. shut down any live servers you currently have running (`control` + `c`)
2. clone down this repo to desired location
3. cd to the directory where you cloned the repo
4. run `npm install`
5. clone down [this repo link](https://github.com/turingschool/VRAD-API "API Data") to a directory outside of the directory from the first repo you cloned.
6. repeat steps 3 & 4 for this new repo
7. clone down the image files from [this repo link](https://github.com/turingschool/VRAD-Assets "App Images") and extract the `image` folder and place it into the `public` folder within the app's directory.
8. cd back to the main app's root directory and run `npm start`
9. cd to the API Data root directory and run `npm start`
10. you should now be able to use the DDR Extreme app within your browser at the url `http://localhost:3000` ✨SICK FUNKY DOPE MANEUVER!✨

### This project was created by:
Zachary Nemeroff https://github.com/ZaneMeroff<br>
Virginia Ladd https://github.com/vladd-png
