const puppeteer = require('puppeteer');
require('dotenv').config()
let page;
let browser;
const width = 1500;
const height = 1000;
jest.setTimeout(60000);
describe('Login Functionality Testing', () => {
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
      
  
    it('Login and checking username', async () => {
        await page.click('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > svg')
        await page.$eval('button[class="MuiButtonBase-root MuiButton-root MuiButton-text"]', elem => elem.click());
        await page.waitForSelector('div[class="MuiDialogContent-root"] input[type="text"]');
        await page.type('div[class="MuiDialogContent-root"] input[type="text"]',process.env.User1_Username);
        await page.waitForSelector('input[type=password]');
        await page.type('input[type=password]',process.env.User1_Password);
        await page.waitForSelector('div[class="MuiDialogContent-root"] button[type="button"]');
        await page.click('div[class="MuiDialogContent-root"] button[type="button"]');
        await page.waitForSelector('button[class="MuiButtonBase-root MuiButton-root MuiButton-text"]');
        const element = await page.$(".MuiButton-label");
        const text = await page.evaluate(element => element.textContent, element);
        await expect(text).toMatch(process.env.UserName_1);

        });
    afterAll(() => {
        browser.close();
    });
  })
