import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context'
import { AppContextType } from '../interfaces/main'
import { config } from '../utilities/config'
import { accessUrl, getTokenFromResponse, spotify } from '../utilities/spotify'
import { setState } from '../utilities/storage'

function Login() {
    const router = useRouter()
    return (
        <div className='flex flex-col justify-center items-center pt-10 absolute h-screen w-screen z-50'>
            <div className="mb-10">
                <img
                    src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                    alt=""
                />
            </div>
            <div className='bottom-20 absolute md:relative'>
                <button onClick={() => router.push(accessUrl)} className="p-4 font-bold rounded-full bg-primary text-white">
                    LOGIN TO SPOTIFY
                </button>
            </div>
        </div>
    )
}

export default Login