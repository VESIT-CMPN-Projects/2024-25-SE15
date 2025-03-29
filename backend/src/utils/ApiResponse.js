class ApiResponse {
  constructor(StatusCode, message = "Success", data){
    this.StatusCode = StatusCode;
    this.message = message;
    this.data = data;
    this.success = StatusCode < 400;
  }
}

export {ApiResponse};