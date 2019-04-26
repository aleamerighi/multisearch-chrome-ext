# PZL! Social MultiSearch

A Google Chrome extension to look up content simultaneously on Twitter, Facebook, Instagram and YouTube.

## How to use

I developed this tool as a simple search engine to explore content on multiple social media. By using PZL! users can query up to four social networks at the same time and on a single click. You just type a search and select which services to filter from among Twitter, Facebook, Instagram and YouTube.

### Prerequisites

There are no special prerequisites for using this tool, except you have to run it on a Google Chrome web browser.

### Installing

Go to the [Chrome Webstore](https://chrome.google.com/webstore/category/extensions) and type 'PZL! Social MultiSearch' in the search bar. Then, click on 'Add to Chrome' to get the extension running in your browser (icon should appear in the upper-right corner of the Google Chrome menu, next to the address bar).

## Potential implementations

The core of this extension is about adding sources (urls) for users to search from. This is done by declaring an empty array as a global variable, and then populating it with social networks as button is clicked. Among the many improvements that can be made, perhaps the most interesting one would be to include the option for users to add their own sources for new tabs. The following is a quick demonstration of how I added mine.

### Demo

In [popup.js](https://github.com/aleamerighi/multisearch-chrome-ext/blob/master/popup.js), declare input as a global variable.

```
var inp;
```

Then, store your favorite source urls inside variables as well. Notice the only thing that's missing at the end of the string is the text input that we want to be given by the user.

```
var searchTwitter = 'https://twitter.com/search?q=';
var searchFacebook = 'https://facebook.com/search?q=';
var searchInstagram = 'https://www.instagram.com/explore/tags/';
var searchYouTube = 'https://www.youtube.com/results?q=';
```

Input also needs to be initialized by targeting the correct element (mine has an ID of #userinput) in [popup.html](https://github.com/aleamerighi/multisearch-chrome-ext/blob/master/popup.html). As I've used p5.js, we do this inside the setup function.

```
inp = select('#userinput');
```

Now, concatenating the source with the input will allow us to perform a search querying the urls that have been selected. I did so by using Chrome's extensions API method [chrome.tabs.create](https://developer.chrome.com/extensions/tabs#method-create). That being said, if we want to look up content on Facebook, url will be the following.

```
searchFacebook + inp.value();
```

So, if we would like to add another source to search on Reddit.

```
var searchReddit = 'https://www.reddit.com/search?q=';

searchReddit + inp.value();
```

Please note that the one above is just for explaining purposes as the whole process used in this extension includes an empty array that's only populated with urls after specific buttons are clicked. Therefore, urls are not called individually but tabs are opened by looping through each element inside the array and concatenating it with inp.value().

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
