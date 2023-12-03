const fetch = require('node-fetch');
const fs = require('fs');
const axios = require('axios');
const puppeteer = require('puppeteer');


async function fetchDataShopee() {
 let allData = [];
 for (let page = 1; page <= 17; page++) {
  const response = await fetch(`https://shopee-api.j2team.dev/deals?page=${page}`);
  const data = await response.json();
  if (data.data.length === 0) {
    break;
  }
  allData = [...allData, ...data.data];
 }
 fs.writeFileSync('data.json', JSON.stringify(allData, null, 2));
}
fetchDataShopee();
async function crawlPage(url) {
  const browser = await puppeteer.launch({headless: "new"});
  const page = await browser.newPage();
  await page.goto(url);
  const data = await page.evaluate(() => {
    let results = [];
    document.querySelectorAll("#__next > div.hot-deal-page > main > div > div > div:nth-child(7) > div > div.List__Wrapper-sc-1ap7nsk-0.cEBRuU.styles__FlashDealItemList-sc-1466pn8-4.hvXODY").forEach(element => {
      let text = element.querySelector('div.styles__Wrapper-sc-6jfdyd-0.iNsGak').textContent;
      results.push(text);
    });
    return results;
  });
  await browser.close();
  return data;
 }


crawlPage('https://tiki.vn/deal-hot?tab=now')
  .then(results => {
      console.log(results);
  })
  .catch(error => {
      console.error(error);
  });
