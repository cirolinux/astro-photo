/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aueixcmrmo5dmbp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dgkvwxiq",
    "name": "fabbricazione",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "NEWTON",
        "MAKSUTOV",
        "APOCROMATICO"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aueixcmrmo5dmbp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dgkvwxiq",
    "name": "fabbricazione",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "NEWTON",
        "MAKSUTOV"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
