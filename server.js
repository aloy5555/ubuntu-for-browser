const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.get('/start', (req, res) => {
    exec('docker run -d -p 5901:5901 --name minecraft-vnc minecraft-docker', (err, stdout, stderr) => {
        if (err) {
            res.status(500).send(`Error: ${stderr}`);
        } else {
            res.send('Docker container started. <a href="/vnc.html">Open VNC Viewer</a>');
        }
    });
});

app.use(express.static('public')); // Serve noVNC client (put noVNC here)

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
