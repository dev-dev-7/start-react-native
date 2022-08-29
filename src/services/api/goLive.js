import http from "../axios";
class GoLive {

  live(data) {
    return http.post("live", data);
  }

}
export default new GoLive();