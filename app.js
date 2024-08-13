const express = require('express');
const next = require('next');
const nextEnv = require('@next/env');
const http = require("http");
const url = require("url");

process.env.NODE_ENV = "production";

const projectDir = process.cwd();
nextEnv.loadEnvConfig(projectDir);

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const port = 3000;

nextApp.prepare().then(() => {
    http.createServer((req, res) => {
        const parsedUrl = url.parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(port);

    console.log(
        `> Server listening at http://localhost:${port} as ${
            dev ? 'development' : process.env.NODE_ENV
        }`
    );
});