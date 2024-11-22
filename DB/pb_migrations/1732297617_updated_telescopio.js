/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aueixcmrmo5dmbp")

  // add
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
        "NEWTON"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aueixcmrmo5dmbp")

  // remove
  collection.schema.removeField("dgkvwxiq")

  return dao.saveCollection(collection)
})
