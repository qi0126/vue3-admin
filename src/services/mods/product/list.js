/**
 * @desc 查询产品列表(生产商)
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 品类code */
  code;
  /** 产品描述name */
  describe;
  /** 表面工艺name */
  effectCode;
  /** 结束时间 格式:YYYY-MM-dd */
  endTime;
  /** 是否专销  1:是,2:否 */
  flagType;
  /** 是否新品 1:新品 2:非新品 */
  newType;
  /** 页码 */
  page;
  /** 制造工艺name */
  processCode;
  /** 行数 */
  rows;
  /** 专销销售商id */
  saleId;
  /** 搜索 */
  search;
  /** 开始时间 格式:YYYY-MM-dd */
  startTime;
  /** 状态:1:制单 2:待启用 3:已启动 4:禁用 */
  state;
  /** 供应商id */
  supplierId;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pro/list', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
