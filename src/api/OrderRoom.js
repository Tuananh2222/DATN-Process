import BaseAPIConfig from "./BaseAPIConfig";

class OrderRoomAPI {
  controller = "OrderRooms";

  getAllOrderRoom() {
    return BaseAPIConfig.get(`${this.controller}`);
  }

  insertOrderRoom(orderRoom) {
    return BaseAPIConfig.post(`${this.controller}`, orderRoom);
  }
  getOrderRoomByRoomID(roomID) {
    return BaseAPIConfig.get(`${this.controller}/roomID/${roomID}`);
  }

  getOrderRoomByUserID(userID) {
    return BaseAPIConfig.get(`${this.controller}/userID/${userID}`);
  }
  updateOrderStatus(orderRoomID, statusOrder) {
    return BaseAPIConfig.put(`${this.controller}/${orderRoomID}`, statusOrder);
  }
}
export default new OrderRoomAPI();
