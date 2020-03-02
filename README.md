# graphql-yoga-example
A simple example of a graphql server. 

# Eat and Fun

This directory contains a simple "Random Eat and Fun" example based on `graphql-yoga`.

## Get started

**Clone the repository:**

```sh
git clone https://github.com/ffcabbar/graphql-yoga-example.git
```

**Install dependencies and run the app:**

```sh
yarn install # or npm install
yarn start   # or npm start
```

## Testing

Open your browser at [http://localhost:4000](http://localhost:4000) and start sending queries.

**Query:**

```graphql
query {
  whatsForFun
  whatsForDinner
}
```

The server returns the following response:

```json
{
  "data": {
    "whatsForDinner": "Tonight we eat 🥗",
    "whatsForFun": "Fun 🎃"
  }
}
```

## Playground

![Screenshot](https://user-images.githubusercontent.com/34713212/75655278-8ecc4400-5c72-11ea-8557-30ff7f4c337e.png)



