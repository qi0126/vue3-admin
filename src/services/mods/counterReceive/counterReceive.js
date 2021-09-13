/**
 * @desc 柜台划单
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 实收数量 */
  amount;
  /** TheRepairOrder行标识 */
  lineUnique;
  /** 划单备注 */
  mark;
  /** 备注类型 */
  markType;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/counter/receive/receive', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
