const puppeteer = require('puppeteer');
require('dotenv').config()
let page;
let browser;
const width = 1500;
const height = 1000;
describe('Login Functionality Testing', () => {
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 250,
            args: [`--window-size=${width},${height}`]
        });
        page = await browser.newPage();
        await page.setViewport({ width, height });
        // read url from env file
        await page.goto(process.env.Dev_URL);
    });
      
  
    it('Login and Logout', async () => {
        jest.setTimeout(15000);
        await page.mouse.click(0, 100);
        await page.waitFor(3000);
      // click on login using selector.
      await page.click('#root > div > div.sc-bdVaJa.bFlryC > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(1) > button:nth-child(1) > span.MuiButton-label');
        await page.waitFor(1000);
    // input username
  
    await page.$eval('input[type=password]', el => el.value = 'test1234');
 
     // click on submit button
    await page.click('button', { text: 'Submit' });
    await page.waitFor(3000);
    });
    afterAll(() => {
        browser.close();
    });
  })