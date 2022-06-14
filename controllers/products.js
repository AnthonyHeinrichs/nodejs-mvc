const products = [];

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
  products.push({ title: req.body.title });
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  const prods = products;
  res.render('shop', {
    prods: prods,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: prods.length > 0,
    activeShop: true,
    productCSS: true
  });
}
