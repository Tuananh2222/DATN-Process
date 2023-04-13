import BaseAPIConfig from "./BaseAPIConfig";

class UserAPI {
    controller = "Users";

    getUserByUUID(uuid) {
        return BaseAPIConfig.get(`${this.controller}/getUserByUUID/${uuid}`)
    }

    editUser(user, id) {
        return BaseAPIConfig.put(`${this.controller}/${id}`, user)
    }
}

export default new UserAPI