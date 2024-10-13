import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Shield, Building, MapPin, Users } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case 'super_admin':
        return <SuperAdminDashboard />;
      case 'company_admin':
        return <CompanyAdminDashboard />;
      case 'site_admin':
        return <SiteAdminDashboard />;
      case 'security_guard':
        return <SecurityGuardDashboard />;
      default:
        return <div>Access Denied</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div className="flex items-center py-4 px-2">
                <Shield className="h-8 w-8 mr-2 text-blue-600" />
                <span className="font-semibold text-gray-500 text-lg">SAS Dashboard</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="py-4 px-2">{user?.email}</span>
              <button className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">Logout</button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {renderDashboard()}
      </main>
    </div>
  );
};

const SuperAdminDashboard = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <DashboardCard icon={<Building className="h-8 w-8 text-blue-600" />} title="Companies" count={10} />
    <DashboardCard icon={<MapPin className="h-8 w-8 text-green-600" />} title="Total Sites" count={50} />
    <DashboardCard icon={<Users className="h-8 w-8 text-purple-600" />} title="Total Guards" count={200} />
  </div>
);

const CompanyAdminDashboard = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <DashboardCard icon={<MapPin className="h-8 w-8 text-green-600" />} title="Sites" count={5} />
    <DashboardCard icon={<Users className="h-8 w-8 text-purple-600" />} title="Guards" count={20} />
    <DashboardCard icon={<Shield className="h-8 w-8 text-blue-600" />} title="Active Patrols" count={3} />
  </div>
);

const SiteAdminDashboard = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <DashboardCard icon={<Users className="h-8 w-8 text-purple-600" />} title="Guards" count={10} />
    <DashboardCard icon={<Shield className="h-8 w-8 text-blue-600" />} title="Patrol Routes" count={5} />
    <DashboardCard icon={<MapPin className="h-8 w-8 text-green-600" />} title="NFC Tags" count={20} />
  </div>
);

const SecurityGuardDashboard = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <DashboardCard icon={<Shield className="h-8 w-8 text-blue-600" />} title="Assigned Patrols" count={2} />
    <DashboardCard icon={<MapPin className="h-8 w-8 text-green-600" />} title="Checkpoints" count={15} />
    <DashboardCard icon={<Users className="h-8 w-8 text-purple-600" />} title="Completed Rounds" count={50} />
  </div>
);

const DashboardCard = ({ icon, title, count }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="p-5">
      <div className="flex items-center">
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd>
              <div className="text-lg font-medium text-gray-900">{count}</div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;