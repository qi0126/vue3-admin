/**
 * @desc 根据客户id查询客户
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 客户id */
  clientId;
}

export const init = new defs.NewEditCustomerInformation();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/client/get', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
