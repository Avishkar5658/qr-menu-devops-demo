# Use Nginx to serve the static menu website
FROM nginx:1.27-alpine
COPY index.html style.css app.js /usr/share/nginx/html/
EXPOSE 80
