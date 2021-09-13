/**
 * @desc 查看ProductionOrder详情
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 投产单id */
  id;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/product_notice/get', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
