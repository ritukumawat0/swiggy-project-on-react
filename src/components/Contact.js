const Contact = () => {
    return (
      <div className="contact flex justify-center mt-20 min-h-screen">
        <div className="bg-white shadow-md rounded-lg p-6 w-5/12">
          <h1 className="text-xl font-bold text-center mb-4">Contact Us</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  