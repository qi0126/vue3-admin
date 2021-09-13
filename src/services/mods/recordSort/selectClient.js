/**
 * @desc 查询客户分组排序
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 时间类型   MONTH:上月    SEASON:上季  YEAR:上年  CURRENT_YEAR:本年  必填 */
  dateType;
  /** 页码 必填 */
  page;
  /** 产品id 必填 */
  proId;
  /** 行数 必填 */
  rows;
  /** 设置id  必填 */
  setId;
}

export const init = new defs.PageDTO();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/recordSort/selectClient', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
