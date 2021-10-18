import {createAction} from 'redux-actions';
import {
  CLEAR_GENDER,
  CLEAR_KEYWORD,
  CLEAR_RELIGION,
  GET_NAMES,
  GET_NAMES_ERROR,
  GET_NAMES_SUCCESS,
  GET_TRENDING_NAMES,
  GET_TRENDING_NAMES_ERROR,
  GET_TRENDING_NAMES_SUCCESS,
  SET_GENDER,
  SET_KEYWORD,
  SET_RELIGION,
  SET_ALPHABET,
  SET_LOADING,
  GET_RELATED_NAMES,
  GET_RELATED_NAMES_SUCCESS,
  GET_RELATED_NAMES_ERROR,
  CLEAR_RELATED_NAMES,
  SET_DETAIL_ITEM,
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  SET_ORIGIN,
  GET_WORLD_TRENDING_NAMES,
  GET_WORLD_TRENDING_NAMES_SUCCESS,
  GET_WORLD_TRENDING_NAMES_ERROR,
  VISITED_ALL_NAMES,
  RESET,
  SET_SEARCH_TYPE,
  GET_ALL_ORIGINS,
  GET_ALL_ORIGINS_SUCCESS,
  GET_ALL_ORIGINS_ERROR,
} from '../types/types';

export const nameActionCreator = {
  getNames: createAction(GET_NAMES),
  getNamesSuccess: createAction(GET_NAMES_SUCCESS),
  getNamesError: createAction(GET_NAMES_ERROR),
  getTrendingNames: createAction(GET_TRENDING_NAMES),
  getTrendingNamesSuccess: createAction(GET_TRENDING_NAMES_SUCCESS),
  getTrendingNamesError: createAction(GET_TRENDING_NAMES_ERROR),

  getWorldTrendingNames: createAction(GET_WORLD_TRENDING_NAMES),
  getWorldTrendingNamesSuccess: createAction(GET_WORLD_TRENDING_NAMES_SUCCESS),
  getWorldTrendingNamesError: createAction(GET_WORLD_TRENDING_NAMES_ERROR),

  getRelatedNames: createAction(GET_RELATED_NAMES),
  getRelatedNamesSuccess: createAction(GET_RELATED_NAMES_SUCCESS),
  getRelatedNamesError: createAction(GET_RELATED_NAMES_ERROR),
  clearRelatedNames: createAction(CLEAR_RELATED_NAMES),
  setDetailItem: createAction(SET_DETAIL_ITEM),
  ////

  setKeyword: createAction(SET_KEYWORD),
  clearKeyword: createAction(CLEAR_KEYWORD),
  setGender: createAction(SET_GENDER),
  clearGender: createAction(CLEAR_GENDER),
  setReligion: createAction(SET_RELIGION),
  clearReligion: createAction(CLEAR_RELIGION),
  setAlphabet: createAction(SET_ALPHABET),
  setOrigin: createAction(SET_ORIGIN),

  /////
  setLoading: createAction(SET_LOADING),
  /////
  addToFav: createAction(ADD_TO_FAVORITE),
  removeFromFav: createAction(REMOVE_FROM_FAVORITE),

  visitedAllNames: createAction(VISITED_ALL_NAMES),
  resetState: createAction(RESET),

  setSearchType: createAction(SET_SEARCH_TYPE),

  getAllOrigin: createAction(GET_ALL_ORIGINS),
  getAllOriginSuccess: createAction(GET_ALL_ORIGINS_SUCCESS),
  getAllOriginError: createAction(GET_ALL_ORIGINS_ERROR),
};
