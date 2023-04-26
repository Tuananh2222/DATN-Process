import BaseAPIConfig from "./BaseAPIConfig";

class EvaluateAPI {
  controller = "Evaluates";

  insertEvaluate(evaluate) {
    return BaseAPIConfig.post(`${this.controller}`,evaluate);
  }
}
export default new EvaluateAPI();
