import { useEffect, useState } from 'react';
import { ethers, Contract } from 'ethers';
import GamePassNFT from '@/abi/GamePassNFT.json'; // Ensure the correct path

interface UseContract {
  contract: Contract | null;
  loading: boolean;
  error: Error | null;
  mint: (to: string, gameId: number, maxGameId: number) => Promise<number>;
  getTokenURI: (tokenId: number) => Promise<string>;
}

const useContract = (contractAddress: string): UseContract => {
  const [contract, setContract] = useState<Contract | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const connectToContract = async () => {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contractInstance = new ethers.Contract(contractAddress, GamePassNFT, signer);
        setContract(contractInstance);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    connectToContract();
  }, [contractAddress]);

  const mint = async (to: string, gameId: number, maxGameId: number): Promise<number> => {
    if (!contract) throw new Error('Contract not initialized');
    const tx = await contract.mint(to, gameId, maxGameId);
    await tx.wait();
    return tx;
  };

  const getTokenURI = async (tokenId: number): Promise<string> => {
    if (!contract) throw new Error('Contract not initialized');
    return await contract.tokenURI(tokenId);
  };

  return { contract, loading, error, mint, getTokenURI };
};

export default useContract;