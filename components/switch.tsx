'use client'
import Image from "next/image";
import {useState} from "react";


export default function Switch({index} : {index: number}) {
    const [isActive, setIsActive] = useState(false)

    const onSwitchClick = () => {
        setIsActive(!isActive);
    }

    return (
        <button
            onClick={onSwitchClick}
        >
            {isActive ?
                <Image
                    src={'/switch.svg'}
                    width="50"
                    height="70"
                    alt="Logic Switch"
                    className="w-6"
                /> :
                <Image
                    src={'/switch.svg'}
                    width="50"
                    height="70"
                    alt="Logic Switch"
                    className="w-6 pb-2.5 transform rotate-180"
                />
            }
        </button>

    )
}