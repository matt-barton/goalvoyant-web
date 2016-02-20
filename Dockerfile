FROM mattbarton/goalvoyant-base

COPY package.json /src/package.json

WORKDIR /src

RUN npm install

COPY . /src

CMD npm start