# PZL! Social MultiSearch

A Google Chrome extension to look up content simultaneously on Twitter, Facebook, Instagram and YouTube.

## How to use

I developed this tool as a simple search engine to explore content on multiple social media. By using PZL!, users can query up to four social networks at the same time and on a single click. You just type a search and select which services to filter from among Twitter, Facebook, Instagram and YouTube.

### Prerequisites

There are no special prerequisites for using this tool, except you have to run it on a Google Chrome web browser.

### Installing

Go to the [Chrome Webstore](https://chrome.google.com/webstore/category/extensions) and type 'PZL! Social MultiSearch' in the search bar. Then, click on 'Add to Chrome' to get the extension running in your browser (icon should appear in the upper-right corner of the Google Chrome menu, next to the address bar).

## Possible implementations

The core of this extension is adding sources (urls) where users can search from. This is done by declaring an empty array as a global variable, and then populating it with social networks when their button is clicked. Among the many improvements that can be made, perhaps the most interesting one would be to add the option for users to add their own sources for new tabs. The following is a quick demonstration of how I added mine.

### Demo

In [popup.js](https://github.com/aleamerighi/multisearch-chrome-ext/blob/master/popup.js), declare input as a global variable.

```
var inp;
```

Then, store your favorite source urls inside variables as well. Notice the only thing that's missing at the end of the string is the text input that we want eventually to be defined by users.

```
var searchTwitter = 'https://twitter.com/search?q=';
var searchFacebook = 'https://facebook.com/search?q=';
var searchInstagram = 'https://www.instagram.com/explore/tags/';
var searchYouTube = 'https://www.youtube.com/results?q=';
```

Input also needs to be initialized by targeting the correct element (mine has an ID of #textinput) in [popup.html](https://github.com/aleamerighi/multisearch-chrome-ext/blob/master/popup.html). We do this inside the p5.js setup function.

```
inp = select('#userinput');
```

Now we can concatenate them to perform a search querying the urls with the user's text input. For example, if we want to look up on Facebook, the process would be the following.

```
searchFacebook + inp.value();
```

So, if we would like to add Reddit.

```
var searchReddit = 'https://www.reddit.com/search?q=';
```

Please note that the demo above is just for explaining purposes as the whole process used in this extension includes an empty array that's only populated with urls after specific buttons are clicked. Also, tabs are opened by looping through each element inside the array and concatenating it with inp.value().

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Built With

* [p5.js](https://p5js.org/reference/) - JavaScript library
* [codepen](https://codepen.io/) - Used to get example models for CSS

## Versioning

Current version 1.0 has just been released. I will then open a section for further releases in this repository.

## Authors

* **Alessandro Amerighi** - *Initial work* - [aleamerighi](https://github.com/aleamerighi)

There have been no external contributors in this project so far.

## License

The tool is completely free and has been developed by the MA Digital Journalism student Alessandro Amerighi as part of his Digital Sandbox final coursework.

## Acknowledgments

* Special mention to [Chris Sevilleja](https://codepen.io/chrisoncode/), [Mads Håkansson](https://codepen.io/madshaakansson/) and [Timothy Long](https://codepen.io/timothylong/) whose CSS code was used for inspiration.
* Hat tip to [Coding Train](https://github.com/CodingTrain) for useful YouTube tutorials about Chrome extensions.
* And also huge thanks to lecturer Mr. Andy Freeman for continuous help and feedback.
