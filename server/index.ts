import express, { Request, Response } from 'express';
const cors = require('cors');
const http = require('http');
require('dotenv').config();

const app = express();

// Declaration merging for TS types
declare module 'express-serve-static-core' {
  interface ParamsDictionary {
    id: number;
  }
}

import './helpers/user_helpers';
import pg from 'pg';

app.use(express.json());
app.use(cors());

// Server port
const PORT = process.env.PORT;

// Separated Routes for each Resource
import userRouter from './routes/user';
import { resetLinks } from './helpers/links_helpers';
import { updateUserImage } from './helpers/user_helpers';

// Mount all resource routes
app.use('/api/users', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'BRUH' });
});

app.listen(PORT || 5001, () => {
  console.log(`I'm listening bro. PORT: ${PORT}`);
});

const interval = {
  // to keep a reference to all the intervals
  intervals: new Set(),

  // create another interval
  make(func: any, timer: number) {
    const newInterval = setInterval(func, timer);
    this.intervals.add(newInterval);
    return newInterval;
  },

  // clear a single interval
  clear(id: number) {
    this.intervals.delete(id);
    return clearInterval(id);
  },

  // clear all intervals
  clearAll() {
    for (const id of this.intervals) {
      // @ts-ignore
      this.clear(id);
    }
  },
};

const user = { id: 2, image_url: 'https://i.ibb.co/zmJypD9/stars.gif' };

interval.clearAll();
interval.make(() => {
  updateUserImage(user);
  resetLinks(2);
}, 20 * 1000);
