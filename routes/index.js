var express = require('express');
var router = express.Router();
var faker = require('Faker');
var jsf = require('json-schema-faker');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/category', function(req, res, next) {
  var category = {
    name: faker.commerce.department(),
    _id: faker.random.number(),
    products: [
      {
        name: faker.commerce.productName(),
        _id: faker.random.number(),
        image: faker.image.imageUrl()
      },
      {
        name: faker.commerce.productName(),
        _id: faker.random.number(),
        image: faker.image.imageUrl()
      },
      {
        name: faker.commerce.productName(),
        _id: faker.random.number(),
        image: faker.image.imageUrl()
      },
      {
        name: faker.commerce.productName(),
        _id: faker.random.number(),
        image: faker.image.imageUrl()
      }
    ]
  };

  res.json(category);
});

router.get('/member', function(req, res, next) {
  var member = {
    name: faker.name.findName(),
    _id: faker.random.number(),
    role: faker.name.jobDescriptor(),
    shoppingCarts: [
      {
        _id: faker.random.number()
      },
      {
        _id: faker.random.number()
      },
      {
        _id: faker.random.number()
      }
    ],
    posts: [
      {
        _id: faker.random.number()
      },
      {
        _id: faker.random.number()
      },
      {
        _id: faker.random.number()
      }
    ]
  };

  res.json(member);
});

router.get('/order', function(req, res, next) {
  var order = {
    _id: faker.random.number(),
    date: faker.date.past(),
    product: [
      {
        _id: faker.random.number(),
        name: faker.commerce.productName(),
        image: faker.image.imageUrl()
      }
    ],
    quantity: faker.random.number(),
    material: faker.commerce.productMaterial()
  };

  res.json(order);
});

router.get('/post', function(req, res, next) {
  var post = {
    _id: faker.random.number(),
    content: faker.lorem.sentence(),
    products: [
      {
        name: faker.commerce.productName(),
        _id: faker.random.number(),
        image: faker.image.imageUrl()
      },
      {
        name: faker.commerce.productName(),
        _id: faker.random.number(),
        image: faker.image.imageUrl()
      },
      {
        name: faker.commerce.productName(),
        _id: faker.random.number(),
        image: faker.image.imageUrl()
      }
    ],
    author: [
      {
        name: faker.name.findName(),
        foreignKey: faker.random.number()
      }
    ]
  };

  res.json(post);
});

router.get('/product', function(req, res, next) {
  var product = {
    name: faker.commerce.productName(),
    _id: faker.random.number(),
    image: faker.image.imageUrl(),
    price: faker.commerce.price(),
    category: [
      {
        foreignKey: faker.random.number()
      }
    ],
    author: [
      {
        foreignKey: faker.random.number()
      }
    ],
    post: [
      {
        foreignKey: faker.random.number()
      }
    ]
  };

  res.json(product);
});

router.get('/shopping-cart', function(req, res, next) {
  var shoppingCart = {
    _id: faker.random.number(),
    orderedDate: faker.date.past(),
    shippedDate : faker.date.past(),
    discount: faker.commerce.price(),
    total: faker.commerce.price(),
    orders: [
      {
        _id: faker.random.number()
      },
      {
        _id: faker.random.number()
      }
    ]
  };

  res.json(shoppingCart);
});



module.exports = router;
