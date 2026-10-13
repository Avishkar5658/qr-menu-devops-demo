# QuickBite — QR Menu + DevOps Demo

A simple responsive digital menu inspired by a contactless menu-card application. This learning project connects a frontend website with Docker, Docker Compose, GitHub, and a basic GitHub Actions CI workflow.

## Features
- Search menu items and filter by category
- Add items to a demo order and view a total
- Responsive layout for desktop and mobile
- Docker image served by Nginx
- Docker Compose for easy local startup
- GitHub Actions checks required files and builds the image

> This is a demo. It does not generate real QR codes, save orders to a database, process payments, or deploy automatically to AWS.

## Run locally with Docker

```bash
docker compose up -d --build
```

Open **http://localhost:8080** in your browser.

Check the container:
```bash
docker compose ps
docker compose logs
```

Stop it:
```bash
docker compose down
```

## Run without Docker

Open `index.html` in a browser, or use a simple local web server:
```bash
python3 -m http.server 8000
```
Then open **http://localhost:8000**.

## GitHub Actions
Push this project to a GitHub repository using the `main` branch. The workflow at `.github/workflows/ci.yml` checks that the expected files exist and builds the Docker image. It does not publish the image or deploy to a server.

## Suggested resume project entry — only after you run and verify it

**Containerized QR Menu Website with CI | Docker, Nginx, Docker Compose, GitHub Actions**
- Built a responsive digital menu with category filters, search, and a demo order summary.
- Containerized the static website using Docker and served it with Nginx; used Docker Compose to run it on port 8080.
- Created a GitHub Actions workflow to validate project files and build the Docker image on pushes and pull requests.

## Architecture

Browser → Nginx container → HTML/CSS/JavaScript website

GitHub push / pull request → GitHub Actions → file checks → Docker image build
