/**
 * geth_tools.js
 * description: A collection of configuration and helper functions for use
 *              with the GO implementation of the Ethereum client, geth.
 */

// get dependencies
loadScript("common.js");

// define tools
var tools = commonTools;

// specific admin values and functions
tools.admin.client = "Geth";

// specific ether values and functions
tools.ether.getCoinbase = function() {
    return web3.eth.coinbase;
}
tools.ether.setCoinbase = function(address) {
    miner.setEtherbase(address);
}

// specific miner values and functions
tools.miner.getHashrate = function() {
    return miner.hashrate;
}
