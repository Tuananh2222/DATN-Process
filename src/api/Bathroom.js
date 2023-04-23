import BaseAPIConfig from "./BaseAPIConfig";

class BathroomAPI {
    controller = "Bathrooms";

    /**
     * Lấy tất cả dữ liệu của facilities
     * @returns tất cả dữ liệu của facilities
     */
    getAllBathroom(){
        return BaseAPIConfig.get(`${this.controller}`)
    }
}
export default new BathroomAPI();