const expect = require('chai').expect;
const axios = require('axios');

const env = require('../endpoint/users.json');

const STATUS_CODE_OK = 200;
const HEADER_PROPERTY = 'content-type';
const CONTENT_TYPE = 'application/json; charset=utf-8';
const RESPONSE_BODY_LENGTH = 10;

describe('Users service tests', () => {

    it(`should return status code ${STATUS_CODE_OK}`, async () => {
        expect((await axios.get(env.uri)).status).eql(STATUS_CODE_OK);
    });

    it(`response header should has "${CONTENT_TYPE}" ${HEADER_PROPERTY}`, async () => {
        const header = (await axios.get(env.uri)).headers
        expect(header.hasOwnProperty(HEADER_PROPERTY)).to.be.true;
        expect(header[HEADER_PROPERTY]).eql(CONTENT_TYPE);
    });

    it(`response body should have array with length ${RESPONSE_BODY_LENGTH}`, async () => {
        expect((await axios.get(env.uri)).data.length).eql(RESPONSE_BODY_LENGTH);
    });
});
