import { createReducer } from "@reduxjs/toolkit";

export const DataReducer = createReducer({}, {
    DATA_REQUEST: (state) => {
        return {
            ...state,
            loading: true,
        };
    },
    DATA_SUCCESS: (state, action) => {
        return {
            ...state,
            loading: false,
            allTickets: action.payload.tickets,
            allUser: action.payload.users,
        };
    },
    DATA_FAILURE: (state) => {
        return {
            ...state,
            loading: false,
            allTickets: [],
            allUser: [],
        };
    },
});

export const SelectDataReducer = createReducer({}, {
    SELECT_DATA_REQUEST: (state) => {
        return {
            ...state,
            loading: true,
            selectedData: [],
        };
    },
    SELECT_DATA_FAILURE: (state, action) => {
        return {
            ...state,
            loading: false,
            selectedData: [],
            message: action.payload.message,
        };
    },
    SELECT_DATA_SUCCESS: (state, action) => {
        return {
            ...state,
            loading: false,
            selectedData: action.payload.selectedData,
            user: action.payload.user,
        };
    },
});

