import BreadCrumb from "../../components/BreadCrumb";
import InfoCard from "../../widgets/cards/dashboard-info-card";
import { caseInfo } from "../../data/dashboard-case-info";
import Chart, { CategoryScale } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useState } from "react";

Chart.register(CategoryScale);

function DashboardHome() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });
  return (
    <div>
      <section className="main-section">
        <BreadCrumb head="होम" text="ड्यासबोर्ड" customStyle="mt-0 mx-0" />
        <div className="number-of-cases-section flex flex-wrap gap-4 w-full pr-4 mt-4">
          {caseInfo.map((data, index) => (
            <InfoCard key={index} data={data} />
          ))}
        </div>
        <div className="chart-container mt-16 w-10/12 m-auto bg-white">
          <Bar
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Users gained between 2016-2020",
                },
                legend: {
                  display: false,
                },
                responsive: true,
                maintainAspectRatio: false,
              },
            }}
          />
        </div>
      </section>
    </div>
  );
}

export const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

const data = {
  labels: ["Red", "Orange", "Blue"],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
    {
      label: "Popularity of colours",
      data: [55, 23, 96],
      // you can set indiviual colors for each bar
      backgroundColor: [
        "rgba(255, 255, 255, 0.6)",
        "rgba(255, 255, 255, 0.6)",
        "rgba(255, 255, 255, 0.6)",
      ],
      borderWidth: 1,
    },
  ],
};
export default DashboardHome;
