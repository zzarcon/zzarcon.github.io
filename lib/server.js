//
//TODO: Use only on development
//
import fetchMock from 'fetch-mock';
import repos1 from '../mocks/repos1';
import repos2 from '../mocks/repos2';

// fetchMock
//   .mock('https://api.github.com/users/zzarcon/repos?page=1&sort=created&type=owner&direction=desc', 'GET', repos1)
//   .mock('https://api.github.com/users/zzarcon/repos?page=2&sort=created&type=owner&direction=desc', 'GET', repos2);