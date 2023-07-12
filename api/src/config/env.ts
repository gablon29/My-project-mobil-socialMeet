require("dotenv").config();

export const DB_DEV:string = process.env.DB_DEV
export const DB_PRO:string = process.env.DB_PRO
export const STRIPE_SECRET_KEY:string = process.env.STRIPE_SECRET_KEY //se obtiene de stripe la página.
export const STRIPE_WEBHOOK_SECRET:string = process.env.STRIPE_WEBHOOK_SECRET  // se obtiene stripe webhooks
export const STRIPE_PUBLISHABLE_KEY: string = process.env.STRIPE_PUBLISHABLE_KEY
export const SENDINBLUE_KEY:string = process.env.SENDINBLUE_KEY || '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'
export const JWT_RANDOM_PASSWORD:string = process.env.JWT_RANDOM_PASSWORD || 'MySuperSecretKey123!@'
export const PORT:string = process.env.PORT || '8080'

