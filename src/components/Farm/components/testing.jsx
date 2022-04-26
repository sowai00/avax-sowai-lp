import { Button, Card, Input, Typography, Form, notification } from "antd";
// import Web3 from "web3";
import { useState } from "react";
import { ethers } from "ethers";

function Testing() {
  const [sign, setSign] = useState();
  const [address, setAddress] = useState();
  const [chainId, setChainId] = useState();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const connectWallet = async () => {
    try {
      // await window.ethereum.send('eth_requestAccounts');
      await window.ethereum.enable();
      const value = String(Math.floor(Math.random() * 10000));
      setAddress(await signer.getAddress());
      setChainId(await signer.getChainId());
      setSign(await signer.signMessage(value));
    } catch (err) {
      alert("please connect metaMask");
      console.log(err.message);
    }
  };

  return (
    <>
      <Card>
        123
        <Button type="submit" onClick={() => connectWallet}>
          connnect Wallet{(sign, address, chainId)}
        </Button>
      </Card>
    </>
  );
}

export default Testing;
