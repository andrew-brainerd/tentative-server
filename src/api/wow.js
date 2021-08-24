const wow = require('express').Router();
const axios = require('axios');
const status = require('../utils/statusMessages');
const { validator } = require('../utils/validator');
const { getItemParams } = require('./validation/wow');
const getItemData = require('../utils/itemData');

const BASE_URL = 'https://us.api.blizzard.com/data';

const getHeaders = token => ({
  headers: { 
    'Battlenet-Namespace': 'static-classic-us', 
    'Authorization': `Bearer ${token}`
  }
});

wow.get('/items/:itemId', validator.params(getItemParams), async (req, res) => {
  const { params: { itemId }, query: { token } } = req;

  const response = await axios.get(`${BASE_URL}/wow/item/${itemId}`, getHeaders(token));

  return status.success(res, { data: getItemData(response.data), full: response.data });
});

module.exports = wow;
