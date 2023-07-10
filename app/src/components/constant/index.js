export const CONTRACT_ADDRESS = "0xdBe122A0fE2911BCddd4326883D3Dc7aE62C52bE";
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
