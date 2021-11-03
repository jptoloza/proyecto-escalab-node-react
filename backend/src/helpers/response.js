
const response = (code, data) => {
    let responseRequest = {};
    switch (code) {
      case 200:
        responseRequest = {
          code: 200,
          status: "ok",
          statusText: "OK",
          data,
        };
        break;
  
      case 201:
        responseRequest = {
          code: 201,
          status: "ok",
          statusText: "Created",
          data,
        };
        break;
  
      case 400:
        responseRequest = {
          code: 400,
          status: "error",
          statusText: "Bad Request",
          data,
        };
        break;
  
      case 401:
        responseRequest = {
          code: 401,
          status: "error",
          statusText: "Unauthorized",
          data,
        };
        break;
  
      case 404:
        responseRequest = {
          code: 404,
          status: "error",
          statusText: "Not Found",
          data,
        };
        break;
  
      case 500:
        responseRequest = {
          code: 500,
          status: "error",
          statusText: "Internal Server Error",
          data,
        };
        break;
  
      default:
        responseRequest = {
          code: 404,
          status: "error",
          statusText: "Not Found",
        };
        break;
    }
    return responseRequest;
  };
  
  module.exports = response;
  