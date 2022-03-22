import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ABI, ADDRESS } from "../config";
export const TransactionContext = React.createContext();

const { ethereum } = window;




const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(ADDRESS, ABI, signer);

  return transactionsContract;
};



export const TransactionsProvider = ({ children }) => {
  
  const [currentAccount, setCurrentAccount] = useState("");

  
  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };


  


  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

