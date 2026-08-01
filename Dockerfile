FROM nginx:alpine

# Copy static HTML files into the Nginx web directory
COPY . /usr/share/nginx/html

# Expose port 80 to allow traffic into the container
EXPOSE 80