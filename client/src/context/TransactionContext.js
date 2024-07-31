// TransactionContext.js
// Starts at 1:36:15

import React, { useState, createContext, useEffect, useCallback } from 'react';
import { contractABI, contractAddress } from '../utils/constants';
import { ethers } from 'ethers';

export const TransactionContext = createContext();

const { ethereum } = window;

const getEthereumContract = async () => {
  const provider = new ethers.BrowserProvider(ethereum);
  const signer = await provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log('Transaction Context:', {
    provider,
    signer,
    transactionContract,
  });

  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [formData, setFormData] = useState({
    addressTo: '',
    amount: '',
    keyword: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem('transactionCount')
  );
  const [transactions, setTransactions] = useState([]);

  // Try following in a simple application
  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions = useCallback(async () => {
    try {
      if (!ethereum) return alert('Please install Metamask');
      const transactionContract = await getEthereumContract();
      const availableTransactions =
        await transactionContract.getAllTransactions();
      const structuredTransactions = availableTransactions.map(
        (transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(
            Number(transaction.timestamp) * 1000
          ).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: ethers.formatEther(transaction.amount),
        })
      );

      setTransactions(structuredTransactions);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const checkIfWalletIsConnected = useCallback(async () => {
    try {
      if (!ethereum) return alert('Please install Metamask');

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
      } else {
        console.log('No accounts found.');
      }
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object');
    }
  }, [getAllTransactions]);

  const checkIfTransactionExists = useCallback(async () => {
    try {
      const transactionContract = await getEthereumContract();
      const transactionCount = await transactionContract.getTransactionCount();
      window.localStorage.setItem('transactionCount', transactionCount);
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object.');
    }
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install Metamask');
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object.');
    }
  };

  const sendTransaction = useCallback(async () => {
    try {
      if (!ethereum) {
        alert('Please install Metamask');
        throw new Error('No Ethereum Object - HERE');
      }

      // get data from the form
      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = await getEthereumContract();
      const parsedAmount = ethers.parseEther(amount);

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: '0x5208', // 21,000 GWEI
            value: `0x${parsedAmount.toString(16)}`, // Convert to hexadecimal string
          },
        ],
      });

      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();

      setIsLoading(false);
      console.log(`Success - ${transactionHash.hash}`);

      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(Number(transactionCount));

      setFormData({
        addressTo: '',
        amount: '',
        keyword: '',
        message: '',
      });

      getAllTransactions(); // Refresh transactions
    } catch (error) {
      console.log('Error Details:', {
        error,
        ethereum,
        currentAccount,
        formData,
      });
      setIsLoading(false);
      throw new Error('No ethereum object - sendTransaction');
    }
  }, [formData, currentAccount, getAllTransactions]);

  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionExists();
  }, [checkIfWalletIsConnected, checkIfTransactionExists]);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
        transactions,
        isLoading,
        transactionCount,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
