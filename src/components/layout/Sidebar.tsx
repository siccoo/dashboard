

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: '🏠' },
    { name: 'Users', icon: '👤' },
    { name: 'Admins', icon: '🛠️' },
    { name: 'Coupon Codes', icon: '💳' },
    { name: 'Academic Levels', icon: '📚' },
    { name: 'Platforms', icon: '📱' },
    { name: 'Countries', icon: '🌍' },
    { name: 'Content Type', icon: '📝' },
    { name: 'Withdrawals', icon: '💵' },
    { name: 'Settings', icon: '⚙️', active: true },
  ];

  return (
    <aside className="w-64 h-screen bg-lightGray p-6">
      <div className="text-2xl font-bold text-primary mb-8">Qatalog</div>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center mb-4 p-2 rounded-lg cursor-pointer ${
              item.active ? 'bg-primary text-white' : 'text-textGray'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
      <button className="mt-6 bg-red-500 text-white py-2 px-4 rounded-lg">Logout</button>
    </aside>
  );
};

export default Sidebar;
