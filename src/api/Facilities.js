import BaseAPIConfig from "./BaseAPIConfig";

class FacilitiesAPI {
    controller = "Facilities";

    getAllFacilities(){
        return BaseAPIConfig.get(`${this.controller}`)
    }
}
export default new FacilitiesAPI();