import React, { useState } from "react";
import { Download, Pencil, Trash2 } from "lucide-react";

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [addressData, setAddressData] = useState({
    fullName: "",
    contact: "",
    address: "",
    landmark: "",
    postalCode: "",
    city: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDeleteClick = () => {
    setAddressData({
      fullName: "",
      contact: "",
      address: "",
      landmark: "",
      postalCode: "",
      city: ""
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setAddressData({
      fullName: "John Doe",
      contact: "85xxxxxx52",
      address: "12 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      landmark: "Near Park",
      postalCode: "45xx19",
      city: "Bangalore",
    });
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const colors = {
    0: "bg-purple-100 text-purple-700 text-purple-900",
    1: "bg-yellow-100 text-yellow-700 text-yellow-900",
    2: "bg-red-100 text-red-700 text-red-900",
  };
  const sectionTitles = {
    dashboard: "Dashboard",
    orders: "Orders",
    address: "Address",
    payments: "Payments",
    invoice: "Invoice",
    kyc: "KYC Verification",
    profile: "Profile Settings",
  };

  const sections = {
    dashboard: (
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 shadow-sm p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-blue-700">Total Orders</h3>
          <p className="text-2xl font-bold text-blue-900">42</p>
        </div>
        <div className="bg-green-100 shadow-sm p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-green-700">
            Total Money Spent
          </h3>
          <p className="text-2xl font-bold text-green-900">₹ 1,20,000</p>
        </div>
      </div>
    ),
    orders: (
      <table className="w-full border-collapse border-gray-200 bg-white p-6 rounded-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="shadow-sm rounded-md p-2">Order ID</th>
            <th className="shadow-sm rounded-md p-2">Status</th>
            <th className="shadow-sm rounded-md p-2">Amount</th>
            <th className="shadow-sm rounded-md p-2">Amount</th>
            <th className="shadow-sm rounded-md p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="shadow-sm rounded-sm text-center p-2">#12345</td>
            <td className="shadow-sm rounded-sm text-center p-2">Active</td>
            <td className="shadow-sm rounded-sm text-center p-2">₹ 2,500</td>
            <td className="shadow-sm rounded-sm text-center p-2">₹ 2,500</td>
            <td className="shadow-sm rounded-sm text-center p-2">₹ 2,500</td>
          </tr>
        </tbody>
      </table>
    ),
    address: (
      <div className="grid grid-cols-2 gap-6">
        {/* Address Form */}
        <div className="p-6 rounded-lg space-y-4">
          {[
            "fullName",
            "contact",
            "address",
            "landmark",
            "postalCode",
            "city",
          ].map((name) => (
            <div key={name} className="w-full">
              <input
                type="text"
                name={name}
                value={addressData[name]}
                onChange={handleInputChange}
                className="w-full border border-gray-200 shadow-sm p-2 rounded focus:outline-none focus:border-gray-400 hover:border-gray-400"
                placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
              />
            </div>
          ))}
          <div className="w-full">
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white p-2 rounded shadow-md hover:bg-blue-700 transition"
            >
              {isEditing ? "Update" : "Submit"}
            </button>
          </div>
        </div>

        {/* Address Details Card */}
        <div className="bg-white rounded-xl h-35 mt-6 border border-gray-200 shadow-sm w-full p-4 hover:shadow-md">
          <div className="flex justify-between items-center">
            <p className="font-bold">{addressData.fullName}</p>
            <div className="flex space-x-2">
              <Pencil
                className="cursor-pointer text-gray-600 hover:text-blue-500 transition"
                size={20}
                onClick={handleEditClick}
              />
              <Trash2
                className="cursor-pointer text-gray-600 hover:text-red-500 transition"
                size={20}
                onClick={handleDeleteClick}
              />
            </div>
          </div>
          <p className="text-gray-500">{addressData.contact}</p>
          <p className="truncate mt-2 text-gray-500">{addressData.address}</p>
          <p className="text-gray-500">
            {addressData.city}, {addressData.postalCode}
          </p>
        </div>
      </div>
    ),

    payments: (
      <div className="grid grid-cols-3 gap-4">
        {["Total Invoice", "Total Payments", "Balance"].map((title, index) => (
          <div
            key={title}
            className={`shadow-md p-6 rounded-lg text-center ${
              colors[index].split(" ")[0]
            }`}
          >
            <h3
              className={`text-lg font-semibold ${colors[index].split(" ")[1]}`}
            >
              {title}
            </h3>
            <p className={`text-2xl font-bold ${colors[index].split(" ")[2]}`}>
              ₹ {index === 2 ? "1,500" : index === 1 ? "8,500" : "10,000"}
            </p>
          </div>
        ))}
      </div>
    ),

    invoice: (
      <table className="w-full border-collapse border-gray-200 bg-white p-6 rounded-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="shadow-sm rounded-md p-2">Invoice Date</th>
            <th className="shadow-sm rounded-md p-2">Invoice No.</th>
            <th className="shadow-sm rounded-md p-2">Order No.</th>
            <th className="shadow-sm rounded-md p-2">Amount</th>
            <th className="shadow-sm rounded-md p-2">Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="shadow-sm rounded-sm text-center p-2">01-02-2025</td>
            <td className="shadow-sm rounded-sm text-center p-2">INV123</td>
            <td className="shadow-sm rounded-sm text-center p-2">ORD456</td>
            <td className="shadow-sm rounded-sm text-center p-2">₹ 2,500</td>
            <td className="shadow-sm rounded-sm text-center p-2 flex justify-center items-center">
              <Download className="cursor-pointer" />
            </td>
          </tr>
        </tbody>
      </table>
    ),
    kyc: (
      <div className="p-6 rounded-lg space-y-4">
        {["Name as per ID-Proof", "Upload ID Proof"].map(
          (placeholder, index) => (
            <div key={placeholder} className="w-2/4">
              {index === 1 ? (
                <>
                  <h3 className="text-md text-gray-700">
                    Upload ID-Proof Image
                  </h3>
                  <label className="w-full cursor-pointer">
                    <input
                      type="file"
                      className="hidden focus:outline-none focus:border-gray-400 hover:border-gray-400"
                      id="file-input"
                    />
                    <div className="w-full p-2 shadow-sm rounded border border-gray-200 text-center bg-white text-gray-700">
                      Choose File
                    </div>
                  </label>
                </>
              ) : (
                <input
                  key={placeholder}
                  className="w-full border border-gray-200 focus:outline-none focus:border-gray-400 hover:border-gray-400 shadow-sm p-2 rounded"
                  placeholder={placeholder}
                  type="text"
                />
              )}
            </div>
          )
        )}
        <div className="w-1/4">
          <button className="w-full bg-blue-600 text-white p-2 rounded shadow-md hover:bg-blue-700 transition">
            Submit
          </button>
        </div>
      </div>
    ),
    profile: (
      <div className="p-6 rounded-lg space-y-4">
        {["Name", "Contact", "Email"].map((placeholder) => (
          <div key={placeholder} className="w-2/4">
            <input
              key={placeholder}
              className="w-full border border-gray-200 focus:outline-none focus:border-gray-400 hover:border-gray-400 shadow-sm p-2 rounded"
              placeholder={placeholder}
            />
          </div>
        ))}
        <div className="w-1/4">
          <button className="w-full bg-blue-600 text-white p-2 rounded shadow-md hover:bg-blue-700 transition">
            Submit
          </button>
        </div>
      </div>
    ),
  };

  return (
    <div className="mx-auto mt-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 ml-4">My Profile</h2>
      <div className="flex">
        <div
          className="w-1/4 space-y-4 border mx-4 border-gray-200 rounded-xl p-4"
          style={{
            boxShadow: "2px -1px 7px rgba(0, 0, 0, 0.07)", // Right shadow only
          }}
        >
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              className={`w-full text-left p-3 rounded-lg transition ${
                activeSection === key ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveSection(key)}
            >
              {sectionTitles[key]}
            </button>
          ))}
        </div>
        <div className="w-3/4 p-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            {sectionTitles[activeSection]}
          </h3>
          {sections[activeSection]}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
