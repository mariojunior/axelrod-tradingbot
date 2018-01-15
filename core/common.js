'use strict';

exports.fetchDataByTicketAndExchange = async function(ticket, exchange) {
  const market = await exchange.fetchTicker(ticket);
  return {
      name: exchange.constructor.name,
      ticket: ticket,
      cost: 0.005,
      bid: market.bid,
      ask: market.ask
  };
}
