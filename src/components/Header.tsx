import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

interface HeaderProps {
    width?: number;
    height?: number;
    setIsOpen: (state: boolean) => void;
    isOpen?: boolean;
}

export function Header({width, height, setIsOpen, isOpen}: HeaderProps) {
    return (
        <header className="w-full p-4 md:py-5 flex items-center justify-between md:justify-center bg-gray-700 border-b border-gray-600">
            <Logo width={width} height={height} />
            <div className='flex items-center gap-2 md:hidden'>
                <span className='text-sm text-gray-100'>Aulas</span>
                <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={32} /> : <List size={32} />}
                </button>
            </div>
        </header>
    )
}