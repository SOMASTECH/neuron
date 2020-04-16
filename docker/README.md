# Neuron for Docker

This repository is to show you how neuron software implementing docker stack deployment. It includes the docker-compose.yml sample. Please download the laster version neuron-1.2.xxxxxx-x86_64.tar.gz from the website http://www.somastech.com.

{verno} is version number of neuron (example: 1.2) or latest
{containerid} is container ID of docker


Pull docker image command:

sudo docker pull somastech/neuron:{verno}

sudo docker save somastech/neuron:{verno} | gzip > neuron-{verno}-docker.tar.gz


Build command:

sudo docker build --tag={verno} .

sudo docker tag {verno} somastech/neuron:{verno}

sudo docker push somastech/neuron:{verno}


Deploy command:

sudo docker swarm init

sudo docker stack deploy -c docker-compose.yml neuron

sudo docker container ls

sudo docker exec -it {containerid} /bin/bash

Note: After get into container, you can run "neuronsrt -t" to configure neuron.


Stop command:

sudo docker stack rm neuron

sudo docker swarm leave --force

