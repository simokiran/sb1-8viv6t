import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Building } from 'lucide-react';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const response = await axios.get('/api/companies');
      setCompanies(response.data);
    };
    fetchCompanies();
  }, []);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {companies.map((company) => (
          <li key={company.id}>
            <div className="px-4 py-4 flex items-center sm:px-6">
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center">
                  <Building className="flex-shrink-0 h-6 w-6 text-gray-400" />
                  <div className="ml-4">
                    <p className="font-medium text-indigo-600 truncate">{company.name}</p>
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

export default CompanyList;