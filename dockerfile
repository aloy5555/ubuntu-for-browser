FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y \
    xfce4 xfce4-goodies tightvncserver wget curl \
    supervisor xterm net-tools firefox \
    && apt clean

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 5901
CMD ["/usr/bin/supervisord"]
