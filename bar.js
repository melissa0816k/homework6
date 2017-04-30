option = {
    title : {
        text: 'New and Returning Visitors Page View',
        subtext: 'Google Analytddics'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['page view']
    },

    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['HomePage','Homework 1','Homework 2','Homework 3','Homework 4','Homework 5','Others']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'page view',
            type:'bar',
            data:[387, 88, 59, 56, 53, 74, 28],
            markPoint : {
               data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },

        }
    ]
};
