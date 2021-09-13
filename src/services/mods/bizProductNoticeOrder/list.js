/**
 * @desc 获取ProductionOrder列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 成色 */
  color;
  /** 交期时间——结束 */
  deliveryDateEnd;
  /** 交期时间——开始 */
  deliveryDateStart;
  /** 下单时间——结束 */
  downDateEnd;
  /** 下单时间——开始 */
  downDateStart;
  /** 投产时间——结束 */
  launchDateEnd;
  /** 投产时间——开始 */
  launchDateStart;
  /** 一级户名 */
  oneCompany;
  /** 户名名称 */
  oneCompanyName;
  /** 页码 */
  page;
  /** 搜索字段 */
  search;
  /** 条数 */
  size;
}

export const init = new defs.PageDTO();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/product_notice/list', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
