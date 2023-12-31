'use client'
import Switch from "../switch"
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../lib/hooks";
import {updateNumSwitches, addGateInput} from "../../lib/features/logic-gates/basicGatesSlice";
import type {inputStateType} from "../../lib/features/logic-gates/basicGatesSlice";
import {RootState} from "../../lib/store";

export function AndGate({gateIndex} : {gateIndex: number}) {

    const dispatch = useAppDispatch();

    useEffect(()=> {
        // initialize redux slice for this gate
        const initialState : inputStateType = {
            "gateType": "and",
            "gateIndex": gateIndex,
            "values": [false, false],
            "numInputs": 2
        };
        dispatch(addGateInput({gateIndex: gateIndex, newInputState: initialState}));
    }, []);
    const basicGate = useAppSelector((state: RootState) => state.basicGates[gateIndex]);
    if (!basicGate) {
        // Render loading or placeholder content while waiting for the state to initialize
        return <div>Loading...</div>;
    }

    const numInputs = basicGate.numInputs;
    const values = basicGate.values;
    const outputIsActive = values.filter( val => val === false).length <= 0;

    const handleNumInputsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNumSwitches({gateIndex: gateIndex, numInputs: event.target.value}));
    }

    return (
        <div className ="flex flex-col mt-8 items-stretch">
            <form className="max-w-sm mx-auto flex">
                <label htmlFor="number-input"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of inputs:</label>
                <input type="number" id="number-input"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       defaultValue="2" required
                    min="2" max="8" onChange={handleNumInputsChange}
                />
            </form>
            <div
                className="flex flex-row items-center justify-center"
            >
                {/** INPUT SWITCHES */}
                <div className="flex flex-col justify-between self-stretch" >
                    {values.map( (val, index) =>
                        <Switch gateIndex={gateIndex} index={index} key={"inputSwitch"+index}/>
                    )}
                </div>

                {/** INPUT WIRES */}
                {<div className="flex flex-col justify-between self-stretch w-fit" >
                    {values.map((val, index) =>
                        val ? (<div className="w-16 my-4 border-t-4 md:w-24 border-react-blue-2" key={"inputSwitch"+index}/>)
                            : (<div className="w-16 my-4 border-t-4 md:w-24" key={"inputSwitch" + index}/>)
                    )}
                </div>}

                {/** GATE */}
                <div
                    className="border-solid border-black border-4 rounded-tr-full
            rounded-br-full self-stretch"
                    style={{
                        width: `${36 * numInputs}px`
                    }}
                />

                {/** OUTPUT WIRE */}
                {outputIsActive ?
                    <div className="border-b-4 border-solid border-react-blue-2 h-0 w-16 md:w-28"/>
                    : <div className="border-b-4 border-solid h-0 w-16 md:w-28"/>
                }
            </div>
        </div>
    )
}