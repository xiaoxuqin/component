$(function () {
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
        columns: [
            { data: "语言名称" },
            { data: "排名" },
            { data: "升或降" },
            { data: "变化幅度" }
        ]
    });


    // var myChart = echarts.init(document.getElementById('main'));
    // var xData = [], yData = [];
    // for(var p=0; p<=1; p+=0.1){
    //     xData.push(p);
    //     if(p===0 || p===1){
    //         yData.push(0);
    //     }else{
    //         yData.push(-1*p*Math.log2(p) - (1-p)*Math.log2(1-p));
    //     }
          
    // }
    // var option = {
    //     title: {
    //         text: '二进熵函数曲线'
    //     },
    //     tooltip: {},
    //     legend: {
    //         data: ['信息量']
    //     },
    //     xAxis: {
    //         data: xData
    //     },
    //     yAxis: {},
    //     series: [{
    //         name: '信息量',
    //         // type: 'bar',
    //         type: 'line',
    //         smooth:true,
    //         data: yData
    //     }]
    // };
    // // 使用刚指定的配置项和数据显示图表。
    // myChart.setOption(option);

    // option = {
    //     legend: {
    //         data: ['信息量']
    //     },
    //     xAxis: {
    //         type: 'category',
    //         data: ['2000', '2005', '2010', '2015', '2020']
    //     },
    //     yAxis: {
    //         type: 'value'
    //     },
    //     series: [{
    //         name:'paimi',
    //         data: [6, 9, 8, 8, 7],
    //         type: 'line'
    //     }]
    // };


})