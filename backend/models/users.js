const bcrypt = require("bcrypt");
const { unauthorizedError, BadRequestError } = require("../utils/errors");
const db = require("../db");
const {createUserJwt}=require("../utils/tokens")
const { BCRYPT_WORK_FACTOR } = require("../config");
class User {
  static async login(credentials) {
    const requiredFields = ["email", "password"];
    if (!credentials) {
      throw new BadRequestError("No credentials provided");
    }
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body.`);
      }
    });
    console.log("1")
    const user = await User.fetchUserByEmail(credentials.email);
    console.log("2")
    if (user) {
      const isValid = await bcrypt.compare(credentials.password, user.password);
      if (isValid) {
        const token=createUserJwt(user);

    return {...user,token};
      
      }
    }
    throw new unauthorizedError("Invalid email/password");
  }

  static async register(credentials) {
    const requiredFields = [
      "email",
      "username",
      "password",
      "first_name",
      "last_name",
      
    ];

    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body.`);
      }
    });
    const existingUser = await User.fetchUserByEmail(credentials.email);
    if (existingUser) {
      throw new BadRequestError("Duplicate email: ${credentials.email}");
    }
    const hashedPassword = await bcrypt.hash(
      credentials.password,
      BCRYPT_WORK_FACTOR
    );
    const lowercaseEmail = credentials.email.toLowerCase();
    const result = await db.query(
      ` INSERT INTO users(email,username,password,first_name,last_name) VALUES($1,$2,$3,$4,$5) RETURNING id,email,username,first_name,last_name`,
      [
        lowercaseEmail,
        credentials.username,
        hashedPassword,
        credentials.first_name,
        credentials.last_name,
     
      ]
    );
    const user = result.rows[0];
   const token=createUserJwt(user);

    return {...user,token};

  }

  static async fetchUserByEmail(email) {
    if (!email) {
      throw new BadRequestError("No email provided");
    }
    const query = `SELECT * FROM users WHERE email=$1`;
    
    const result = await db.query(query, [email.toLowerCase()]);
    const user = result.rows[0];
    console.log(user)
    return user;
  }
}

module.exports = User;