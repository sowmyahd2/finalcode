import { createProxyMiddleware } from 'http-proxy-middleware';
import { store } from "../Redux/Store";
import { pathOr } from "ramda";

// Define your API class
class Api {
    static headers() {
        const state = store.getState();
        const accessToken = pathOr("", ["user", "AccessToken"], state.Login);
        return {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        };
    }

    static get(route) {
        return this.xhr(route, null, 'GET');
    }

    static post(route, params) {
        return this.xhr(route, params, 'POST');
    }

    static xhr(route, params, verb) {
        const host = "http://13.235.76.80/reactapi/public/v1/";

        // Create a proxy instance
        const proxy = createProxyMiddleware({
            target: host,
            changeOrigin: true,  // Necessary for virtual hosted sites
            pathRewrite: {
                [`^/api`]: '',  // Remove the '/api' path prefix when forwarding the request
            },
        });

        const url = `${host}${route}`;
        const options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
        options.headers = Api.headers();

        // Use the proxy middleware for the fetch request
        return fetch(url, {
            ...options,
            agent: new proxy.Agent(options),
        }).then((resp) => {
            const json = resp.json();
            console.log(json);
            return json;
        });
    }
}

export default Api;
