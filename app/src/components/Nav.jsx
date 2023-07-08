import React, { useEffect, useState } from 'react';
import logo from "/home/maushish/Desktop/Khooshare/client/src/images/logo.svg";

const Nav = () => {
  //making use of hooks to save user's wallet address//
  const[walletAddress, setWallletAddress]=useState("");
  //code to invoke refresh function everytime user refreshes the page and changes the account//
  useEffect(()=>{
    getCurrentWallet();
    addWalletListener();
  });
  //connecting metamask
  const connectWallet=async()=>{
    if (typeof window.ethereum!="undefined" && typeof window.ethereum!="undefined"){
      try{
        /*Metamask is installed */
        const accounts= await window.ethereum.request({method:"eth_requestAccounts"});
        setWallletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch(err) {
        console.error(err.message);
      }
      
    }
    else{
      /*Metamask isnot installed */
      console.log("Please install Metamask")
    }
  }

//if the user refreshes the page this function make sure the user won't need to connect to metamask again//

  const getCurrentWallet=async()=>{
    if (typeof window.ethereum!="undefined" && typeof window.ethereum!="undefined"){
      try{
        
        const accounts= await window.ethereum.request({method: "eth_requestAccounts" });
        if(accounts.length>0) {setWallletAddress(accounts[0]); console.log(accounts[0]) }
        else{
          console.log("Connect to metamask using the connect button")
        }
       
      } catch(err) {
        console.error(err.message);
      }
      
    }
    else{
      console.log("Please install Metamask")
    }
  }




  const addWalletListener=async()=>{
    if (typeof window.ethereum!="undefined" && typeof window.ethereum!="undefined"){
      window.ethereum.on("accountsChanged", (accounts)=>setWallletAddress(accounts[0]));
      console.log(accounts[0])
      
    }
    else{
      setWallletAddress("");
      console.log("Please install Metamask")
    }
  }




  return (
    <div className="text-white bg-customBlue w-full flex items-center justify-between px-4 sm:px-10 lg:px-20 py-4">
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="Logo" className="h-12 sm:h-20 px-2" />
        </a>
      </div>
      <div className="flex items-center">
        <ul className="hidden sm:flex list-none space-x-7">
          <li>
            <a href="/Support" className="font-semibold text-lg hover:text-blue-600">Support</a>
          </li>
          <li>
            <a  className="text-lal font-bold  text-lg px-8 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-full" onClick={connectWallet}>{walletAddress && walletAddress.length>0 ? `Connected: ${walletAddress.substring(0,6)}..${walletAddress.substring(38)}` : "Connect Wallet"}</a>
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