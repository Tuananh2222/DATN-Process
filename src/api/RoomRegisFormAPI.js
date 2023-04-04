import BaseAPIConfig from "./BaseAPIConfig";

class RoomRegisFormAPI {
    controller = "RoomRegisForm";

    /**
     * Lấy tất cả dữ liệu của facilities
     * @returns tất cả dữ liệu của facilities
     */
    getRoomRegisFormById(id){
        return BaseAPIConfig.get(`${this.controller}/${id}`)
    }
}
export default new RoomRegisFormAPI();