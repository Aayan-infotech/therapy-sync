# Use official Nginx image as base
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy all project files into nginx's html directory
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 5052

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
