const fetch = require('node-fetch');
const fs = require('fs');

async function fetchDataShopee() {
  const allData = [];
  let page = 1;
 
  while (true) {
     const response = await fetch(`https://shopee-api.j2team.dev/deals?page=${page}`, {
       headers: {
         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
       }
     });
 
     const data = await response.json();
 
     if (data.data.length === 0) {
       break;
     }
     allData.push(...data.data);
     page++;
  }
 
  fs.writeFileSync('dataShopee.json', JSON.stringify(allData, null, 2));
 }
 
//https://cf.shopee.vn/file/ + image_url cho ben fe
fetchDataShopee();

// "product": {
//   "id": 253662333,
//   "name": "Cà phê đen hòa tan NESCAFÉ café Việt (Túi 35 gói x 16g)",
//   "url_path": "ca-phe-den-hoa-tan-nescafe-cafe-viet-tui-35-goi-x-16g-p253662332.html?spid=253662333&itm_campaign=tiki-reco_UNK_DT_UNK_UNK_deal-hot_UNK_rule-base-flash-deal-v3_UNK_RB_batched_PID.253662333&itm_medium=CPC&itm_source=tiki-reco&tclid=217accf4abd732809e9e09d63d21bcbd665962f3ad36b86269df7486c2370383",
//   "price": 121000,
//   "list_price": 150000,
//   "original_price": 150000,
//   "discount": 29000,
//   "discount_rate": 19,
//   "rating_average": 5,
//   "thumbnail_url": "https://salt.tikicdn.com/cache/280x280/ts/product/3e/e4/d4/29fde5804be3b669e37142e24f8a0dbd.jpg",
// }
// let headers = {
//   'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
//   'Access-Control-Allow-Origin' : '*', 
//   'Access-Control-Allow-Methods' : 'GET'
//  };
 
//  axios.get('https://tiki.vn/api/v2/widget/deals/collection?page=1&per_page=2400/', { headers: headers })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('Error:', error); });
// async function fetchDataTiki() {
//   const allData = [];
 
//   while (true) {
//      const response = await fetch(`https://tiki.vn/api/v2/widget/deals/collection?page=1&per_page=1`, {
//        headers: {
//          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
//        }
//      });
 
//      const data = await response.json();
//      console.log(data)
//      if (data.data.length === 0) {
//        break;
//      }
//      allData.push(...data.data);
//   }
 
//   fs.writeFileSync('dataTiki.json', JSON.stringify(allData, null, 2));
//  }
 
// fetchDataTiki();