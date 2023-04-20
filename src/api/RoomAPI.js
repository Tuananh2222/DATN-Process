import BaseAPIConfig from "./BaseAPIConfig";

class RoomAPI {
    controller = "Rooms";

    /**
     * Filter user
     * @param {*} pageSize Số bản ghi trên trang
     * @param {*} pageNumber trang hiện tại
     * @param {*} keyword từ khóa tìm kiếm
     * @param {*} roomID của role muốn filter
     * @returns {
    *  TotalRecord : Tổng số bản ghi;
    *  RowStart : Bản ghi bắt đầu;
    *  RowEnd : Bản ghi kết thúc;
    *  CurrentPage : Trang hiện tại;
    *  data : Dữ liệu người dùng
    * }
    */
    filter(pageSize, pageNumber, keyword, minPrice, maxPrice) {
        let filterQuery = `filter?pageSize=${pageSize}&pageNumber=${pageNumber}`
        if (keyword)
            filterQuery += `&keyword=${keyword}`;
        if (minPrice && minPrice != null)
            filterQuery += `&minPrice=${minPrice}`;
        if (maxPrice && maxPrice != null)
            filterQuery += `&maxPrice=${maxPrice}`;

        return BaseAPIConfig.get(`${this.controller}/${filterQuery}`)
    }
    /**
     * Lấy thông tin user theo id
     * @param {*} roomID 
     * @returns thông tin chi tiết room
     */
    getRoomByID(roomID) {
        return BaseAPIConfig.get(`${this.controller}/${roomID}`)
    }
}
export default new RoomAPI();