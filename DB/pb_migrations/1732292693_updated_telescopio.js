/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aueixcmrmo5dmbp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gxogwtkk",
    "name": "luce",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "axs1vtq4",
    "name": "fabbricazione",
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
  collection.schema.removeField("gxogwtkk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "axs1vtq4",
    "name": "nome",
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
})
