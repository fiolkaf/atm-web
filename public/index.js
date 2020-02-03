window.atm = window.atm || {}
window.atm.withdraw = (amount) => {
  if (!amount) {
    alert('Please enter the amount.')
    return
  }

  fetch(`/${amount}`)
    .then(response => response.json())
    .then(result => {
      const walletElement = document.getElementById('walletResult')
      const text = result
        .map(item => `${item.quantity} x ${item.value}-${item.type}`)
        .join(', ')

      walletElement.innerHTML = text
    })
    .catch(err => alert(err))
}
