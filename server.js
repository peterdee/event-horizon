const axios = require('axios');
const Koa = require('koa');

const app = new Koa();

app.listen(1337);

let counter = 0;
(async function () {
  while (true) {
    const pre = Date.now();
    try {
      await axios({
        method: 'GET',
        url: '',
      });
      counter += 1;
      console.log(`-- it's fine, request #${counter}, delay: ${Date.now() - pre} ms`);
    } catch (err) {
      console.log(`-- done after ${counter} requests, delay: ${Date.now() - pre} ms \n${err}`);
    }
  }
}());
