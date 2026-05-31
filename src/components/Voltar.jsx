import { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Voltar({ lugar }) {

    const navigate = useNavigate();
    return (
        <>
            <button
            onClick={() => navigate(lugar)}
            className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-xl
                border
                border-zinc-700
                bg-zinc-900/50
                text-zinc-300
                hover:bg-zinc-800
                hover:border-blue-500
                hover:text-blue-400
                transition-all
                duration-300
                cursor-pointer
                group
            ">
                <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                Voltar
            </button>
        </>
    )
}

export default Voltar;