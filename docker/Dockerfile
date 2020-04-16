FROM ubuntu:xenial

ARG VERSION
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get -y update 
RUN apt-get -y install sudo
RUN apt-get -y install usbutils
RUN apt-get -y install openssl libssl-dev
RUN apt-get -y install libtinfo5
RUN apt-get -y install libncurses5-dev libncursesw5-dev
RUN apt-get -y install vim-tiny
RUN apt-get -y install wget

RUN useradd neuron -m -s /bin/bash 
RUN echo "neuron:neuron" | chpasswd && adduser neuron sudo
USER neuron
WORKDIR /home/neuron

#COPY --chown=neuron:neuron neuron-$VERSION-x86_64.tar.gz  /home/neuron

RUN wget https://github.com/SOMASTECH/neuron/releases/download/v$VERSION/neuron-$VERSION-x86_64.tar.gz
RUN tar -xvlf /home/neuron/neuron-$VERSION-x86_64.tar.gz
RUN rm neuron-$VERSION-x86_64.tar.gz

ADD neuronsrt /home/neuron/bin
COPY --chown=neuron:neuron neuronsrt /home/neuron/bin
RUN /bin/bash bin/neuronsrt -f

ENV HOME /home/neuron
ENV NEURONPATH /home/neuron
ENV NEURONDATPATH /home/neuron/dat
ENV USER neuron
ENV PATH=$PATH:$HOME/bin
ENV TERM=xterm
ENV TERMINFO=/lib/terminfo

EXPOSE 7681 1947

VOLUME /home/neuron/dat

ENTRYPOINT ["/bin/bash","-c"]
CMD ["/home/neuron/bin/neuronsrt"]
