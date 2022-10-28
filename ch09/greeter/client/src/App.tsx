import React, {useEffect, useState} from 'react';
import './App.css';
import Web3 from 'web3';
import GreetingCompiled from 'backend/build/contracts/Greeting.json';
import {Greeting} from 'backend/types/web3-v1-contracts/Greeting';
import {AbiItem} from 'web3-utils';

function App() {
  const [storageValue, setStorageValue] = useState(null as string | null);

  useEffect(() => {
    const web3Init = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
	await window.ethereum.enable();
	const accounts = await web3.eth.getAccounts();
	const networkId = await web3.eth.net.getId();
	const deployedNetwork = (GreetingCompiled.networks as any)[networkId];
	const instance = new web3.eth.Contract(
	  GreetingCompiled.abi as AbiItem[],
	  deployedNetwork?.address
	) as unknown as Greeting;

	await instance.methods.setGreeting('Hey Keith!').send({from: accounts[0]});
	const resp = await instance.methods.greet().call();

	setStorageValue(resp);
      }
    };
    web3Init().catch(console.log);
  }, []);
  return (
    <>
      {!storageValue && <div>Loading Web3, accounts, and contract...</div>}
      {storageValue && (
        <div className="App">
	  <h1>Greeter</h1>
	  {storageValue}
	</div>
       )}
    </>
  );
}

export default App;
