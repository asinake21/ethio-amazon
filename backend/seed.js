const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Product = require('./models/Product');
const User = require('./models/User');

// Load env from current directory
dotenv.config({ path: path.join(__dirname, '.env') });

const products = [
  {
    name: 'Habesha Kemis - Classic',
    description: 'Beautifully hand-woven traditional Ethiopian dress with emerald green patterns.',
    price: 150,
    category: 'Traditional Art',
    inventory: 5,
    image: 'https://images.unsplash.com/photo-1518911710364-17ec553bde5d?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Yirgacheffe Coffee Beans',
    description: 'Premium roasted coffee beans from the Yirgacheffe region. 1kg pack.',
    price: 25,
    category: 'Coffee & Food',
    inventory: 50,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Ethiopian Cross Pendant',
    description: 'Intricately designed silver cross pendant, handcrafted in Axum.',
    price: 85,
    category: 'Traditional Art',
    inventory: 10,
    image: 'https://images.unsplash.com/photo-1544955369-0df8508e671b?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Modern Habesha Scarf',
    description: 'Lightweight cotton scarf with modern geometric Ethiopian patterns.',
    price: 30,
    category: 'Clothing',
    inventory: 20,
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Ethiopian Leather Bag',
    description: 'Handmade genuine leather messenger bag, durable and stylish.',
    price: 120,
    category: 'Clothing',
    inventory: 8,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Teff Flour - Premium',
    description: '100% pure ivory teff flour, gluten-free and nutrient-dense.',
    price: 15,
    category: 'Coffee & Food',
    inventory: 100,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Woven Ethiopian Basket',
    description: 'Colorful Mesob basket, hand-woven with natural fibers.',
    price: 45,
    category: 'Home & Garden',
    inventory: 12,
    image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Sidamo Coffee Pods',
    description: 'Compatible pods featuring the bright and citrusy notes of Sidamo coffee.',
    price: 18,
    category: 'Coffee & Food',
    inventory: 200,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Shea Butter Skin Cream',
    description: 'Pure organic shea butter infused with Ethiopian botanicals.',
    price: 22,
    category: 'Beauty',
    inventory: 45,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Hand-carved Chess Set',
    description: 'Artisanal chess set featuring traditional Ethiopian figures.',
    price: 110,
    category: 'Traditional Art',
    inventory: 3,
    image: 'https://images.unsplash.com/photo-1586165368502-1badb97a6461?auto=format&fit=crop&q=80&w=800'
  },
];

const seedData = async () => {
  try {
    const connStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/ethi_amazon';
    console.log(`Connecting to: ${connStr}`);
    await mongoose.connect(connStr);
    
    // Clear existing products
    await Product.deleteMany();
    
    // Create a dummy admin user if none exists
    let admin = await User.findOne({ role: 'admin' });
    if (!admin) {
      admin = await User.create({
        name: 'Admin User',
        email: 'admin@ethi-amazon.com',
        password: 'password123',
        role: 'admin'
      });
    }

    const sampleProducts = products.map(p => ({ ...p, seller: admin._id }));
    await Product.insertMany(sampleProducts);
    
    console.log('✅ Data seeded successfully');
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding data:', err);
    process.exit(1);
  }
};

seedData();
