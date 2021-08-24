/* eslint-disable node/no-extraneous-require */
const auth = require('express').Router();
const axios = require('axios');
const qs = require('qs');
const status = require('../utils/statusMessages');

auth.get('/bnet', async (req, res) => {
  const request = {
    method: 'post',
    url: 'https://us.battle.net/oauth/token',
    headers: {
      'Authorization': `Basic ${process.env.BASIC_AUTH}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({
      'grant_type': 'client_credentials',
      'scope': 'wow.profile'
    })
  };

  axios(request)
    .then(response => {
      return status.created(res, { auth: response.data });
    })
    .catch(error => {
      console.error(error);
    });
});

module.exports = auth;
