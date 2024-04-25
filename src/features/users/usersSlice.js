import { createSlice } from "@reduxjs/toolkit";

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
            state.users = state.users.map((user) => {

                if (user.id == action.payload.id) {
                    return {
                        name: action.payload.name,
                        username: action.payload.username,
                        email: action.payload.email
                    }
                } else {
                    return user
                }

            })
        },
    },
});

export const {addNewUser, removeUser, updateUser} = usersSlice.actions
export default usersSlice.reducer