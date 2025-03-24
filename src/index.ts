import jwt from "jsonwebtoken";

const payload: jwt.JwtPayload = {
  iss: "https://puprleshorts.co.in",
  sub: "Darshans-018",
  
  iat: Date.now()
};

const secretkey = "HelloWorld@123";

const token = jwt.sign(payload, secretkey, { 
  algorithm: "HS256",
  expiresIn: "7d" ,
});
