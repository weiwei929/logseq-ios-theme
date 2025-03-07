import '@logseq/libs'

const main = async () => {
  console.log('iOS theme plugin loaded')
  
  logseq.provideStyle({
    key: 'ios-theme',
    style: `@import url("styles/ios-theme.css");`
  })
}

logseq.ready(main).catch(console.error)