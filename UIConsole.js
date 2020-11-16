const UIConsole = {

  alert: {
    text: ''
  },

  timeout: 2000,

  log(text, timeout) {
    if (process.env.NODE_ENV === 'development') {
      this.alert.text = JSON.stringify(text)
      timeout && (this.timeout = timeout)
      this.sendAlert()
      console.log("%cUIC", "color: #975A16; background: #FFFFF0; border: 1px solid #FAF089; font-weight: bold; padding: .25rem .5rem; font-size:12px; border-radius: 4px;", text)
    }
  },

  sendAlert() {
    const node = document.createElement('div')
    const closeButton = document.createElement('button')

    node.innerHTML = this.alert.text
    closeButton.innerHTML = 'x'

    node.style.backgroundColor = '#FFFFF0'
    node.style.position = 'fixed'
    node.style.color = '#975A16'
    node.style.bottom = '2rem'
    node.style.right = '1rem'
    node.style.left = '1rem'
    node.style.padding = '.5rem'
    node.style.fontFamily = 'monospace'
    node.style.border = '1px solid #FAF089'
    node.style.fontWeight = 'bold'
    node.style.boxShadow = '0 6px 12px -8px #707070'
    node.style.zIndex = '999999'

    node.id = 'iOSLoggerAlert'
    node.innerHTML = this.alert.text

    // node.appendChild(closeButton)

    document.body.appendChild(node)

    setTimeout(() => {
      document.getElementById('iOSLoggerAlert').remove()
    }, this.timeout)
  }


}

window.UIConsole = UIConsole
window.UIC = UIConsole

export default UIConsole
export { UIConsole }