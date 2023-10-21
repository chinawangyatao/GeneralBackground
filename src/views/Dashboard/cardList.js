export const cardList = [
  {
    title: '总销售额',
    content: '销售量总额',
    name: '日销售额',
    quota: '¥12,423',
    height: '80px',
    option: {
      grid: {
        width: '100%', // 设置图表宽度为 80%
        left: '', // 设置左边距为 10%
        // 可以根据需要设置其他 grid 属性
      },
      xAxis: {
        data: ['12', '27', '78', '89', '100', '134', '456'],
        // 隐藏x轴
        axisLine: {
          show: false,
        },
        // 刻度线
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        // 去除网格线
        splitLine: false,
        // 刻度线
        axisTick: {
          show: false,
        },
        // 隐藏y轴
        axisLine: {
          show: false,
        },
        // 隐藏刻度值
        axisLabel: {
          show: false,
        },
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            color: '#e5566a',
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#e5566a',
                },
                {
                  offset: 1,
                  color: 'rgba(229,86,106,0.1)',
                },
              ],
              global: false,
            },
          },
        },
      ],
    },
  },
  {
    title: '总销售额',
    content: '销售量总额',
    name: '日销售额',
    quota: '¥12,423',
    height: '80px',
    option: {
      grid: {
        width: '100%', // 设置图表宽度为 80%
        left: '', // 设置左边距为 10%
        // 可以根据需要设置其他 grid 属性
      },
      xAxis: {
        data: ['12', '27', '78', '89', '100', '134', '456'],
        // 隐藏x轴
        axisLine: {
          show: false,
        },
        // 刻度线
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        // 去除网格线
        splitLine: false,
        // 刻度线
        axisTick: {
          show: false,
        },
        // 隐藏y轴
        axisLine: {
          show: false,
        },
        // 隐藏刻度值
        axisLabel: {
          show: false,
        },
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            color: '#3ab94b',
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#56e56e',
                },
                {
                  offset: 1,
                  color: 'rgb(86,229,110)',
                },
              ],
              global: false,
            },
          },
        },
      ],
    },
  },
  {
    title: '总销售额',
    content: '销售量总额',
    name: '日销售额',
    quota: '¥12,423',
    height: '80px',
    option: {
      color: ['#7B79FF', '#FFB0E2', '#59CFFF'],
      series: [
        {
          name: '入厕人数',
          type: 'pie',
          clockWise: true,
          hoverAnimation: false,
          radius: ['90%', '91%'],
          itemStyle: {
            normal: {
              label: {
                show: false,
                position: 'outside',
              },
              labelLine: {
                show: false,
                length: 100,
                smooth: 0.5,
              },
              borderWidth: '6',
              borderColor: '#7B79FF',
            },
          },
          data: [
            {
              value: 7,
              name: '入厕人数',
            },
            {
              value: 3,
              name: '',
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                    position: 'center',
                  },
                  labelLine: {
                    show: false,
                  },
                  color: 'rgba(255, 255, 255, 0.0)',
                  borderColor: 'rgba(255, 255, 255, 0.0)',
                  borderWidth: 6,
                },
                emphasis: {
                  color: 'rgba(255, 255, 255, 0.0)',
                  borderColor: 'rgba(255, 255, 255, 0.0)',
                  borderWidth: 0,
                },
              },
            },
          ],
        },
        {
          name: '就餐人数',
          type: 'pie',
          clockWise: true,
          hoverAnimation: false,
          radius: ['80%', '81%'],
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
                length: 100,
                smooth: 0.5,
              },
              borderWidth: '6',
              borderColor: '#FFB0E2',
            },
          },
          data: [
            {
              value: 6,
              name: '就餐人数',
            },
            {
              value: 4,
              name: '',
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                    position: 'center',
                  },
                  labelLine: {
                    show: false,
                  },
                  color: 'rgba(255, 255, 255, 0.0)',
                  borderColor: 'rgba(255, 255, 255, 0.0)',
                  borderWidth: 6,
                },
                emphasis: {
                  color: 'rgba(255, 255, 255, 0.0)',
                  borderColor: 'rgba(255, 255, 255, 0.0)',
                  borderWidth: 0,
                },
              },
            },
          ],
        },
        {
          name: '购物人数',
          type: 'pie',
          clockWise: true,
          hoverAnimation: false,
          radius: ['70%', '71%'],
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
                length: 100,
                smooth: 0.5,
              },
              borderWidth: '6',
              borderColor: '#59CFFF',
            },
          },
          data: [
            {
              value: 5,
              name: '购物人数',
            },
            {
              value: 5,
              name: '',
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                    position: 'center',
                  },
                  labelLine: {
                    show: false,
                  },
                  color: 'rgba(255, 255, 255, 0.0)',
                  borderColor: 'rgba(255, 255, 255, 0.0)',
                  borderWidth: 6,
                },
                emphasis: {
                  color: 'rgba(255, 255, 255, 0.0)',
                  borderColor: 'rgba(255, 255, 255, 0.0)',
                  borderWidth: 0,
                },
              },
            },
          ],
        },
      ],
    },
  },
  {
    title: '总销售额',
    content: '销售量总额',
    name: '日销售额',
    quota: '¥12,423',
    height: '80px',
    option: {
      color: ['#8c65f1'],
      xAxis: {
        type: 'category',
        // 隐藏x轴
        axisLine: {
          show: false,
        },
        // 刻度线
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        // 去除网格线
        splitLine: false,
        // 刻度线
        axisTick: {
          show: false,
        },
        // 隐藏y轴
        axisLine: {
          show: false,
        },
        // 隐藏刻度值
        axisLabel: {
          show: false,
        },
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          barWidth: 10, // 设置柱状图的宽度
          itemStyle: {
            normal: {
              barBorderRadius: [20, 20, 20, 20],
            },
          },
        },
      ],
    },
  },
];

