const Product = require('../models/product')
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

  exports.postAddProduct = (req, res, next) => {
   // products.push({ title: req.body.title });
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/');
  }

  exports.getProduct = (req, res, next) => {
    Product.fetchAll((products)=>{
      res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    })
    
  }

  exports.getContact = (req, res)=>{
    res.send("<html><body><form action='/admin/add-product' method='POST'><h1>Welcome to contact page!!!</h1><button type='submit'>Home</button></form></body></html>")
}

exports.getSuccess = (req, res)=>{
  res.send("<html><body><form action='/admin/add-product' method='POST'><h1>Success!!!</h1><button type='submit'>Home</button></form></body></html>")
}