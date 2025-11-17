module.exports = (req, res, next) => {
  // Allow all GET requests without authentication
  if (req.method === 'GET') {
    next();
    return;
  }

  // Check for API key in header for POST/PUT/DELETE
  const apiKey = req.get('X-API-Key');
  const validKey = 'test-api-key-12345';

  if (!apiKey) {
    res.status(401).json({
      error: 'Unauthorized',
      message: 'API key is required for this operation'
    });
    return;
  }

  if (apiKey !== validKey) {
    res.status(401).json({
      error: 'Unauthorized',
      message: 'Invalid API key'
    });
    return;
  }

  // API key is valid, continue
  next();
};