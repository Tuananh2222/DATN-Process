import BaseAPIConfig from "./BaseAPIConfig";

class BedTypeAPI {
    controller = "BedTypes";

    getBedType(){
        return BaseAPIConfig.get(`${this.controller}`)
    }
}
export default new BedTypeAPI();