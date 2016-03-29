const name = location.hostname === 'localhost' ? 'development' : 'production';

export default {
  name,
  isPro: name === 'production'
};