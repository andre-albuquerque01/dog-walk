import React from 'react'

export const Footer = () => {
    const hanldeData = () => {
        const data = new Date();
        return data.getFullYear();
    }
    return (
        <div className="bottom-0 w-full text-center md:mt-[-30px]">
            <p className='text-sm'>
                &copy; Todos os direitos reservado - {hanldeData()}
            </p>
        </div>
    )
}
