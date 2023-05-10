import React from 'react';
import { VenomConnect } from 'venom-connect';

type Props = {
  venomConnect: VenomConnect | undefined;
};

function ConnectWallet({ venomConnect }: Props) {
  const login = async () => {
    if (!venomConnect) return;
    await venomConnect.connect();
  };
  return (
    <div>
      <button className='bg-neutral-700 rounded-sm px-5 hover:bg-slate-600' onClick={login}>
      Connect wallet
      </button>
    </div>
  );
}
  
export default ConnectWallet;