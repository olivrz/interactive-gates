'use client'
import {AndGate} from "../../../components/logic-gates/andgate";
import StoreProvider from "../../StoreProvider"
import {OrGate} from "../../../components/logic-gates/orgate"

export default function Page() {


    return (
        <StoreProvider>
            <div className="mx-44 mt-8 h-screen">
                <div className="flex flex-col h-full">
                    <h1 className="text-5xl pb-2">Basic Logic Gates</h1>
                    <h2 className="text-xl"> with Live Interactive Demos</h2>
                    <br/>
                    <h3 className="">By Oliver Rzepecki</h3>
                    {/**TODO Add social media link */}
                    <AndGate gateIndex={0}/>
                    <OrGate gateIndex={1}/>
                </div>
            </div>
        </StoreProvider>
    )
}