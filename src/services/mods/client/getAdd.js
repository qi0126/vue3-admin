/**
 * @desc 查询客户是否可以添加
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 客户id */
  clientId;
}

export const init = false;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/client/getAdd', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
