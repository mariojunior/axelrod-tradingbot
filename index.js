'use strict';

const marketBR = require('./core/market-br');
const marketUS = require('./core/market-us');

function followTheMoney() {
  marketBR.fetchData();
  marketUS.fetchData();
  setTimeout(function() {
    followTheMoney();
  }, 5 * 60 * 1000);
}

(async function () {

  console.log('Axelrod Trading Bot - Follow the money!');
  console.log('=======================================');
  followTheMoney();

})();
