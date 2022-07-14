const bcrypt = require("bcrypt");
const { unauthorizedError, BadRequestError } = require("../utils/errors");
const db = require("../db");
const { useScrollTrigger } = require("@material-ui/core");
const { BCRYPT_WORK_FACTOR } = require("../config");
class Nutrition {
  static async AddNutriton(credentials) {
    const requiredFields = [
      "name",
      "category",
      "Quantity",
      "calories",
      "image_url",
      "user_id"
      
    ];

    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body.`);
      }
    });
    const result = await db.query(
      ` INSERT INTO nutrition(name,category,Quantity,calories,image_url,user_id) 
        VALUES($1,$2,$3,$4,$5,$6) 
        RETURNING id,user_id,name,category,Quantity,calories,image_url`,
      [
        credentials.name,
        credentials.category,
        credentials.Quantity,
        credentials.calories,
        credentials.image_url,
        credentials.user_id
      ]
    );
    const nutrition = result.rows[0];
    return nutrition;
  }
}

module.exports = Nutrition;
