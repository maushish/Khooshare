export const CONTRACT_ADDRESS = "0x683c0f1AA6cd727EAaEb2F2A38fBA9f1a1470DB4";
export const abi = [
  {
    "inputs": [],
    "name": "destinationWallet",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sendEtherToDestination",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_destinationWallet",
        "type": "address"
      }
    ],
    "name": "setDestinationWallet",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];
