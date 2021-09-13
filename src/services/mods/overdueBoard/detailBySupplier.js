/**
 * @desc 生产TheRepairOrder看板查看逾期订单详情
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** bizId */
  bizId;
}

export const init = new defs.OverdueBoardDetailVo();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/overdue/detailBySupplier', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
