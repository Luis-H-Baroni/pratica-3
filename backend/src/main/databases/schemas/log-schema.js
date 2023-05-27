const db = require('../mongodb')
const { identifierGenerator } = require('../../../utils/helpers')

const logSchema = new db.Schema({
  logId: { type: String, default: identifierGenerator.uuid() },
  itemAlias: String,
  itemId: String,
  data: {},
  createdAt: { type: Date },
})

const LogModel = db.model('LogSchema', logSchema)

module.exports = LogModel
