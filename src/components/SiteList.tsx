import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapPin } from 'lucide-react';

const SiteList = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    const fetchSites = async () => {
      const response = await axios.get('/api/sites');
      setSites(response.data);
    };
    fetchSites();
  }, []);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {sites.map((site) => (
          <li key={site.id}>
            <div className="px-4 py-4 flex items-center sm:px-6">
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center">
                  <MapPin className="flex-shrink-0 h-6 w-6 text-gray-400" />
                  <div className="ml-4">
                    <p className="font-medium text-indigo-600 truncate">{site.name}</p>
                    <p className="text-sm text-gray-500">{site.company.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiteList;