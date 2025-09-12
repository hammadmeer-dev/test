import React, { useState } from "react";

function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    state: "",
    gender: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    console.log("Form Submitted");
  };
  return (
    <div className="w-full bg-[#08512d] pattern py-10">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="">
          <h2 className="text-2xl font-oswald font-bold ">
            GET IN TOUCH WITH US
          </h2>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-[560px]  mx-auto">
          <div className="col-span-1">
            <label className="block text-white text-sm font-semibold mb-2">
              Name
            </label>
            <input
              className="w-full h-[37px] px-4 py-3 bg-white text-gray-400 placeholder-gray-400 border-none"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Name"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-white text-sm font-semibold mb-2">
              Email
            </label>
            <input
              className="w-full  h-[37px] px-4 py-3 bg-white text-gray-400 placeholder-gray-400 border-none"
              type="text"
              name="Email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Email"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-white text-sm font-semibold mb-2">
              Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full  h-[37px] px-4 py-3 bg-gray-100 border-none text-gray-700 focus:ring"
            >
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-white text-sm font-semibold mb-2">
              State
            </label>
            <select
              name="State"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full px-4 py-3 h-[37px] bg-gray-100 border-none text-gray-700 focus:ring"
            >
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-white text-sm font-semibold mb-2">
              Gender
            </label>
            <div className="flex flex-wrap gap-6">
              <label className="flex items-center text-white cursor-pointer">
                <input
                  className="w-6 h-6 mr-2 bg-white placeholder-gray-400 border-white text-green-300 focus-ring"
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleInputChange}
                />
                Male
              </label>
              <label className="flex items-center text-white cursor-pointer">
                <input
                  className="w-6 h-6 mr-2 bg-white placeholder-gray-400 border-white text-green-300 focus-ring"
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleInputChange}
                />
                Male
              </label>
              <label className="flex items-center text-white cursor-pointer">
                <input
                  className="w-6 h-6 mr-2 bg-white placeholder-gray-400 border-white text-green-300 focus-ring"
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === "Other"}
                  onChange={handleInputChange}
                />
                Other
              </label>
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-white text-sm font-semibold mb-2">
              COUNTRY
            </label>
            <textarea
              className="w-full px-4 py-3 bg-white text-gray-400 placeholder-gray-400 border-none"
              name="Message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
            />
          </div>
          <div className="flex justify-center pt-4 col-span-2">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-primary  text-white font-oswald font-medium py-2 px-14 cursor-pointer mx-auto "
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
