/**
 * @desc 根据TheRepairOrderid查询WorkOrderDetails(已审核用这个)
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** TheRepairOrderid */
  workOrderId;
}

export const init = new defs.PoBizDetailFactoryBizVo();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/pobiz/queryFactoryDetail', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
