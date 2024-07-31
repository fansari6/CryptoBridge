# Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto

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

# For GIFs

https://developers.giphy.com/
