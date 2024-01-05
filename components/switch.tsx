'use client'
import Image from "next/image";
import {useState} from "react";
import {updateSwitchActive} from "../lib/features/logic-gates/andSlice";
import {useAppDispatch, useAppSelector} from "../lib/hooks";
import type {RootState} from "../lib/store";


export default function Switch({index} : {index: number}) {

    const selectValueByIndex = (state: RootState): boolean => state.andGate.values?.[index];

    const dispatch = useAppDispatch();
    const isActive = useAppSelector(selectValueByIndex);

    const onSwitchClick = () => {
        dispatch(updateSwitchActive({index: index}));
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