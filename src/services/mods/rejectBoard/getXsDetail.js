/**
 * @desc 根据TheRepairOrderid.查询销售拒单详情
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** TheRepairOrderid */
  bizId;
}

export const init = new defs.IBizBoardDetailVo();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/reject/getXsDetail', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
