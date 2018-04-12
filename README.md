# REA
This has been coded in response to the REA code challenge - property selector sent to me by the REA Tech Talent team for more information please refer to [REA_UI_developer_test.docx](REA_UI_developer_test.docx?raw=true).

### Getting Started

You'll need Node and git installed to begin.

```
git clone https://github.com/JustineVerheijden/REA.git
cd REA
npm install
npm run build
npm start
```
This will clone the repository, install its dependencies and run a dev web server (running on [http://localhost:3001](http://localhost:3001)).

A new browser window will automatically open with the app running.

### Testing the Application - Jasmine

A stand-alone copy of Jasmine is included in the clone. In the internet browser, just navigate to [http://localhost:3001/jasminetests/specrunner.html](http://localhost:3001/jasminetests/specrunner.html)

### Testing the Application - Protractor
```
In command prompt
Navigate to REA
npm run webdriver-update
-- updates webdriver to ensure selenium is installed, this may take some time
npm run webdriver-start
-- admin password is required, this will start up the selenium server
IN A DIFFERENT command prompt
Again navigate to REA
npm test
```
