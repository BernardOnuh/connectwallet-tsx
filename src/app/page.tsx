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
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ConnectWallet venomConnect={venomConnect}/>
      </div>
    </main>
  )
}
