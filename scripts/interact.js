const { ethers } = require('ethers');
const ETHWrapper = require('../build/ETHWrapper.json');
// const WETH = require('.build/WETH.json');

const run = async function() {

    const providerURL= "http://localhost:8545";
    const walletPrivateKey = "0x7ab741b57e8d94dd7e1a29055646bafde7010f38a900f55bbd7647880faa6ee8";
    const wrapperContractAddress = "ContractAddress";
    const provider = new ethers.providers.JsonRpcProvider(providerURL);
    const wallet = new ethers.Wallet(walletPrivateKey, provider);
    const wrapperContract = new ethers.Contract(wrapperContractAddress, ETHWrapper.abi, wallet);
    const wethAddress = await wrapperContract.WETHToken();
    console.log("WETH Address: ", wethAddress);
    const tokenContract = new ethers.Contract(wethAddress, ETHWrapper.abi, wallet);
}
run()