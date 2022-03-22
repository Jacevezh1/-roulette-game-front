import React, { useContext } from "react";
import { TransactionContext } from '../context/TransactionContext'
import { shortenAddress } from "../utils/shortenAddress";

const Navbar = () => {


  const { connectWallet, currentAccount } = useContext(TransactionContext);
  
  return (
   
    <>
      <nav className="gradient-bg-welcome ">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <div class="flex-shrink-0 flex items-center">
                <h1 className='navbar-logo-title'>THE ETH GAME</h1>
              </div>
              <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4">

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Rules</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">GitHub</a>

              </div>
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                {
                  !currentAccount 
                  ? 
                  <button onClick={connectWallet} type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                    <span>Connect Wallet</span>
                  </button>
                  :
                  <p className="text-white font-light text-sm">
                   Connected:  {shortenAddress(currentAccount)} 🟢
                  </p>
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>


  )
}

export default Navbar;