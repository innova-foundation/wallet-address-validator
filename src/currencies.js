(function (isNode) {
    // defines P2PKH and P2SH address types for standard (prod) and testnet networks
    var CURRENCIES = [{
            name: 'bitcoin',
            symbol: 'btc',
            addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']}
        },{
            name: 'litecoin',
            symbol: 'ltc',
            addressTypes: {prod: ['30', '05'], testnet: ['6f', 'c4']}
        },{
            name: 'innova',
            symbol: 'inn',
            addressTypes: {prod: ['66', '89'], testnet: ['41', '4B']}
        },{
            name: 'peercoin',
            symbol: 'ppc',
            addressTypes: {prod: ['37', '75'], testnet: ['6f', 'c4']}
        },{
            name: 'dogecoin',
            symbol: 'doge',
            addressTypes: {prod: ['1e', '16'], testnet: ['71', 'c4']}
        },{
            name: 'denarius',
            symbol: 'dnr',
            addressTypes: {prod: ['1e', '5a'], testnet: ['12', '74']}
        },{
            name: 'beavercoin',
            symbol: 'bvc',
            addressTypes: {prod: ['19', '05'], testnet: ['6f', 'c4']}
        },{
            name: 'freicoin',
            symbol: 'frc',
            addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']}
        },{
            name: 'protoshares',
            symbol: 'pts',
            addressTypes: {prod: ['38', '05'], testnet: ['6f', 'c4']}
        },{
            name: 'megacoin',
            symbol: 'mec',
            addressTypes: {prod: ['32', '05'], testnet: ['6f', 'c4']}
        },{
            name: 'primecoin',
            symbol: 'xpm',
            addressTypes: {prod: ['17', '53'], testnet: ['6f', 'c4']}
        },{
            name: 'auroracoin',
            symbol: 'aur',
            addressTypes: {prod: ['17', '05'], testnet: ['6f', 'c4']}
        },{
            name: 'namecoin',
            symbol: 'nmc',
            addressTypes: {prod: ['34'], testnet: []}
        }];


    var currencies = {
        getByNameOrSymbol: function (currencyNameOrSymbol) {
            var nameOrSymbol = currencyNameOrSymbol.toLowerCase();
            for (var i = 0; i < CURRENCIES.length; i++) {
                var currency = CURRENCIES[i];
                if(currency.name === nameOrSymbol || currency.symbol === nameOrSymbol) {
                    return currency;
                }
            }
            return null;
        }
    };

    // export currencies module
    if(isNode) {
        module.exports = currencies;
    } else {
        if(typeof window.WAValidator === 'undefined'){
           window.WAValidator = {__imports: {}};
        }
        window.WAValidator.__imports.currencies = currencies;
    }
})(typeof module !== 'undefined' && typeof module.exports !== 'undefined');
