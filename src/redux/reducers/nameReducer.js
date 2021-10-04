import Toast from 'react-native-toast-message';
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
  GET_RELATED_NAMES_ERROR,
  CLEAR_RELATED_NAMES,
  GET_RELATED_NAMES_SUCCESS,
  SET_DETAIL_ITEM,
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  SET_ORIGIN,
  GET_WORLD_TRENDING_NAMES_ERROR,
  GET_WORLD_TRENDING_NAMES_SUCCESS,
  GET_WORLD_TRENDING_NAMES,
} from '../types/types';

const defaultState = {
  namesList: [],
  trendingNamesList: [],
  worldTrendingNamesList: [],
  relatedNamesList: [],
  favorites: [],
  detailItem: {},
  getNameSuccess: false,
  getNameError: false,
  error: '',
  gender: 'male',
  genderIndex: 0,
  religion: '',
  keyword: '',
  alphabet: '',
  origin: '',
  loading: false,
  T_loading: false,
  WT_loading: false,
};
export default function nameReducer(state = defaultState, action = {}) {
  const {type, payload} = action;
  switch (type) {
    case GET_NAMES:
      return {
        ...state,
        loading: true,
        getNameSuccess: false,
        getNameError: false,
        error: '',
      };
    case GET_NAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        getNameSuccess: true,
        getNameError: false,
        error: '',
        namesList: payload,
      };
    case GET_NAMES_ERROR:
      return {
        ...state,
        loading: false,
        getNameSuccess: false,
        getNameError: true,
        error: payload,
      };

    case GET_RELATED_NAMES:
      return {
        ...state,
        loading: true,
        getNameSuccess: false,
        getNameError: false,
        error: '',
      };
    case GET_RELATED_NAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        getNameSuccess: true,
        getNameError: false,
        error: '',
        relatedNamesList: payload,
      };
    case GET_RELATED_NAMES_ERROR:
      return {
        ...state,
        loading: false,
        getNameSuccess: false,
        getNameError: true,
        error: payload,
        relatedNamesList: [],
      };
    case CLEAR_RELATED_NAMES:
      return {
        ...state,
        relatedNamesList: [],
      };
    case GET_TRENDING_NAMES:
      return {
        ...state,
        T_loading: true,
        getNameSuccess: false,
        getNameError: false,
        error: '',
      };
    case GET_TRENDING_NAMES_SUCCESS:
      return {
        ...state,
        T_loading: false,
        getNameSuccess: true,
        getNameError: false,
        error: '',
        trendingNamesList: payload,
      };
    case GET_TRENDING_NAMES_ERROR:
      return {
        ...state,
        T_loading: false,
        getNameSuccess: false,
        getNameError: true,
        error: payload,
      };

    case GET_WORLD_TRENDING_NAMES:
      return {
        ...state,
        WT_loading: true,
        getNameSuccess: false,
        getNameError: false,
        error: '',
      };
    case GET_WORLD_TRENDING_NAMES_SUCCESS:
      return {
        ...state,
        WT_loading: false,
        getNameSuccess: true,
        getNameError: false,
        error: '',
        worldTrendingNamesList: payload,
      };
    case GET_WORLD_TRENDING_NAMES_ERROR:
      return {
        ...state,
        WT_loading: false,
        getNameSuccess: false,
        getNameError: true,
        error: payload,
      };
    case SET_GENDER:
      return {
        ...state,
        gender: payload.value,
        genderIndex: payload.id,
      };
    case CLEAR_GENDER:
      return {
        ...state,
        gender: '', // incase of both option
      };
    case SET_RELIGION:
      return {
        ...state,
        religion: payload,
      };
    case CLEAR_RELIGION:
      return {
        ...state,
        religion: '',
      };
    case SET_KEYWORD:
      return {
        ...state,
        keyword: payload,
      };
    case CLEAR_KEYWORD:
      return {
        ...state,
        keyword: '',
      };
    case SET_ALPHABET:
      return {
        ...state,
        alphabet: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case SET_DETAIL_ITEM:
      return {
        ...state,
        detailItem: payload,
      };
    case ADD_TO_FAVORITE:
      if (state.favorites.includes(payload)) {
        // remove part
        Toast.show({
          type: 'info',
          text1: payload.name + ' is  removed from favorites. ',
        });
        return {
          ...state,
          favorites: state.favorites.filter(function (value, index, arr) {
            return value !== payload;
          }),
        };
      } else {
        Toast.show({
          type: 'success',
          text1: payload.name + ' is successfully added to favorites. ',
        });
        // add  part
        return {
          ...state,
          favorites: [payload, ...state.favorites],
        };
      }
    // return {
    //   ...state,
    //   favorites:
    //     state?.favorites?.indexOf(payload) > -1
    //       ? state.favorites.filter(function (value, index, arr) {
    //           return value !== payload;
    //         })
    //       : [payload, ...state.favorites],
    // };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
      };
    case SET_ORIGIN: {
      return {
        ...state,
        origin: payload,
      };
    }
    default:
      return state;
  }
}
