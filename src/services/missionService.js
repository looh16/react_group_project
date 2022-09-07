import http from '../http-common';

const fetchMissions = () => http.get('/missions');

const missionsService = {
  fetchMissions,
};

export default missionsService;
