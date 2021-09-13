/**
 * @desc 投产/部分投产
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 投产数量 */
  amount;
  /** 投产备注 */
  remark;
  /** 源单数据标识 */
  sourceId;
  /** 源TheRepairOrderid */
  workorderId;
  /** orderId */
  orderId;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/launch/put', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
