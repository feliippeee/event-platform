import { LogoRocketseat } from "./LogoRocketseat";

export function Footer() {
    return (
        <div className="w-full bg-gray-700 md:flex md:flex-row">
            <div className="md:mt-0 py-6 mx-4 md:mx-10 md:w-full md:flex md:bg-gray-700 border-t-[1px] md:border-t-2 border-gray-500 items-center justify-between">
                <div className="flex flex-col md:flex-row  justify-center align-center">
                    <div className="flex justify-center">
                        <LogoRocketseat />
                    </div>

                    <span className="pl-5 py-6 md:py-0 text-sm md:text-base items-center md:items-start self-center text-gray-300">
                        Rocketseat - Todos os direitos reservados
                    </span>
                </div>
            <div className="flex text-sm md:text-base justify-center text-gray-300">
                
            <a href="#">
                Políticas de Privacidade
            </a>
            </div>
        </div>
        </div>
    )
}