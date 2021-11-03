const path = require('path')

const config = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API REST PROYECTO ESCALAB",
      version: "0.1.0",
      description: "Para probar la api ocupe el token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTc4MTYyYjBkMzc2NGNiNmI2NDA0YWYiLCJuYW1lIjoiSm9yZ2UgUG9uY2UiLCJmaXJzdG5hbWUiOiJKb3JnZSIsImxhc3RuYW1lIjoiUG9uY2UiLCJydXQiOjEyNzcyNzEyLCJkdiI6IjAiLCJmb3RvIjoiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9lc2NhbGFiLW5vZGUtcmVhY3QuYXBwc3BvdC5jb20vby9pbWFnZW5lcyUyRmZvdG8lMkY2MTc4MTYyYjBkMzc2NGNiNmI2NDA0YWYucG5nP2FsdD1tZWRpYSZ0b2tlbj1lYmI4M2E5MC0zNjZjLTExZWMtOGUxYS03NzQ5MWE2OTRiY2YiLCJlbWFpbCI6ImpwQG1hdC51Yy5jbCIsInJvbGVzIjpbIkFETUlOSVNUUkFET1IiLCJDTElFTlRFIl0sImlhdCI6MTYzNTI5OTc0NywiZXhwIjoxNzIxNjk5NzQ3fQ.DRuHIWUzjvDYG6-X59KwcXCpJWCk7fTPqzPzA1zInXY", 
      contact: {
        name: "Jorge Ponce T.",
        email: "jptoloza@gmail.com"
      }
    },
    server: {
      url: "http://localhost:4000"
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          in: "header",
          name: "Autorization"
        } 
      }
    },
    security: [
      { bearerAuth: [] }
    ]
  },
  apis: [
    `${path.join(__dirname, '../routes/users.js')}`
  ]

}


module.exports = config