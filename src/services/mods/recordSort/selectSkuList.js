/**
 * @desc 查询sku排序
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 公司id(如果是多个以顿号','开拼接起来) 必填 */
  companyId;
  /** 时间类型   MONTH:上月    SEASON:上季  YEAR:上年  CURRENT_YEAR:本年  必填 */
  dateType;
  /** 品类code */
  oneCode;
  /** 页码 必填 */
  page;
  /** 产品id 必填 */
  proId;
  /** 行数 必填 */
  rows;
  /** 设置id  必填 */
  setId;
  /** 类型(销售排序:1.生产排序:2,客户排序:3)  必填 */
  type;
}

export const init = new defs.PageDTO();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/recordSort/selectSkuList', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
