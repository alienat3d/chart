'use strict';
const ctx = document.getElementById('myChart');

const data = {
  labels: [
    'Done',
    'Lessons & HWs',
    'Exam Project'
  ],
  datasets: [{
    data: ['54', '36', '10'],
    backgroundColor: [
      'rgb(149, 242, 217)',
      'rgb(237, 177, 131)',
      'rgb(168, 218, 220)'
    ],
    hoverOffset: 4
  }]
};

new Chart(ctx, {
	type: 'pie',
	data: data,
});