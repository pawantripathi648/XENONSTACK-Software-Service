migrate((db) => {
  const collection = new Collection({
    "id": "6jw877swkit39nj",
    "created": "2023-01-10 07:19:41.174Z",
    "updated": "2023-01-10 07:19:41.174Z",
    "name": "contact_us",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1wuusfa5",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dkgq6zfs",
        "name": "email",
        "type": "email",
        "required": true,
        "unique": true,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "6fp799gp",
        "name": "message",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 10,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6jw877swkit39nj");

  return dao.deleteCollection(collection);
})
