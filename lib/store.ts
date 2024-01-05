import { configureStore } from '@reduxjs/toolkit'
import andReducer from "./features/logic-gates/andSlice"
import orReducer from "./features/logic-gates/orSlice"

export const makeStore = () => {
    return configureStore({
        reducer: {
            andGate: andReducer,
            orGate: orReducer
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']