import { createSlice } from "@reduxjs/toolkit";

const INITIALSTATE = {
    filteredCollege:[

    ]
}

const tableSlice = createSlice({
    name:"tableLayout",
    initialState:INITIALSTATE,
    reducers:{
        //reducer is for adding data to initial state 
        addFilter:(state, action)=>{
           const data = action.payload;
           console.log(data, "ye");
           state.filteredCollege = data.map(obj => ({ ...obj }));
           console.log(state.filteredCollege,"ye2")
        },
        //to filter on the basis of college
        filterit:(state, action)=>{
            const {name, data} = action.payload;
           
            state.filteredCollege = data.map((item)=>item.college!==name?  {...item, show:false}:item) ;
            console.log(state.filteredCollege, "checking");
        }
    }
})

export const tableReducer = tableSlice.reducer;
export const actions = tableSlice.actions;

export const tableSelector = (state)=>state.tableReducer