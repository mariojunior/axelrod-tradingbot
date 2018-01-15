'use strict';

const ccxt = require ('ccxt');
const common = require('./common');
const arbitrage = require('./arbitrage');

const gatecoin = new ccxt.gatecoin();
const gateio = new ccxt.gateio();
const gdax = new ccxt.gdax();
const gemini = new ccxt.gemini();
const kraken = new ccxt.kraken();
const poloniex = new ccxt.poloniex();

exports.fetchData = async function() {
    try {
        Promise.all([
            await common.fetchDataByTicketAndExchange('BTC/USD', gatecoin),
            await common.fetchDataByTicketAndExchange('BTC/USDT', gateio),
            await common.fetchDataByTicketAndExchange('BTC/USD', gdax),
            await common.fetchDataByTicketAndExchange('BTC/USD', gemini),
            await common.fetchDataByTicketAndExchange('BTC/USD', kraken),
            await common.fetchDataByTicketAndExchange('BTC/USDT', poloniex)
        ]).then((response) => {
            arbitrage.checkOpportunity(response);
        }).catch((error)=> {
            console.error('Error:', error.message);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}
