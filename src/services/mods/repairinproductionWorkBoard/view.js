/**
 * @desc 查询看板
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 对方公司ID, 在销售订单看板中,该字段填供应商ID,在工厂订单看板中,该字段填一级客户(销售商)ID */
  adverseCompanyId;
  /** 对方公司名称, 在销售订单看板中,该字段填供应商名称,在工厂订单看板中,该字段填一级客户(销售商)名称 */
  adverseCompanyName;
  /** bizBoardType */
  bizBoardType;
  /** 订单类型  AGENCY 客单, OTC 柜台  */
  bizType;
  /** 该字段填供应商ID */
  companyId;
  /** 该字段填供应商名称 */
  companyName;
  /** 时间类型  week 当前周, month 当前月 */
  dateType;
  /** 结束日期,格式'yyyy-MM-dd' */
  endDate;
  /** 搜索关键词,请根据销售订单看板和工厂订单看板需求使用! */
  keyword;
  /** 源单类型,AGENCY=客单,OTC=柜台单 */
  sourceOrderType;
  /** 起始日期,格式'yyyy-MM-dd' */
  startDate;
  /** TheRepairOrder状态 */
  workorderStatus;
}

export const init = new defs.BaseOverviewVo();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/repairinproductionSupplier/view', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
