require("@nomicfoundation/hardhat-toolbox");


const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc.ankr.com/polygon_mumbai";
const NEXT_PUBLIC_PRIVATE_KEY = "9461ace2e16a42e3a037839fccee645f771bd86efe2c864b3d7a0c5dcd557665";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};

//npx hardhat run --network polygon_mumbai scripts/deploy.js



