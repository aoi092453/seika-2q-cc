import Chart from 'chart.js/auto';



document.addEventListener("DOMContentLoaded", function() {
	var barButton = document.querySelector("button[type='bar']");
	var myChart = document.getElementById("myChart");
	var myChart2 = document.getElementById("myChart2");
    
	barButton.addEventListener("click", function() {
	  // Hide myChart2
	  myChart2.style.display = "none";
	  
	  // Show myChart
	  myChart.style.display = "block";
	});
});
document.addEventListener("DOMContentLoaded", function() {
	var raderButton = document.querySelector("button[type='rader']");
	var myChart = document.getElementById("myChart");
	var myChart2 = document.getElementById("myChart2");
    
	raderButton.addEventListener("click", function() {
	  // Hide myChart2
	  myChart.style.display = "none";
	  
	  // Show myChart
	  myChart2.style.display = "block";
	});
});


const ctx = document.getElementById('myChart');
console.log(ctx);
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['apple', 'orange', 'strawberry', 'kiwi', 'grape'],
      datasets: [{
        label: 'fruit',
        data: [46, 32, 38, 12, 24],
	  backgroundColor: [
		'rgba(255, 99, 132, 0.2)',
		'rgba(255, 159, 64, 0.2)',
		'rgba(255, 205, 86, 0.2)',
		'rgba(75, 192, 192, 0.2)',
		'rgba(54, 162, 235, 0.2)',
	],
	borderColor: [
		'rgb(255, 99, 132)',
		'rgb(255, 159, 64)',
		'rgb(255, 205, 86)',
		'rgb(75, 192, 192)',
		'rgb(54, 162, 235)',
		
	    ],
	    borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctx2 = document.getElementById('myChart2');
  console.log(ctx2);
    new Chart(ctx2, {
	type: 'radar',
	data: {
		labels: ['apple', 'orange', 'strawberry', 'kiwi', 'grape'],
		datasets: [{
			label: 'fruit',
			data: [46, 32, 38, 12, 24],
			fill: true,
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgb(255, 99, 132)',
			pointBackgroundColor: 'rgb(255, 99, 132)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgb(255, 99, 132)'
		    },]
	},
	options: {
	  elements: {
	    line: {
		borderWidth: 3
	    }
	  }
	},
    });

  
