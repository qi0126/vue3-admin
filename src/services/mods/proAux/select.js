/**
 * @desc 查询列表信息
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 结束日期 格式如: yyyy-MM-dd */
  dataEnd;
  /** 开始日期 格式如: yyyy-MM-dd */
  dataStart;
  /** 页码 */
  page;
  /** 行数 */
  rows;
  /** 名称 */
  search;
  /** 状态: 1:启用 2:禁勇 */
  status;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/proAux/select', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
