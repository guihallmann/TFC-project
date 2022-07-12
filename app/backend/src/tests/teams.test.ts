import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/team';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing a successful request to /teams', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Team, "findAll")
      .resolves([
        {
          "id": 1,
          "teamName": "Avaí/Kindermann"
        },
        {
          "id": 2,
          "teamName": "Bahia"
        },
        {
          "id": 3,
          "teamName": "Botafogo"
        },
      ] as Team[]);
  });

  after(()=>{
    (Team.findAll as sinon.SinonStub).restore();
  })

  it('Should return a status code 200 if the request was successful', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/teams')

    expect(chaiHttpResponse).to.have.status(200);
  });

  it('Should return an array with teams', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/teams')

    expect(chaiHttpResponse.body).to.be.an('array');
    expect(chaiHttpResponse.body).to.deep.equal([
      { "id": 1, "teamName": "Avaí/Kindermann" },
      { "id": 2, "teamName": "Bahia" },
      { "id": 3, "teamName": "Botafogo" },]);
  });
});

describe('Testing a successful request to /teams/:id', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Team, "findOne")
      .resolves(
        {
          "id": 1,
          "teamName": "Avaí/Kindermann"
        } as Team);
  });

  after(()=>{
    (Team.findOne as sinon.SinonStub).restore();
  })

  it('Should return a status code 200 if the request was successful', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/teams/1')

    expect(chaiHttpResponse).to.have.status(200);
  });

  it('Should return an object with the keys id and teamName', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/teams/1')

    expect(chaiHttpResponse.body).to.be.an('object');
    expect(chaiHttpResponse.body).to.have.property('id');
    expect(chaiHttpResponse.body).to.have.property('teamName');
    expect(chaiHttpResponse.body).to.deep.equal({ "id": 1, "teamName": "Avaí/Kindermann" });
  });
});