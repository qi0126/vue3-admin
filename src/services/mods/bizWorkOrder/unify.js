/**
 * @desc 统一回复交期
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 交期时间 */
  delivery;
  /** TheRepairOrderid */
  orderId;
  /** 交期差异原因 */
  reason;
  /** 交期差异备注 */
  remark;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/work_order/unify', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
