import React from 'react'

const Footer = () => {

    const LeftSection = () => {
        return(
            <div className="w-1/3 h-full flex flex-col justify-start items-start gap-6">
                <div className="w-fit h-[2.5rem]">
                    <img src='/vercel.svg' className='w-full h-full object-contain'/>
                </div>
                <div className="w-full h-fit">
                    <p className='font-light text-sm text-slate-500'>Medhouse coopera con terceros en la provisión de productos y servicios. Todos los Terceros son empresarios en virtud de las disposiciones del Código Civil.</p>
                </div>
                <div className="w-full h-fit">
                    <p className='font-semibold text-base text-slate-900'>© 2023 Medhouse. Todos los derechos reservados.</p>
                </div>
            </div>
        )
    }

    const RightSection = () => {
        return(
            <div className="w-2/3 h-full flex justify-start items-start">
                <div className="w-1/4 h-full flex flex-col justify-start items-start gap-3">
                    <p className='font-semibold text-base text-slate-900'>Enlaces</p>
                    <p className='font-light text-sm text-slate-500'>Inicio</p>
                    <p className='font-light text-sm text-slate-500'>Centros</p>
                    <p className='font-light text-sm text-slate-500'>Servicios</p>
                    <p className='font-light text-sm text-slate-500'>Especialistas</p>
                </div>
                <div className="w-1/4 h-full flex flex-col justify-start items-start gap-3">
                    <p className='font-semibold text-base text-slate-900'>Cuenta</p>
                    <p className='font-light text-sm text-slate-500'>Inicio de sesión</p>
                    <p className='font-light text-sm text-slate-500'>Crear cuenta</p>
                </div>
                <div className="w-1/4 h-full flex flex-col justify-start items-start gap-3">
                    <p className='font-semibold text-base text-slate-900'>Adicionales</p>
                    <p className='font-light text-sm text-slate-500'>Nosotros</p>
                    <p className='font-light text-sm text-slate-500'>Terminos y condiciones</p>
                    <p className='font-light text-sm text-slate-500'>Politica de privacidad</p>
                </div>
                <div className="w-1/4 h-full flex flex-col justify-start items-start gap-3">
                </div>
            </div>
        )
    }

    return (
        <div className="w-full h-[40vh] bg-white flex jusitfy-between items-center p-[2%_10%] gap-14">
            <LeftSection/>
            <RightSection/>
        </div>
    )
}

export default Footer