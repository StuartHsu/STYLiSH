require('dotenv').config()

module.exports = {
  mysql: {
  host: process.env.HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
  },
  awsS3: {
  id: process.env.AWS_ACCESS_KEY_ID,
  key: process.env.AWS_SECRET_ACCESS_KEY,
  path: 'https://d29tp89ih3zhua.cloudfront.net/'
  }
}
