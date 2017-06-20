$(document).ready(function() {
  // 1. getAllBeers
    // write a function with the variable getAllBeers. This function should make an ajax request to "/api/beers" and call appendBeers with the new data
    // this function should be called when the page loads

  // 2. appendBeers
    // write a function with the variable appendBeers. Take a look at the index.html file. Notice the html structure of the Generic Beer inside the <ul>
    // for each beer you get from the getAllBeers function, add an <li> similar to the Generic Beer to the <ul>. Make sure to include class names and 
    // add the data attribute - data-id with the beer's id
    // you will also want to add a class name to each beer - "api_beer". We will need this later. 

 // Now would be a good time to test everything and make sure your code works up to this point. 
 //
 // We will review after this point
 

    
  // 3. getSingleBeer
    // write a function with the variable getSingleBeer. This function should make an ajax request to "/api/beers/:id" and call appendSingleBeer 
    // with the new data 
    // the id should be passed into this function when it is called
    // this function will be called later with a button click

  // 4. appendSingleBeer
    // write a function with the variable appendSingleBeer. You will want to clear the DOM of all li's and append this single beer 
    // the same way you did for all the beers in appendBeers

  // 5. Event handler - getSingleBeer
    // write an event handler listening for click events on elements with the class "api_beer". 
    // this function should grab the id from the beer's data-id attribute and call getSingleBeer while passing in the id. 
    // heads up - there's a trick to this one. 

  // 6. Event handler - getAllBeers
    // write an event handler listening for click events on <h1> elements. 
    // this function should clear the DOM of all <li>'s and call getAllBeers

 // Now would be a good time to test everything and make sure your code works up to this point. 
 //
 // We will review after this point
});
