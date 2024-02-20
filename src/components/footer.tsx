import React from 'react'

export const Footer = () => {
    const hanldeData = () => {
        const data = new Date();
        return data.getFullYear();
    }
    return (
        <div className="fixed bottom-0 mx-auto text-center ">
            <p className='text-md'>
                &copy; Todos os direitos reservado - {hanldeData()}
            </p>
        </div>
    )
}
