# Resource Collector
As an aspiring web developer, I am constantly finding new resources.  As the list grows, they are becoming more difficult to keep track of.  This small application aims to make that a little easier.

## About this project
Small web application using HTML, CSS, Javascript and jQuery to practice various ES6 concepts and Firebase Authentication.

#### Project Goals 
* Practice various concepts commonly found in web applications
    * Add/remove resources and categories
    * Submit forms
    * Filter categories by selection and search
* Get more experience with Firebase, specifically Firebase Authentication

## Things Learned
I will keep track of anything new I learn here as well as any resources that helped me resolve my issues.

| Description   | Sources     |
| ------------- |-------------|
|Get youtube video thumbnail|[Stack overflow](https://stackoverflow.com/questions/18681788/how-to-get-a-youtube-thumbnail-from-a-youtube-iframe)|
|Array.from() to iterate over array like iterables|[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)|
|Getting youtube vid ID -- Uses a regex I found from stack overflow|[Stack overflow](https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url)|
|Local storage for storing resources locally|[freeCodeCamp](https://www.youtube.com/watch?v=AwicscsvGLg)|

## Questions
Any questions I have throughout the development of this app I will put here and will link to any documentation when it is resolved
| Num   | Question     |Resolved?|
| ----  |--------------|---------|
|1|What is local storage and how can I use it to save resources?|Yes|

# Part I:  Front-end

## Local Storage
Before implementing firebase, I want to get a good front-end concept implemented using local storage, which is something I've never used before.

### 1. What is local storage and how can I use it to save resources?

<i><small>As of 10/13/2017 I have implemented local storage.  The end product will use Firebase for storing data, but using local storage for this current implementation will allow me to experiment with storing data and fix any bugs</small></i>

From the [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) documentation "The read-only localStorage property allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions."

In other words, this is what allows me to store data locally.  If I didn't use local storage, everytime the page reloaded I would lose any new resources I added.  This issue became more prevalant when I tried to add resources from the Add Resource page.  I was getting resources to add, but every time I went back to the main page, nothing would appear because the page reloaded and deleted anything I added.

That's when I looked into local storage and got it to work for the front-end.  This is the process used in this project:

The following line sets up a new local storage reference:
```js
localStorage.setItem('resArr', JSON.stringify([]));
```
The setItem() method is like a key/value pair in an object.  The key, in this case, is 'resArr' and the value is a stringified empty array.  The array has to be stringified because local storage only takes key/value pairs as strings.

This code is located in a <i>checkIfNull()</i> which is run when the page is reloaded:
```js
function checkIfNull() {
  if (localStorage.getItem('resArr', JSON.stringify([])) === null) {
    localStorage.setItem('resArr', JSON.stringify([]));
  }
}
```
This checks if the empty array item already exist.  If it does, a new array isn't made.

In order to put resource information into the array, the local storage item needs to be retrieved using the <i>getItem()</i> method associated with local storage.  This method takes the key reference of the local storage item as a reference:
```js
const getLocal = localStorage.getItem('resArr');
```
This item needs to be converted from a JSON string back to a regular javascript object, so that the resource information can be pushed onto the array. Finally,  the item needs to be set and stringified again so it can be saved into local storage.  This is what the <i>makeNewResource()</i> function looks like:
```js
function makeNewResource() {
  const resource = {
    title: $resourceTitle.val(),
    link: $resourceLink.val(),
    category: getCategory(),
    keyPoints: getKeyPoints(),
    img: getResourceImg()
  };
  const getLocal = localStorage.getItem('resArr');
  const resArr = JSON.parse(getLocal);
  resArr.push(resource);
  localStorage.setItem('resArr', JSON.stringify(resArr));
}
```
Now that the resources are saved in local storage, I can access them from another page and none of the information will be lost on page reload.  Within a function called <i>getResources()</i> I use the same process of getting a local storage item and parsing it in order to get its information.

The final aspect of localStorage that I am not using in this project is deleting local storage items using the <i>clear()</i> and <i>removeItem()</i> methods.  The following would remove all localStorage items:
```js
localStorage.clear();
```
If I had multiple local storage items and just wanted to remove by reference (key):
```js
localStorage.removeItem('refName');
```
In this project, when removing resources I don't want to delete my entire array of resources, so instead a filter is used to remove the item and the array reference is overwritten to not include the deleted item:








