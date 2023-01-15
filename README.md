# Upgradeable Vending Machine

A simple upgradeable vending machine contract for the Alchemy University Course.

## Setup

1. Install dependencies

```bash
npm install
```

2. Copy the .env file and fill it with your data

```bash
copy .env.example .env
```

4. Deploy the contract

```bash
npx hardhat run scripts/deploy.js
```

5. Verify the contract on Etherscan

```bash
npx hardhat verify THE_VENDINGMACHINEV1_IMPLEMENTATION_ADDRESS
```
