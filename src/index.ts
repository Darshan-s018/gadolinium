import jwt from "jsonwebtoken";
import "dotenv/config";

// Removed incorrect import as dotenv will handle environment variables

import {config} from "dotenv";

const payload: jwt.JwtPayload = {
  iss: "https://purpleshorts.co.in",
  sub: "Darshans-018",
};
const jwtSecretKey = process.env.SECRET_KEY;
console.log(jwtSecretKey);
if (!jwtSecretKey) {
  throw new Error("undefined");
}
const token = jwt.sign(payload, jwtSecretKey, {
  algorithm: "HS256",
});
console.log(token);
try {
  const decodedPayload = jwt.verify(token, jwtSecretKey);
  console.log(decodedPayload);
}
catch (e) {
  console.log("error",e);
}