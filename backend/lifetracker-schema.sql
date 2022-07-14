CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
     created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
 updated_at  TIMESTAMP NOT NULL DEFAULT NOW()
);


CREATE TABLE exercise(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    Duration TEXT NOT NULL,
   intensity TEXT NULL,
    user_id TEXT NOT NULL,
     created_at  TIMESTAMP NOT NULL DEFAULT NOW() 

);
CREATE TABLE nutrition(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    Quantity TEXT NOT NULL,
    calories TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    image_url TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    created_at  TIMESTAMP NOT NULL DEFAULT NOW() 
);

CREATE TABLE sleep(
    id SERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
     created_at  TIMESTAMP NOT NULL DEFAULT NOW() 

);