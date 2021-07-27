const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'The Executive' },
    { name: 'Outdoors Adventure' },
    { name: 'Sports Fanatics' },
    { name: 'Stay At Home Dads' },
    { name: 'Fitness Guru' },
    { name: 'The Grouch' },
    { name: 'Sentimental man' },
    { name: 'The Peace man' },
    
  

  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'The Executive',
      description:
        'For the man who is tired of crunching numbers and sitting in a corner cubicle. This blend of Dead Sea Salt and citrus is just the invigorating fizz you just might need',
      image: 'Gold.png',
      category: categories[0]._id,
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Outdoors Adventure',
      description:
        'For the man that works or plays outside and loves everything outdoors. This blend of Cedar wood and sage might just be the fizz that your senses are cravingnpm',
      image: 'Mint.png',
      category: categories[1]._id,
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Sports Fanatics',
      category: categories[2]._id,
      description:
        'For the man who follows his team, cheers for his team, and worships his team. This blend of Hemp and Lemongrass might be the fizz that you’re looking for after a great win (or loss)',    
          image: 'Sport2.jpg',
      price: 10.99,
      quantity: 20
    },
    {
      name: 'Stay at Home Dads',
      category: categories[3]._id,
      description:
        'For the guy that could use a break from the messy breakfasts and tea parties. This blend of black charcoal, coffee and vanilla might just be the fizz that your body is demanding', 
          image: 'Vanilla.png',
      price: 10.99,
      quantity: 50
    },
    {
      name: 'Fitness Guru',
      category: categories[4]._id,
      description:
        'For the man whose leg days could use some down time. This blend of tea tree oil, eucalyptus and epsom salt might just be the fizz that your body is screaming for' ,     
        image: 'Seaberry.png',
      price: 10.99,
      quantity: 100
    },
    {
      name: 'The Grouch',
      category: categories[5]._id,
      description:
        'For the man that could use a chill session in his life, who’s just tired of everything. This blend of lavender and chamomile is just the fizz that your body is crying out for',
      image: 'Lavender.png',
      price: 10.99,
      quantity: 600
    },
    {
      name: 'Sentimental man',
      category: categories[6]._id,
      description:
        'For the man that could use a chill session in his life, who’s just tired of everything. This blend of lavender and chamomile is just the fizz that your body is crying out for',
      image: 'Rose.jpeg',
      price: 10.99,
      quantity: 600
    },
    {
      name: 'The Peace man',
      category: categories[7]._id,
      description:
        'For the man that could use a chill session in his life, who’s just tired of everything. This blend of lavender and chamomile is just the fizz that your body is crying out for',
      image: 'Bath.jpeg',
      price: 10.99,
      quantity: 600
    }


  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
