const defaultURL = "https://api.planetdecimation.com";
const argRegex = /<[^>]+>/;

export default class NetworkUtil {
    static buildURL(format, ...args) {
        return args.reduce((str, arg) => str.replace(argRegex, arg), `${localStorage.planet_decimation_api || defaultURL}/${format}`);
    }
}

window.planetDecimation = window.planetDecimation || {};
window.planetDecimation.setAPI = url => {
    localStorage.planet_decimation_api = url;
};
window.planetDecimation.resetAPI = () => {
    localStorage.removeItem("planet_decimation_api");
};
