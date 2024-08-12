const express = require('express');
const next = require('next');
const nextEnv = require('@next/env');

process.env.NODE_ENV = "production";

const projectDir = process.cwd();
nextEnv.loadEnvConfig(projectDir);

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const port = 3000;

nextApp.prepare().then(() => {
    const app = express();

    app.get('*', (req, res) => {
        return handle(req, res);
    });

    app.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on localhost:${port}`);
    });
});