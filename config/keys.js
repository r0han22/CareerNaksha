
if(process.env.NODE_ENV==='production'){
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}


/*

mongodb+srv://Rohan:<password>@cluster0.xdddt.mongodb.net/<dbname>?retryWrites=true&w=majority

module.exports = {
  MONGOURI:
    "mongodb+srv://ro:123@cluster0.quol4.mongodb.net/<dbname>?retryWrites=true&w=majority",
  JWT_SECRET: "qwdfvyivyvgyiv",
};


7n4ob8hvWBBTZQU2
*/
