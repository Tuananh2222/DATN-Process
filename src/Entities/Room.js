import { v4 as uuidv4 } from "uuid";

export class RoomInsert {
  ///Id phòng
  RoomID;
  //Mã phòng
  RoomCode;
  /// Tên phòng
  RoomName;
  RoomSize;
  BedTypeD;
  BathroomID;
  CountPeople;
  Price;
  ViewRoom;
  ImgUrl;
  Description;
  ERROR;
  constructor(RoomCode) {
    this.RoomID = uuidv4();
    this.RoomCode = RoomCode;
    this.RoomName = "";
    this.RoomSize = "";
    this.BedTypeD = "";
    this.BathroomID = "";
    this.CountPeople = 0;
    (this.Price = 0), (this.ViewRoom = "");
    this.ImgUrl = "";
    this.Description = "";
    this.ERROR = {
      RoomCode: "",
      RoomName: "",
      RoomSize: "",
      BedTypeD: "",
      BathroomID: "",
      CountPeople: "",
      Price: "",
      ViewRoom: "",
      ImgUrl: "",
      Description: "",
    };
  }
}
