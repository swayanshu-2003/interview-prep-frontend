import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ReportsContainer() {
  // Sample chart data (replace with your API later)
  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Interview Performance",
        data: [70, 85, 78, 88],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.3)",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["HR", "Tech", "GD", "Aptitude"],
    datasets: [
      {
        label: "Scores",
        data: [75, 82, 69, 78],
        backgroundColor: "#3b82f6",
      },
    ],
  };

  const horizontalBarData = {
    labels: ["Round 1", "Round 2", "Round 3"],
    datasets: [
      {
        label: "Success Rate",
        data: [95, 88, 92],
        backgroundColor: "#60a5fa",
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Reports & Analytics
      </h2>
      <p className="text-gray-500 mb-6">
        Visualize your performance and track progress effectively.
      </p>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-2">
            Interview Performance
          </h3>
          <p className="text-2xl font-bold text-blue-600">85%</p>
          <p className="text-green-600 text-sm">▲ +5% vs last month</p>
          <Line data={lineData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-2">
            Theory Discussion Test Performance
          </h3>
          <p className="text-2xl font-bold text-blue-600">78%</p>
          <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-2">Sectional Performance</h3>
          <p className="text-2xl font-bold text-blue-600">92%</p>
          <Bar
            data={horizontalBarData}
            options={{
              indexAxis: "y",
              responsive: true,
              plugins: { legend: { display: false } },
            }}
          />
        </div>
      </div>

      {/* Insights Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="font-semibold text-gray-800">Strengths</h3>
          <p className="text-gray-500 mt-2">
            You are consistently strong in HR interviews and analytical
            reasoning.
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="font-semibold text-gray-800">Weaknesses</h3>
          <p className="text-gray-500 mt-2">
            Performance in system design needs improvement. Focus on structuring
            answers better.
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="font-semibold text-gray-800">Suggestions</h3>
          <p className="text-gray-500 mt-2">
            Practice more coding mock tests and participate in peer discussions
            to improve technical depth.
          </p>
        </div>
      </div>
    </div>
  );
}
