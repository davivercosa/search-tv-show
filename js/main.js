// ========================================================
// INTRODUCTION
// ========================================================
// The goal with this assignment is to make a TV Show lookup.
// ========================================================
// 1 - The user will type in a show and then hit "Lookup Show"
// 2 - Our page will make an AJAX call to the tv show datbase
// 3 - JSON results will be returned and populated on the page in the designated spots

// We will be using the 'tvmaze.com' API since they will allow us to do searches
// without having to register for an API key.

// Here is the URL that we'll be using to get our JSON data back:
// https://api.tvmaze.com/singlesearch/shows?q=

// Everything after 'q=' will be the name of your show.  Here's an example:
// https://api.tvmaze.com/singlesearch/shows?q=Office
// This will return JSON data for the show 'The Office'

// Other shows to try, but feel free to try your own as well:
// - Breaking Bad
// - Scrubs
// - Game of Thrones

// Sometimes it's a little hard to read JSON data in the browser.
// This chrome extension can help so that it looks a bit better:
// https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en

// ========================================================
// ASSIGNMENT
// ========================================================

// # 1 - Add jQuery to the index.html page. You can find a jQuery link at https://code.jquery.com/,
//       or use the CDN link that was used in the video. Use the minified, 3.x version.
//       Add it right before the other script tag up near the bottom of the page.
//       Once it's been added, you can move to the next step.

// # 2 - Since we are running our JavaScript at the bottom this time, we will NOT need to add the .ready() method
//       You can put your code directly below the remaining questions
//       nothing is needed here, you can move to the next step.

// # 3 - Make it so that when "Lookup Show" is clicked, the text from the textbox is appended to the end of the API url and an AJAX
//       call is made. You'll be using the $.getJSON() method for this.
//      * This button has an ID of 'btnShowLookup'
//      * The textbox you'll be pulling text from has an ID of 'txtShow'
//      * The API URL to append your text to and pass to .getJSON() is 'https://api.tvmaze.com/singlesearch/shows?q='
//      * Example: $.getJSON('https://api.tvmaze.com/singlesearch/shows?q=' + $(#txtShow).val())

// # 4 - Chain the .done() method after your .getJSON() method. Inside this you'll run a function with the parameter of data.
//       This 'data' when used within the function will have the data from the AJAX call. This data will be an object.

// #5 - Using the data object that was created in #4, populate the different fields on the page.
//      You will have to explore the data that is being returned and try your best to map it.
//      Don't forget, logging your returned data to the browser using console.log() might help you
//      to figure out the structure of the data being returned.
//      All of your code should go within the function that was created in #4.
//
//      Fields to populate on the page have the following IDs
//      TV Show Name:       #name
//      Ratings (star):     #rating (hint: the api will return an average rating, use that)
//      Runtime (clock):    #runtime
//      Language (bubble)   #language
//      Description:        #summary
//      Thumbnail:          #image
//
//      Here is the code to get the image to load $('#image').prop('src', data.image.original);
//      The rest should be using either the .text() method or the .html() method to update.
$('#btnShowLookup').on('click', () => {
  const search = $('#txtShow').val();
  $.getJSON(`https://api.tvmaze.com/singlesearch/shows?q=${search}`).done(
    (data) => {
      $('#name').text(data.name); // changes the text of the name id
      $('#rating').text(data.rating.average); // changes the text of the rating id
      $('#runtime').text(data.runtime); // changes the text of the rintime id
      $('#language').text(data.language); // changes the text of the language id
      $('#summary').children().remove(); // remove the existing paragraph on the html file
      $('#summary').html(data.summary); // adds the new paragraph to the html file
      $('#image').attr('src', `${data.image.original}`); // changes the image src for the image id
    },
  );
});
