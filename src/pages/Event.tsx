import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export function Event() {
    const [isOpen, setIsOpen] = useState(false);
    const {slug} = useParams<{slug: string}>()
    return (
        <div className="flex flex-col min-h-screen">
            <Header 
                width={167} 
                height={23.78} 
                setIsOpen={setIsOpen} 
                isOpen={isOpen} 
            />
            {!isOpen ? <main className="flex flex-1">
                { slug 
                    ? <Video lessonSlug={slug} /> 
                    : <div className="flex-1" />
                }
                <div className="hidden invisible md:visible md:flex">
                    <Sidebar />
                </div>
            </main> : <Sidebar /> }
        </div>
    )
}