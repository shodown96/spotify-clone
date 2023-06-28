import React from 'react'
import { Layout } from '../containers'
import { config } from '../utilities/config'

function download() {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center px-5 text-center py-10'>
        <div>
          <img src={config.IMAGES.Download} alt="" />
        </div>

        <div>
          <h1 className='text-3xl px-5 font-bold' style={{ maxWidth: "750px" }}>Seamlessly listen to music you love. Download the Spotify app for your computer.</h1>

        </div>
        <div className='my-10 font-bold'>
          <a href={config.EXTERNAL_LINKS.Download} target="_blank" rel="noopener noreferrer"
            className="p-4 font-bold rounded-full bg-primary text-white">
            Get our free app
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default download