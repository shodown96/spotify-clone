import { Thumbnail } from '@/src/components'
import { SearchContainerInterface } from '@/src/interfaces/main'
import React from 'react'

function Artists({ searchResults }: SearchContainerInterface) {
    return (
        <div>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start mb-10">
                {searchResults?.artists?.items.map(artist => (
                    <Thumbnail
                        key={artist.id}
                        id={artist.id}
                        type={artist.type}
                        src={artist.images[0]?.url}
                        text1={artist.name}
                        text2={artist.type} />
                ))}
            </div>
        </div>
    )
}

export default Artists