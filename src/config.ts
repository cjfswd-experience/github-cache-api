import dotenv from 'dotenv'

dotenv.config()

export default {
    PORT: process.env.PORT,
    GH_TOKEN: process.env.GH_TOKEN
}
