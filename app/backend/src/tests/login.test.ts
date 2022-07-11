import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/user';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing a successful login', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves({
        email: 'admin@admin.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
      } as User);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('Should return a status code 200 if the request was successful', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send({email: 'admin@admin.com', password: 'secret_admin' })

    expect(chaiHttpResponse).to.have.status(200);
  });

  it('Should return a token if the request was successful', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send({email: 'admin@admin.com', password: 'secret_admin' })

    expect(chaiHttpResponse.body).to.have.property('token');
    expect(chaiHttpResponse.body.token).to.be.a('string');
  });
});

describe('Testing a unsuccessful login', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves({
        email: 'admin@admin.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
      } as User);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('Should return a status code 401 if the email or password is invalid', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send({email: 'adm@admin.com', password: 'secret' })

    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse.body.message).to.equal('Incorrect email or password');
  });

  it('Should return a status code 400 if there is a missing email or password', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send({email: '', password: '' })

    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse.body.message).to.equal('Incorrect email or password');
  });
});
