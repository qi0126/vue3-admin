/**
 * @desc 新增料组
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 料组名称 */
  name;
  /** 状态: 1:启用 2:禁勇 */
  status;
  /** 供应商id(多个供应商则以逗号隔开) */
  supplierId;
  /** 供应商名称(多个供应商则以逗号隔开) */
  supplierName;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/materialGroup/add', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
