import { Thumbnail } from '@/src/components'
import { SearchContainerInterface } from '@/src/interfaces/main'
import React from 'react'

function Albums({ searchResults }: SearchContainerInterface) {
    return (
        <div>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start mb-10">
                {searchResults?.albums?.items.map(pl => (
                    <Thumbnail
                        key={pl.id}
                        id={pl.id}
                        type={pl.type}
                        src={pl.images[0].url}
                        text1={pl.name}
                        text2={pl.artists && pl.artists[0]?.name} />
                ))}
            </div>
        </div>
    )
}

export default Albums