class ApiResponse {
    constructor(code, data, message="success") {
        this.code = code;
        this.data = data;
        this.message = message;
    }
}

module.exports = ApiResponse;
