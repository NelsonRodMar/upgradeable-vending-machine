import env, {ethers, network, upgrades } from "hardhat";
require('dotenv').config();


async function main() {
    const proxyAddress = process.env.PROXY_ADDRESS;
    console.log("Network name : ", network.name);
    const VendingMachineV2 = await ethers.getContractFactory("VendingMachineV2");

    const proxy = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2)
    await proxy.deployed();

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxy.address
    );

    console.log(`Implementation contract address: ${implementationAddress}`);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

