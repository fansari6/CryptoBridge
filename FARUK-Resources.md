# Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto

## YouTube URL

https://www.youtube.com/watch?v=Wn_Kb3MR_cU
Completed till 1:45

mkdir <project directory>
cd <project directory>
mkdir client
mkdir smart_contract
cd client

## Setup Client/Frontend

npx create-react-app client
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
npm install react-icons
npm install ethers
npm install @tailwindcss/forms

Add to package.json
"homepage": "/cryptobridge"

## Setup Smart_Contract/Backend

npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers

npm install @nomicfoundation/hardhat-ignition
npm install --save-dev hardhat
npm install --save-dev @nomiclabs/hardhat-waffle
npm install --save-dev ethereum-waffle
npm install --save-dev chai @nomiclabs/hardhat-ethers
npm install --save-dev ethers

npx hardhat init

npx hardhat run scripts/deploy.js --network sepolia
Or
npx hardhat ignition deploy ./ignition/modules/TransactionsModule.js

Alchemy Sepolia API Key = "https://eth-sepolia.g.alchemy.com/v2/ZbLUPS_qGBXZnhSUY-MgKLzrRXmRKI8b"
Contract deployed at address = "0x0B5f9E133884656584A58E03B396107352e59770"

# For GIFs

https://developers.giphy.com/

# Using webpack 5 - env

https://prateeksurana.me/blog/using-environment-variables-with-webpack/
