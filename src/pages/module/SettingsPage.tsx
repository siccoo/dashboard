import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const Settings: React.FC = () => {
  const { t } = useTranslation(); // Access translations
  const [activeTab, setActiveTab] = useState("Profile");
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const tabs = [
    t('settings.tabs.profile'),
    t('settings.tabs.password'),
    t('settings.tabs.subscriptions'),
    t('settings.tabs.earnings'),
  ];

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
      {t('settings.title')}
      </h1>

      {/* Tabs Navigation */}
      <div className="flex space-x-4 border-gray-200 font-lato font-bold text-[15px] text-[#323233] mb-6">
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
        <div className="rounded-lg">
          {/* Profile Picture Section */}
          <div className="flex flex-col xl:flex-row gap-4 pt-4">
            <div className="">
              <div className="relative">
                <img
                  src={profilePic || "/images/svg/SettingsImg.png"}
                  alt="Profile"
                  className="w-36 h-36 rounded-full object-cover border-4 "
                />
              </div>
            </div>

            <div className="flex-grow-0 mt-5">
              <div className="">
                <label
                  htmlFor="upload-profile"
                  className="rounded-[48px] px-6 py-3 bg-[#f14119] text-white font-lato font-semibold text-[14px] transition cursor-pointer"
                >
                  {t('settings.uploadPicture')}
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
                    <img
                      src="./images/svg/removeIcon.svg"
                      alt="remove"
                      className="inline mr-2"
                    />
                  </span>
                  {t('settings.removePicture')}
                </button>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form className="mt-4 space-y-3">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="font-lato font-bold text-[15px] text-[#323233] mb-2"
              >
                {t('settings.fullName')}
              </label>
              <input
                id="name"
                type="text"
                className="border border-[#D0D0D4] focus:ring-[#666666] focus:border-[#666666] rounded-[48px] px-[15px] py-[7px] w-[63%]"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-lato font-bold text-[15px] text-[#323233] mb-2"
              >
               {t('settings.email')}
              </label>
              <input
                id="email"
                type="email"
                className="border border-[#D0D0D4] focus:ring-[#666666] focus:border-[#666666] rounded-[48px] px-[15px] py-[7px] w-[63%]"
                placeholder="Johhd@gmail.com"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="font-lato font-bold text-[15px] text-[#323233] mb-2"
              >
                {t('settings.phoneNumber')}
              </label>
              <div className="flex items-center border border-[#D0D0D4] focus:ring-[#666666] focus:border-[#666666] rounded-[48px] px-[15px] py-[7px] w-[63%] mb-3">
                {/* Country Code Selector */}
                <select
                  className="appearance-none bg-transparent text-gray-500 focus:outline-none mr-2"
                  defaultValue="+234"
                >
                  <option value="+234">🇳🇬 +234</option>
                  <option value="+33">🇫🇷 +33</option>
                </select>

                {/* Phone Number Input */}
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 outline-none text-gray-800"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-[30%] rounded-[48px] px-6 py-3 bg-[#f14119] text-white font-lato font-semibold text-[14px] transition cursor-pointer"
            >
              {t('settings.update')}
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
