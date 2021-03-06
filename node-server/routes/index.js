const express = require('express')
const router = express.Router()

module.exports = (io) => {
  const authRoutes = require('./auth.routes')
  const recommendationRoutes = require('./recommendation.route')(io)
  const diagnosisRoutes = require('./diagnosis.route')(io)
  const reminderRoutes = require('./reminder.route')(io)
  const settingRoutes = require('./setting.route')
  const userRoleRoutes = require('./userRole.routes')
  const componentRoutes = require('./component.route')
  const userRoutes = require('./user.route')
  const socialHistoryRoutes = require('./socialhistory.routes')
  const goalRoutes = require('./goal.route')(io)
  const appointmentRoutes = require('./appointment.routes')
  const screeningRoutes = require('./screening.route')(io)

  router.use('/auth', authRoutes)
  router.use('/recommendations', recommendationRoutes)
  router.use('/diagnosis', diagnosisRoutes)
  router.use('/reminders', reminderRoutes)
  router.use('/settings', settingRoutes)
  router.use('/user-roles', userRoleRoutes)
  router.use('/components', componentRoutes)
  router.use('/users', userRoutes)
  router.use('/social-histories', socialHistoryRoutes)
  router.use('/goals', goalRoutes)
  router.use('/appointments', appointmentRoutes)
  router.use('/screening', screeningRoutes)

  return router
}