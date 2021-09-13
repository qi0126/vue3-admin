/**
 * @desc 获取投产单列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 源订单类型：客单等 */
  bizType;
  /** 成色 */
  color;
  /** 下单时间——结束 */
  downDateEnd;
  /** 下单时间——开始 */
  downDateStart;
  /** 一级户名 */
  oneCompany;
  /** 户名名称 */
  oneCompanyName;
  /** TheRepairOrder类型,多个逗号分割 */
  orderTyp;
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
  /** 1为交期升序,2为交期将序,3为接单升序,4为接单将序 */
  sort;
}

export const init = new defs.PageDTO();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/launch/list', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
