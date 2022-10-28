// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "openzeppelin-solidity/contracts/access/Ownable.sol";

contract Greeting {
  string private _greeting = "Hello, World!";

  function greet() external view returns(string memory) {
    return _greeting;
  }

  function setGreeting(string calldata greeting) public {
    _greeting = greeting;
  }
}
