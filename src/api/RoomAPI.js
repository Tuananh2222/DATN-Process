import BaseAPIConfig from "./BaseAPIConfig";

class RoomAPI {
    controller = "Rooms";

    /**
     * Filter user
     * @param {*} pageSize Số bản ghi trên trang
     * @param {*} pageNumber trang hiện tại
     * @param {*} keyword từ khóa tìm kiếm
     * @returns {
    *  TotalRecord : Tổng số bản ghi;
    *  RowStart : Bản ghi bắt đầu;
    *  RowEnd : Bản ghi kết thúc;
    *  CurrentPage : Trang hiện tại;
    *  data : Dữ liệu người dùng
    * }
    */
    filter(pageSize, pageNumber, keyword, minPrice, maxPrice, countPeople) {
        let filterQuery = `filter?pageSize=${pageSize}&pageNumber=${pageNumber}`
        if (keyword)
            filterQuery += `&keyword=${keyword}`;
        if (minPrice && minPrice != null)
            filterQuery += `&minPrice=${minPrice}`;
        if (maxPrice && maxPrice != null)
            filterQuery += `&maxPrice=${maxPrice}`;
        if (countPeople && countPeople != null)
            filterQuery += `&countPeople=${countPeople}`

        return BaseAPIConfig.get(`${this.controller}/${filterQuery}`)
    }
    getRoomByID(roomID) {
        return BaseAPIConfig.get(`${this.controller}/${roomID}`)
    }
    deleteRoom(roomID) {
        return BaseAPIConfig.delete(`${this.controller}/${roomID}`)
    }
    deleteMultiRoom(listRoomID) {
        debugger
        return BaseAPIConfig.delete(`${this.controller}/multi`, listRoomID)
    }
    getNewRoomCode() {
        return BaseAPIConfig.get(`${this.controller}/NewRoomCode`)
    }
    insertNewRoom(user) {
        return BaseAPIConfig.post(`${this.controller}`, user)
    }
    updateRoom(roomID, room) {
        return BaseAPIConfig.put(`${this.controller}/${roomID}`, room)
    }
}
export default new RoomAPI();