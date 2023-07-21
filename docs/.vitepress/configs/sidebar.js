export default {
  '/arc/': getArc(),
  '/standard/': getStandard(),
  '/components/': getComponents(),
  '/optimization/': getOptimization(),
}

function getArc() {
  return [
    {
      text: '架构',
    },
  ]
}

function getStandard() {
  return [
    {
      text: '规范',
    },
  ]
}

function getComponents() {
  return [
    {
      text: '组件',
      items: [
        {
          text: '测试',
          link: '/components/test',
        },
        {
          text: 'Vue Script',
          link: '/components/vue-script',
        },
      ],
    },
  ]
}

function getOptimization() {
  return [
    {
      text: '性能优化',
    },
  ]
}
