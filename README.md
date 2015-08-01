# Ethereum Tools

A collection of tools that extends the functionality of the interactive javascript console used in geth and eth.

## Usage

First, start Eth or Geth. Then navigate to the directory with tools.js and execute the following line of javascript:

    loadScript("tools.js")

You can also define your own code that you would like executed after tools loads. Just define the behavior that you want in the afterLoad.js file. An example would be:

    // afterLoad.js
    console.log("Loading my awesome personal script!");
    tools.ether.checkCoinbase(); // Sets coinbase to web3.eth.accounts[0] if null
    miner.start(); // CPU miner on geth
    console.log("Cool, my CPU miner on Geth should be up and running");

## Feature Backlog

* mining calculator
* configuration file
* report printing