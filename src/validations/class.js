const Joi = require('joi');

const validateCreation = (req, res, next) => {
  const classValidation = Joi.object({
    activity: Joi.string().min(3).required(),
    trainer: Joi.string().min(3).required(),
    day: Joi.string().regex(/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)$/).required(),
    time: Joi.string().regex(/^([0-9]|[01]\d|2[0-3]):([0-5]\d)$/).required(),
    capacity: Joi.number().min(1).required(),
  });

  const validation = classValidation.validate(req.body);
  if (!validation.error) return next();
  return res.status(400).json({
    message: `There was an error ${validation.error.details[0].message}`,
    data: undefined,
    error: true,
  });
};
module.exports = {
  validateCreation,
};
