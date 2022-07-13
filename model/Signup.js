const mongodb=require("../config/mongodb.js")
const dbName="agri_pro"
const dbCol="signup"


module.exports.add=(obj,cb)=>{
    mongodb((err,con)=>{
        con.db(dbName).collection(dbCol).insertOne(obj,cb)
    })
}
module.exports.remove=(where,cb)=>{
    mongodb((err,con)=>{
        con.db(dbName).collection(dbCol).deleteMany(where,cb)
    })
    
}
module.exports.change=(where,obj,cb)=>{
    
    mongodb((err,con)=>{
        con.db(dbName).collection(dbCol).updateMany(where,{$set:obj},cb)
    })
}
module.exports.look=(where,cb)=>{
    
    mongodb((err,con)=>{
        con.db(dbName).collection(dbCol).find(where).toArray(cb)
    })
}