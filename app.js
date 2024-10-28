const products = [
    {
        "id": 1,
        "title": "Wireless Bluetooth Headphones",
        "description": "High-quality wireless headphones with noise cancellation and long battery life.",
        "price": 49.99,
        "strikePrice": 79.99,
        "quantity": 120,
        "category": "Electronics",
        "images": [
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTuFOAdlG2BpG8w0urMJ5YQHdfwdJq_9twIJFNSmvrCpOamNPQ9Pu6i1oLSaNviJq-y9yFDIlADOCieQx-38bvijNZWQlORJaf98jq5nDsw4vcQcLDbClwKQg",
        "https://via.placeholder.com/150",
        ""
        ]
    },
    {
        "id": 2,
        "title": "Smartphone with 128GB Storage",
        "description": "A smartphone with 128GB storage, 8GB RAM, and a 48MP camera.",
        "price": 599.99,
        "strikePrice": 699.99,
        "quantity": 85,
        "category": "Electronics",
        "images": [
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRbmwDoCjinaE3cebe9RJLObMB9EDh6suMOiegPq2Eg6W18nnAfOzS2p6bPIt0hwW_EfdrSXJz28zaGqwsrQSDg3ibRlW5Hid_t8Hdu1k8",
        "",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 3,
        "title": "4K Ultra HD Smart TV",
        "description": "55-inch 4K Ultra HD Smart TV with built-in streaming apps.",
        "price": 449.99,
        "strikePrice": 549.99,
        "quantity": 30,
        "category": "Electronics",
        "images": [
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQXPx4l9J0FWcA7G6YexNjkspnOaoF5J1OBBQBV4zfOdOBjgqbU0gNiwDSBwEY3Ps-OCn_byc1sn3OCP4uGpa_H8CrdUK1grFShCrxUpSAQ",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQXPx4l9J0FWcA7G6YexNjkspnOaoF5J1OBBQBV4zfOdOBjgqbU0gNiwDSBwEY3Ps-OCn_byc1sn3OCP4uGpa_H8CrdUK1grFShCrxUpSAQ",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 4,
        "title": "Gaming Laptop",
        "description": "High-performance gaming laptop with Intel i7, 16GB RAM, and RTX 3060.",
        "price": 1199.99,
        "strikePrice": 1399.99,
        "quantity": 50,
        "category": "Electronics",
        "images": [
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721213718/Croma%20Assets/Computers%20Peripherals/Laptop/Images/305682_0_t8xasd.png?tr=w-480",
        "",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 5,
        "title": "Fitness Smartwatch",
        "description": "Smartwatch with heart rate monitor, GPS, and step tracker.",
        "price": 129.99,
        "strikePrice": 199.99,
        "quantity": 150,
        "category": "Wearables",
        "images": [
        "https://m.media-amazon.com/images/I/41qqmdUWnhL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 6,
        "title": "Portable Bluetooth Speaker",
        "description": "Compact and powerful speaker with deep bass and 10-hour battery life.",
        "price": 39.99,
        "strikePrice": 59.99,
        "quantity": 200,
        "category": "Electronics",
        "images": [
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQBkcbijbKYVKU8sXOcxobUK1jDeHeix6SrNVESQW18YTap_1PFOxbUQpfHHztADTeDMtn7-l3BQMO0wirzqzJ5IyM2qVNSHxphqHHQMKViZqdcqV-lGM33",
        "",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 7,
        "title": "Stainless Steel Water Bottle",
        "description": "Insulated water bottle that keeps drinks cold for 24 hours.",
        "price": 14.99,
        "strikePrice": 24.99,
        "quantity": 300,
        "category": "Home & Kitchen",
        "images": [
        "https://www.milton.in/cdn/shop/files/gps_generated_ce72a962-4e43-4d1a-8ff0-43ee95363fcb.png?v=1727266639&width=900",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 8,
        "title": "Ergonomic Office Chair",
        "description": "Comfortable office chair with lumbar support and adjustable height.",
        "price": 179.99,
        "strikePrice": 249.99,
        "quantity": 45,
        "category": "Furniture",
        "images": [
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ9WzH0Mf4-8QBQrQ4BN4yie1v77q637Pl8CNxbKFmNkIQIK3D3gP0yxxJvARgyG1qC4qhp0Kx1AuPsd49QT6IeFJ9OIs0u1xDMktA8nPor",
        "",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 9,
        "title": "Wireless Charging Pad",
        "description": "Fast wireless charging pad compatible with all Qi-enabled devices.",
        "price": 24.99,
        "strikePrice": 34.99,
        "quantity": 170,
        "category": "Electronics",
        "images": [
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTkXojAPejm8S5H1AclpRw-O5fK4pZSQx1BnIlZ4l9Y1OPjFkpEiVt6FlpdZ5YCXGwQUDkEM68Ndd5qDzROpQ5AKY76qVkjSRkoYpnDw6sKHT_97pfnoYKH",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 10,
        "title": "Action Camera 4K",
        "description": "Waterproof action camera with 4K recording and wide-angle lens.",
        "price": 99.99,
        "strikePrice": 149.99,
        "quantity": 75,
        "category": "Cameras",
        "images": [
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ651y17EnISpxKmiBYcwpk7c0MVLRoBcKUJSnnWMMYdl0epn1ePhq8fcI-dBja4Kjc5Tir9Z3D0hW8U2wnH4-Ue9NtLdW19CvTvImFUVtMrYEWq80oeG31",
        "",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 11,
        "title": "Wireless Earbuds with Charging Case",
        "description": "Compact and lightweight earbuds with a 24-hour battery life and charging case.",
        "price": 59.99,
        "strikePrice": 79.99,
        "quantity": 150,
        "category": "Electronics",
        "images": [
        "https://m.media-amazon.com/images/I/61PYkqwxP0L.jpg",
        "",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 12,
        "title": "Electric Standing Desk",
        "description": "Adjustable height standing desk with motorized lift and memory settings.",
        "price": 349.99,
        "strikePrice": 499.99,
        "quantity": 20,
        "category": "Furniture",
        "images": [
        "https://ergologic.in/wp-content/uploads/2024/05/Height-Adjustable-Table-%E2%80%93-Electric-Single-Motor-Standing-Desk-Work-From-Home-Series-premium-quality-black-color-frame-black-table-top-mdf-solid-wood-ergologic-with-rounded-edges.jpg",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 13,
        "title": "Noise-Cancelling Headphones",
        "description": "Over-ear headphones with active noise-cancelling and 30-hour battery life.",
        "price": 89.99,
        "strikePrice": 129.99,
        "quantity": 60,
        "category": "Electronics",
        "images": [
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQPQ6_9hnwnp2Zqs4xXivYuKWDT8Ca1RaZJRRzlkjvrVVkug8u04CKDBb0zvcJM9HMza8b6xyFyZGx2Uxy3k2smtckuMzsSAOj4h1PbqqKHqCpTnPBpVqcj",
        "https://via.placeholder.com/150",
        ""
        ]
    },
    {
        "id": 14,
        "title": "Smart Thermostat",
        "description": "Wi-Fi enabled smart thermostat that allows temperature control via smartphone.",
        "price": 129.99,
        "strikePrice": 179.99,
        "quantity": 45,
        "category": "Home Appliances",
        "images": [
        "https://m.media-amazon.com/images/I/21eypRwDJnL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 15,
        "title": "Mechanical Gaming Keyboard",
        "description": "RGB backlit mechanical keyboard with programmable keys and fast response.",
        "price": 69.99,
        "strikePrice": 99.99,
        "quantity": 100,
        "category": "Electronics",
        "images": [
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRv_-JDagvxRCqupOaoG3j_PTh-M8jbviTqAoApiV3YvAjwkZnuxzpHzYmST__rRGfAcu7fJ_g-7g1-Ev_crnK8CwvFvIGm8iZ5x_p0QLt8kuTUWm7PNsbc",
        "",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 16,
        "title": "Stainless Steel Cookware Set",
        "description": "10-piece stainless steel cookware set with non-stick coating.",
        "price": 149.99,
        "strikePrice": 199.99,
        "quantity": 80,
        "category": "Home & Kitchen",
        "images": [
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ1RHfTB9kMxft_m_rik3lXviSiE4uw280e2dIkTndSYzqqz-8J10IKjyuk3A3PobmUU5j6fNfe7R9c87zqf8DcLMxNlgS_sOTTiVoA47sthGKGhenJY-No6g",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 17,
        "title": "Fitness Tracker with Heart Rate Monitor",
        "description": "Fitness tracker that monitors heart rate, sleep, and steps.",
        "price": 49.99,
        "strikePrice": 79.99,
        "quantity": 220,
        "category": "Wearables",
        "images": [
        "https://m.media-amazon.com/images/I/41NDG1LI3wL._SX300_SY300_QL70_FMwebp_.jpg",
        "",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 18,
        "title": "LED Desk Lamp with USB Charging Port",
        "description": "Dimmable LED desk lamp with adjustable brightness and built-in USB port.",
        "price": 34.99,
        "strikePrice": 49.99,
        "quantity": 110,
        "category": "Home & Kitchen",
        "images": [
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQknccwf0rI67gws5EsL6wqqttRbl2DDJd201GHqfsyOg2VZZqeDixTgwNl89uHKNQkfS8AHHjv8u8a9M4cEZpTGrY9h-5j_IjFb_yfJsz8",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 19,
        "title": "Air Purifier for Home",
        "description": "HEPA air purifier with 3-stage filtration and coverage up to 500 sq. ft.",
        "price": 89.99,
        "strikePrice": 129.99,
        "quantity": 60,
        "category": "Home Appliances",
        "images": [
            "https://m.media-amazon.com/images/I/91Wm0wKIdDL.jpg",
        "",
        "https://via.placeholder.com/150"
        ]
    },
    {
        "id": 20,
        "title": "Digital Photo Frame",
        "description": "Wi-Fi enabled digital photo frame that can display photos and videos.",
        "price": 99.99,
        "strikePrice": 149.99,
        "quantity": 75,
        "category": "Electronics",
        "images": [
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWTgdBfsGKoK2ipxdXK7b-JXg-oeg3ajubg5N3EkIgZ-lXgmbtzPzlWSjzSSb2v_aM1ToW4GpZoBcJmCVp7Arr_QDcqw_B5sgPhB_pQ5pz-hHaXCh9V-Lu",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
        ]
    }
]






function displayProducts(productArray) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    productArray.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <h2>${product.title}</h2>
            <div class="image-slider">
                <img src="${product.images[0]}" alt="${product.title}">
            </div>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <p><strike>$${product.strikePrice}</strike></p>
            <p>Available: ${product.quantity}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.title} added To Cart!`);
}

function filterProducts() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchQuery);
        const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

        return matchesSearch && matchesCategory && matchesPrice;
    });

    displayProducts(filteredProducts);
}

// Event listeners for filtering
document.getElementById('search-bar').addEventListener('input', filterProducts);
document.getElementById('category-filter').addEventListener('change', filterProducts);
document.getElementById('min-price').addEventListener('input', filterProducts);
document.getElementById('max-price').addEventListener('input', filterProducts);

// Initial display of all products
displayProducts(products);



const firebaseConfig = {
    apiKey: "AIzaSyDEqT1OTdxJxxCXUTePuhFbd1zHFOcv2Xg",
    authDomain: "evalution-b7709.firebaseapp.com",
    projectId: "evalution-b7709",
    storageBucket: "evalution-b7709.appspot.com",
    messagingSenderId: "30244200746",
    appId: "1:30244200746:web:8c6da35c13bc8b15e07e53",
    measurementId: "G-5RXM05JRP4"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
