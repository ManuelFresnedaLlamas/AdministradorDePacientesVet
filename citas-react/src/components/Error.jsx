import React from 'react'

const Error = ({mensaje}) => {
    //OJO => SE PUEDE USAR PATRÓN CHILDREN usando la palabra clave children, así podríamos pasar por prop varias línea html de una vez
    //en vez de usar varios props
  return (
    <div className='bg-red-600 text-white uppercase p-3 uppercase mb-3 rounded-xl text-center'>
        <p>{mensaje}</p>
    </div>
  )
}

export default Error