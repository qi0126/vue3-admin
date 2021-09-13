/**
 * @desc 订单审批通过
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 订单id */
  bizId;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/formalBizApprove/approve', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
