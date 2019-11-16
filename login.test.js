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
    // input username
    //await page.focus('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div');
    var username_input = await page.evaluate(()=>
    {
    (await page.$x("//input[contains(text(), 'E-mail')]")[1];
    });
    await page.$eval(username_input, 'test@gmail.com');
   //await page.type('[value name^="E-mail"]', 'test@gmail.com', {delay: 200}) ;
    //await page.$eval('input[type=text]', el => el.value = 'test@gmail.com');
    await page.$eval('input[type=password]', el => el.value = 'test1234');
 
     // click on submit button
    await page.click('button', { text: 'Submit' });
    await page.waitFor(3000);
    });
    afterAll(() => {
        browser.close();
    });
  })