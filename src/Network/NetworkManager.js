import Authentication from "./Authentication";

export default class NetworkManager {
    static authenticate(callback) {
        return Authentication(callback);
    }
}
