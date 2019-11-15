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
            slowMo: 80,
            args: [`--window-size=${width},${height}`]
        });
        page = await browser.newPage();
        await page.setViewport({ width, height });
        // read url from env file
        await page.goto(process.env.Dev_URL);
    });
      
  
    it('Login and Logout', async () => {
        jest.setTimeout(10000);
        await page.mouse.click(0, 100);
        await page.waitFor(2000);
      // click on login using selector.
      await page.click('#root > div > div.sc-bdVaJa.bFlryC > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(1) > button:nth-child(1) > span.MuiButton-label');
    //
        await page.waitFor(4000);
    });
    afterAll(() => {
        browser.close();
    });
  })