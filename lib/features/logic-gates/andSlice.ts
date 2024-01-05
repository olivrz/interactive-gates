import {createSlice} from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type logicStateType = {
    "numInputs": number;
    "values": Array<boolean>;
}

const initialState : logicStateType = {
    numInputs: 2,
    values: [false, false]
}

const andSlice = createSlice({
    name: "andGate",
    initialState,
    reducers: {
        updateSwitchActive: (state, action) => {
            state.values[action.payload.index] = !state.values[action.payload.index];
        },
        updateNumSwitches: (state, action) => {
            state.numInputs = action.payload.numInputs;
            state.values = state.values.length > action.payload.numInputs ? state.values.toSpliced(-1, 1) : state.values.toSpliced(state.values.length, 0, false);
        }
    }
});

export const { updateSwitchActive, updateNumSwitches } = andSlice.actions;
export const selectNumInputs = (state: RootState) => state.andGate.numInputs;
export const selectValues = (state: RootState) => state.andGate.values;
export const selectOutput = (state: RootState) : boolean => state.andGate.values.filter( val => val === false).length <= 0;
export default andSlice.reducer;