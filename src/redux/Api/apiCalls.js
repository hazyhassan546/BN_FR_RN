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
