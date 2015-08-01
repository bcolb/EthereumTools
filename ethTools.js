/**
 * eth_tools.js
 * description: A collection of configuration and helper functions for use
 *              with the c++ implementation of the Ethereum client, eth.
 */

// get dependencies
loadScript("common.js")

// define tools
var tools = commonTools;

// specific admin values and functions
tools.admin.client = "Eth";

// specific ether values and functions
tools.ether.getCoinbase = function() {
    return web3.eth.coinbase;
}
tools.ether.setCoinbase = function(address) {
    web3.admin.eth.setMiningBenefactor(address);
}

// specific miner values and functions
tools.miner.getHashrate = function() {
    return web3.eth.hashrate;
}
