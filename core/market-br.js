'use strict';

const ccxt = require ('ccxt');
const common = require('./common');
const arbitrage = require('./arbitrage');

const braziliex = new ccxt.braziliex();
const foxbit = new ccxt.foxbit();
const mercado = new ccxt.mercado();

exports.fetchData = async function() {
    try {
        Promise.all([
            await common.fetchDataByTicketAndExchange('BTC/BRL', braziliex),
            await common.fetchDataByTicketAndExchange('BTC/BRL', foxbit),
            await common.fetchDataByTicketAndExchange('BTC/BRL', mercado)
        ]).then((response) => {
            arbitrage.checkOpportunity(response);
        }).catch((error)=> {
            console.error('Error:', error.message);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}
