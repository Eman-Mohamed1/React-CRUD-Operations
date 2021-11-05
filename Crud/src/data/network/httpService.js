import axios from "axios";
// import AppCache from "../cache/AppCache";

export default class HttpService {
    /**
     * @param {HttpRequest} request
     */
    static  async send(request) {
        const url = request.url;
        switch (request.method) {
            case "POST" :
                const response_add = await axios.post(url, request.body);
                return response_add.data;
            case "GET" :
                const response_get = await  axios.get(url);
                return response_get.data;

            case "PUT" :
                const response_update= await axios.put(url, request.body);
                return response_update.data;
            case "DELETE":
                return axios.delete(url);
            default:
                throw new Error("request method must be added before send request.");
        }
    }
}