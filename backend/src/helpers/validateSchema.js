const validateSchema = (schema, body) => {
  let msg = [];
  const { error, value } = schema.validate(body, { abortEarly: false });
  if (error) {
    error.details.map((val) => {
      msg.push(val.message);
    });
    return msg;
  } else {
    return null;
  }
};

module.exports = validateSchema;
