/**
 * @desc 查看TheRepairOrder头信息
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** TheRepairOrderid */
  id;
  /** 作业id */
  operateId;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/work_order/getOrder', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
