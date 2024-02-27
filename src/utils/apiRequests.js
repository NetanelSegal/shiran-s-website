import axios from "axios";

const apiGet = async (url) => {
    try {
        const resp = await axios({
            method: "GET",
            url,
            withCredentials: true
        })
        return resp
    } catch (error) {
        throw error;
    }
}

const apiPost = async (url, data) => {
    try {
        const resp = await axios({
            method: "POST",
            url,
            data,
            withCredentials: true
        })
        return resp
    } catch (error) {
        throw error;
    }
}

const apiPut = async (url, data) => {
    try {
        const resp = await axios({
            method: "PUT",
            url,
            data,
            withCredentials: true
        })
        return resp
    } catch (error) {
        throw error;
    }
}
const apiDelete = async (url, data) => {
    try {
        const resp = await axios({
            method: "DELETE",
            url,
            data,
            withCredentials: true
        })
        return resp
    } catch (error) {
        throw error;
    }
}


export { apiGet, apiPost, apiPut, apiDelete }