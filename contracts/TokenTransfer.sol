// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract TokenTransfer {
    address public destinationWallet;

    receive() external payable {}


    function setDestinationWallet(address _destinationWallet) public payable {
        destinationWallet = _destinationWallet;
    }

    function sendEtherToDestination() public payable {
        require(destinationWallet != address(0), "Destination wallet address not set");
        require(msg.value > 0, "Amount must be greater than zero");

        uint256 amount = msg.value;

        (bool success, ) = payable(destinationWallet).call{value: amount}("");
        require(success, "Transfer failed");
    }
}
