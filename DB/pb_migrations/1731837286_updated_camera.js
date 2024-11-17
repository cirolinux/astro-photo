/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sx7qf0u94aoqzq0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jneazogd",
    "name": "pizelsize",
    "type": "number",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sx7qf0u94aoqzq0")

  // remove
  collection.schema.removeField("jneazogd")

  return dao.saveCollection(collection)
})
