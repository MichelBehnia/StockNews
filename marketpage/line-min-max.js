var dateArray = [];
var priceArray = [];
var dateArray2 = [];
var priceArray2 = [];
var dateArray3 = [];
var priceArray3 = [];
$(document).ready(function () {
	let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
	let apiCall = `https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=${apiKey}`;

	fetch(apiCall)
		.then(
			function (response) {
				return response.json();
			}
		)
		.then(
			function (data) {
				console.log(data);
				console.log("date=" + data['historical'][0]['date'] + " open=" + data['historical'][0]['open']);
				console.log("array size=" + data['historical'].length);
				iDataSize = data['historical'].length;



				for (i = 0; i < 31; i++) {
					mydate = data['historical'][i]['date'];
					openPrice = data['historical'][i]['open'];
					dateArray.push(mydate);
					priceArray.push(openPrice);
				}
				//get canvas
				var ctx = $("#line-chartcanvas");

				var data = {
					labels: [],
					datasets: [
						{
							label: "Price($)",
							data: [10, 50, 25, 70, 40],
							backgroundColor: "blue",
							borderColor: "lightblue",
							fill: false,
							lineTension: 0,
							pointRadius: 5
						}

					]
				};
				data.labels = dateArray;
				data.datasets[0].data = priceArray;

				var options = {
					title: {
						display: true,
						position: "top",
						text: "Historical Price",
						fontSize: 18,
						fontColor: "#111"
					},
					legend: {
						display: true,
						position: "bottom"
					},

				};

				var chart = new Chart(ctx, {
					type: "line",
					data: data,
					options: options
				});

			});
		})

		$(document).ready(function () {
			let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
			let apiCall = `https://financialmodelingprep.com/api/v3/historical-price-full/BCHUSD?apikey=${apiKey}`;	
			fetch(apiCall)
				.then(
					function (response) {
						return response.json();
					}
				)
				.then(
					function (data) {
						console.log(data);
						console.log("date=" + data['historical'][0]['date'] + " open=" + data['historical'][0]['open']);
						console.log("array size=" + data['historical'].length);
						iDataSize = data['historical'].length;
		
		
		
						for (i = 0; i < 31; i++) {
							mydate2 = data['historical'][i]['date'];
							openPrice2 = data['historical'][i]['open'];
							dateArray2.push(mydate2);
							priceArray2.push(openPrice2);
						}
						//get canvas
						var ctx = $("#line-chartcanvas2");
		
						var data = {
							labels: [],
							datasets: [
								{
									label: "Price($)",
									data: [10, 50, 25, 70, 40],
									backgroundColor: "blue",
									borderColor: "lightblue",
									fill: false,
									lineTension: 0,
									pointRadius: 5
								}
		
							]
						};
						data.labels = dateArray2;
						data.datasets[0].data = priceArray2;
		
						var options = {
							title: {
								display: true,
								position: "top",
								text: "Historical Price",
								fontSize: 18,
								fontColor: "#111"
							},
							legend: {
								display: true,
								position: "bottom"
							},
		
						};
		
						var chart = new Chart(ctx, {
							type: "line",
							data: data,
							options: options
						});
		
					});
				})

				$(document).ready(function () {
					let apiKey = '2cc11b6f558b90e7e81d410711573cc9';
					let apiCall = `https://financialmodelingprep.com/api/v3/historical-price-full/IVV?apikey=${apiKey}`;	
					fetch(apiCall)
						.then(
							function (response) {
								return response.json();
							}
						)
						.then(
							function (data) {
								console.log(data);
								console.log("date=" + data['historical'][0]['date'] + " open=" + data['historical'][0]['open']);
								console.log("array size=" + data['historical'].length);
								iDataSize = data['historical'].length;
				
				
				
								for (i = 0; i < 31; i++) {
									mydate3 = data['historical'][i]['date'];
									openPrice3 = data['historical'][i]['open'];
									dateArray3.push(mydate3);
									priceArray3.push(openPrice3);
								}
								//get canvas
								var ctx = $("#line-chartcanvas3");
				
								var data = {
									labels: [],
									datasets: [
										{
											label: "Price($)",
											data: [10, 50, 25, 70, 40],
											backgroundColor: "blue",
											borderColor: "lightblue",
											fill: false,
											lineTension: 0,
											pointRadius: 5
										}
				
									]
								};
								data.labels = dateArray3;
								data.datasets[0].data = priceArray3;
				
								var options = {
									title: {
										display: true,
										position: "top",
										text: "Historical Price",
										fontSize: 18,
										fontColor: "#111"
									},
									legend: {
										display: true,
										position: "bottom"
									},
				
								};
				
								var chart = new Chart(ctx, {
									type: "line",
									data: data,
									options: options
								});
				
							});
						})