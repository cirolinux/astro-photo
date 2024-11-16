/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sx7qf0u94aoqzq0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "btlfdmu7",
    "name": "nome",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 3,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sx7qf0u94aoqzq0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "btlfdmu7",
    "name": "nome",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 3,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
