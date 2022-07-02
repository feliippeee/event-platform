import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import imgUrl from '../../src/assets/code-mockup.png';
import imgUrlMobile from '../../src/assets/code-mockup-mobile.png';
import imgReact from '../../src/assets/imgReact.svg';

import { useCreateSubscriberMutation } from "../graphql/generated";
import { Footer } from "../components/Footer";

export function Subscribe() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useCreateSubscriberMutation();

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        //fazer uma verificação pra ver se o e-mail já existe no graphQL

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event');
    }
    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <img 
                className="absolute -z-10"
                src={imgReact} alt="" 
            />
            <div className="w-full max-w-[1100px] flex flex-col md:flex-row items-center justify-center md:justify-between gap-x-201 mt-20 mx-auto">
                <div className="max-w-[640px] flex flex-col items-center mb-6 md:items-start">
                    <Logo />
                    <h1 className="mt-8 md:mt-6 text-3xl md:text-[2.5rem] leading-tight text-center md:text-left">
                        Construa uma {' '}
                        <strong className="text-blue-500 flex-col md:flex-none"> {/*corrigir quebrando layout no pc*/}
                        aplicação completa,{' '}
                        </strong>
                        do zero, com {' '}
                        <strong className="text-blue-500">
                            React JS
                        </strong> 
                    </h1>
                    <p className="text-base md:pr-[1.5rem] text-center md:text-left mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-lg md:text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                            className="bg-gray-900 rounded px-5 h-14" 
                            type="text" 
                            placeholder="Seu nome completo" 
                            onChange={event => setName(event.target.value)}
                        />
                        <input 
                            className="bg-gray-900 rounded px-5 h-14" 
                            type="email" 
                            placeholder="Digite seu e-mail completo" 
                            onChange={event => setEmail(event.target.value)}
                        />

                        <button 
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            {window.screen.width < 768 ? <img src={imgUrlMobile} className="mt-10 ml-6 object-contain mb-1" alt="" /> : <img src={imgUrl} className="mt-10" alt="" /> }
            
            <Footer />
        </div> 
    )
}