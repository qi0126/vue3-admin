/**
 * @desc 根据TheRepairOrderid.查询工厂拒单详情
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
    PontCore.getUrl('/reject/getGcDetail', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
