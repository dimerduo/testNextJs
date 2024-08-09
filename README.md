## Setup
  1. Clone git reppo

  ### Setup backend
  1. Go to `/backend` folder
  1. Run `npm i`
  1. Run `npm run build` 
  1. Add demo data with `npm run strapi import -- -f demo-data.tar.gz`
      Press `y` in console
  1. Run `npm start`
  1. *(optional)* Open `http://localhost:1337/` in you browser
  1. *(optional)* Create account in Strapi (local one)
  Now you can add additional posts to blog in `Content Manager`

  ### Setup front-end
  1. Go to root folder
  1. Run `npm i` 
  1. Run `npm run build`
  1. Run `npm start`

## Additional info
  Time spent: approx 7h
  Coffe count: 11 cups
  I have some problems with latest Strappi version, thats why i move to older version (debugging this thing took about 4h, what include in total time)
  I add some styling and responsive layout with 2 breakpoints (mobile and tablet)
  Some types need more attention, but i think its not necessary now
  I chouse this type of code colocation, couse i want to sepparate presentation components from logic 
  
  I will be glad for any feedback