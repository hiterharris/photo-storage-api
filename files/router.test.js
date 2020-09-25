const request = require('supertest');
const server = require('../api/server');

describe('cohorts router', function() {
    it('should run the tests', function() {
        expect(true).toBe(true);
    });

    describe('GET /', function() {
        it('should return 200 OK', function() {
            return request(server).get('/api/students').then(res => {
                expect(res.status).toBe(200);
            });
        });

        it('should return cohorts as the router', function() {
            return request(server).get('/api/students').then(res => {
                expect(res.body.router).toBe('Students');
            });
        });
    });
});