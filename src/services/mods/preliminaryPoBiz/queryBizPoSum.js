/**
 * @desc 查看预订单信息汇总
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 订单id */
  bizId;
}

export const init = new defs.PreliminaryPoBizSummaryVo();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/preliminary/pobiz/queryBizPoSum', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
