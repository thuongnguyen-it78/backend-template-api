import bcrypt from 'bcryptjs'

const users = [
  {
    fullName: 'Dog',
    email: 'dog@gmail.com',
    password: bcrypt.hashSync('123456a@', 10),
  },
  {
    fullName: 'Cat',
    email: 'cat@gmail.com',
    password: bcrypt.hashSync('123456a@', 10),
  },
  {
    fullName: 'Mouse',
    email: 'mouse@gmail.com',
    password: bcrypt.hashSync('123456a@', 10),
  },
  {
    fullName: 'Lion',
    email: 'lion@gmail.com',
    password: bcrypt.hashSync('123456a@', 10),
  },
  {
    fullName: 'Bird',
    email: 'bird@gmail.com',
    password: bcrypt.hashSync('123456a@', 10),
  },
  {
    fullName: 'Elephant',
    email: 'elephant@gmail.com',
    password: bcrypt.hashSync('123456a@', 10),
  },
]

export default users
