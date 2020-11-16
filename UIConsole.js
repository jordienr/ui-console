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