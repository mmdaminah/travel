import {createSlice} from "@reduxjs/toolkit";

const init = {
    language : null,
    moneyUnit : null,
}

const siteSetting = createSlice({
    name : 'siteSetting',
    initialState : init,
    reducers : {
        changeLanguage: (state , action)=>{
            action.payload.language && (state.language = action.payload.language)
        },
        changeMoneyUnit: (state , action)=>{
            action.payload.moneyUnit && (state.moneyUnit = action.payload.moneyUnit)
        },
    }
})

export const {changeMoneyUnit,changeLanguage} = siteSetting.actions
export default siteSetting.reducer