import Image from "next/image";
import Link from 'next/link';
import {tutorialType} from "../types";
import {TutorialButton} from "./tutorialbutton";

export function GlobalNav({ tutorialData }: { tutorialData: Array<tutorialType> }) {

    return (
        <div className="flex flex-row relative m-4 pb-4 flex-start border border-react-blue-2 border-t-0 border-l-0 border-r-0 border-b-2">
            <Image src={'/interactivegateslogo.svg'} width="300" height="150" alt="React Gates Logo" className="w-1/3"/>

            <div className="flex w-full pl-40 flex-row justify-end text-right absolute">
                {/*<h1 className="text-4xl">React Gates</h1>*/}
                <TutorialButton tutorialData={tutorialData}/>
                <Link href="/about" className="py-1 px-2 text-xl h-min">About</Link>
            </div>
        </div>
    )

}