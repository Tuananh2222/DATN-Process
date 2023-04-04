import BaseAPIConfig from "./BaseAPIConfig";

class FacilitiesAPI {
    controller = "Facilities";

    /**
     * Lấy tất cả dữ liệu của facilities
     * @returns tất cả dữ liệu của facilities
     */
    getAllFacilities(){
        return BaseAPIConfig.get(`${this.controller}`)
    }
}
export default new FacilitiesAPI();