pragma solidity ^0.4.23;
contract firstcompile{
	string public name;
	constructor(string _name){
		name = _name;
	}
	function getname() public view returns(string ){
		return name;
	}

}
