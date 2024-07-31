require('@nomicfoundation/hardhat-toolbox');

// Seoplia Account #0 Private Key: 'e5799acdbec4f92e9df07a94106d1c4afc5931f55497e1426b2ae1a5a2a41310';

// Seoplia Account #0 Private Key: 'df4d0da1e6f298e8d80230a2c27fb1e4d6426fd386b1d42f81f5b4dc30a02fd1';
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: '0.8.0',
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/ZbLUPS_qGBXZnhSUY-MgKLzrRXmRKI8b',
      accounts: [
        'df4d0da1e6f298e8d80230a2c27fb1e4d6426fd386b1d42f81f5b4dc30a02fd1',
      ],
    },
  },
};
