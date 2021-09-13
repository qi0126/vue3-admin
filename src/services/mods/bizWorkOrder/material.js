/**
 * @desc 计算产能复核
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** TheRepairOrderid列表，用逗号分割 */
  ids;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/work_order/material', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
