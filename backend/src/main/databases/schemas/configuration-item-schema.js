const db = require('../mongodb')

const configurationItemSchema = new db.Schema({
  configurationItemId: String,
  configurationItemAlias: String,
  serial: String,
  category: String,
  type: String,
  model: String,
  local: String,
  licenseOfUse: String,
  purchase: { type: Date },
  responsible: String,
  supplier: String,
  quantityOfProblems: Number,
  quantityOfIncidents: Number,
  status: Boolean,
  comments: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
})

const ConfigurationItemModel = db.model('ConfigurationItemSchema', configurationItemSchema)

module.exports = ConfigurationItemModel
