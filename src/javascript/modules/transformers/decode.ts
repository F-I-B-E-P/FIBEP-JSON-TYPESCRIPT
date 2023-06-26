import { ValidatorResult } from "jsonschema";

const fileSystem = require('../common/filesystem');
const validator = require('../utils/validator');

const constructInvalidErrorMessage = (validatorResult: ValidatorResult) => {
    const errorsSeparatedByComma = validatorResult?.errors?.join(',');

    return `JSON does not meet the FIBEP Standard, ${errorsSeparatedByComma}`;
}
const getContent = (jsonInStringFormat: string, schemaInStringFormat: string) => {
    const parsedJSON = JSON.parse(jsonInStringFormat);
    const schema = JSON.parse(schemaInStringFormat);
    const validatorResult: ValidatorResult = validator.validateSchema(schema, parsedJSON)


    if (validatorResult.valid) {
        return parsedJSON;
    }

    throw Error(constructInvalidErrorMessage(validatorResult));
}

exports.fromFile = async function (contentPath: string, schemaPath: string) {
    const content = await fileSystem.readFile(contentPath);
    const schema = await fileSystem.readFile(schemaPath);

    return getContent(content, schema);
};

exports.fromString = function (content: string, schema: string) {
    return getContent(content, schema);
};