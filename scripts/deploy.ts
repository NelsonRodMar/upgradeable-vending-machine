import {ethers, network, upgrades } from "hardhat";
require('dotenv').config();


async function main() {
    console.log("Network name : ", network.name);
    const VendingMachine = await ethers.getContractFactory("VendingMachineV1");

    const proxy = await upgrades.deployProxy(VendingMachine, [1000])
    await proxy.deployed();

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxy.address
    );

    console.log(`Proxy contract address: ${proxy.address}`);
    console.log(`Implementation contract address: ${implementationAddress}`);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

