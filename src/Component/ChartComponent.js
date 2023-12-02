import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const data = {
      labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл'],
      datasets: [
        {
          label: 'Процент загруженности по часам',
          data: [60, 70, 75, 75, 80, 87, 90, 90, 96, 90,78 , 68,64,12],
          borderColor: 'rgb(23, 26, 255)',
          borderWidth: 2,
          fill: true,
          backgroundColor: 'rgba(0, 26, 216, 0.2)',
          pointRadius: 0,
          cubicInterpolationMode: 'monotone',
        },
      ],
    };

    const options = {
      scales: {
        x: {
          type: 'category',
          labels: ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'],
        },
        y: {
          beginAtZero: true,

        },
      },
    };

    const chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
        <div style={{ width: '60%', margin: '0 auto' }}>
        <h2 style={{ paddingTop: '70px' }}>Загруженность помещений по времени</h2>
        <canvas ref={canvasRef} width="300" height="150" style={{ maxWidth: '100%' }} />
        </div>
  );
};

export default ChartComponent;