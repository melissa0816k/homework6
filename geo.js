option = {
    title : {
        text: 'Where My Website Visitors Are From',
        subtext: 'Country',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Hong Kong','United Kingdom','United States']
    },
    series : [
        {
            name: 'Google Analytics',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:68, name:'Hong Kong'},
                {value:7, name:'United Kingdom'},
                {value:4, name:'United States'}
           
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
