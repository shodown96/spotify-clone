import React, { useContext, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Download, PlayCircle, User } from 'react-feather'
import { AppContext } from '../context';
import { AppContextType, AppState } from '../interfaces/main';
import { TrackObjectFull } from '../interfaces/spotify';
import { getState } from '../utilities/storage';
import Navbar from './Navbar';

function Content({ children }: any) {

  const { user, setUser, item, setItem } = useContext(AppContext) as AppContextType

  return (
    <div className='bg-default z-40 overflow-auto rounded ml-2 w-full' style={{ height: "86vh" }}>
      {/* navbar */}
      <Navbar item={item} />
      {/* end navbar */}

      {/* Body */}
      <div>
        {children}
      </div>
      {/* End body */}
    </div>
  )
}

export default Content