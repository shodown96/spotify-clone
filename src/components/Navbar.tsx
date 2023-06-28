import { useRouter } from 'next/router'
import React, { InputHTMLAttributes, useContext, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Download, PlayCircle, Search, User } from 'react-feather'
import { AppContext } from '../context'
import { AppContextType } from '../interfaces/main'
import { config } from '../utilities/config'
import { spotify } from '../utilities/spotify'

function Navbar({ item }: any) {
    const router = useRouter()
    const { background, title, query, setQuery } = useContext(AppContext) as AppContextType

    const checkUrl = () => {
        if (router.pathname.includes(config.PATHS.Categories)) {
            return true
        }
        return false
    }

    const checkSearchModeByUrl = () => {
        if (router.pathname.includes(config.PATHS.Search)) {
            return true
        }
        return false
    }


    const handleChange = (e: any) => {
        setQuery(`${e.target.value}`)
    }

    return (
        <div>
            <div className='flex justify-between bg-default-light p-4'>
                {/* <div className='flex gap-2 items-center'>
                    <ChevronLeft
                        onClick={() => router.back()}
                        className={`cursor-pointer ${window.history.state ? 'bg-black' : ''} h-8 w-8 rounded-full p-1`} />
                    <ChevronRight
                        onClick={() => router.forward()}
                        className={`cursor-pointer ${window.history.state ? 'bg-black' : ''} h-8 w-8 rounded-full p-1`} />
                    <PlayCircle />
                    <span>{item?.name}</span>
                </div> */}

                <div>
                    <div className={`${checkSearchModeByUrl() ? 'block' : 'hidden'}`}>
                        <div className='border-2 border-default-lighter flex gap-2 p-2 items-center rounded-full w-72 ml-10 focus-within:border-white'>
                            <Search className='h-5 w-5 cursor-pointer hover:text-white' />
                            <input type="text" className='w-full bg-transparent text-sm h-8 outline-none' autoFocus
                                placeholder='What do you want to listen to?' value={query} onChange={handleChange} />
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <div onClick={() => router.push(config.PATHS.Download)}
                        className='flex gap-2 bg-black rounded-full justify-center py-2 text-sm cursor-pointer w-36 hover:scale-105'>
                        <Download height={20} />
                        <span>Install App</span>
                    </div>

                    <div className='rounded-full p-2 bg-black'>
                        <User height={20} />
                    </div>
                </div>
            </div>
            {checkUrl() ? <div className={`${background} -mt-20 z-50`}>
                <div className="flex flex-col h-80 p-5 justify-end">
                    <div>
                        <h1 className='text-6xl font-bold'>{title}</h1>
                    </div>
                </div>
            </div> : null}
        </div>
    )
}

export default Navbar