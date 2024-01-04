import {createSlice} from "@reduxjs/toolkit";

const initialState = [false,false]

type logicStateType = Array<boolean>;

const logicSlice = createSlice({
    name: "logicgate",
    initialState,
    reducers: {
        addSwitch: (state, action) => {
            state.push(false);
        },
        removeSwitch: (state, action) => {
            state.pop();
        },
        updateSwitch: (state, action) => {
            state[action.payload.index] = action.payload.isActive;
        }
    }
})

export const { addSwitch, removeSwitch, updateSwitch } = logicSlice.actions;
export const selectLogicState = (state: logicStateType) => state;