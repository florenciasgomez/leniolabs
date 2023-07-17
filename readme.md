# Leniolabs Challenge - QA Automation

## Project Name: Leniolabs Challenge

## Description

This project is a QA automation challenge for Leniolabs. The goal is to perform a successful sign-in using various known patterns and models such as fixture, page object model (POM), commands, etc.

## Feature

- Sign In

## Site

- [Swag Labs](https://www.saucedemo.com/v1/)

## How to Use the Repository

1. To open the test runner, use the following command:

npm test


2. To run a specific file in headless mode, use the following command:

npm run file <path-to-file>


## Explanation of Test Design and Folder Structure

This project incorporates the following features:

- Improved code selectors.
- Page Object Model (POM): To store selectors and their methods.
- Fixture: To store data such as users, passwords, and any other type of data.
- Commands: Custom commands for repetitive actions in the system under test (SUT) and automated tests.

These practices contribute to code scalability and reusability, enhancing the overall experience, compilation, readability, and configuration of the repository and JavaScript modules.

The repository has the following structure:

- In the `e2e` folder, there is a folder corresponding to the user story with its specific nomenclature.
- In the `support` folder, there is a `pages` folder where POMs are stored. POMs use the class method to store selectors for inputs, buttons, etc., along with methods to access them. This approach enables easily scalable and reusable code.
- In the `fixture` folder, as per best practices, no data should be stored at the test level. Instead, data is stored in fixtures, such as user details, passwords, and any other relevant data.
- In the `commands` folder, Cypress allows us to create custom commands to keep the code clean and easily interpretable. For example, repetitive tasks like logging into the site and performing a successful sign-in are good candidates for custom commands, as they can be reused multiple times.
- In the `cypress.json` file, the `cypress-esbuild-preprocessor` package is installed to improve test speed and effectiveness. ESBuild is known for being fast and efficient when it comes to compiling JavaScript code and ensuring test compatibility.
- In the `jsconfig.json` file, a folder configuration has been set up to facilitate module imports and enhance the development experience. It includes configurations for types, base URL, and paths. This setup shortens the paths and improves the import process.

## Nomenclature

Assuming that our test plan follows the following nomenclature:

- The folder containing the test cases bears the name of the user story.
- The files containing the test suites have the name of the test suite (TS).
- Each `describe` block contains the names of the test suites.
- Each `it` block contains the names and titles of the test cases, along with corresponding numbering.

Following this nomenclature allows easy export of tests using libraries like Mocha, and later copying the reports to a management tool such as Jira.


