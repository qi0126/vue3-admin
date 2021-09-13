/**
 * @desc 拒单
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** TheRepairOrderid */
  orderId;
  /** 拒绝原因 */
  reason;
  /** 拒绝备注 */
  remark;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/work_order/reject', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
