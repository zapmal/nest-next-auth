import { CookieOptions } from 'express';

const options: CookieOptions = {
  maxAge: 1000 * 3600 * 24 * 30 * 2, // Two months in ms.
  secure: false,
  httpOnly: true,
};

export { options as cookieOptions };
