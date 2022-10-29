var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

MongoClient.connect(url,(err,db)=>{
    if (err) throw err;
    console.log('database connected')
    var databaseobject =db.db('mydb')
    var jsonobjecttodb ={name:'vishnu',age:21}
    databaseobject.collection('customers').insertOne(jsonobjecttodb,(err,res)=>{
        if (err) throw err;
        console.log('json data insetered succefully')
        db.close()
    })
})