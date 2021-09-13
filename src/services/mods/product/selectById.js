/**
 * @desc 根据产品id查询产品信息
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 产品id */
  id;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pro/selectById', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
