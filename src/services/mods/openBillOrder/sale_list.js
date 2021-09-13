/**
 * @desc 销售商查询列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 字段填一级客户(销售商)ID */
  adverseCompanyId;
  /** 字段填一级客户(销售商)名称 */
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
  /** 页码,必须为大于等于1的整数 */
  pageIndex;
  /** 查询行数,必须为大于等于1的整数 */
  rows;
  /** 排序 1:期望交期升序  2:期望交期降序  3:回复交期升序  4:回复交期降序  5:数占比升序   6:数占比降序 */
  sortType;
  /** 起始日期,格式'yyyy-MM-dd' */
  startDate;
}

export const init = new defs.PageDTO();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/openBillOrder/sale_list', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
