import {createSlice} from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export type inputStateType = {
    "gateType": string;
    "gateIndex": number;
    "numInputs": number;
    "values": Array<boolean>;
};

type sliceStateType = Array<inputStateType>;

const initialState : sliceStateType = [];

const basicGatesSlice = createSlice({
    name: "basicGates",
    initialState,
    reducers: {
        addGateInput: (state, action) => {
            state[action.payload.gateIndex] = action.payload.newInputState;
        },
        updateSwitchActive: (state, action) => {
            state[action.payload.gateIndex].values[action.payload.index] = !state[action.payload.gateIndex].values[action.payload.index];
        },
        updateNumSwitches: (state, action) => {
            state[action.payload.gateIndex].numInputs = action.payload.numInputs;
            state[action.payload.gateIndex].values =
                state[action.payload.gateIndex].values.length > action.payload.numInputs
                    ? state[action.payload.gateIndex].values.toSpliced(-1, 1)
                    : state[action.payload.gateIndex].values.toSpliced(state.values.length, 0, false);
        }
    }
});

export const { addGateInput, updateSwitchActive, updateNumSwitches } = basicGatesSlice.actions;
export const selectNumGates = (state: RootState) : number => state.basicGates.length;
export default basicGatesSlice.reducer;