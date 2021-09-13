/**
 * @desc 根据TheRepairOrderid查询客单/柜台单WorkOrderDetails(已审核用这个)
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
    PontCore.getUrl('/pobiz/queryManageFactoryDetail', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
