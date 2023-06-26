import { ValidatorResult } from "jsonschema";

exports.validateSchema = function (schema: object, content: object): ValidatorResult {
    const Validator = require('jsonschema').Validator;
    const validatorInstance = new Validator();

    return validatorInstance.validate(content, schema);
};