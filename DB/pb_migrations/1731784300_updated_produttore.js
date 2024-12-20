/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f89co10oqyyxiur")

  // remove
  collection.schema.removeField("qkdwchj9")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f89co10oqyyxiur")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qkdwchj9",
    "name": "camer",
    "type": "relation",
    "required": false,
    "presentable": false,
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
})
