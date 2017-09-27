'use strict'

const Schema = use('Schema')

class BoardSchema extends Schema {
  up () {
    this.create('boards', (table) => {
      table.increments()
      table.string('name', 40).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('boards')
  }
}

module.exports = BoardSchema
