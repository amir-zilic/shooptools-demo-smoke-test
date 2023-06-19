# shoptools-demo-smoke-test
# Technologies used: 
 1. Javascript
 2. WebdriverIO
 3. Selenium
 4. Jasmine
 5. Allure Test Report

## Documentation:

Bug report: https://docs.google.com/spreadsheets/d/1tLS3WVv4Fbk0XrCW8fXrp90AaeDePyc-AOmJzxZbj_o/edit?pli=1#gid=0


## Description:

https://shop.demoqa.com/ app designed as a e-commerce site. Smoke tests cover usual new user flow, ability to put an item and cart and complete purchase with various random shipping information. It uses WebdriverIO with Jasmine to automate smoke tests. Using Page Object Model pattern to instantiate each individual page as an object for use in the test class. It asserts various elements of each page to ensure that each action is validated before continuing on to the next one.

## Running the Test
- Make sure to have NodeJS installed
- Setup WebdriverIO using Jasmine and Chrome Driver
- Comands to run:
  `npm install`
  `npm run test`
