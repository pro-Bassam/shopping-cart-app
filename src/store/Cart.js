import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // actions => action handlers
    itemAdded: (items, action) => {
      const index = items.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        items[index].qnty += 1;
      } else {
        items.push({ ...action.payload, qnty: 1 });
      }
    },

    itemRemoved: (items, action) => {
      const index = items.findIndex((item) => item.id === action.payload);
      items.splice(index, 1);
    },

    itemDecremented: (items, action) => {
      const index = items.findIndex((item) => item.id === action.payload);
      if (items[index].qnty > 1) {
        items[index].qnty -= 1;
      }
      // else {
      //   const index = items.findIndex((item) => item.id === action.payload);
      //   items.splice(index, 1);
      // }
    },
  },
});

export const { itemAdded, itemRemoved, itemDecremented } = slice.actions;
export default slice.reducer;

// () => fn(dispatch, getState) -> Thunk
// Selector
export const getItemById = (cart, itemId) =>
  cart.filter((item) => item.id == itemId)[0];
