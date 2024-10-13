import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Shield } from 'lucide-react';
import { useSocket } from '../context/SocketContext';

const PatrolList = () => {
  const [patrols, setPatrols] = useState([]);
  const socket = useSocket();

  useEffect(() => {
    const fetchPatrols = async () => {
      const response = await axios.get('/api/patrols');
      setPatrols(response.data);
    };
    fetchPatrols();

    if (socket) {
      socket.on('patrolStatusChanged', ({ patrolId, newStatus }) => {
        setPatrols(prevPatrols =>
          prevPatrols.map(patrol =>
            patrol.id === patrolId ? { ...patrol, status: newStatus } : patrol
          )
        );
      });
    }

    return () => {
      if (socket) {
        socket.off('patrolStatusChanged');
      }
    };
  }, [socket]);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {patrols.map((patrol) => (
          <li key={patrol.id}>
            <div className="px-4 py-4 flex items-center sm:px-6">
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center">
                  <Shield className="flex-shrink-0 h-6 w-6 text-gray-400" />
                  <div className="ml-4">
                    <p className="font-medium text-indigo-600 truncate">{patrol.name}</p>
                    <p className="text-sm text-gray-500">{patrol.site.name}</p>
                  </div>
                </div>
                <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                  <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    patrol.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {patrol.status}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatrolList;