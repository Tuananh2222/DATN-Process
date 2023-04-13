import { v4 as uuidv4 } from 'uuid';

export class UserInsert{
    ///Id người dùng
    UserID
    /// Tên nhân viên
    UserName
    /// Email
    Email
    ///Phone number
    PhoneNumber
    /// Address
    Address
    /// Is Admin
    IsAdmin
    ///uid
    UUID
    constructor(uid, email){
        this.UserID = uuidv4()
        this.UserName = ""
        this.Email = email
        this.PhoneNumber = ""
        this.Address = ""
        this.IsAdmin = 0
        this.UUID = uid
    }
}