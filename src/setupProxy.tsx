
import express from 'express';
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

const app = express();

app.use('/lala', createProxyMiddleware({ target: 'https://lalachievements.com/api/charcache/', changeOrigin: true }));
// app.listen(3000);
    app.use(
      '/lala',
      createProxyMiddleware({
        target: 'https://lalachievements.com/api/charcache/',
        changeOrigin: true,
      })
    );
  