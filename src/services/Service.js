import http from '../http-common';

const fetchRockets = () => http.get('/rockets');

const Service = {
  fetchRockets,
};

export default Service;
