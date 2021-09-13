/**
 * @desc 列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 源单类型 */
  bizType;
  /** 关单状态,0=未关单,1=已关单 */
  closeStatus;
  /** 成色 */
  color;
  /** 期望时间——结束 */
  deliveryDateEnd;
  /** 期望时间——开始 */
  deliveryDateStart;
  /** 划单状态 */
  divideStatus;
  /** 下单时间——结束 */
  downDateEnd;
  /** 下单时间——开始 */
  downDateStart;
  /** 一级户名 */
  oneCompany;
  /** 户名名称 */
  oneCompanyName;
  /** 接单(TheRepairOrder)状态 */
  orderStatus;
  /** TheRepairOrder类型,多个逗号分割 */
  orderType;
  /** 页码 */
  page;
  /** 投产状态,多个逗号分割 */
  putStatus;
  /** 接单时间——结束 */
  receiveDateEnd;
  /** 接单时间——开始 */
  receiveDateStart;
  /** 搜索字段 */
  search;
  /** 条数 */
  size;
}

export const init = new defs.PageDTO();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/factory_order/list', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
