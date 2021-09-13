/**
 * @desc 查看打印ProductionOrder详情
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 投产单id */
  id;
  /** TheRepairOrderid */
  orderId;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/product_notice/get2', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