export const cardList1 = [
  {
    title: '总销售额',
    content: '销售量总额',
    name: '日销售额',
    quota: '¥12,423',
    height: '500px',
    option: {
      color: [
        'lightblue',
        'rgba(0,150,0,0.5)',
        'rgba(255,200,0,0.5)',
        'rgba(155,200,50,0.5)',
        'rgba(44,44,0,0.5)',
        'rgba(33,33,30,0.5)',
        'rgba(255,66,0,0.5)',
        'rgba(155,23,31,0.5)',
        'rgba(23,44,55,0.5)',
      ],
      //配置标题组件
      title: { left: 270, top: 0, textStyle: { color: 'green' }, text: '漏斗图' },
      backgroundColor: 'rgba(128, 128, 128, 0.1)', //rgba设置透明度0.1
      tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c}%' }, //配置提示框组件
      toolbox: {
        left: 555,
        top: 0,
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      }, //配置工具箱组件
      legend: {
        left: 40,
        top: 30,
        data: ['浏览选购', '添加到购物车', '购物车结算', '核对订单信息', '提交订单', '选择支付方式', '完成支付'],
      }, //配置图例组件
      calculable: true,
      series: [
        //配置数据系列
        {
          name: '漏斗图',
          type: 'funnel',
          left: '3%',
          sort: 'descending', //金字塔:'ascending'; 漏斗图:'descending'
          top: 60,
          bottom: 60,
          width: '80%',
          min: 0,
          max: 100,
          minSize: '0%', //设置每一块的最小宽度
          maxSize: '100%', //设置每一块的最大，一次去除掉尖角
          gap: 2, //设置每一块之间的间隔
          label: { show: true, position: 'inside' }, //设置标签显示在里面|外面
          labelLine: {
            length: 10, //设置每一块的名字前面的线的长度
            lineStyle: {
              width: 1, //设置每一块的名字前面的线的宽度
              type: 'solid', //设置每一块的名字前面的线的类型
            },
          },
          itemStyle: {
            normal: {
              //设置图形在正常状态下的样式
              label: { show: true, fontSize: 15, color: 'blue', position: 'inside' },
              borderColor: '#fff', //设置每一块的边框颜色
              borderWidth: 0, //设置每一块边框的宽度
              shadowBlur: 50, //设置整个外面的阴影厚度
              shadowOffsetX: 0, //设置每一块的y轴的阴影
              shadowOffsetY: 50, //设置每一块的x轴的阴影
              shadowColor: 'rgba(0,255,0,0.4)', //设置阴影颜色
            },
          },
          //设置鼠标hover时高亮样式
          emphasis: { label: { fontFamily: '楷体', color: 'green', fontSize: 28 } },
          data: [
            //设置在漏斗图中展示的数据
            { value: 100, name: '浏览选购' },
            { value: 60, name: '添加到购物车' },
            { value: 42, name: '购物车结算' },
            { value: 25, name: '核对订单信息' },
            { value: 9, name: '提交订单' },
            { value: 4, name: '选择支付方式' },
            { value: 2.5, name: '完成支付' },
          ],
        },
      ],
    },
  },
];
