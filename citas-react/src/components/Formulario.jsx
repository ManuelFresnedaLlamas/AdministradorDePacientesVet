import React, { useState } from 'react'
import Error from './Error'
const Formulario = ({pacientes, setPacientes}) => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return random + fecha 
    }
     
    const handleSubmit = (e) => {
        e.preventDefault()
        //Validación del formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true)
        } else{
            setError(false)
            const paciente = {
                nombre,
                propietario,
                email, 
                fecha,
                sintomas,
                id: generarId(),
            }
            setPacientes([...pacientes, paciente])

            //reiniciar formulario
            setNombre('')
            setPropietario('')
            setEmail('')
            setFecha('')
            setSintomas('')
        }


    }




    return (
        <div className='md: w-1/2 lg:w-2/5 m-5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>
            Añade Pacientes y {}
            <span className='text-indigo-600 font-bold'>Adminístralos</span>
        </p>

        <form className='bg-white shadow-xl rounded-lg py-10 px-5' onSubmit={handleSubmit}>
            {error && <Error mensaje = 'Todos los campos son obligatorios'/>

            }
            <div className='mb-5'>
                <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>
                    Nombre Mascota
                    </label>
                <input id="mascota" 
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md' 
                    type={'text'} 
                    placeholder={'Nombre de la mascota'}
                    value = {nombre}
                    onChange={(e)=>{setNombre(e.target.value)}}
                />
            </div>

            <div className='mb-5'>
                <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>
                    Nombre Propietario
                    </label>
                <input id="propietario" 
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md' 
                    type={'text'} 
                    placeholder={'Nombre del propietario'}                   
                    value = {propietario}
                    onChange={(e)=>{setPropietario(e.target.value)}}
                    />
            </div>

            <div className='mb-5'>
                <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>
                    Email
                    </label>
                <input id="email" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md'
                    type={'email'} 
                    placeholder={'Email de contacto'}
                    value = {email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
            </div>

            <div className='mb-5'>
                <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>
                    Fecha alta
                    </label>
                <input id="alta" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md' 
                type={'date'}
                value = {fecha}
                onChange={(e)=>{setFecha(e.target.value)}}
                />
            </div>

            <div className='mb-5'>
                <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>
                    Síntomas
                    </label>
                <textarea id="sintomas" 
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md' 
                    type={'text'}
                    value = {sintomas}
                    onChange={(e)=>{setSintomas(e.target.value)}}/>
            </div>

            <input
                type={'submit'}
                className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-800 cursor-pointer transition-all"
                value={"Agregar paciente"}
            />
        </form>
        </div>
    )
}

export default Formulario
