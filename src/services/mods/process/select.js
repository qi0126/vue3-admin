/**
 * @desc 查询列表信息
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 页码 */
  page;
  /** 行数 */
  rows;
  /** 名称 */
  search;
  /** 状态: 1:启用 2:禁勇 */
  status;
  /** supplier */
  supplier;
  /** 供应商id(多个供应商则以逗号隔开) */
  supplierId;
  /** 供应商名称(多个供应商则以逗号隔开) */
  supplierName;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/process/select', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
