import {Platform} from 'react-native'
export const ENUMS = {
  baseURL: Platform.OS=="android"?"http://10.0.2.2:5000":"http://localhost:5000",
  mainApi: "/api/getRequiredName",
  trendingNames: "/api/getRequiredName/trendingNames",
};

