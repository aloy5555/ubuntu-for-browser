# Minecraft Docker GUI (noVNC Proof-of-Concept)

This project runs a lightweight Ubuntu desktop in a Docker container and streams it to your browser using noVNC. While you **cannot run the official Minecraft Launcher**, you can simulate an environment to install GUI Linux apps.

## 🚀 Getting Started

### Prerequisites

- Docker
- Node.js (v14 or newer)
- Git

### Setup

```bash
git clone https://github.com/yourusername/minecraft-docker-gui.git
cd minecraft-docker-gui
npm install
docker build -t minecraft-docker .
