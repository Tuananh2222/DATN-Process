import BaseAPIConfig from "./BaseAPIConfig";

class BathroomAPI {
    controller = "Bathrooms";

    getAllBathroom(){
        return BaseAPIConfig.get(`${this.controller}`)
    }
}
export default new BathroomAPI();