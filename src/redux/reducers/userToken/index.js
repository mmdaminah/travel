import {createSlice} from "@reduxjs/toolkit";

const init = {
    accessToken: null,
    refreshToken: null
}

const userToken = createSlice({
    name: 'userToken',
    initialState: init,
    reducers: {
        login: (state, action) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
        },
        logout: (state, action) => {
            state.accessToken = null
            state.refreshToken = null
        }
    }
})

export const {login, logout} = userToken.actions
export default userToken.reducer