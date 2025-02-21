setTimeout(() => {
  const iframe = document.getElementById('myIframe');
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage(
      'Hello from Parent!',
      'https://redbull.hlabs.co.uk/test-embed'
    );
  } else {
    console.error('Iframe is still not available.');
  }
}, 2000); // Adjust delay based on iframe load time

// Listen for a response from the iframe
// window.addEventListener('message', (event) => {
//   if (event.origin !== 'https://redbull.hlabs.co.uk/test-embed') return; // Security check
//   console.log('Message received from iframe:', event.data);
// });

console.log(document.getElementById('myIframe')); // Should not be null
