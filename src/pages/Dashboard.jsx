// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { TbDownload } from 'react-icons/tb';

const data = [
  { id: '2023 Test 2', date: '15 April 2024', time: '2:32pm', grade: 'In progress', feedback: 'Submitted' },
  { id: '2022 Test 2', date: '14 April 2024', time: '9:47pm', grade: 'A', feedback: 'Available' },
  { id: '2022 Test 1', date: '2 March 2024', time: '6:43am', grade: 'B', feedback: 'Reviewed' },
  { id: '2021 Test 1', date: '1 March 2024', time: '6:21am', grade: 'D', feedback: 'Reviewed' },
  { id: '2023 Test 1', date: '27 February 2024', time: '11:14pm', grade: 'E', feedback: 'Reviewed' },
];

const Dashboard = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (isChecked) => {
    setSelectedItems(isChecked ? data.map((item) => item.id) : []);
  };

  const getGradeColor = (grade) => {
    if (['A', 'B', 'C'].includes(grade)) return 'bg-green-100 text-green-600';
    if (grade === 'D') return 'bg-orange-100 text-orange-600';
    return 'bg-red-100 text-red-600';
  };

  const getFeedbackColor = (feedback) => {
    if (feedback === 'Reviewed') return 'bg-blue-100 text-blue-600';
    if (feedback === 'Available') return 'bg-green-100 text-green-600';
    return 'bg-gray-100 text-gray-600';
  };

  const handleDownload = (id) => alert(`Downloading feedback for ${id}`);
  const handleExport = () => alert('Exporting data...');

  const isAllSelected = selectedItems.length === data.length;

  return (
    <div className="p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Dashboard</h1>
        <button
          onClick={handleExport}
          className="bg-blue-500 text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-gray-400 hover:text-black"
        >
          Export
        </button>
      </header>

      <div className="bg-white rounded-lg shadow p-6">
        <table className="w-full table-auto border-collapse text-center">
          <thead>
            <tr>
              <th className="border-b p-4">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </th>
              <th className="border-b p-4">Assessment Name</th>
              <th className="border-b p-4">Date Submitted</th>
              <th className="border-b p-4">Submitted At</th>
              <th className="border-b p-4">Grade</th>
              <th className="border-b p-4">Feedback Status</th>
              <th className="border-b p-4">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="border-b p-4">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelect(item.id)}
                  />
                </td>
                <td className="border-b p-4">{item.id}</td>
                <td className="border-b p-4">{item.date}</td>
                <td className="border-b p-4">{item.time}</td>
                <td className="border-b p-4">
                  <span className={`px-2 py-1 rounded ${getGradeColor(item.grade)}`}>
                    {item.grade}
                  </span>
                </td>
                <td className="border-b p-4">
                  <span className={`px-2 py-1 rounded ${getFeedbackColor(item.feedback)}`}>
                    {item.feedback}
                  </span>
                </td>
                <td className="border-b p-4">
                  {item.feedback !== 'Submitted' && (
                    <button onClick={() => handleDownload(item.id)} className="text-gray-500 hover:text-gray-800">
                      <TbDownload size={24} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
