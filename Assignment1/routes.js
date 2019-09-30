const fs = require('fs');

const requestHandler= (req, res) => {
  const url = req.url;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
    <body>
    <h1>Welcome!</h1>
    <form action="/create-user" method="POST">
    <input type="text" name="create-user">
    <button type="submit">Create User</button>
    </form>
    </body>
    </html>`);
    return res.end();
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><ul><li>Natalie</li><li>Samantha</li><li>Justin</li><li>Joshua</li></ul></body></html>');
    return res.end();
  }

  if (url === '/create-user') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    })
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split('=')[1];
      console.log(user);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    })
  }
}

module.exports = requestHandler;