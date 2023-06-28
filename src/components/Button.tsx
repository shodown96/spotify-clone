import React from 'react'

function Button({children, ...rest}: any) {
  return (
    <div {...rest} className='cursor-pointer rounded-full text-black p-4 py-3 hover:scale-25 bg-primary'>{children}</div>
  )
}

export default Button