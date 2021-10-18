import { ENUMS } from "../../common/routes";
import { API } from "../../helpers/apiHelper";

export function getNamesApi(params) {
  return API({
    method: "POST",
    url: ENUMS.baseURL + ENUMS.mainApi,
    data: params,
  }).then((response) => response.data);
}

export function getTrendingNamesApi() {
  return API({
    method: "GET",
    url: ENUMS.baseURL + ENUMS.trendingNames,
  }).then((response) => response.data);
}

export function getWorldTrendingNamesApi() {
  return API({
    method: "GET",
    url: ENUMS.baseURL + ENUMS.worldTrendingNames,
  }).then((response) => response.data);
}

export function getAllOriginApi() {
  return API({
    method: "GET",
    url: ENUMS.baseURL + ENUMS.getAllOrigin,
  }).then((response) => response.data);
}

export function getBlogsApi() {
  return API({
    method: "GET",
    url: ENUMS.baseURL + ENUMS.getLatestBlogs,
  }).then((response) => response.data);
}