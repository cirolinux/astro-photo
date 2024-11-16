/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f89co10oqyyxiur")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qkdwchj9",
    "name": "camera",
    "type": "relation",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "collectionId": "sx7qf0u94aoqzq0",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f89co10oqyyxiur")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qkdwchj9",
    "name": "camera",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "sx7qf0u94aoqzq0",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
