import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const usersList = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
    },
];

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: usersList,
    },
    reducers: {
        addNewUser: (state, action) => {
            state.users = [...state.users, action.payload];
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id != action.payload)
        },
        updateUser: (state,action) => {
            
        },
    },
});

export const {addNewUser, removeUser} = usersSlice.actions
export default usersSlice.reducer