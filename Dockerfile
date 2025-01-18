FROM node:20-alpine 
WORKDIR /app  
COPY package.json ./  
RUN npm i
COPY . . 
EXPOSE 8085 
CMD [ "npm", "start" ] 
