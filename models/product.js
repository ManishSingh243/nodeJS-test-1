const fs = require('fs')
const path = require('path')

module.exports = class Product{
    constructor(t){
        this.title = t;
    }
    save(){
        const p = path.join(path.dirname(process.mainModule.filename), 'fileContent', 'products.json');

       fs.readFile('p', (err, data)=>{
        const products = [];
        if(!err){
            products = JSON.parse(data)
        }
        products.push(this)

        fs.writeFile(p, JSON.stringify(products), (err)=>{
            console.log(err)
        })
       })
    }

    static fetchAll(cb){
         fs.readFile(path.join(path.dirname(process.mainModule.filename), 'fileContent', 'products.json'), (err, data)=>{
            if(err){
                cb([]);
            }
            return cb(JSON.parse(data))
         })
    }
}