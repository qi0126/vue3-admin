/**
 * @desc 查看详情
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** TheRepairOrderid */
  id;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/factory_order/get', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
