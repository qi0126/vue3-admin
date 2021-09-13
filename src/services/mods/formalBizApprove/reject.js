/**
 * @desc 订单审批驳回
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 订单id */
  bizId;
  /** 驳回备注 */
  rejectReason;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/formalBizApprove/reject', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
