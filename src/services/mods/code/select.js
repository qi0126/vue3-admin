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
  /** code名称 */
  search;
  /** 状态: 1:启用 2:禁用 */
  status;
  /** 如:MANUFACTURE_CRAFT , */
  type;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/code/select', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
