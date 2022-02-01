FROM node:17.4.0-alpine3.14

ARG SERVER_DIR=/opt/server

RUN mkdir -p ${SERVER_DIR}

COPY server/ ${SERVER_DIR}/

RUN cd ${SERVER_DIR} && \
    npm install

WORKDIR ${SERVER_DIR}

#ENTRYPOINT [ "PORT=${NODE_PORT}", "REDCAP_API_URL=${REDCAP_API_URL}", "REDCAP_API_TOKEN=${REDCAP_API_TOKEN}", "node", "bin/www" ]
ENTRYPOINT [ "node", "bin/www" ]