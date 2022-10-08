import { Alchemy, Network } from 'alchemy-sdk';
import { useContractWrite } from '@web3modal/ethereum'

const MintId = () => {
  const { data, error, isLoading, write } = useContractWrite({
    addressOrName: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    contractInterface: wagmigotchiABI,
    functionName: 'feed'
  })
  write()
}