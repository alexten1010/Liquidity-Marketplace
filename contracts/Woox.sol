// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Woox {
    // State variables to be stored on the blockchain

    string public symbol = "WOOX";
    string public name = "Woox v.0.1";
    uint256 public totalSupply;
    address public ownerOfContract;
    uint public _userId;

    // An empty array that public called holderToken
    address[] public holderToken;
    // Transfer event
    event Transfer(address indexed _from, address indexed_to, uint256 _value);
    // This approval event is emitted when the owner approves another address to spend tokens.
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    mapping(address => TokenHolderInfo) public tokenHolderInfos;

    // Holds data values.
    struct TokenHolderInfo {
        uint _tokenId;
        address _from;
        address _to;
        uint _totalToken;
        bool _tokenHolder;
    }

    // This mapping returns a balance(uint) with a nested mapping also.
    mapping(address => uint256) balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    // Assigns owner to their balance and also gives us the total supply.
    constructor(uint256 _initialSupply) {
        ownerOfContract = msg.sender;
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }

    // Will increment userId by one
    function inc() internal {
        _userId++;
    }

    // This is a transfer function which checks to see if transfer was a succcess which uses a boolean.
    function transfer(
        address _to,
        uint256 _value
    ) public returns (bool success) {
        // This require statement makes sure the amount transfered is not greater than the total balance.
        require(balanceOf[msg.sender] >= _value);
        inc();

        // This subtracts the user value from his id while updating it to the senders adddress.
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;

        // This updates the token holder information.
        TokenHolderInfo storage tokenHolderInfo = tokenHolderInfos[_to];

        // This allows us to update all the info in the struct.
        tokenHolderInfo._to = _to;
        tokenHolderInfo._from = msg.sender;
        tokenHolderInfo._totalToken = _value;
        tokenHolderInfo._tokenHolder = true;
        tokenHolderInfo._tokenId = _userId;

        // Pushes to an array.
        holderToken.push(_to);

        //Initilizes the transfer emit.
        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    //   We checked for a condition.
    //   Then we did the transfer.
    //   We changed the state in our struct.
    //   We emited the event.

    // This is allowing the msg.sender who is calling this function is allowing
    //  the spender to spend a certain amount.

    function approve(
        address _spender,
        uint256 _value
    ) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;

        emit Approval(msg.sender, _spender, _value);

        return true;
    }

    // Balance should be less or equal to balance of the user if not txn is cancelled and throws an error.

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool succes) {
        require(_value <= balanceOf[_from]);
        // This checks the value of the allowance which were trying to pass to the signer.
        require(_value <= allowance[_from][msg.sender]);

        //This subracts and updates from the one make that makes call

        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;

        allowance[_from][msg.sender] -= _value;

        emit Transfer(_from, _to, _value);

        return true;
    }

    function getTokenHolderData(
        address _address
    ) public view returns (uint256, address, address, uint256, bool) {
        return (
            tokenHolderInfos[_address]._tokenId,
            tokenHolderInfos[_address]._to,
            tokenHolderInfos[_address]._from,
            tokenHolderInfos[_address]._totalToken,
            tokenHolderInfos[_address]._tokenHolder
        );
    }

    function getTokenHolder() public view returns (address[] memory) {
        return holderToken;
    }
}
