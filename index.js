const {Builder, By, Key, until} = require('selenium-webdriver');


let jbzdPage = 1;
let kwejkPage = null;
async function fetchJbzdData() {
  let driver = await new Builder().forBrowser('firefox').build(); 
  await driver.manage().setTimeouts( { implicit: 10000, pageLoad: 
    10000, script: 10000 } );
  let a = null;
  try {
    await driver.get(`https://jbzd.com.pl/str/${jbzdPage}`);
    a = await driver.findElements(By.css('div.article-image a img, div.article-image video source'));
    for (test of a) {
    console.log(await test.getAttribute("src"));
    }  
  } catch(e) {
      console.error(e);
  }                  
  driver.close();     
}
async function fetchKwejkData() {
  let driver = await new Builder().forBrowser('firefox').build(); 
  await driver.manage().setTimeouts( { implicit: 10000, pageLoad: 
    10000, script: 10000 } );
  let a = null;
  try {
    if ( ! kwejkPage ) {
      await driver.get(`https://kwejk.pl`);
      kwejkPage = await driver.findElement(By.css(`.pager .current a`)).getText();
      console.log(kwejkPage);
    } else {
      await driver.get(`https://kwejk.pl/strona/${kwejkPage}`);
    }
    a = await driver.findElements(By.css('div.media-element'));
    for (test of a) {
    console.log(await test.getAttribute("data-image"));
    }
    kwejkPage--; 
  } catch(e) {
      console.error(e);
  }                  
  driver.close();     
}
fetchKwejkData().then(() =>
{
  fetchKwejkData();
});