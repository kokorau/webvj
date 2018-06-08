const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')
const shaders = require('./routes/shaders')

// Import API Routes
app.use(users)
app.use(shaders)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
