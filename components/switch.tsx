'use client'
import Image from "next/image";
import {updateSwitchActive} from "../lib/features/logic-gates/basicGatesSlice";
import {useAppDispatch, useAppSelector} from "../lib/hooks";
import type {RootState} from "../lib/store";

interface switchPropTypes {
    gateIndex: number,
    index: number
}

export default function Switch({gateIndex, index} : switchPropTypes) {

    const selectValueByIndex = (state: RootState): boolean => state.basicGates[gateIndex].values?.[index];

    const dispatch = useAppDispatch();
    const isActive = useAppSelector(selectValueByIndex);

    const onSwitchClick = () => {
        dispatch(updateSwitchActive({gateIndex: gateIndex, index: index}));
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