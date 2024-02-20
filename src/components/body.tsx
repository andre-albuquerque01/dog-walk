import React from 'react'
import { Btn } from './btn'

export const Body = () => {
    return (
        <div className='space-y-5 mt-5'>
            <p>Passeio com Cachorro: Deixe-nos Cuidar Enquanto Você Descansa</p>
            <p>🐾 Seu fiel companheiro merece o melhor, mesmo quando você está cansado demais para passear. Deixe-nos cuidar do seu pet enquanto você relaxa!</p>
            <p>Como Funciona:</p>
            <ol className='list-decimal list-inside ml-4'>
                <li>Agende: Escolha o horário e o local do passeio.</li>
                <li>Relaxe: Deixe-nos cuidar do passeio enquanto você descansa.</li>
                <li>Seu Cachorro Feliz: Seu peludo aproveita a aventura enquanto você recarrega suas energias.</li>
            </ol>
            <p>Por que Escolher Nosso Serviço:</p>
            <ul className='list-outside ml-4'>
                <li>Profissionalismo: Nossos passeadores são experientes e apaixonados por animais.</li>
                <li>Conveniência: Pegamos o ponto exato onde você marca.</li>
                <li>Segurança: Mantemos seu pet seguro durante todo o passeio.</li>
            </ul>
            <p>Agende Agora: Dê ao seu pet a atenção e o cuidado que ele merece, mesmo nos seus dias mais ocupados. Agende um passeio hoje mesmo e proporcione diversão e exercício para seu cãozinho enquanto você relaxa!</p>
            <p>Relaxe enquanto nós cuidamos dos passeios do seu melhor amigo! 🐶💤</p>
            <Btn />
        </div>
    )
}
