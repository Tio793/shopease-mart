import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import "./styles.css";

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

// Search Results Page Component
function SearchResults({
  query,
  filteredProducts,
  addToCart,
  showProductDetail,
}) {
  return (
    <div className="search-results-page">
      <div className="search-results-header">
        <h2>Hasil Pencarian: {query}</h2>
        <p>Ditemukan {filteredProducts.length} produk</p>
      </div>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              showProductDetail={showProductDetail}
            />
          ))
        ) : (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>Tidak ada produk yang ditemukan</h3>
            <p>Coba kata kunci pencarian yang berbeda</p>
          </div>
        )}
      </div>
      <style jsx>{`
        .search-results-page {
          padding: 2rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .search-results-header {
          margin-bottom: 2rem;
        }
        .search-results-header h2 {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 0.5rem;
        }
        .search-results-header p {
          color: #666;
        }
        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 3rem;
          background: #f8f9fa;
          border-radius: 8px;
        }
        .no-results i {
          font-size: 3rem;
          color: #ccc;
          margin-bottom: 1rem;
        }
        .no-results h3 {
          color: #333;
          margin-bottom: 0.5rem;
        }
        .no-results p {
          color: #666;
        }
      `}</style>
    </div>
  );
}

// SearchBar Component
function SearchBar({
  query,
  setQuery,
  searchHistory,
  onSearch,
  onSelectHistory,
}) {
  const [showHistory, setShowHistory] = React.useState(false);
  const history = useHistory();

  const handleSearch = (searchQuery) => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      history.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      // Jika search query kosong, kembali ke halaman utama
      setQuery("");
      history.push("/");
      onSearch(""); // Reset hasil pencarian
    }
  };

  const handleClearSearch = () => {
    setQuery("");
    setShowHistory(false);
    history.push("/");
    onSearch(""); // Reset hasil pencarian
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          className="search-input"
          placeholder="Cari produk..."
          value={query}
          onChange={(e) => {
            const newValue = e.target.value;
            setQuery(newValue);
            if (!newValue.trim()) {
              handleSearch(""); // Kembali ke halaman utama jika input kosong
            }
          }}
          onFocus={() => setShowHistory(true)}
          onBlur={() => setTimeout(() => setShowHistory(false), 200)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(query);
              setShowHistory(false);
            }
          }}
        />
        {query && (
          <button className="clear-search" onClick={handleClearSearch}>
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
      {showHistory && searchHistory.length > 0 && (
        <div className="search-history">
          <div className="search-history-header">
            <span>Pencarian Terakhir</span>
            <button
              className="clear-history"
              onClick={() => onSelectHistory([])}
            >
              Hapus Riwayat
            </button>
          </div>
          {searchHistory.map((item, idx) => (
            <div
              key={idx}
              className="search-history-item"
              onMouseDown={() => {
                onSelectHistory(item);
                setShowHistory(false);
              }}
            >
              <i className="fas fa-history"></i>
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}
      <style jsx>{`
        .search-bar-container {
          position: relative;
          width: 100%;
        }
        .search-bar {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 24px;
          padding: 0.5rem 1rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        .search-bar:focus-within {
          border-color: #4caf50;
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
        }
        .search-icon {
          color: #666;
          margin-right: 0.5rem;
        }
        .search-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 1rem;
          padding: 0.5rem 0;
          background: transparent;
        }
        .clear-search {
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .clear-search:hover {
          background: #f5f5f5;
          color: #333;
        }
        .search-history {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-radius: 12px;
          margin-top: 0.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          overflow: hidden;
          animation: slideDown 0.3s ease;
        }
        .search-history-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #eee;
          font-size: 0.9rem;
          color: #666;
        }
        .clear-history {
          background: none;
          border: none;
          color: #4caf50;
          cursor: pointer;
          font-size: 0.9rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .clear-history:hover {
          background: #f5f5f5;
        }
        .search-history-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .search-history-item:hover {
          background: #f5f5f5;
        }
        .search-history-item i {
          color: #666;
          font-size: 0.9rem;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .search-bar {
            border-radius: 20px;
            padding: 0.4rem 0.8rem;
          }
          .search-input {
            font-size: 0.9rem;
          }
          .search-history {
            position: fixed;
            top: 56px;
            left: 0;
            right: 0;
            margin: 0;
            border-radius: 0;
            max-height: calc(100vh - 56px);
            overflow-y: auto;
          }
        }
      `}</style>
    </div>
  );
}

// Header Component
function Header({
  cartCount,
  toggleCart,
  cartIconRef,
  isMobile,
  query,
  setQuery,
  searchHistory,
  onSearch,
  onSelectHistory,
}) {
  const [activePage, setActivePage] = React.useState("beranda");
  const history = useHistory();

  return (
    <header className="header">
      {isMobile ? (
        <>
          <div className="mobile-topbar">
            <div className="mobile-search-cart-row">
              <div className="mobile-search-container">
                <SearchBar
                  query={query}
                  setQuery={setQuery}
                  searchHistory={searchHistory}
                  onSearch={onSearch}
                  onSelectHistory={onSelectHistory}
                />
              </div>
              <button
                className="cart-icon mobile-cart-btn"
                onClick={toggleCart}
                ref={cartIconRef}
                aria-label="Keranjang"
              >
                <i className="fas fa-shopping-cart"></i>
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </button>
            </div>
          </div>
          <nav className="mobile-bottom-nav">
            <a
              href="/"
              className={activePage === "beranda" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActivePage("beranda");
                history.push("/");
              }}
            >
              <i className="fas fa-home"></i>
              <span>Beranda</span>
              <span className="nav-anim-bar" />
            </a>
            <a
              href="/products"
              className={activePage === "produk" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActivePage("produk");
                history.push("/products");
              }}
            >
              <i className="fas fa-shopping-bag"></i>
              <span>Produk</span>
              <span className="nav-anim-bar" />
            </a>
            <a
              href="/about"
              className={activePage === "tentang" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActivePage("tentang");
                history.push("/about");
              }}
            >
              <i className="fas fa-info-circle"></i>
              <span>Tentang</span>
              <span className="nav-anim-bar" />
            </a>
            <a
              href="/contact"
              className={activePage === "kontak" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActivePage("kontak");
                history.push("/contact");
              }}
            >
              <i className="fas fa-phone"></i>
              <span>Kontak</span>
              <span className="nav-anim-bar" />
            </a>
            <a
              href="/account"
              className={activePage === "akun" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActivePage("akun");
                history.push("/account");
              }}
            >
              <i className="fas fa-user"></i>
              <span>Akun</span>
              <span className="nav-anim-bar" />
            </a>
          </nav>
        </>
      ) : (
        <div className="nav-container">
          <a
            href="/"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              history.push("/");
            }}
          >
            ShopEase
          </a>
          <div className="search-bar-desktop">
            <SearchBar
              query={query}
              setQuery={setQuery}
              searchHistory={searchHistory}
              onSearch={onSearch}
              onSelectHistory={onSelectHistory}
            />
          </div>
          <nav className="nav-links">
            <a
              href="/"
              className={activePage === "beranda" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActivePage("beranda");
                history.push("/");
              }}
            >
              <i className="fas fa-home"></i>
              <span>Beranda</span>
            </a>
            <a
              href="/products"
              className={activePage === "produk" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActivePage("produk");
                history.push("/products");
              }}
            >
              <i className="fas fa-shopping-bag"></i>
              <span>Produk</span>
            </a>
            <a
              href="/about"
              className={activePage === "tentang" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActivePage("tentang");
                history.push("/about");
              }}
            >
              <i className="fas fa-info-circle"></i>
              <span>Tentang</span>
            </a>
            <a
              href="/contact"
              className={activePage === "kontak" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActivePage("kontak");
                history.push("/contact");
              }}
            >
              <i className="fas fa-phone"></i>
              <span>Kontak</span>
            </a>
            <a
              href="/account"
              className={activePage === "akun" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActivePage("akun");
                history.push("/account");
              }}
            >
              <i className="fas fa-user"></i>
              <span>Akun</span>
            </a>
          </nav>
          <div className="header-right">
            <div className="cart-icon" onClick={toggleCart} ref={cartIconRef}>
              <i className="fas fa-shopping-cart"></i>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          background: white;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .nav-container {
          display: flex;
          align-items: center;
          padding: 1rem;
          max-width: 1200px;
          margin: 0 auto;
          gap: 2rem;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #4caf50;
          text-decoration: none;
          white-space: nowrap;
        }
        .search-bar-desktop {
          flex: 1;
          max-width: 500px;
          min-width: 300px;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .nav-links a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #666;
          text-decoration: none;
          transition: color 0.3s ease;
          white-space: nowrap;
        }
        .nav-links a:hover,
        .nav-links a.active {
          color: #4caf50;
        }
        .nav-links i {
          font-size: 1.2rem;
        }
        .header-right {
          margin-left: auto;
          display: flex;
          align-items: center;
        }
        .cart-icon {
          position: relative;
          cursor: pointer;
          padding: 0.5rem;
        }
        .cart-count {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #4caf50;
          color: white;
          font-size: 0.8rem;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        /* Mobile Styles */
        .mobile-topbar {
          background: white;
          padding: 0.75rem 1rem 0.5rem 1rem;
          border-bottom: 1px solid #eee;
        }
        .mobile-search-cart-row {
          display: flex;
          align-items: center;
          height: 44px;
          overflow: hidden;
          background: none;
        }
        .mobile-search-container {
          flex: 1;
          display: flex;
          min-width: 0;
        }
        .mobile-search-container .search-bar-container {
          flex: 1;
          min-width: 0;
        }
        .mobile-search-container .search-bar {
          height: 100%;
          border-radius: 22px 0 0 22px;
          border: 2px solid #4caf50;
          border-right: none;
          width: 100%;
          min-width: 0;
          margin: 0;
          padding: 0 0.5rem 0 1rem;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          background: #fff;
          box-shadow: none;
        }
        .mobile-search-container .search-input {
          height: 100%;
          box-sizing: border-box;
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          padding-right: 0;
        }
        .mobile-cart-btn {
          background: #fff;
          border: 2px solid #4caf50;
          border-left: none;
          outline: none;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 44px;
          min-width: 44px;
          min-height: 44px;
          padding: 0;
          border-radius: 0 22px 22px 0;
          box-shadow: none;
          margin: 0 0 0 4px;
          position: relative;
          transition: background 0.15s;
          flex-shrink: 0;
          box-sizing: border-box;
        }
        .mobile-cart-btn:active {
          background: #f0f0f0;
        }
        .mobile-cart-btn i {
          font-size: 1.25rem;
        }
        .cart-count {
          position: absolute;
          top: 4px;
          right: 4px;
          background: #4caf50;
          color: white;
          font-size: 0.8rem;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-bottom-nav {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          background: #fff;
          border-top: 1px solid #eee;
          display: flex;
          justify-content: space-around;
          z-index: 1001;
          padding: 0.25rem 0 0.15rem 0;
        }
        .mobile-bottom-nav a {
          flex-direction: column;
          gap: 0.15rem;
          font-size: 0.8rem;
          color: #666;
          text-decoration: none;
          align-items: center;
          display: flex;
          padding: 0.2rem 0.5rem;
          position: relative;
          transition: color 0.2s;
        }
        .mobile-bottom-nav a.active,
        .mobile-bottom-nav a:hover {
          color: #4caf50;
        }
        .mobile-bottom-nav i {
          font-size: 1.2rem;
        }
        .nav-anim-bar {
          display: block;
          height: 3px;
          width: 22px;
          border-radius: 2px;
          background: #4caf50;
          margin: 2px auto 0 auto;
          opacity: 0;
          transform: scaleX(0.5);
          transition: opacity 0.2s, transform 0.2s;
        }
        .mobile-bottom-nav a.active .nav-anim-bar {
          opacity: 1;
          transform: scaleX(1);
        }
        @media (max-width: 768px) {
          .nav-container {
            display: none;
          }
          .mobile-bottom-nav {
            display: flex;
          }
        }
        @media (min-width: 769px) {
          .mobile-bottom-nav,
          .mobile-topbar {
            display: none;
          }
        }
      `}</style>
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
      <style jsx>{`
        .cart-modal {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 400px;
          background: white;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
          z-index: 1000;
          padding-bottom: env(safe-area-inset-bottom);
        }

        .cart-modal.open {
          transform: translateX(0);
        }

        .cart-items {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          padding-bottom: calc(1rem + env(safe-area-inset-bottom));
        }

        .cart-total {
          padding: 1rem;
          border-top: 1px solid #eee;
          background: white;
          position: sticky;
          bottom: 0;
          padding-bottom: calc(1rem + env(safe-area-inset-bottom));
        }

        .checkout-btn {
          width: 100%;
          padding: 1rem;
          background: #4caf50;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .cart-modal {
            max-width: 100%;
          }

          .cart-total {
            padding-bottom: calc(1rem + env(safe-area-inset-bottom));
          }

          .checkout-btn {
            margin-bottom: env(safe-area-inset-bottom);
          }
        }
      `}</style>
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

// Services Component
function Services({ addToCart, showProductDetail }) {
  const services = [
    {
      id: 1,
      title: "Produk Lokal",
      icon: "fas fa-store",
      color: "#4CAF50",
      items: products.slice(0, 4),
    },
    {
      id: 2,
      title: "Produk Tren",
      icon: "fas fa-fire",
      color: "#FF5722",
      items: products.slice(4, 8),
    },
    {
      id: 3,
      title: "Flash Sale",
      icon: "fas fa-bolt",
      color: "#FFC107",
      items: products.slice(8, 12),
    },
    {
      id: 4,
      title: "Promo Produk",
      icon: "fas fa-tag",
      color: "#E91E63",
      items: products.slice(12, 16),
    },
  ];

  const [activeService, setActiveService] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && activeService < services.length - 1) {
      setActiveService((prev) => prev + 1);
    }
    if (isRightSwipe && activeService > 0) {
      setActiveService((prev) => prev - 1);
    }
  };

  return (
    <div className="services-section">
      <div className="services-header">
        <h2>Layanan Kami</h2>
        <div className="services-nav">
          {services.map((service, index) => (
            <button
              key={service.id}
              className={`service-nav-btn ${
                activeService === index ? "active" : ""
              }`}
              onClick={() => setActiveService(index)}
              style={{ "--service-color": service.color }}
            >
              <i className={service.icon}></i>
              <span>{service.title}</span>
            </button>
          ))}
          <button className="service-nav-btn view-all">
            <i className="fas fa-th-large"></i>
            <span>Lihat Semua</span>
          </button>
        </div>
      </div>

      <div
        className="services-slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="services-track"
          style={{ transform: `translateX(-${activeService * 100}%)` }}
        >
          {services.map((service) => (
            <div key={service.id} className="service-slide">
              <div className="service-products">
                {service.items.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    showProductDetail={showProductDetail}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
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

  // Search state
  const [query, setQuery] = React.useState("");
  const [searchHistory, setSearchHistory] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState(products);
  const [isMobile, setIsMobile] = React.useState(false);

  // Add URL query parameter handling
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("q");
    if (searchQuery) {
      setQuery(searchQuery);
      handleSearch(searchQuery);
    }
  }, []);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSearch = (q) => {
    setQuery(q);
    if (!q.trim()) {
      setFilteredProducts(products);
      return;
    }
    const searchQuery = q.toLowerCase().trim();
    const filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.description.toLowerCase().includes(searchQuery)
    );
    setFilteredProducts(filtered);
    if (q.trim()) {
      setSearchHistory((prev) => {
        const newHistory = [q, ...prev.filter((item) => item !== q)];
        return newHistory.slice(0, 8);
      });
    }
  };

  const handleSelectHistory = (q) => {
    if (Array.isArray(q)) {
      setSearchHistory([]);
      return;
    }
    setQuery(q);
    handleSearch(q);
  };

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
      startX: startX - 20,
      startY: startY - 20,
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
    <Router>
      <div className="app-container">
        <Header
          cartCount={cartCount}
          toggleCart={() => setIsCartOpen(true)}
          cartIconRef={cartIconRef}
          isMobile={isMobile}
          query={query}
          setQuery={setQuery}
          searchHistory={searchHistory}
          onSearch={handleSearch}
          onSelectHistory={handleSelectHistory}
        />

        {/* Remove duplicate search bar for desktop */}
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

        <Switch>
          <Route exact path="/">
            <section className="hero">
              <h1>Selamat Datang di ShopEase</h1>
              <p>Temukan produk-produk menakjubkan dengan harga terbaik</p>
            </section>

            <Services
              addToCart={addToCart}
              showProductDetail={showProductDetail}
            />

            <div className="products-container">
              <h2>Semua Produk</h2>
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    showProductDetail={showProductDetail}
                  />
                ))}
              </div>
            </div>
          </Route>

          <Route path="/search">
            <SearchResults
              query={query}
              filteredProducts={filteredProducts}
              addToCart={addToCart}
              showProductDetail={showProductDetail}
            />
          </Route>
        </Switch>

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
    </Router>
  );
}

// Render the app
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
