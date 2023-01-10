migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6jw877swkit39nj")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6jw877swkit39nj")

  collection.listRule = null

  return dao.saveCollection(collection)
})
