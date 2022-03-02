###Steps:
- Cretae Dockerfile with the information to create an image
``` 
    FROM nginx
    COPY html /usr/share/nginx/html/
    CMD ["nginx", "-g", "daemon off;"]
``` 

- Build the image
```
	docker build -t hello_nginx .
```

- Run
```
    docker run -d --name my-nginx-hello -p 8080:80 hello_nginx
```
###Clean:
```
	docker stop <hash-id>
```
```
	docker rm <hash-id>
```
```
	docker image rm -f <hash-id>
```

###Tag and Push
```
    docker image tag hello-nginx lepache/hello-nginx 
```
```
    docker image push lepache/hello-nginx
```