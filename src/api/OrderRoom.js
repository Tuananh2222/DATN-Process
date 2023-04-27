import BaseAPIConfig from "./BaseAPIConfig";

class OrderRoomAPI {
    controller = "OrderRooms";

    getAllOrderRoom(){
        return BaseAPIConfig.get(`${this.controller}`)
    }
}
export default new OrderRoomAPI();