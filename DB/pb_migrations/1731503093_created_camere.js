/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sx7qf0u94aoqzq0",
    "created": "2024-11-13 13:04:53.582Z",
    "updated": "2024-11-13 13:04:53.582Z",
    "name": "camere",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "btlfdmu7",
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
  const collection = dao.findCollectionByNameOrId("sx7qf0u94aoqzq0");

  return dao.deleteCollection(collection);
})
