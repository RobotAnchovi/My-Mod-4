// configure environment - DO NOT MODIFY
require("dotenv").config();

//* Import package
const jwt = require("jsonwebtoken");
// Define variables - DO NOT MODIFY

//* 1. Sign (create) a JWT containing your email address
let token; // DO NOT MODIFY! Re-assign the token variable below.

// Your code here
const myEmail = "johnny@gmail.com";
const secretKey = process.env.SECRET_KEY;
token = jwt.sign({ email: myEmail }, secretKey, { expiresIn: "1h" });
// See the JWT in the console - DO NOT MODIFY
console.log("JWT:", token);

//* 2. Decode a JWT Payload

let payload; // DO NOT MODIFY! Re-assign the payload variable below.

payload = jwt.decode(token);

// See the decoded payload in the console - DO NOT MODIFY
console.log("Payload:", payload);

//* 3. Verify a JWT

let verifiedPayload; // DO NOT MODIFY! Re-assign the verifiedPayload variable below.

verifiedPayload = jwt.verify(token, secretKey);

// See the verified payload in the console - DO NOT MODIFY
console.log("Verified Payload:", verifiedPayload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

const fakeSecretKey = "fakeSecret";

try {
  jwt.verify(token, fakeSecretKey);
} catch (error) {
  console.error("Error with Invalid Signature:", error.message);
}

// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console
token = jwt.sign({ email: myEmail }, secretKey, { expiresIn: "1s" }); // Token expires in 1 second

setTimeout(() => {
  try {
    jwt.verify(token, secretKey);
  } catch (error) {
    console.error("Error with Expired Token:", error.message);
  }
}, 2000);
