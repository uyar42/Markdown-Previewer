import { createSlice } from "@reduxjs/toolkit";

const help = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

  En güzel yemek etliekmektir...
  Konya.

 *[Mehmet Ali UYAR](https://github.com/uyar42)*`;

export const markdownSlice = createSlice({
  name: "text",
  initialState: {
    items: [],
    help: help,
    helpStatus: false,
  },
  reducers: {
    setInput: (state, action) => {
      state.items = [action.payload];
    },
    helper: (state, action) => {
      state.helpStatus = !state.helpStatus;
    },
  },
});

export const { setInput, helper } = markdownSlice.actions;
export default markdownSlice.reducer;
