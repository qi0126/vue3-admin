/**
 * @desc 查询产品列表(销售商)
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 品类code */
  code;
  /** 成色 */
  conditi;
  /** 柜号id */
  counterId;
  /** 是否分柜 1:是,2:否 */
  counterType;
  /** 产品描述name */
  describe;
  /** 表面工艺name */
  effectCode;
  /** (建档时间)结束时间 格式:YYYY-MM-dd */
  endCreateTime;
  /** (上市)结束时间 格式:YYYY-MM-dd */
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
  /** 搜索 */
  search;
  /** (建档时间)开始时间 格式:YYYY-MM-dd */
  startCreateTime;
  /** (上市)开始时间 格式:YYYY-MM-dd */
  startTime;
  /** 供应商id */
  supplierId;
  /** 是否引用 1 引用 2:未引用 */
  tag;
  /** 1 上架 2:未上架 3:待上架 */
  upStatus;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/proSale/list', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
