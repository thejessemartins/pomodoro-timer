import React from 'react';
import { Bar } from 'react-chartjs-2';

const ProductivityChart = ({ sessions }) => {
  const data = {
    labels: sessions.map((session, index) => `Sessão ${index + 1}`),
    datasets: [
      {
        label: 'Foco',
        data: sessions.filter((s) => s.type === 'Focus').map((s) => s.duration),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Pausa',
        data: sessions.filter((s) => s.type === 'Break').map((s) => s.duration),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="mt-5">
      <h3>Gráfico de Produtividade</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProductivityChart;