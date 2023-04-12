import BaseAPIConfig from "./BaseAPIConfig";

class UserAPI {
    controller = "Users";

    getUserByUUID(uuid){
        return BaseAPIConfig.get(`${this.controller}/getUserByUUID/${uuid}`)
    }
}

export default new UserAPI