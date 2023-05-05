import axios from 'axios';

export default {
    async Register(data) {
        return await axios
            .post(`${process.env.REACT_APP_API_KEY}register/`, data)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    },
    async Login(data) {
        return await axios
            .post(`${process.env.REACT_APP_API_KEY}login/`, data)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    }
}
