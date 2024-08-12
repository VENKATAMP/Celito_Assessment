# Celito  Test



## Task 1: 

Using the site [Sauce Demo](https://www.saucedemo.com/) and the Playwright automation tool using JS/TS [Playwright](https://playwright.dev/), design test cases and scripts to fully test the functionality of the given feature. The application has different users for being able to stimulate regression defects.

### Feature: Tax Calculation

As a user, I should be able to purchase an item from the store and confirm the tax has been calculated correctly in the total.

#### Acceptance Criteria:

- **Scenario**: Tax Calculation for 8%
  - **Given** I am logged in as a user on the Sauce Demo website,
  - **When** I checkout with an item in my cart
  - **Then** I can see tax has been calculated correctly at 8%
  - **And** I can see purchase confirmation text

## Task 2: API

Please ensure you use Playwright's `APIRequestContext` to complete the given test task. Design test cases and scripts to fully test the functionality of the given endpoint.

Using the API [Dog CEO](https://dog.ceo/api/breeds/image/random) and the Playwright automation tool using JS/TS [Playwright](https://playwright.dev/),

### Feature: Random Dog Breed Images

Our API should be able to access one of the largest dog databases. As such our random logic for the API should meet the following criteria:

- API is accessible multiple times through GET requests.
- Duplicate images are allowed after 10 requests.

## Task 3: Handle MFA (email/sms)


## Task 4: Push code and open a PR on this repo




Execution Commands
//For all tests
npx cross-env test_env=test playwright test
//For specific tag
UI :     npx cross-env test_env=test playwright test --grep "@UI"
API:     npx cross-env test_env=test playwright test --grep "@API"


