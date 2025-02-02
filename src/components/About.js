const About = () => {
    return (
      <div className="about  min-h-screen flex  justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 mb-4">
            Welcome to <span className="text-red-500 font-semibold">Foodies Express</span>, your ultimate destination for delicious food delivered at your doorstep!  
            We bring you the best cuisines from top restaurants, ensuring quality, taste, and fast delivery.
          </p>
  
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Why Choose Us?</h2>
          <ul className="text-gray-600 mb-6 text-left list-disc list-inside">
            <li>🍕 Wide variety of cuisines</li>
            <li>🚀 Superfast delivery</li>
            <li>💯 Fresh & hygienic food</li>
            <li>🎉 Amazing discounts & offers</li>
          </ul>
  
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Contact Us</h2>
            <p className="text-gray-600">📍 Location: Jaipur, India</p>
            <p className="text-gray-600">📞 Phone: +91 98765 43210</p>
            <p className="text-gray-600">📧 Email: support@foodiesexpress.com</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  