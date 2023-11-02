# Use the official Nginx base image
FROM nginx

# installing vim

RUN apt-get update && apt-get install -y vim

COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
