import { IHttpClient } from '@model/http/http-client';

import { AxiosHttpClient } from '@infrastructure/http/client/axios-http-client';

const ApiFactory = (baseUrl?: string): IHttpClient => {
  return new AxiosHttpClient(baseUrl);
};

export default ApiFactory;
