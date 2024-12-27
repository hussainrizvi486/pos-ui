import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "../../../store";


// Define a type for the slice state
interface POSState {
    summaryItems: object[]

}

const initialState: POSState = {
    summaryItems: [],
}

export const counterSlice = createSlice({
    name: 'pos',
    initialState: initialState,
    reducers: {
        addItemToSummary: (state, payload) => {
            console.log(state.summaryItems);
            console.log(payload);
        },
    },
})

export const { addItemToSummary } = counterSlice.actions;
export const getSummaryItems = (state: RootState) => state.pos.items;
export default counterSlice.reducer