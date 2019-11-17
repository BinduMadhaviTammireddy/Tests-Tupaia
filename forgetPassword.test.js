const puppeteer = require('puppeteer');
require('dotenv').config()
let page;
let browser;
const width = 1500;
const height = 1000;
jest.setTimeout(60000);
describe('Forgot password Functionality Testing', () => {
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 250,
            args: [`--window-size=${width},${height}`]
        });
        page = await browser.newPage();
        await page.setViewport({ width, height });
        await page.goto(process.env.Dev_URL);
    });
      
  
    it('Forget Password checking', async () => {
        await page.click('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > svg')
        await page.$eval('button[class="MuiButtonBase-root MuiButton-root MuiButton-text"]', elem => elem.click());
        const aElementsWithHi = await page.$x("//a[contains(., 'Forgot your password?')]");
        await aElementsWithHi[0].click();
        await page.waitFor(2000);
        await page.waitForSelector('div[class="MuiDialogContent-root"] input[type="email"]');
        await page.type('div[class="MuiDialogContent-root"] input[type="email"]',process.env.User1_Username);
        await page.click('div[class="MuiDialogContent-root"] button[type="button"]');
        });
    afterAll(() => {
        browser.close();
    });
  })
