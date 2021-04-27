self.addEventListener('fetch', async (event) => {
    console.log('Got message in the service worker', event);
  });
  