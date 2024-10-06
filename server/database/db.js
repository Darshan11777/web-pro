// // backend/db.js
// import mysql from 'mysql2';

// // Create the MySQL live server connection


// const connection=mysql.createConnection( 'mysql://root:rUhPwPVWszkRWXRMjGbhfhTkJHWIQfNj@junction.proxy.rlwy.net:25954/railway')
// // const connection = mysql.createConnection({
// //   host:'mysql.railway.internal',
// //   user:'root',
// //   password: 'rUhPwPVWszkRWXRMjGbhfhTkJHWIQfNj',
// //   database: 'railway',
// //   port: '3306',
  
// // });
// // Create the MySQL connection
// // const connection : mysql.createConnection({
// //     host: 'localhost',
// //     user: 'root', // your MySQL username
// //     password: 'darshan123', // your MySQL password
// //     database: 'users', // your database name
// // });

// connection.connect((err)=>{
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the database');
// });
// // Export the connection
// export default connection;

// backend/db.js
const mysql = await import('mysql2');

const dbConfig = {
  host: 'junction.proxy.rlwy.net',
  user: 'root',
  password: 'rUhPwPVWszkRWXRMjGbhfhTkJHWIQfNj',
  database: 'railway',
  port: 25954,
};
// postgresql://web_pro_mysql_user:GqfyG4gEMtMahehXcwKRrPtxdinUulKI@dpg-cs0mgue8ii6s73crjh3g-a/web_pro_mysql

const maxRetries = 5; // Maximum number of retry attempts
const retryDelay = 2000; // Delay between retries in milliseconds

const createConnection = () => {
  return mysql.createConnection(dbConfig);
};


const connectWithRetry = (retries = maxRetries) => {
  const connection = createConnection();
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      if (retries > 0) {
        console.log(`Retrying connection... (${maxRetries - retries + 1})`);
        setTimeout(() => connectWithRetry(retries - 1), retryDelay);
      } else {
        console.error('Max retries reached. Exiting...');
        process.exit(1); // Exit the process if max retries are reached
      }
      return;
    }
    console.log('Connected to the database');
  });

  return connection;
};

// Initialize the connection
const connection = connectWithRetry();

// Export the connection
export default connection;
