import { Alert } from "react-native";
import http from "../axios";
class Auction {

  createAuction(data) {
    return http.post("auction", data);
  }

}
export default new Auction();