/**
 * @desc 根据订单id删除预订单
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
    PontCore.getUrl('/preliminary/pobiz/deleteBizPo', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
