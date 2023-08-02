import Web3 from 'web3';

window.ethereum.request({ method: "eth_requestAccounts" });
const web3 = new Web3(window.web3.currentProvider);
// this is current provider injected by metamask with web3 instance so we taking this provider
// which is pointing to Spolia test network and configure as per our app

export default web3;