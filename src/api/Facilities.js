import BaseAPIConfig from "./BaseAPIConfig";

class FacilitiesAPI {
    controller = "Facilities";

    /**
     * Lấy tất cả dữ liệu của facilities
     * Author : mhungwebdev (5/9/2022)
     * @returns tất cả dữ liệu của facilities
     */
    getAllFacilities(){
        return BaseAPIConfig.get(`${this.controller}`)
    }
}
export default new FacilitiesAPI();