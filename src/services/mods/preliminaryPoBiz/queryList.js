/**
 * @desc 查询预订单列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 订单类型 */
  bizType;
  /** 创建结束时间 格式:2021-05-31 23:59:59 */
  createDateEnd;
  /** 创建起始时间 格式:2021-05-01 00:00:00 */
  createDateStart;
  /** 期望交期结束时间 格式:2021-05-31 23:59:59 */
  deliveryDateEnd;
  /** 期望交期起始时间 格式:2021-05-01 00:00:00 */
  deliveryDateStart;
  /** 成色 成色接口 */
  fineness;
  /** 是否挂签 0=挂签，1=不挂签 */
  hangLabel;
  /** 二级客户名/柜台模糊搜索字段 */
  keyWord;
  /** 每页行数 12 */
  rows;
  /** 起始页 1 */
  startIndex;
}

export const init = new defs.PageDTO();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/preliminary/pobiz/queryList', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
