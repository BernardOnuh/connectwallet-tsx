"useClient";
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
      <button className='bg-[#0077B6] text-white font-medium px-5 py-3 rounded-md hover:bg-[#005F8B]' onClick={login}>
      Connect wallet
      </button>
    </div>
  );
}
  
export default ConnectWallet;