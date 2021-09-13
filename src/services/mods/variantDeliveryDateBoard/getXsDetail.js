/**
 * @desc 根据TheRepairOrderid.查询销售交期差异详情
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
    PontCore.getUrl('/variant/getXsDetail', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
