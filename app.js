// Sample product data
const products = [
  {
    id: 1,
    name: "Headphone Nirkabel Premium",
    price: 2999000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    description:
      "Headphone nirkabel berkualitas tinggi dengan fitur pembatalan kebisingan",
  },
  {
    id: 2,
    name: "Jam Tangan Pintar Seri 5",
    price: 4499000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description: "Jam tangan pintar canggih dengan fitur pemantauan kesehatan",
  },
  {
    id: 3,
    name: "Kit Kamera Profesional",
    price: 13499000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    description: "Kit kamera profesional lengkap dengan berbagai lensa",
  },
  {
    id: 4,
    name: "Earbud Nirkabel",
    price: 2249000,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500",
    description: "Earbud nirkabel sejati dengan kualitas suara premium",
  },
  {
    id: 5,
    name: "Laptop Gaming Pro",
    price: 19499000,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    description: "Laptop gaming berperforma tinggi dengan grafis RTX",
  },
  {
    id: 6,
    name: "Smart Home Hub",
    price: 2999000,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500",
    description: "Kontrol seluruh rumah Anda dengan hub pintar ini",
  },
  {
    id: 7,
    name: "Pelacak Kebugaran",
    price: 1349000,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500",
    description: "Lacak tujuan kebugaran Anda dengan pelacak canggih ini",
  },
  {
    id: 8,
    name: "Speaker Bluetooth Portabel",
    price: 1199000,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    description: "Speaker portabel tahan air dengan suara yang luar biasa",
  },
  {
    id: 9,
    name: "Drone 4K Pro",
    price: 8999000,
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500",
    description: "Drone dengan kamera 4K dan sistem stabilisasi canggih",
  },
  {
    id: 10,
    name: "Tablet Ultra Slim",
    price: 5499000,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    description: "Tablet ultra tipis dengan layar retina dan performa tinggi",
  },
  {
    id: 11,
    name: "Konsol Game Next Gen",
    price: 7999000,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500",
    description: "Konsol game generasi terbaru dengan grafis ultra realistis",
  },
  {
    id: 12,
    name: "Kamera Mirrorless",
    price: 12499000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    description: "Kamera mirrorless profesional dengan sensor full-frame",
  },
  {
    id: 13,
    name: "Monitor Gaming 144Hz",
    price: 3999000,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    description: "Monitor gaming dengan refresh rate 144Hz dan resolusi 2K",
  },
  {
    id: 14,
    name: "Keyboard Mekanik RGB",
    price: 2499000,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500",
    description: "Keyboard mekanik dengan pencahayaan RGB dan switch premium",
  },
  {
    id: 15,
    name: "Mouse Gaming Wireless",
    price: 1499000,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    description: "Mouse gaming nirkabel dengan sensor presisi tinggi",
  },
  {
    id: 16,
    name: 'Smart LED TV 55"',
    price: 8999000,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    description:
      "Smart TV LED 55 inci dengan resolusi 4K dan sistem operasi Android",
  },
];

// Header Component
function Header({ cartCount, toggleCart, cartIconRef }) {
  return (
    <header className="header">
      <div className="nav-container">
        <a href="#" className="logo">
          ShopEase
        </a>
        <nav className="nav-links">
          <a href="#">Beranda</a>
          <a href="#">Produk</a>
          <a href="#">Tentang</a>
          <a href="#">Kontak</a>
        </nav>
        <div className="cart-icon" onClick={toggleCart} ref={cartIconRef}>
          <i className="fas fa-shopping-cart"></i>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      </div>
    </header>
  );
}

