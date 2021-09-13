/**
 * @desc 根据订单id查询正式订单/订单管理的详情(已审核用这个)
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 订单id */
  bizId;
}

export const init = new defs.PoBizFactoryBizVo();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pobiz/queryDetail', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
