import * as Joi from 'joi';

export const createUserSchema = Joi.object({
  name: Joi.string().min(8),
  email: Joi.string().email().required(),
});
