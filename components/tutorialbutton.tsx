'use client'
import {Dropdown} from "./dropdown";
import {useState} from "react";
import {tutorialType} from "../types";
import Link from "next/link";

export function TutorialButton({ tutorialData }: { tutorialData: Array<tutorialType> }) {
    const [showTutorial, setShowTutorial] = useState(false);

    return (
        <div
            className="flex flex-col bg-react-blue-1 h-min py-1 px-2 rounded"
            onMouseEnter={() => setShowTutorial(true)}
            onMouseLeave={() => setShowTutorial(false)}
        >
            <Link href="/tutorials" className="text-xl">Tutorials</Link>
            {showTutorial && <Dropdown tutorialData={tutorialData}/>}
        </div>
    )
}