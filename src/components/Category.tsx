import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context'
import { AppContextType } from '../interfaces/main'
import { getRandomColors } from '../utilities/common'
import { config } from '../utilities/config'
import { spotify } from '../utilities/spotify'

function Category({ name, icon, id }: { name: string, icon: string, id: string }) {
    const [color, setColor] = useState("")
    const { setBackground, setTitle } = useContext(AppContext) as AppContextType

    const router = useRouter()
    useEffect(() => {
        const color = getRandomColors()
        setColor(color)

    }, [])
    const handleClick = () => {
        setTitle(name)
        setBackground(color)
        console.log(name)
        router.push(`${config.PATHS.Categories}/${id}`)
    }
    return (
        <div className={`p-4 cursor-pointer bg-default-light rounded overflow-hidden ${color}`}
            style={{ width: "220px", height: "220px" }} onClick={handleClick}>
            <h1 className='font-bold text-xl'>{name}</h1>
            {/* <div className='relative pl rotate-45'><img src={icon} alt="" className='h-14 w-14' /></div> */}
        </div>
    )
}

export default Category