import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/IUser";


export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if(!response.ok) {
        throw new Error('Server Error!')
      }

      const data = await response.json();
      return data.map((user: IUser ) => ({...user, active: true}));

    } catch(error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(new Error('Error'))
    }
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [] as IUser[],
    status: '',
    error: '',
  },
  reducers: {
    activeUser(state, action: PayloadAction<number>) {
      const user = state.users.find(user => user.id === action.payload)
      if(user) {
        user.active = true
      }
    },
    archiveUser(state, action: PayloadAction<number>) {
      const user = state.users.find(user => user.id === action.payload)
      if(user) {
        user.active = false
      }
    },
    removeUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.status = 'loading';
      state.error = '';
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.users = action.payload;
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.status = 'rejected';
      action.error.message ? state.error = action.error.message : state.error = '';
    })
  },
});

export const {removeUser, activeUser, archiveUser} = usersSlice.actions;

export default usersSlice.reducer;