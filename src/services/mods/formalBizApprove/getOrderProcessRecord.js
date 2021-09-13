/**
 * @desc 根据订单id查询审批流程
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
    PontCore.getUrl('/formalBizApprove/getOrderProcessRecord', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
