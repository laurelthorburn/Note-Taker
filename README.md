# Note-Taker

<a name="descsection"></a>
## Description
The purpose of this project was to create a note taker application that utilizes express.js on the backend and is deployed through Heroku.  The user is prompted with a homepage that, upon button click, takes them to a note taker page where saved notes are displayed on the right hand column and a new note template is available on the left hand column. The user is able to save and delete notes.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
1. [ Description. ](#descsection)
2. [ User Story. ](#usersection)
3. [ Acceptance Criteria. ](#acceptancesection)
4. [ Installation. ](#installsection)
5. [ Usage. ](#usagesection)
6. [ License. ](#licensesection)
7. [ Contributing. ](#contribsection)
8. [ Tests. ](#testsection)
9. [ Questions. ](#questionssection)
10. [ Video. ](#videosection)
11. [ Screenshots. ](#picsection)
12. [ Links. ](#linksection)
13. [ Resources/Credit. ](#creditsection)

<a name="usersection"></a>
## User Story
```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

<a name="acceptancesection"></a>
## Acceptance Criteria
```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

```

<a name="installsection"></a>
## Installation
* Clone the repository using:
```
git clone https://github.com/laurelthorburn/Note-Taker.git
```
* Ensure you are in the current working directory
* Install dependencies (express) by opening the terminal (ctrl + j on windows) and running:
```
npm install
```
* Run the project by typing the following in the terminal:
```
node index.js || nodemon server
```


<a name="usagesection"></a>
## Usage
*  See deployed site link below.

<a name="licensesection"></a>
## License
Copyright <2021>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  <a name="contribsection"></a>
## Contributing
  
1. [Fork the repo!](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. Create a feature branch:
```
git checkout -b yourname-branch
```
3. Commit changes:
```
git commit -m 'Your changes here'
```
4. Push to the branch:
```
git push origin yourname-branch
```
5. Submit a pull request and wait for it to be approved or denied.

  <a name="testsection"></a>
## Tests
  No tests are available at this time.

  <a name="questionssection"></a>
## Questions?
  Want to see more of my work? [Click here!](https://github.com/laurelthorburn)

  Questions/comments/concerns? Please send an email to codinglaurel@gmail.com
  
  <a name="videosection"></a>

  <a name="picsection"></a>
  ## Screenshots
  ![Screenshot of Test Screen]()

  <a name="linksection"></a>
  ## Links

  Deployed Heroku Site: https://morning-reaches-98085.herokuapp.com/
  
  Github Site: https://github.com/laurelthorburn/Note-Taker

  <a name="creditsection"></a>
## Resources/Credit
* https://www.npmjs.com/package/uniqid
* https://developer.mozilla.org/en-US/docs/Web/API/Response/json
* https://stackoverflow.com/questions/11625519/how-to-access-the-request-body-when-posting-using-node-js-and-express
* https://stackoverflow.com/questions/20458890/delete-data-from-json-array
* https://www.youtube.com/watch?v=pKd0Rpw7O48&t=3153s&ab_channel=ProgrammingwithMosh
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
* https://www.youtube.com/watch?v=K9jTQPb0Xso&ab_channel=BrettM




