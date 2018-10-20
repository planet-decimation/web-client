import request from "request";
import NetworkUtil from "./NetworkUtil";

export default function Authentication(callback) {
    let code = window.location.search ? window.location.search.substr(1).split("&").find(s => s.startsWith("code=")) : null;
    if (code) {
        code = code.substr(5);
        request.post(NetworkUtil.buildURL("/auth/login"), {
            "body": code
        }, (err, res, body) => {
            if (err || !body) {
                window.location.href = "/error/102";
            } else {
                callback(body);
            }
        });
    }
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
