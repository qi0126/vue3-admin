/**
 * @desc 查看WorkOrderDetails
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** TheRepairOrderid */
  id;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/work_order/get', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
