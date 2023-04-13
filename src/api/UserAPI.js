import BaseAPIConfig from "./BaseAPIConfig";

class UserAPI {
    controller = "Users";

    getUserByUUID(uuid) {
        return BaseAPIConfig.get(`${this.controller}/getUserByUUID/${uuid}`)
    }

    editUser(user, id) {
        return BaseAPIConfig.put(`${this.controller}/${id}`, user)
    }

    insertUser(user){
        return BaseAPIConfig.post(`${this.controller}`,user)
    }
}

export default new UserAPI