import React, { useContext, useEffect } from 'react';

import { useRouter } from 'next/router';
import { Login } from '../containers';
import { AppContext } from '../context';
import { AppContextType } from '../interfaces/main';
import { config } from '../utilities/config';
// install react-spotify-player


export default function Layout({ children }: any) {

  const { user, setUser } = useContext(AppContext) as AppContextType
  const router = useRouter()

  useEffect(() => {
    if (user?.token) {
      router.push(config.PATHS.Home)
    } else {
      router.push(config.PATHS.Login)
    }
  }, [])

  return (
    <div>
      <Login />
    </div>
  );
}


