pragma solidity >=0.7.0 <0.9.0;

import "erc721a/contracts/ERC721A.sol";

contract AttestationNFT is ERC721A {
    
  mapping (uint256 => uint256) soulIds;
  mapping (uint256 => string) private tokenUris;
  mapping (uint256 => string) private categories;
  mapping (uint256 => uint256) private nftReferences; //TODO

  function tokenURI(uint256 tokenId) 
      public 
      view
      override
      returns (string memory) 
  {
      return tokenUris[tokenId];
  }

  constructor() ERC721A("ANft", "Attestation Nft") {}

  function mint(string memory uri, uint256 soulId, string memory category) 
    public 
    returns (uint256) 
  {
    uint256 index = _currentIndex;
    tokenUris[index] = uri;
    soulIds[index] = soulId;
    categories[index] = category;
    _safeMint(msg.sender, 1);
    return index;
  }

  function getSoulId(uint256 tokenId)
    public view
    returns (uint256)
  {
    return soulIds[tokenId];
  }

}

