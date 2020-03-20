$(function(){

    var data = [
        {
            语言名称: "Java",
            排名: "1",
            升或降: "降",
            变化幅度: "-0.01%"
        },
        {
            语言名称: "C",
            排名: "2",
            升或降: "升",
            变化幅度: "+2.44%"
        },
        {
            语言名称: "Python",
            排名: "3",
            升或降: "升",
            变化幅度: "+1.41%"
        },
        {
            语言名称: "C++",
            排名: "4",
            升或降: "降",
            变化幅度: "-2.58%"
        },
        {
            语言名称: "C#",
            排名: "5",
            升或降: "升",
            变化幅度: "+2.07%"
        },
        {
            语言名称: "Visual Basic .NET",
            排名: "6",
            升或降: "降",
            变化幅度: "-1.17%"
        },
        {
            语言名称: "JavaScript",
            排名: "7",
            升或降: "降",
            变化幅度: "-0.85%"
        },
    ];
    var container1, hot1;
    container1 = document.getElementById('example');
    hot1 = new Handsontable(container1, {
        data: data,
        colWidths: [200, 200, 200, 200],
        colHeaders: ["语言名称", "排名", "升或降", "变化幅度"],
    });


    var myChart = echarts.init(document.getElementById('main'));
    option = {
        title: {
            text: 'JavaScript语言排名变化'
        },
        tooltip: {
            trigger:'axis'
        },
        legend: {
            data: ['排名'],
            show:false
        },
        grid:{
            show:true
        },
        xAxis: {
            data: ['2000', '2005', '2010', '2015', '2020']
        },
        yAxis: {},
        series: [{
            name:'排名',
            data: [6, 9, 8, 8, 7],
            type: 'line',
        }]
    };
    myChart.setOption(option);
})
