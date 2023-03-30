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
    filter(pageSize, pageNumber, keyword, roomID, roomSize, bedType, bathroom) {
        let filterQuery = `filter?pageSize=${pageSize}&pageNumber=${pageNumber}`
        if (keyword)
            filterQuery += `&keyword=${keyword}`;
        if (roomID && roomID != "all")
            filterQuery += `&roomID=${roomID}`;
        if (roomSize && roomSize != "all")
            filterQuery += `&roomSize=${roomSize}`;
        if (bedType && bedType != "all")
            filterQuery += `&bedType=${bedType}`;
        if (bathroom && bathroom != "all")
            filterQuery += `&bathroom=${bathroom}`;
        return BaseAPIConfig.get(`${this.controller}/${filterQuery}`)
    }
}
export default new RoomAPI();