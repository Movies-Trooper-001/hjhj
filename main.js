(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Chart JS

    // Function to find the highest value in the data
    function findMaxValue(datasets) {
        let max = 0;
        datasets.forEach(dataset => {
            dataset.data.forEach(value => {
                if (value > max) {
                    max = value;
                }
            });
        });
        return max;
    }

    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";


    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "Single",
                    data: [15, 30, 55, 65, 60, 80, 95],
                    backgroundColor: "rgba(235, 22, 22, .7)",
                },
                {
                    label: "Batch",
                    data: [8, 35, 40, 60, 70, 55, 75],
                    backgroundColor: "rgba(235, 22, 22, .5)"
                },
                {
                    label: "Set",
                    data: [12, 25, 45, 55, 65, 70, 60],
                    backgroundColor: "rgba(235, 22, 22, .3)",
                    hidden: true
                }
            ]
            },
        options: {
            responsive: true,
        }
    });


    // Salse & Revenue Chart
    
    var chartData2 = {
        labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
                label: "Daily Snatches",
                data: [15, 30, 55, 45, 70, 65, 85],
                backgroundColor: "rgba(235, 22, 22, .4)",
                fill: true
            }
        ]
    };

    var maxDataValue = findMaxValue(chartData2.datasets);
    var yAxisMax = maxDataValue + 50; // Add 50 to the highest value

    var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: chartData2,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: yAxisMax 
                }
            }
        }
    });
    
    
})(jQuery);

