// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract GoreliEthTransfer {
    function transfer(address payable recipient, uint256 amount) external payable {
        require(msg.value >= amount, "Insufficient balance");
        require(recipient != address(0), "Recipient address cannot be zero");

        recipient.transfer(amount);
    }
}
