"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { ethers } from "ethers";

export default function TopBar() {
  // State variables for wallet connection status and address
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  // Function to connect/disconnect the wallet
  async function connectWallet() {
    if (!connected) {
      try {
        // Connect the wallet using ethers.js
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const _walletAddress = await signer.getAddress();

        setConnected(true);
        setWalletAddress(_walletAddress);
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    } else {
      // Disconnect the wallet (only update state)
      setConnected(false);
      setWalletAddress("");
      // Optionally, you can notify the user or reset other states as necessary
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between z-50 px-10 py-6">
      <Link href="/" passHref>
        <h1 className="text-white text-2xl font-extrabold">EtherPlay</h1>
      </Link>
      <div className="flex items-center space-x-8">
        <button className="text-white">
          <FaBell size={24} />
        </button>
        <button className="text-white">
          <FaShoppingCart size={24} />
        </button>
        <button
          className="text-white text-lg px-5 py-2 bg-white bg-opacity-20 rounded-lg"
          onClick={connectWallet}
        >
          {connected ? `Disconnect ${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}` : 'Connect Wallet'}
        </button>
      </div>
    </div>
  );
}
