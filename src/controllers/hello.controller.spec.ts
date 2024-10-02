import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('HelloController', () => {
    let app: INestApplication;
    let helloController: HelloController;

    beforeAll(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            controllers: [HelloController],
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();
        helloController = moduleRef.get<HelloController>(HelloController);
    });

    it('should return "Hello World!"', () => {
        return request(app.getHttpServer())
            .get('/hello')
            .expect(200)
            .expect('Hello World!');
    });

    afterAll(async () => {
        await app.close();
    });
});