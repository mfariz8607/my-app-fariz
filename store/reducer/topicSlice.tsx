import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// State interface
interface TopicState {
  totalTopics: number;
  readTopics: number;
}

// Initial state
const initialState: TopicState = {
  totalTopics: 5,
  readTopics: 0,
};

// Create slice
const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    // Set total number of topics
    setTotalTopics: (state, action: PayloadAction<number>) => {
      state.totalTopics = action.payload;
    },
    // Set how many topics have been read
    setReadTopics: (state, action: PayloadAction<number>) => {
      state.readTopics = action.payload;
    },
    // Reset topic progress
    resetTopic: () => initialState,
  },
});

// Export actions
export const { setTotalTopics, setReadTopics, resetTopic } = topicSlice.actions;

// Export reducer
export default topicSlice.reducer;
