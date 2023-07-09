const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // Deploy the Token Contract
  const TokenTransfer = await hre.ethers.deployContract("TokenTransfer");
  await TokenTransfer.waitForDeployment();
  console.log("Token deployed to:", TokenTransfer.target);



  // Wait for 30 seconds to let Etherscan catch up on contract deployments
  await sleep(30 * 1000);


}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});