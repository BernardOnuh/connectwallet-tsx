"use client";

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { initVenomConnect } from './components/configure';
import { VenomConnect }  from 'venom-connect';
import ConnectWallet from './components/ConnectWallet'

type Props = {
  venomConnect: VenomConnect | undefined;
};

export default function Home() {
  const [venomConnect, setVenomConnect] = useState<VenomConnect | undefined>();
  const init = async () => {
    const _venomConnect = await initVenomConnect();
    setVenomConnect(_venomConnect);
  };
  useEffect(() => {
    init();
  }, []);
  const [venomProvider, setVenomProvider] = useState<any>();
  const [address, setAddress] = useState<string>();
  // This method allows us to gen a wallet address from inpage provider
  const getAddress = async (provider: any) => {
    const providerState = await provider?.getProviderState?.();
    return providerState?.permissions.accountInteraction?.address.toString();
  };
  // Any interaction with venom-wallet (address fetching is included) needs to be authentificated
  const checkAuth = async (_venomConnect: any) => {
    const auth = await _venomConnect?.checkAuth();
    if (auth) await getAddress(_venomConnect);
  };
  // This handler will be called after venomConnect.login() action
  // connect method returns provider to interact with wallet, so we just store it in state
  const onConnect = async (provider: any) => {
    setVenomProvider(provider);
    await onProviderReady(provider);
  };
  // This handler will be called after venomConnect.disconnect() action
  // By click logout. We need to reset address and balance.
  const onDisconnect = async () => {
    venomProvider?.disconnect();
    setAddress(undefined);
  };
  // When our provider is ready, we need to get address and balance from.
  const onProviderReady = async (provider: any) => {
    const venomWalletAddress = provider ? await getAddress(provider) : undefined;
    setAddress(venomWalletAddress);
  };
  useEffect(() => {
    // connect event handler
    const off = venomConnect?.on('connect', onConnect);
    if (venomConnect) {
      checkAuth(venomConnect);
    }
    // just an empty callback, cuz we don't need it
    return () => {
      off?.();
    };
  }, [venomConnect]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {address ?(
          <button onClick={onDisconnect} 
          className='bg-[#0077B6] text-white font-medium px-5 py-3 rounded-md hover:bg-[#005F8B]'>{address.substring(0, 8)}
          </button>
        ) : (
        <ConnectWallet venomConnect={venomConnect}/>)}
      </div>
    </main>
  )
}
