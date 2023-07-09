import React, { useState } from 'react';
import { ethers } from 'ethers';
import { abi, CONTRACT_ADDRESS } from './constant/index';

const Transaction = () => {
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');

  const connectContract = async (event) => {
    event.preventDefault();
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

      // Your contract interactions go here
      console.log(contract.address);

      // Example: Call a contract function
      const result = await contract.myContractFunction();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-customBlack min-h-screen flex flex-col justify-start items-center">
      <h1 className="text-white text-4xl mt-10 mb-10">Transactions</h1>
{/*CODEBASE OF ALERT MESSAGE */}
      <div class="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
    <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">Info alert!</span> Right not only GETH transactions are supported.
    </div>
    </div>

      <div className="flex justify-center bg-formMain rounded-lg p-5 mt-20">
        <div className="flex flex-col justify-center items-center">
          <label htmlFor="account-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account</label>
          <input
            type="text"
            id="account-input"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            type="button"
            className="my-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Confirm the Address
          </button>
          <div className="mb-6">
            <label htmlFor="amount-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
            <input
              type="text"
              id="amount-input"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <button
              onClick={connectContract}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Send
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
