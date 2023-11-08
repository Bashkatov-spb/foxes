FROM node

WORKDIR /application

COPY package*.json ./

ENV DATABASE_URL=postgresql://postgres:e1b2CzxlKAa74yWK@db.ngdeyosoqptdyhsgloys.supabase.co:5432/postgres

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]