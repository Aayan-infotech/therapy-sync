FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy all project files into nginx's html directory
COPY . /usr/share/nginx/html/

# Overwrite nginx default config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 5052
EXPOSE 5052

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
