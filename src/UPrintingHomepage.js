import React, { useState } from 'react';
import { Search, ShoppingCart, ChevronRight, Star, Menu } from 'lucide-react';

const UPrintingHomepage = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const HomePage = () => (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-blue-900 to-teal-700 text-white text-center py-2">
          <span className="text-sm">High Quality | On Time Delivery | Everyday Fair Prices</span>
        </div>

        {/* Main Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
                  <div className="text-3xl font-bold">
                    <span className="text-blue-600">U</span>
                    <span className="text-green-600">Printing</span>
                  </div>
                  <div className="ml-2 text-xs text-gray-500">
                    <div>Business made brilliant</div>
                  </div>
                </div>
                
                <div className="hidden md:flex flex-col">
                  <div className="text-blue-600 font-semibold">888.888.4211</div>
                  <div className="text-sm text-gray-600">Quality Customer Service</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="Search (e.g. labels, boxes, etc)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">
                    <Search className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setCurrentPage('login')}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    <div>Hi, Log In!</div>
                    <div>Your Account</div>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-700">
                    <ShoppingCart className="h-6 w-6" />
                    <span>Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="hidden md:flex space-x-8">
                <button className="text-blue-600 hover:text-blue-800 py-4 border-b-2 border-transparent hover:border-blue-600">Marketing Materials</button>
                <button className="text-blue-600 hover:text-blue-800 py-4 border-b-2 border-transparent hover:border-blue-600">Stickers & Labels</button>
                <button className="text-blue-600 hover:text-blue-800 py-4 border-b-2 border-transparent hover:border-blue-600">Boxes & Packaging</button>
                <button className="text-blue-600 hover:text-blue-800 py-4 border-b-2 border-transparent hover:border-blue-600">Signs & Banners</button>
                <button className="text-blue-600 hover:text-blue-800 py-4 border-b-2 border-transparent hover:border-blue-600">Apparel & Promo</button>
                <button className="text-blue-600 hover:text-blue-800 py-4 border-b-2 border-transparent hover:border-blue-600">Featured Collections</button>
              </div>
              
              <button 
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-400 via-red-400 to-red-500">
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-white max-w-lg">
              <h1 className="text-4xl font-bold mb-2">Custom online printing for professionals</h1>
              <p className="text-xl mb-6">Display good taste.</p>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition-colors">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="font-semibold mb-4">Popular Products</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span>Custom Product Builder</span>
                </li>
                <li className="flex items-center justify-between cursor-pointer hover:text-blue-600">
                  <span>Apparel</span>
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li className="flex items-center justify-between cursor-pointer hover:text-blue-600">
                  <span>Banners</span>
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li className="flex items-center justify-between cursor-pointer hover:text-blue-600">
                  <span>Boxes</span>
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li className="flex items-center justify-between cursor-pointer hover:text-blue-600">
                  <span>Brochures</span>
                </li>
                <li className="flex items-center justify-between cursor-pointer hover:text-blue-600">
                  <span>Business Cards</span>
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li className="flex items-center justify-between cursor-pointer hover:text-blue-600">
                  <span>Flyers</span>
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li className="flex items-center justify-between cursor-pointer hover:text-blue-600">
                  <span>Labels</span>
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li className="flex items-center justify-between cursor-pointer hover:text-blue-600">
                  <span>Packaging</span>
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li className="flex items-center justify-between cursor-pointer hover:text-blue-600">
                  <span>Postcards</span>
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li className="flex items-center justify-between cursor-pointer hover:text-blue-600">
                  <span>Promotional Products</span>
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li className="flex items-center justify-between cursor-pointer hover:text-blue-600">
                  <span>Signs</span>
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li className="flex items-center justify-between cursor-pointer hover:text-blue-600">
                  <span>Stickers</span>
                  <ChevronRight className="h-4 w-4" />
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t">
                <div className="space-y-2">
                  <div className="text-sm">Custom Quote</div>
                  <div className="text-sm">Direct Mail</div>
                  <div className="text-sm">Design Service</div>
                  <div className="flex items-center justify-between cursor-pointer hover:text-blue-600">
                    <span className="text-sm">See More Products</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Top Sellers */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Top Sellers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-100 p-4 rounded">
                  <div className="aspect-square bg-white mb-4 rounded flex items-center justify-center">
                    <div className="w-full h-32 bg-gradient-to-r from-blue-400 to-green-400 rounded"></div>
                  </div>
                  <h3 className="font-semibold">Postcards</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <div className="aspect-square bg-white mb-4 rounded flex items-center justify-center">
                    <div className="w-full h-32 bg-gradient-to-r from-orange-400 to-red-400 rounded"></div>
                  </div>
                  <h3 className="font-semibold">Vinyl Banners</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <div className="aspect-square bg-white mb-4 rounded flex items-center justify-center">
                    <div className="w-full h-32 bg-gradient-to-r from-red-400 to-pink-400 rounded"></div>
                  </div>
                  <h3 className="font-semibold">Product Boxes</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <div className="aspect-square bg-white mb-4 rounded flex items-center justify-center">
                    <div className="w-full h-32 bg-gradient-to-r from-green-400 to-teal-400 rounded"></div>
                  </div>
                  <h3 className="font-semibold">Roll Labels</h3>
                </div>
              </div>
            </section>

            {/* Featured Products */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-100 p-4 rounded">
                  <div className="aspect-square bg-white mb-4 rounded flex items-center justify-center">
                    <div className="w-full h-32 bg-gradient-to-r from-teal-400 to-green-400 rounded"></div>
                  </div>
                  <h3 className="font-semibold">Breakaway Banners</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <div className="aspect-square bg-white mb-4 rounded flex items-center justify-center">
                    <div className="w-full h-32 bg-gradient-to-r from-green-600 to-teal-600 rounded"></div>
                  </div>
                  <h3 className="font-semibold">Tote Bags</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <div className="aspect-square bg-white mb-4 rounded flex items-center justify-center">
                    <div className="w-full h-32 bg-gradient-to-r from-yellow-400 to-orange-400 rounded"></div>
                  </div>
                  <h3 className="font-semibold">Wine Labels</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <div className="aspect-square bg-white mb-4 rounded flex items-center justify-center">
                    <div className="w-full h-32 bg-gradient-to-r from-green-500 to-teal-500 rounded"></div>
                  </div>
                  <h3 className="font-semibold">Door Hangers</h3>
                </div>
              </div>
            </section>

            {/* New & Updated Products */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">New & Updated Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-100 p-4 rounded">
                  <div className="aspect-square bg-white mb-4 rounded flex items-center justify-center">
                    <div className="w-full h-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded"></div>
                  </div>
                  <h3 className="font-semibold">Dine-In Menus</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <div className="aspect-square bg-white mb-4 rounded flex items-center justify-center">
                    <div className="w-full h-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded"></div>
                  </div>
                  <h3 className="font-semibold">Outdoor X Banner Stand</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <div className="aspect-square bg-white mb-4 rounded flex items-center justify-center">
                    <div className="w-full h-32 bg-gradient-to-r from-gray-400 to-gray-600 rounded"></div>
                  </div>
                  <h3 className="font-semibold">Metal Business Cards</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <div className="aspect-square bg-white mb-4 rounded flex items-center justify-center">
                    <div className="w-full h-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded"></div>
                  </div>
                  <h3 className="font-semibold">Magnetic Boxes</h3>
                </div>
              </div>
            </section>

            {/* Best Deals */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Best Deals</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 rounded flex items-center space-x-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Custom Packing Tape</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Heavy-duty & cost-effective</li>
                      <li>• Paper & plastic material options</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-100 p-6 rounded flex items-center space-x-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-teal-600 rounded"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Pouches</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Keep food & other products fresh</li>
                      <li>• Choose from a variety of sizes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Trusted Companies */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-bold mb-8">Trusted Online Printer of Choice</h2>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-4xl font-bold text-gray-400">amazon</div>
            <div className="text-4xl font-bold text-gray-400">Google</div>
            <div className="text-4xl font-bold text-gray-400">facebook</div>
            <div className="text-4xl font-bold text-gray-400">airbnb</div>
            <div className="text-4xl font-bold text-gray-400">NIKE</div>
          </div>
        </section>

        {/* Quality Promise */}
        <section className="bg-gray-100 py-16 -mx-4">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Quality custom printing. Guaranteed.</h2>
              <p className="text-gray-600">From stickers to business cards, UPrinting makes it easy for you to meet your business goals with our online printing services.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">✓</div>
                </div>
                <h3 className="font-semibold mb-2">Free artwork check.</h3>
                <p className="text-sm text-gray-600">Your files will be reviewed for printing errors without paying a cent.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">⚙</div>
                </div>
                <h3 className="font-semibold mb-2">More printing.</h3>
                <p className="text-sm text-gray-600">150+ print products to help you make a good impression. 1000+ options to customize to your heart's content.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">📦</div>
                </div>
                <h3 className="font-semibold mb-2">Reliable. Always.</h3>
                <p className="text-sm text-gray-600">The product you want. The way you want. Professional printing guaranteed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Trust */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">1,000,000+ business professionals trust us with their printing.</h2>
          <p className="text-gray-600 mb-8">Our customers come back for our quality printing. See why we're the printing company of choice by <br />designers, marketers, and business owners. <button className="text-blue-600 underline">See all UPrinting reviews.</button></p>
          
          {/* Reviews */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div className="text-left">
                  <div className="font-semibold">MaryAnn Halstead</div>
                  <div className="text-sm text-gray-600">Graphic Designer<br />Chester, SC</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 italic">As a professional graphic designer, it was a pleasure to work with UPrinting to complete my client's brochure order. The ordering process was extremely simple, and the quality was outstanding. UPrinting can expect to receive more orders in the future.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div className="text-left">
                  <div className="font-semibold">Dr. Carole Ann Rollins</div>
                  <div className="text-sm text-gray-600">President and Founder<br />ECI</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 italic">The quality was always perfect. Working with the technical team always provided the best possible, crisp, clean printing.(The) Work was immaculate, meticulous and delivered on time. We have never gone to any other printer.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div className="text-left">
                  <div className="font-semibold">Janna Berg</div>
                  <div className="text-sm text-gray-600">Owner and Designer<br />Re3 Home Decor</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 italic">The experience was great. I created my hang tags using a template and was able to easily decide what I wanted and how it would work best. Very simple online tools!</p>
            </div>
          </div>
        </section>

        {/* Browse by Category */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Browse by Category</h2>
          <div className="flex justify-center">
            <div className="flex space-x-8 border-b">
              <button className="pb-2 px-4 border-b-2 border-green-600 text-green-600 font-semibold">Business Cards</button>
              <button className="pb-2 px-4 text-gray-500 hover:text-gray-700">Packaging</button>
              <button className="pb-2 px-4 text-gray-500 hover:text-gray-700">Banners</button>
              <button className="pb-2 px-4 text-gray-500 hover:text-gray-700">Flyers</button>
              <button className="pb-2 px-4 text-gray-500 hover:text-gray-700">Posters</button>
              <button className="pb-2 px-4 text-gray-500 hover:text-gray-700">Stickers</button>
            </div>
          </div>
        </section>
      </main>

      {/* Newsletter */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold mb-2">Don't Miss Out</h3>
          <p className="text-gray-600 mb-6">Get the latest product updates, exciting promotions and exclusive discounts in your inbox.</p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gray-500 text-white px-6 py-2 rounded-r hover:bg-gray-600">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-6 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4 text-blue-600">Help & FAQs</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-600">About Us</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-600">Contact Us</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-600">Resellers</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-600">Templates</h4>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-600">Blog</h4>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-8 h-8 bg-blue-600 rounded"></div>
            <div className="w-8 h-8 bg-blue-400 rounded"></div>
            <div className="w-8 h-8 bg-pink-500 rounded"></div>
            <div className="w-8 h-8 bg-blue-700 rounded"></div>
            <div className="w-8 h-8 bg-red-600 rounded"></div>
          </div>

          <div className="text-center text-sm text-gray-600 space-x-4">
            <span>© 2000–2025 UPrinting.com. All rights reserved.</span>
            <button className="text-blue-600 hover:underline">Terms of Service</button>
            <button className="text-blue-600 hover:underline">Privacy Policy</button>
            <button className="text-blue-600 hover:underline">Cookies Settings</button>
            <button className="text-blue-600 hover:underline">Accessibility</button>
            <button className="text-blue-600 hover:underline">Sitemap</button>
          </div>
        </div>
      </footer>
    </div>
  );

  if (currentPage === 'login') {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </div>
          <button
            onClick={() => setCurrentPage('home')}
            className="mt-4 text-blue-600 hover:underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return <HomePage />;
};

export default UPrintingHomepage;