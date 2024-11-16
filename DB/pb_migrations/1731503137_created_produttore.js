/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "f89co10oqyyxiur",
    "created": "2024-11-13 13:05:37.671Z",
    "updated": "2024-11-13 13:05:37.671Z",
    "name": "produttore",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fmfpif3h",
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
      },
      {
        "system": false,
        "id": "qkdwchj9",
        "name": "camera",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("f89co10oqyyxiur");

  return dao.deleteCollection(collection);
})
