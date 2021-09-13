/**
 * @desc 获取工厂划单列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 源单类型 */
  bizType;
  /** 成色 */
  color;
  /** 期望交期时间——结束 */
  deliveryDateEnd;
  /** 期望交期时间——开始 */
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
  /** 页码 */
  page;
  /** 接单时间——结束 */
  receiveDateEnd;
  /** 接单时间——开始 */
  receiveDateStart;
  /** 回复交期 */
  replyDate;
  /** 搜索字段 */
  search;
  /** 条数 */
  size;
  /** 1为接单升序,2为接单降序,3回复交期升序,4回复交期降序 */
  sort;
  /** TheRepairOrder类型 */
  workType;
}

export const init = new defs.PageDTO();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/factory_divide/list', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
