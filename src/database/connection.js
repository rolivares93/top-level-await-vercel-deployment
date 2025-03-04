import { Sequelize } from 'sequelize'

const database = process.env.DATABASE_NAME
const user = process.env.DATABASE_USER
const password = process.env.DATABASE_PASS
const host = process.env.DATABASE_HOST
const port = process.env.DATABASE_PORT
const driver = process.env.DATABASE_DRIVER

export const sequelize = new Sequelize(database, user, password, {
  dialect: driver,
  host,
  port
})
