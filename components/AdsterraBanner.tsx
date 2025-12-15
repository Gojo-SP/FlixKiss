import React from 'react';

const adHtml = `
  <html>
    <head>
      <style>body { margin: 0; overflow: hidden; }</style>
    </head>
    <body>
      <script type="text/javascript">
        atOptions = {
          'key' : '9e189f9a0e9e3ab5e020d0f008940522',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      </script>
      <script type="text/javascript" src="https://www.highperformanceformat.com/9e189f9a0e9e3ab5e020d0f008940522/invoke.js"></script>
    </body>
  </html>
`.trim();

const AdsterraBanner: React.FC = () => {
  return (
    <div className="my-8 flex justify-center" aria-label="Advertisement">
      <iframe
        title="Advertisement"
        srcDoc={adHtml}
        width="300"
        height="250"
        scrolling="no"
        frameBorder="0"
        style={{ border: 'none', overflow: 'hidden' }}
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms allow-top-navigation-by-user-activation"
      ></iframe>
    </div>
  );
};

export default AdsterraBanner;