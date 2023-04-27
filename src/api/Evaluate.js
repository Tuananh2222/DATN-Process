import BaseAPIConfig from "./BaseAPIConfig";

class EvaluateAPI {
  controller = "Evaluates";

  getEvaluate(){
    return BaseAPIConfig.get(`${this.controller}`)
  }

  insertEvaluate(evaluate) {
    return BaseAPIConfig.post(`${this.controller}`,evaluate);
  }
}
export default new EvaluateAPI();
