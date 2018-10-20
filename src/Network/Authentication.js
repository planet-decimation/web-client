import request from "request";
import NetworkUtil from "./NetworkUtil";

export default function Authentication(callback) {
    request(NetworkUtil.buildURL("/auth/check"), (err, res, body) => {
        if (err || !body) {
            request(NetworkUtil.buildURL("/auth/id"), (err, res, body) => {
                if (err || !body) {
                    window.location.href = "/error/101";
                } else {
                    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${body}&response_type=code&scope=openid%20email%20profile&redirect_uri=${window.location.protocol}//${window.location.host}`;
                }
            });
        } else {
            callback(body);
        }
    });
}
