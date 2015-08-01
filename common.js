/**
 * common.js
 * description: Common variables, tools and functions used by both 
 *              geth_tools.js and eth_tools.js
 */
var commonTools ={ 
    admin: {
	name: "Ethereum Tools",
	version: "0.1.0",
	client: "",
	githubRepo: "https://github.com/bcolb/EthereumTools",
	message: "Welcome to Ethereum Tools",
    },
    ether: {
	getCoinbase: function() {
	    // overriden by ethTools or gethTools
	    return '0x0000000000000000000000000000000000000000';
	},
	setCoinbase: function(address) {
	    // overriden by ethTools or gethTools
	},
	checkCoinbase: function() {
	    var self = this;
	    var nullAddress = '0x0000000000000000000000000000000000000000';
	    if(self.getCoinbase() === nullAddress) {
		console.log("Warning: Your coinbase was the null address");
		console.log("Setting to you primary account: " + web3.eth.accounts[0]);
		self.setCoinbase(web3.eth.accounts[0]);
	    }
	    return self.getCoinbase();
	},
	getTotal: function() {
	    var sum = 0;
	    var accounts = web3.eth.accounts;
	    for(var i = 0; i < accounts.length; i++) {
		sum += parseInt(web3.eth.getBalance(accounts[i]));
	    }
	    return sum;
	},
	checkBalances: function() {
	    var accounts = web3.eth.accounts;
	    for(var i = 0; i < accounts.length; i++) {
		console.log("Account 0: " + accounts[i]);
		console.log("  balance: " + web3.eth.getBalance(accounts[i]));
	    }
	},
    },
    miner: {
	getHashrate: function() {
	    return 0;
	},
	getMhs: function() {
	    var self = this;
	    return  self.getHashrate() + " Mh/s";
	},
    },
}
