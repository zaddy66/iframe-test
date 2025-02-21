const iframe = document.getElementById('myIframe');

document.getElementById('sendMessage').addEventListener('click', function () {
  if (iframe.contentWindow) {
    iframe.contentWindow.postMessage(
      'Hello from Parent!',
      'https://redbull.hlabs.co.uk/test-embed'
    ); // Change URL to match your iframe's domain
    console.log('Message sent to iframe.');
  }
});

// Listen for a response from the iframe
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://redbull.hlabs.co.uk/test-embed') return; // Security check
  console.log('Message received from iframe:', event.data);
});