// Product Detail Modal Component
function ProductDetail({ product, isOpen, closeModal, addToCart }) {
  if (!isOpen) return null;

  const handleAddToCart = (e) => {
    const productImage = e.target
      .closest(".product-detail-modal")
      .querySelector(".product-detail-image img");
    const rect = productImage.getBoundingClientRect();

    addToCart(product, {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    });
    closeModal();
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="product-detail-overlay" onClick={closeModal}>
      <div
        className="product-detail-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-detail" onClick={closeModal}>
          ×
        </button>
        <div className="product-detail-content">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-info">
            <h2>{product.name}</h2>
            <p className="product-detail-price">{formatPrice(product.price)}</p>
            <p className="product-detail-description">{product.description}</p>
            <div className="product-detail-features">
              <h3>Fitur:</h3>
              <ul>
                <li>Bahan berkualitas tinggi</li>
                <li>Desain premium</li>
                <li>Garansi 1 tahun</li>
                <li>Pengiriman gratis</li>
              </ul>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Product Card Component
function ProductCard({ product, addToCart, showProductDetail }) {
  const handleAddToCart = (e) => {
    const productImage = e.target
      .closest(".product-card")
      .querySelector(".product-image");
    const rect = productImage.getBoundingClientRect();

    addToCart(product, {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="product-card">
      <div
        className="product-image-container"
        onClick={() => showProductDetail(product)}
        title="Klik untuk lihat detail"
      >
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}

// Cart Modal Component
function CartModal({
  isOpen,
  onClose,
  cart,
  updateQuantity,
  removeFromCart,
  onCheckout,
}) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("cart-overlay")) {
      onClose();
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <React.Fragment>
      <div
        className={`cart-overlay ${isOpen ? "open" : ""}`}
        onClick={handleOverlayClick}
      ></div>
      <div className={`cart-modal ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Keranjang Anda</h2>
          <button className="close-cart" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h3 className="cart-item-title">{item.name}</h3>
                <p className="cart-item-price">{formatPrice(item.price)}</p>
                <div className="cart-item-quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <h3>
            Total:{" "}
            {formatPrice(
              cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )
            )}
          </h3>
          <button className="checkout-btn" onClick={onCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

// Success Modal Component
function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="product-detail-overlay" onClick={onClose}>
      <div className="success-modal" onClick={(e) => e.stopPropagation()}>
        <div className="success-icon">✓</div>
        <h2 className="success-title">Pesanan Berhasil!</h2>
        <p className="success-message">
          Terima kasih atas pembelian Anda. Pesanan Anda telah diterima dan akan
          segera diproses. Anda akan menerima email konfirmasi dengan detail
          pesanan Anda.
        </p>
        <button className="success-btn" onClick={onClose}>
          Lanjutkan Belanja
        </button>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);
  const [flyingItem, setFlyingItem] = React.useState(null);
  const cartIconRef = React.useRef(null);

  const addToCart = (product, rect) => {
    // Calculate center position of the product image
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    // Get cart icon position
    const cartRect = cartIconRef.current.getBoundingClientRect();
    const endX = cartRect.left + cartRect.width / 2;
    const endY = cartRect.top + cartRect.height / 2;

    // Calculate the movement distance
    const moveX = endX - startX;
    const moveY = endY - startY;

    // Create flying item with precise positioning
    setFlyingItem({
      product,
      startX: startX - 20, // Center offset for flying item
      startY: startY - 20, // Center offset for flying item
      moveX,
      moveY,
    });

    // Add to cart after animation
    setTimeout(() => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product.id);
        if (existingItem) {
          return prevItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevItems, { ...product, quantity: 1 }];
      });
      setFlyingItem(null);
    }, 800);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      // Remove item from cart if quantity is less than 1
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const showProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsSuccessModalOpen(true);
    setCartItems([]); // Clear the cart after successful checkout
  };

  return (
    <div>
      <Header
        cartCount={cartCount}
        toggleCart={() => setIsCartOpen(true)}
        cartIconRef={cartIconRef}
      />

      {flyingItem && (
        <div
          className="flying-item"
          style={{
            left: flyingItem.startX,
            top: flyingItem.startY,
            "--moveX": `${flyingItem.moveX}px`,
            "--moveY": `${flyingItem.moveY}px`,
            animation: "flyToCart 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
          }}
        >
          <img src={flyingItem.product.image} alt={flyingItem.product.name} />
        </div>
      )}

      <section className="hero">
        <h1>Selamat Datang di ShopEase</h1>
        <p>Temukan produk-produk menakjubkan dengan harga terbaik</p>
      </section>

      <div className="products-container">
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              showProductDetail={showProductDetail}
            />
          ))}
        </div>
      </div>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        onCheckout={handleCheckout}
      />

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          isOpen={!!selectedProduct}
          closeModal={closeProductDetail}
          addToCart={addToCart}
        />
      )}

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  );
}

// Render the app
ReactDOM.render(<App />, document.getElementById("root"));
