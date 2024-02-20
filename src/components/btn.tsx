import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Btn = () => {
    return (
        <div >
            <Link href="https://api.whatsapp.com/send?phone=5561985261944&text=Ol%C3%A1!%20Estou%20super%20interessado%20em%20saber%20como%20funciona%20o%20servi%C3%A7o%20de%20passeio%20com%20cachorro!%20%F0%9F%90%BE%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es?" target="_blank"
                className='flex items-center justify-center gap-4 bg-customGreen h-[50px] w-[200px] rounded-xl'
            >
                <Image
                    src="/whatsapp.png"
                    alt='Icone whatsapp'
                    width={30}
                    height={30}
                />
                Agende Agora!
            </Link>
        </div>
    )
}
