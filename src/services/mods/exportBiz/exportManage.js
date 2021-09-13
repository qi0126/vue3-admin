/**
 * @desc 订单管理导出
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 订单id(必填) */
  bizId;
  /** TheRepairOrderid(必填) */
  workOrderId;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/export/exportManage', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
