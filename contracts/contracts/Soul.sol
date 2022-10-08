pragma solidity >=0.7.0 <0.9.0;

import "erc721a/contracts/IERC721A.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract Soul is IERC721A {

   mapping (uint256 => bytes32) private recoveryRoots;
   mapping (uint256 => address) private owners;

  function checkValidity(bytes32[] calldata _merkleProof, bytes32 _root, bytes32 leaf) 
    public view 
    returns (bool)
  {
    // bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
    require(MerkleProof.verify(_merkleProof, _root, leaf), "Incorrect proof");
    return true; // Or you can mint tokens here
  }

  
  function getRoot(uint256 tokenId)
    public
    view
    returns (bytes32)
  {
    return recoveryRoots[tokenId];
  }

  
  function recoverSoul(uint256 tokenId, bytes32[] calldata _merkleProof, bytes32 leaf) 
    public
  {
    address owner = this.ownerOf(tokenId);
    bytes32 root = recoveryRoots[tokenId];
    require(checkValidity(_merkleProof, root, leaf), "Invalid recovery ids");
    owners[tokenId] = msg.sender;
  }

  /**
     * @dev See {IERC721-transferFrom}.
     */
    // function transferFrom(
    //     address from,
    //     address to,
    //     uint256 tokenId
    // ) public virtual override {
    //     //solhint-disable-next-line max-line-length
    //     require(false, "Souls may not be transferred this way, use the recoverySoul function instead.");
    // }

}