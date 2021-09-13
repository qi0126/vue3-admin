/**
 * @desc 根据订单类型获取设置的流程
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** type */
  type;
}

export const init = new defs.TheProcessObject();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/bizprocess/get', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
