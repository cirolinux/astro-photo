/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sx7qf0u94aoqzq0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qpsxb3vl",
    "name": "fps",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sx7qf0u94aoqzq0")

  // remove
  collection.schema.removeField("qpsxb3vl")

  return dao.saveCollection(collection)
})