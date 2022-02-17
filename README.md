<head>
<meta name="description" content="Git Repo - Highlighter Black Start Page" />
</head>

# Highlighter Black

Highlighter Black is a personal custom start/new-tab page built as a chrome extention. You can upload custom images/gifs to play in the image box and add or delete custom links in the main content container. It also features a Duck Duck Go search bar with a slim, unintrusive design.

---

Highlighter Black uses React-Typescript for the frontend client-side rendering deployed to Vercel.

It also uses a Node with Express.js and Typescript for the backend and a PostgreSQL Database all deployed to Heroku.

---

Although you can't install and use this repo yourself, you can view a live demo version that's been deployed to Vercel here [Highlighter Black](https://highlighter-black.vercel.app/)

The demo resets the user image and links in the database every 5 minutes to keep it clean for future visitors so don't worry about messing anything up 😊

# Preview

https://user-images.githubusercontent.com/85032662/154366490-53c32ccd-0eb6-47e6-a03a-63c28a6c978c.mp4

# Tech Stack:

## Frontend

```
React
Sass
Typescript
Vercel
imgbb
```

## Backend

```
Node.js
Express.js
Typescript
PostgreSQL
Heroku
```

# How and Why

At first this started out as a simple refactoring of some really old html and CSS that I had been using as start page for a couple years. I wanted to re-create what I had and make it customizable without having to edit the code directly.

Soon after starting I realized that I wanted to turn this into a learning experience so I took on Typescript for the Client and Server. Though this was a painful learning experience, I learned a lot and I'm happy to have build something that I can use for years to come.

Originally I wasn't going to post it for the public to view and play with but after realising how much fun some of my coworkers were having with it I decided to deploy a public branch that everyone could use without having to worry about pesky authentication.

# Contributors:

### [Joseph Micla](https://github.com/JoeMics)

---

Helped with writing some of the original server logic and helping me to learn typescript as I went along

### [Ivan Tang](https://github.com/tangivan)

---

Helped with writing some of the frontend logic related to image upload. Though ultimately his implemations weren't used, he helped me to learn a lot about cloud image APIs.
