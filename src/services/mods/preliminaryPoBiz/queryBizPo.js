/**
 * @desc 根据订单id查询单头
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 订单id */
  bizId;
}

export const init = new defs.BizPo();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/preliminary/pobiz/queryBizPo', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
