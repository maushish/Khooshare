import { abi, CONTRACT_ADDRESS } from "./constant";
import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";



const Transaction = () => {
  // const Contract;
  const [account, setaccount] = useState("");
  const [amount, setamount] = useState("");

  const connectContract = async (event) => {
    event.preventDefault();
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS,abi, signer);
      const txResponse = await contract.transfer(account);
      setTargetString(txResponse);
    } catch (error) {
      console.error(error);
    }
  };
  //const transfer=()=>{}

  return (
    <div className="bg-customBlack min-h-screen flex flex-col justify-start items-center">
      <h1 className="text-white text-4xl mt-10 mb-10">Transactions</h1>
      <div className="flex justify-center bg-formMain rounded-lg p-5 mt-20">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-6">
            <label htmlFor="amount-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
            <input type="text" id="amount-input" onChange={(e) => setaccount(e.target.value)} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="wallet-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wallet Address</label>
            <input type="text" id="wallet-input" onChange={(e) => setamount(e.target.value)} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>
          <button onClick={connectContract} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
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
