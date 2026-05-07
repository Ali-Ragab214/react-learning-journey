import {create } from "zustand";

//we pass in a callback function that set method 'set' 
//useStore is the custom hook that we will use in our components to access the state and actions defined in the store
//useStore is a global hook 
export const useStore = create((set)=>({
    //Define State + its initial value ,count is the state 
    //any component can read count 
    count : 0,

    //the action :function describe how to change state 
    reset: () => set({count:0}),
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1})),
    increaseByTen:() => set((state) => ({count: state.count + 10}))

}))