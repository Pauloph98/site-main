import React from 'react';
import mockData from '../mock';

export const ProgressChart = () => {
  const { progressData } = mockData;
  const total = progressData.categories.reduce((sum, item) => sum + item.value, 0);
  
  // Calculate angles for pie chart
  let currentAngle = 0;
  const chartData = progressData.categories.map(item => {
    const percentage = (item.value / total) * 100;
    const angle = (item.value / total) * 360;
    const data = {
      ...item,
      percentage: Math.round(percentage),
      startAngle: currentAngle,
      endAngle: currentAngle + angle
    };
    currentAngle += angle;
    return data;
  });

  // Create SVG path for each slice
  const createPath = (startAngle, endAngle, innerRadius = 40, outerRadius = 80) => {
    const start = polarToCartesian(0, 0, outerRadius, endAngle);
    const end = polarToCartesian(0, 0, outerRadius, startAngle);
    const innerStart = polarToCartesian(0, 0, innerRadius, endAngle);
    const innerEnd = polarToCartesian(0, 0, innerRadius, startAngle);
    
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
      "M", start.x, start.y,
      "A", outerRadius, outerRadius, 0, largeArcFlag, 0, end.x, end.y,
      "L", innerEnd.x, innerEnd.y,
      "A", innerRadius, innerRadius, 0, largeArcFlag, 1, innerStart.x, innerStart.y,
      "Z"
    ].join(" ");
  };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-6 lg:mb-0">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Seu progresso
          </h3>
          <p className="text-gray-600 mb-4">
            Veja como a comunidade está respondendo sobre segurança digital
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Total de respostas: {progressData.totalResponses.toLocaleString()}
          </p>
          
          {/* Legend */}
          <div className="space-y-2">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-700">
                  {item.name}: {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="relative">
          <svg width="200" height="200" viewBox="-100 -100 200 200" className="transform -rotate-90">
            {chartData.map((item, index) => (
              <path
                key={index}
                d={createPath(item.startAngle, item.endAngle)}
                fill={item.color}
                className="hover:opacity-80 transition-opacity cursor-pointer"
                stroke="white"
                strokeWidth="2"
              />
            ))}
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {progressData.totalResponses}
              </div>
              <div className="text-xs text-gray-500">
                respostas
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;