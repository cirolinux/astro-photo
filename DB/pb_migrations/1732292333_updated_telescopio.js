/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aueixcmrmo5dmbp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yx6z0gmn",
    "name": "produttore",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "f89co10oqyyxiur",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aueixcmrmo5dmbp")

  // remove
  collection.schema.removeField("yx6z0gmn")

  return dao.saveCollection(collection)
})
