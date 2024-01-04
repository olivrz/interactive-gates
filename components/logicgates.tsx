import Image from "next/image";
import Switch from "./switch"

type inputState = {
    [key: string]: boolean;
}


export function AndGate() {


    return (
        <div
            className="flex flex-row items-center justify-center mt-8 h-1/4"
        >
            {/** INPUT SWITCHES */}
            <div
                className="flex flex-col justify-between h-20 md:h-32"
            >
                <Switch />
                <Switch />
            </div>

            {/** INPUT WIRES */}
            <div
                className="border-solid border-gray-300 border-t-4 border-b-4
                h-16 w-16 md:w-24 md:h-24"
            />

            {/** GATE */}
            <div
                className="border border-solid border-black border-4 rounded-tr-full
            rounded-br-full h-20 w-20 md:w-32 md:h-32"
            />

            {/** OUTPUT WIRE */}
            <div
                className="border-b-4 border-solid h-0 w-16 md:w-28"
            />
        </div>


    )
}