import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/match';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing a successful request to /matches', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Match, "findAll")
      .resolves([
        {
          "id": 1,
          "homeTeam": 16,
          "homeTeamGoals": 1,
          "awayTeam": 8,
          "awayTeamGoals": 1,
          "inProgress": false,
          "teamHome": {
            "teamName": "São Paulo"
          },
          "teamAway": {
            "teamName": "Grêmio"
          }
        },
      ] as unknown as Match[]);
  });

  after(()=>{
    (Match.findAll as sinon.SinonStub).restore();
  })

  it('Should return a status code 200 if the request was successful', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/matches')

    expect(chaiHttpResponse).to.have.status(200);
  });

  it('Should return an array with teams', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/matches')

    expect(chaiHttpResponse.body).to.be.an('array');
    expect(chaiHttpResponse.body).to.deep.equal([
      {
        "id": 1,
        "homeTeam": 16,
        "homeTeamGoals": 1,
        "awayTeam": 8,
        "awayTeamGoals": 1,
        "inProgress": false,
        "teamHome": {
          "teamName": "São Paulo"
        },
        "teamAway": {
          "teamName": "Grêmio"
        }
      },
    ]);
  });
});

describe('Testing a successful match register', () => {
  let chaiHttpResponse: Response;
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NTc4ODc2NDksImV4cCI6MTY1ODQ5MjQ0OX0.mfvtl3YKqzbGHbhhw4c_Zm2sb9Q6QH11puj9baFL0PE';

  before(async () => {
    sinon
      .stub(Match, "findOne")
      .resolves(
        {
          "inProgress": true,
          "id": 50,
          "homeTeam": 3,
          "awayTeam": 2,
          "homeTeamGoals": 2,
          "awayTeamGoals": 2
        } as Match);
  });

  after(()=>{
    (Match.findOne as sinon.SinonStub).restore();
  })

  it('Should return a status code 201 if the match was created', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/matches')
       .set('authorization', token)
       .send({
        "homeTeam": 3, 
        "awayTeam": 2, 
        "homeTeamGoals": 2,
        "awayTeamGoals": 2
      });

    expect(chaiHttpResponse).to.have.status(201);
  });
  it('Should return an object with six keys (status, id, both teams and its respective goals)', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/matches')
       .set('authorization', token)
       .send({
        "homeTeam": 3, 
        "awayTeam": 2, 
        "homeTeamGoals": 2,
        "awayTeamGoals": 2
      });

      expect(chaiHttpResponse.body).to.be.an('object');
      expect(chaiHttpResponse.body).to.have.property('id');
      expect(chaiHttpResponse.body).to.have.property('homeTeam');
      expect(chaiHttpResponse.body).to.have.property('awayTeam');
      expect(chaiHttpResponse.body).to.have.property('homeTeamGoals');
      expect(chaiHttpResponse.body).to.have.property('awayTeamGoals');
      expect(chaiHttpResponse.body).to.have.property('inProgress');
    });
});