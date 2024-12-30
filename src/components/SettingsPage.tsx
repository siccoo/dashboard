import { useState } from 'react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  const tabs = ['Profile', 'Password', 'Subscriptions', 'Publisher Earnings'];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`p-2 ${
              activeTab === tab ? 'border-b-2 border-primary text-primary' : 'text-textGray'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex">
        {/* Profile Picture Section */}
        <div className="w-1/3 text-center">
          <img
            src="https://via.placeholder.com/100"
            alt="User"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-lg mr-2">
            Upload New Picture
          </button>
          <button className="border border-primary text-primary px-4 py-2 rounded-lg">
            Remove
          </button>
        </div>

        {/* Form Section */}
        <div className="w-2/3 pl-6">
          {activeTab === 'Profile' && (
            <form className="space-y-4">
              <div>
                <label className="block text-sm">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm">Email</label>
                <input
                  type="email"
                  placeholder="johnd@gmail.com"
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+234"
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-lg">
                Update
              </button>
            </form>
          )}

          {activeTab === 'Password' && (
            <form className="space-y-4">
              <div>
                <label className="block text-sm">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm">New Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm">Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-lg">
                Update Password
              </button>
            </form>
          )}

          {activeTab === 'Subscriptions' && (
            <div>
              <p>Manage your subscription details here.</p>
            </div>
          )}

          {activeTab === 'Publisher Earnings' && (
            <div>
              <p>View and manage your earnings here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
