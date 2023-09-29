import {RootState} from '../store';

export const newSelecter = (state: RootState) => state.getNewReducer.news;
