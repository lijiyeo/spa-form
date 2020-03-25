var data = [
    ['Java', 1, "降", "-0.01%"],
    ['C', 2, "升", "+2.44%"],
    ['Python', 3, "升", "+1.41%"],
    ['C++', 4, "降", "-2.58%"],
    ['C#', 5, "升", "+2.07%"],
    ['Visual Basic.NET', 6, "降", "-1.17%"],
    ['JavaScript', 7, "降", "-0.85%"]
  ];
  
  var container = document.getElementById('form');
  var hot = new Handsontable(container, {
    data: data,
    colHeaders: true,
    filters: true,
    colHeaders: ["语言名称","排名","升或降","变化幅度"],
    colWidths: 150,
    rowHeights: 35
  });

  var myChart = echarts.init(document.getElementById('echart'));

        // 指定图表的配置项和数据
        option = {
            title:{
                text:"JavaScript语言排名变化"
            },
            xAxis: {
                type: 'category',
                data: ['2000', '2005', '2010', '2015', '2020']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name:'排名',
                data: [6, 9, 8, 8, 7],
                type: 'line'
            }]
        };
        

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);