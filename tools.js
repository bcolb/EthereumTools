/**
 * tools.js
 * description: Some additional tools meant to extend the Ethereum CLI. 
 *              This file checks the client version then loads the
 *              corresponding scripts.
 * usage: loadScript('tools.js');
 */

if(!web3 || !web3.version || !web3.version.client || web3.version.client.length < 4){
    console.log("Ethereum client version is undefined");
    console.log("tools.js failed to load");
} else if(web3.version.client.substring(0,4) === "Geth") {
    loadScript('gethTools.js');
    loadScript('afterLoad.js');
} else if(web3.version.client.substring(0,5) === "++eth") {
    loadScript('ethTools.js');
    loadScript('afterLoad.js');
} else {
    console.log("Ethereum client verion could not be determined");
    console.log("tools.js failed to load");
}
