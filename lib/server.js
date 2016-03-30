import fetchMock from 'fetch-mock';
import env from './environment';
import repos1 from '../mocks/repos1';
import repos2 from '../mocks/repos2';
import repos3 from '../mocks/repos3';
import repos4 from '../mocks/repos4';

if (!env.isPro) {
  fetchMock
    .mock('https://api.github.com/users/zzarcon/repos?page=1&sort=created&type=owner&direction=desc', 'GET', repos1)
    .mock('https://api.github.com/users/zzarcon/repos?page=2&sort=created&type=owner&direction=desc', 'GET', repos2)
    .mock('https://api.github.com/users/zzarcon/repos?page=3&sort=created&type=owner&direction=desc', 'GET', repos3)
    .mock('https://api.github.com/users/zzarcon/repos?page=4&sort=created&type=owner&direction=desc', 'GET', repos4);
}