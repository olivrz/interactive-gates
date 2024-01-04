import {AndGate} from "../../../components/logicgates";

export default function Page() {
    return (
        <div className="mx-44 mt-8 h-screen">
            <div className="flex flex-col h-full">
                <h1 className="text-5xl pb-2">Basic Logic Gates</h1>
                <h2 className="text-xl"> with Live Interactive Demos</h2>
                <br/>
                <h3 className="">By Oliver Rzepecki</h3>
                {/**TODO Add social media link */}
                <AndGate />
            </div>
        </div>
    )
}