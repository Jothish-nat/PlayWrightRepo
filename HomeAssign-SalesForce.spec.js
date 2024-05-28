import {test, chromium} from "@playwright/test";

test(`Print the sales force url and title of the page`, async() => {

// Launch Chromium in non headless mode
const browser = await chromium.launch({headless: false, channel: `chrome`});

// Create a new browser contex
const browserContext = await browser.newContext();

// Open a new page within the browser context
const page = await browserContext.newPage();

//Load the url https://login.salesforce.com/
await page.goto("https://login.salesforce.com/");

// Enter the username
await page.getByLabel("username").fill("jothish.testing@gmail.com");

//Enter the password
await page.getByLabel("password").fill("Apjkalam@2813");

//Click the Login button
await page.locator("#Login").click();

//Wait for 10 seconds
await page.waitForTimeout(10000);

//Print the page title and the current url of the page
const title = await page.title();
console.log(`The title of the page is ${title}`);

const url = page.url();
console.log(`The Url of the page is ${url}`);

//close the page
await page.close();

//close the browsercontext
await browserContext.close();

//close the browser
await browser.close();

} )