/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sx7qf0u94aoqzq0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qywknnkl",
    "name": "produttore",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "f89co10oqyyxiur",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sx7qf0u94aoqzq0")

  // remove
  collection.schema.removeField("qywknnkl")

  return dao.saveCollection(collection)
})
