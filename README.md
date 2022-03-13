# Docker Tutorial

For the rest of this tutorial, we will be working with a simple app that is running in **Node.js**. If you’re not familiar with **Node.js**, don’t worry. No real JavaScript experience is needed.

## Step 1: Build the app’s container image

In order to build the application, we need to use a `Dockerfile`. A `Dockerfile` is simply a text-based script of instructions that is used to create a container image.

1. Create a file named `Dockerfile` in the same folder as the file **package.json** with the following contents.

```
# Build an image starting with the node:alpine
FROM node:alpine

# Make a directory called /app
RUN mkdir /app

# Add the current directory . into the path /app in the image
ADD . /app

# Set the working directory to /app
WORKDIR /app

# Update and Start
RUN npm update
CMD npm start
```

Please check that the file `Dockerfile` has no file extension like **.txt**. Some editors may append this file extension automatically and this would result in an error in the next step.

2.  If you haven’t already done so, open a terminal and go to the `app directory` with the `Dockerfile.` Now build the container image using the `docker build` command.

```
$ docker build -t node-nevtik:1.0 .
```

This command used the `Dockerfile` to build a new container image. You might have noticed that a lot of “layers” were downloaded. This is because we instructed the builder that we wanted to start from the `node:alpine` image. But, since we didn’t have that on our machine, that image needed to be downloaded.

After the image was downloaded, we added in our application and used `npm` to update our application’s. The `CMD` directive specifies the default command to run when starting a container from this image.

Finally, the -t flag tags our image. Think of this simply as a human-readable name for the final image.

Since we named the image `node-nevtik:1.0`, we can refer to that image when we run a container.

The . at the end of the docker build command tells that Docker should look for the Dockerfile in the current directory.

## Step 2: Start an app container
Now that we have an image, let’s run the application. To do so, we will use the `docker run` command.

1. Start your container using the `docker run` command and specify the name of the image we just created:

```
docker run -d --name node-nevtik-container -p 3000:3000 node-nevtik:1.0
```

What's mean the `-d` `--name` and `-p` flags? We’re running the new container named **"node-nevtik-container"** in **“detached”** mode (in the background) and creating a mapping between the **host’s port 3000 to the container’s port 3000**. Without the port mapping, we wouldn’t be able to access the application.

2. After a few seconds, open your web browser to http://localhost:3000 and http://localhost:3000/nevtik. You should see our app.

![1](https://user-images.githubusercontent.com/72386335/158072279-4502f087-7725-43de-a944-1889aaad0efc.png)
![2](https://user-images.githubusercontent.com/72386335/158072300-ed9baea0-4e90-4680-8cb2-c026729a550c.png)


## Recap
In this short section, we learned the very basics about building a container image and created a Dockerfile to do so. Once we built an image, we started the container and saw the running app.
