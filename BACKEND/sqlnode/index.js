import { faker } from '@faker-js/faker';
import mysql from 'mysql2/promise';

// Function to create a random user
// Async function to handle database connection and query
async function main() {
  // Create MySQL connection
  let createRandomUser = () => {
    return [
      faker.string.uuid(),
       faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ];
  };
    let data=[];
    for(let i=0;i<100;i++)
    {
      data.push(createRandomUser());
    }
    console.log(data);
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta',
    password: 'SHIvam@141004'
  });

  try {
    // let user=["123","123_newuser","abc@gmail.com","abc"];
    // let users=[["123a","123_newusera","abac@gmail.com","abca"],["123c","123_newuserc","abcc@gmail.com","abcc"],];
    // const [results, fields] = await connection.query("INSERT INTO USER (ID,USERNAME,EMAIL, PASSWORD) values (?,?,?,?)",user);
    // const [results, fields] = await connection.query("INSERT INTO USER (ID,USERNAME,EMAIL, PASSWORD) values ?",[users]);
    const [results, fields] = await connection.query("INSERT INTO USER (ID,USERNAME,EMAIL, PASSWORD) values ?",[data]);
    console.log(results,results.length); 
    console.log(fields);

  } catch (err) {
    console.error(err);
  } finally {
    connection.end();
  }
}
main();
