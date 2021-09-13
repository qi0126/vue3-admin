/**
 * @desc 查询工序列表(产品供应商页面下拉条件)
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 名称 */
  search;
  /** 供应商id */
  supplierId;
  /** 是否需要禁用 非启用状态数据 1:禁用 2:不禁用  (产品列表取值(请选择2)) */
  type;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pro/selectProcess', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
