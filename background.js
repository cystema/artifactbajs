(function() {
    if (typeof browser === 'undefined') {
      var browser = chrome;
    }
  
    // Function to execute the provided script
    function executeScript() {
      const code = `
        (s => {
          s.transform = s.transform ? '' : 'rotate(180deg)';
          s.filter = s.filter ? '' : 'invert(1)';
        })(document.querySelector('video').style);
      `;
      
      browser.tabs.executeScript({
        code: code
      });
    }
  
    // Listen for the browser action click
    browser.browserAction.onClicked.addListener(executeScript);
  })();
  