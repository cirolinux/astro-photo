/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aueixcmrmo5dmbp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kw9g2i8x",
    "name": "name",
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
  const collection = dao.findCollectionByNameOrId("aueixcmrmo5dmbp")

  // remove
  collection.schema.removeField("kw9g2i8x")

  return dao.saveCollection(collection)
})
