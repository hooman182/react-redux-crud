import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const readUsers = createAsyncThunk("users", async () => {
    const data = await axios.get("users").then((res) => res.data);
    return data;
});

export const createUser = createAsyncThunk("users/add", async (item) => {
    const res = await axios.post("users", item).then((res) => res);
    console.log(res);
    return res;
});

export const deleteUser = createAsyncThunk("users/delete", async (id) => {
    const res = await axios.delete("users/" + id).then((res) => res);
    return res;
});

export const updateUser = createAsyncThunk("users/put", async (data) => {
    const res = await axios
        .put("users/" + data.id, {
            name: data.name,
            username: data.username,
            email: data.email,
        })
        .then((res) => res.data)
        .catch((err) => console.log(err));
    return res;
});

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: false,
        response: {},
        search: ''
    },
    extraReducers: (builder) => {
        /* read users api */
        builder.addCase(readUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(readUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false;
        });
        builder.addCase(readUsers.rejected, (state) => {
            state.error = true;
            state.loading = false;
        });

        /* create user api */
        builder.addCase(createUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.response = action.payload;
            state.loading = false;
        });

        /* delete user api */
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.response = action.payload;
            console.log(state.response);
        });

        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.response = action.payload;
            console.log(state.response);
        });
    },
});

export default usersSlice.reducer;
