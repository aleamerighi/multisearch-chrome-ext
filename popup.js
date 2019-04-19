// declare global variables
var inp;

var twitter;
var facebook;
var instagram;
var youtube;

// empty array to be populated after social network buttons clicked
let urlList = [];

// define starting urls
var searchTwitter = 'https://twitter.com/search?q=';
var searchFacebook = 'https://facebook.com/search?q=';
var searchInstagram = 'https://www.instagram.com/explore/tags/';
var searchYouTube = 'https://www.youtube.com/results?q=';

//p5.js function is executed when page loads
function setup() {
  noCanvas();
  // initialize input by targeting the correct ID for element in popup.html
  inp = select('#userinput');

  // also target buttons for social networks
  twitter = select('#twitter_btn');
  twitter.changed(twOption);

  facebook = select('#facebook_btn');
  facebook.changed(fbOption);

  instagram = select('#instagram_btn');
  instagram.changed(instaOption);

  youtube = select('#youtube_btn');
  youtube.changed(ytOption);

  // store the HTML button element in a variable and add event when clicked https://p5js.org/reference/#/p5/mousePressed
  var submit = select('#submit_btn');
  submit.mousePressed(searchQuery);
}

// functions are executed when button status changed
function twOption() {
  if (twitter.checked()) {
    // populate array
    urlList.push(searchTwitter);
  } else {
    // remove from array
    urlList.pop(searchTwitter);
  }
}

function fbOption() {
  if (facebook.checked()) {
    urlList.push(searchFacebook);
  } else {
    urlList.pop(searchFacebook);
  }
}

function instaOption() {
  if (instagram.checked()) {
    urlList.push(searchInstagram);
  } else {
    urlList.pop(searchInstagram);
  }
}

function ytOption() {
  if (youtube.checked()) {
    urlList.push(searchYouTube)
  } else {
    urlList.pop(searchYouTube);
  }
}

// allow search to be exectued also on return click https://p5js.org/reference/#/p5/keyPressed
function keyPressed() {
  if (event.keyCode == 13) {
    searchQuery();
  }
}

function searchQuery() {
  // loop through the array of links to perform the search
  for (var i = 0; i < urlList.length; i++) {

    // set temporary variable for input
    var tmp;

    if (urlList[i] == searchInstagram)
      // remove spaces and special characters when searching on instagram https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
      tmp = inp.value().replace(/[&\s\/\\#,+()$~%.'":*?<>{}]/g, '');
    else
    // remove special characters only when searching on other social networks
      tmp = inp.value().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');

    urlList[i] = urlList[i] + tmp;

    // interaction with Chrome API to open multiple tabs for each link in the current window
    chrome.tabs.create({
      url: urlList[i]
    });
  }
}
