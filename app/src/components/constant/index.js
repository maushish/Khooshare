export const CONTRACT_ADDRESS = "0x3DaF16E349d7644D4135fe5BAC1194529d0b3800";
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
