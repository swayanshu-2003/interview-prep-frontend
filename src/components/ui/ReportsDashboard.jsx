import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from "recharts";
  
  const lineData = [
    { name: "Mon", value: 70 },
    { name: "Tue", value: 85 },
    { name: "Wed", value: 60 },
    { name: "Thu", value: 90 },
    { name: "Fri", value: 75 },
  ];
  
  const barData = [
    { name: "Test 1", score: 60 },
    { name: "Test 2", score: 70 },
    { name: "Test 3", score: 80 },
    { name: "Test 4", score: 78 },
  ];
  
  export default function ReportsDashboard() {
    return (
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Reports & Analytics</h1>
          <p className="text-gray-400">
            Detailed view of your interview performance
          </p>
        </div>
  
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Line Chart */}
          <div className="bg-white rounded-xl p-4 shadow text-black">
            <h2 className="font-semibold mb-2">Interview Performance</h2>
            <LineChart width={250} height={150} data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" />
            </LineChart>
          </div>
  
          {/* Bar Chart */}
          <div className="bg-white rounded-xl p-4 shadow text-black">
            <h2 className="font-semibold mb-2">Theory Discussion Performance</h2>
            <BarChart width={250} height={150} data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#3b82f6" />
            </BarChart>
          </div>
  
          {/* Static Stats */}
          <div className="bg-white rounded-xl p-4 shadow text-black">
            <h2 className="font-semibold mb-2">Section Relevance</h2>
            <ul className="space-y-1 text-sm">
              <li>✔️ Soft Skills – 92%</li>
              <li>✔️ Technical – 87%</li>
              <li>✔️ Logical – 80%</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-4 shadow text-black">
            <h2 className="font-semibold mb-2 text-blue-600">🔎 Strengths</h2>
            <p className="text-sm text-gray-600">
              Candidate demonstrates clarity in communication and consistent
              confidence.
            </p>
          </div>
  
          <div className="bg-white rounded-xl p-4 shadow text-black">
            <h2 className="font-semibold mb-2 text-red-500">⚠️ Weaknesses</h2>
            <p className="text-sm text-gray-600">
              Struggles in time management and requires more focus in technical
              deep-dives.
            </p>
          </div>
  
          <div className="bg-white rounded-xl p-4 shadow text-black">
            <h2 className="font-semibold mb-2 text-green-600">💡 Suggestions</h2>
            <p className="text-sm text-gray-600">
              Improve technical revision schedule and practice mock interviews
              under time limits.
            </p>
          </div>
        </div>
      </div>
    );
  }
  