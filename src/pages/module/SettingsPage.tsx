import React, { useState } from "react";

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const tabs = ["Profile", "Password", "Subscriptions", "Publisher Earnings"];

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setProfilePic(file);
    }
  };

  const handleRemove = () => {
    setProfilePic(null);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="font-lato font-extrabold text-[30px] leading-[48px] text-[#323233] mb-4">
        Settings
      </h1>

      {/* Tabs Navigation */}
      <div className="flex space-x-6 border-gray-200 font-lato font-bold text-[15px] text-[#323233] mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 border-b-2 ${
              activeTab === tab
                ? "text-[#323233] border-[#F14119] font-semibold"
                : "text-[#7D7D80] border-transparent"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Conditional Rendering of Tabs */}
      {activeTab === "Profile" && (
        <div className=" p-6 rounded-lg">
          {/* Profile Picture Section */}
          <div className="flex flex-col xl:flex-row gap-4">
            <div className="">
              <div className="relative">
                <img
                  src={profilePic || "./images/SettingsImg.png"}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-red-500"
                />
              </div>
            </div>

            <div className="flex-grow-0 mt-5">
              <div className="">
                <label
                  htmlFor="upload-profile"
                  className="rounded-[48px] px-6 py-3 bg-[#f14119] text-white font-lato font-semibold text-[14px] transition cursor-pointer"
                >
                  Upload New Picture
                </label>
                <input
                  id="upload-profile"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUpload}
                />
              </div>
              <div className="mb-10">
                <button
                  onClick={handleRemove}
                  className="mt-5 rounded-[48px] px-[42.5px] py-[7px] border-2 border-[#f14119] text-[#f14119] font-lato font-semibold text-[14px]"
                >
                  <span>
                    <img src="./images/svg/removeIcon.svg" alt="remove" className="inline mr-2" />
                  </span>
                  Remove
                </button>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form className="mt-6 space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-600">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                defaultValue="John Doe"
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                defaultValue="Johhd@gmail.com"
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-600">
                Phone Number
              </label>
              <div className="flex border border-gray-300 p-2 rounded-lg">
                <span className="text-gray-500 mr-2">+234</span>
                <input
                  id="phone"
                  type="tel"
                  defaultValue=""
                  placeholder="Phone Number"
                  className="flex-1 outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-[30%] bg-red-500 text-white py-2 rounded-lg"
            >
              Update
            </button>
          </form>
        </div>
      )}

      {activeTab !== "Profile" && (
        <div className="text-center text-gray-500">
          <p>Content for "{activeTab}" is not implemented yet.</p>
        </div>
      )}
    </div>
  );
};

export default Settings;
