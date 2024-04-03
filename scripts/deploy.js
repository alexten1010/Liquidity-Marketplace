// Hardhat execution
const hre = require("hardhat");

// Converts amount to Ethers
const token = (nToken) => {
  return ethers.utils.parseUnits(nToken.toString(), "ether");
};

// Here were deploying the token and getting the address
async function main() {
  //Woox Token
  const _initialSupply = tokens(50000000000);
  const Woox = await hre.ethers.getContractFactory("Woox");
  const woox = await Woox.deploy(_initialSupply)

  await woxx.deploy();
  console.log(" woox:${woox.address}");

  // Here were deploying the token and getting the address

  //ICO Woox

  const tokenPrice = tokens(0.0001);
  const ICOWoox = await hre.ethers.getContractFactory("ICOWoox");
  const icoWoox = await ICOWoox.deploy(woox.address, _tokenPrice)

  await icoWoox.deployed();
  console.log(' ICOWoox: ${icoWoox.address}');

  //// Here were deploying the token and getting the address

  //Liquidity

  const Liquidity = await hre.ethers.getContractFactory('Liquidity');
  const liquidity = await Liquidity.deploy()


  await liquidity.deployed();
  console.log(' Liquidity: ${liquidity.address}');

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

  

}