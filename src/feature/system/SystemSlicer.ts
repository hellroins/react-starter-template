import { createSlice } from "@reduxjs/toolkit";

const initialState: SystemEntity = {
    isOpen: [], // for active default menu
    defaultId: 'dashboard',
    opened: true
}

const SystemSlicer = createSlice({
    name: 'system',
    initialState,
    reducers: {
        MENU_OPEN: (state, action: any) => {
            const id = action.id;
            state.isOpen = [id];
        },
        MENU_TOGGLE: (state, action: any) => {
            state.opened = action.opened;
        },
    }
});

export const {
    MENU_OPEN,
    MENU_TOGGLE
} = SystemSlicer.actions;

export default SystemSlicer.reducer;