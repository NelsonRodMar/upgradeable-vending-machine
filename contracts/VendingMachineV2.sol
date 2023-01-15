// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract VendingMachineV2 is Initializable {
    uint public numSodas;
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner!");
        _;
    }

    function initialize(uint _numSodas) public initializer {
        numSodas = _numSodas;
        owner = msg.sender;
    }

    function purchaseSoda() public payable {
        require(msg.value >= 1000 wei, "You must pay 1000 wei for a soda!");
        numSodas--;
    }

    function changeOwner(address _newOwner) public onlyOwner {
        require(_newOwner != address(0), "You must pass a valid address!");
        owner = _newOwner;
    }

    function withdrawProfits() public onlyOwner {
        require(msg.sender == owner, "Only the owner can withdraw funds");
        payable(msg.sender).transfer(address(this).balance);
    }
}