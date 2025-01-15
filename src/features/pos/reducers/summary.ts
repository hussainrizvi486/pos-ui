import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from "./store";

interface SummaryItem {
    item_name: string;
    price: number;
    quantity: number;
    image?:string,
    uom?:string
    amount:number
}

interface POSState {
    summaryItems: SummaryItem[];
    totalCost: number;
}

const initialState: POSState = {
    summaryItems: [],
    totalCost: 0,
};

export const posSummarySlice = createSlice({
    name: 'pos',
    initialState: initialState,
    reducers: {
        addItemToSummary: (state, action: PayloadAction<Omit<SummaryItem, 'quantity'>>) => {
            const existingItem = state.summaryItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.summaryItems.push({ ...action.payload, quantity: 1 });
            }
            state.totalCost += action.payload.price;
        },
        updateItemQuantity: (state, action: PayloadAction<{ id: string; quantity: number; oldQuantity: number }>) => {
            const { id, quantity, oldQuantity } = action.payload;
            const item = state.summaryItems.find(item => item.id === id);
            if (item) {
                const priceDiff = item.price * (quantity - oldQuantity);
                item.quantity = quantity;
                state.totalCost += priceDiff;
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            const item = state.summaryItems.find(item => item.id === action.payload);
            if (item) {
                state.totalCost -= item.price * item.quantity;
                state.summaryItems = state.summaryItems.filter(item => item.id !== action.payload);
            }
        }
    },
});

export const { addItemToSummary, updateItemQuantity, removeItem } = posSummarySlice.actions;
export const getSummaryItems = (state: RootState) => state.pos.summaryItems;
export const getTotalCost = (state: RootState) => state.pos.totalCost;

export default posSummarySlice.reducer;