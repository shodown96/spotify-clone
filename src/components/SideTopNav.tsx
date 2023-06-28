import { useRouter } from 'next/router'
import React from 'react'
import { Home, Search } from 'react-feather'
import { config } from '../utilities/config'

const SideTopNav = () => {
    const router = useRouter()
    return (
        <div className='bg-default p-3 text-default-lighter rounded mb-2'>
            <div className='flex gap-4 mb-2 p-2 hover:text-white cursor-pointer'
                onClick={() => router.push(config.PATHS.Home)}>
                <div><Home /></div>
                <div>Home</div>
            </div>
            <div className='flex gap-4 p-2 hover:text-white cursor-pointer'
                onClick={() => router.push(config.PATHS.Search)}>
                <div><Search /></div>
                <div>Search</div>
            </div>
        </div>
    )
}

export default SideTopNav