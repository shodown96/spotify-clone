import { Thumbnail } from '@/src/components'
import { SearchContainerInterface } from '@/src/interfaces/main'
import { getMinutes } from '@/src/utilities/common'
import React from 'react'
import { Clock } from 'react-feather'

function Artists({ searchResults }: SearchContainerInterface) {
    return (
        <div>
            <table className="table-auto w-full text-left border-spacing-10">
                <thead className='border-b border-default-lighter border-opacity-25 border-spacing-y-60'>
                    <tr className='text-default-lighter'>
                        <th className='p-2'>#</th>
                        <th className='p-2'>Title</th>
                        <th className='p-2'>Album</th>
                        <th className='p-2'></th>
                        <th className='p-2'><Clock height={18} /></th>
                    </tr>
                </thead>
                <tbody className='pt-10'>
                    {searchResults?.tracks?.items?.map((song, i) => (

                        <tr key={song.id} className="p-2 mb-10 hover:bg-default-light rounded-xl cursor-pointer">
                            <td className="p-2">{i + 1}</td>
                            <td style={{ maxWidth: "320px" }} className="p-2">
                                <div className='flex items-center gap-2'>
                                    <img src={song.album.images[0]?.url || '/img/default-track.png'} alt="" className='w-10 h-10' />
                                    <div>
                                        {song.name}
                                    </div>

                                </div>
                            </td>
                            <td className='text-default-lighter p-2'>{song.album.name}</td>
                            <td className='text-default-lighter p-2'></td>
                            <td className='text-default-lighter p-2'>{getMinutes(song.duration_ms)}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Artists