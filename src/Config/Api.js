    import { store } from "../Redux/Store";
import { pathOr } from "ramda";

  
class Api {
    static headers() {
        const state = store.getState();
        const accessToken = pathOr("",["user","AccessToken"],state.Login);
        return {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+accessToken
        };
    }

    static get(route) {
        return this.xhr(route, null, 'GET');
    }
    static post(route, params) {
        return this.xhr(route, params, 'POST');
    }
    static xhr(route, params, verb) {
        
       const host = "http://15.206.201.95/reactapi/public/v1/" 
        const url = `${host}${route}`;
        const options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
        options.headers = Api.headers();
        return fetch(url, options).then((resp) => {
            console.log("ResponseUrl",url)
            
            const json = resp.json();
            
            if (resp.ok) {
                console.log(url, json);
                return json;
            }
            return json.then((err) => { throw err; });
        });
    }
}
export default Api;