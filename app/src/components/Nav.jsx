import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import { ethers } from "ethers";

const Nav = () => {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWallet();
    addWalletListener();
  }, []);

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined" && typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } else {
        console.log("Please install Metamask");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCurrentWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined" && typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to Metamask using the connect button");
        }
      } else {
        console.log("Please install Metamask");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const addWalletListener = async () => {
    try {
      if (typeof window.ethereum !== "undefined" && typeof window.ethereum !== "undefined") {
        window.ethereum.on("accountsChanged", (accounts) => {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        });
      } else {
        setWalletAddress("");
        console.log("Please install Metamask");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="text-white bg-customBlue w-full flex items-center justify-between px-4 sm:px-10 lg:px-20 py-4">
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="Logo" className="h-12 sm:h-20 px-2" />
        </a>
      </div>
      <div className="flex items-center space-x-7 ">
        <ul className="hidden sm:flex list-none  ">
          <li className="mr-8 my-3">
            <a href="/Support" className="font-semibold text-lg hover:text-blue-600">
              Support
            </a>
          </li>
          <li>
            <button
              className="text-lal font-bold  text-lg px-8 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-full"
              onClick={connectWallet}
            >
              {walletAddress && walletAddress.length > 0
                ? `Connected: ${walletAddress.substring(0, 6)}..${walletAddress.substring(38)}`
                : "Connect Wallet"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );  
};

export default Nav;




























{/*icons dependencies:npm install @fortawesome/fontawesome-svg-core \
            @fortawesome/free-solid-svg-icons \
            @fortawesome/react-fontawesome
 */}