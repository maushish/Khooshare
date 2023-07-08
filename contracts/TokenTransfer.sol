// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract TokenTransfer {
    function transfer(address payable _recipient) public payable {
        require(msg.value > 0, "Amount must be greater than zero");
        require(_recipient != address(0), "Recipient address cannot be zero");

        (bool success, ) = _recipient.call{value: msg.value}("");
        require(success, "Transfer failed");
    
    }
}