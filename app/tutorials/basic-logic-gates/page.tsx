'use client'
import {AndGate} from "../../../components/logicgates";
import {useState} from "react";

export default function Page() {

    const [numAndInputs, setNumAndInputs] = useState(2);

    return (
        <div className="mx-44 mt-8 h-screen">
            <div className="flex flex-col h-full">
                <h1 className="text-5xl pb-2">Basic Logic Gates</h1>
                <h2 className="text-xl"> with Live Interactive Demos</h2>
                <br/>
                <h3 className="">By Oliver Rzepecki</h3>
                {/**TODO Add social media link */}
                <AndGate numInputs={numAndInputs}/>
            </div>
        </div>
    )
}