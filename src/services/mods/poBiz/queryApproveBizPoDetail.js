/**
 * @desc 根据订单id查询 订单审核列表的详情(待审核,审核驳回都用这个)
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 订单id */
  bizId;
  /** 时间类型 时间类型(WEEK:周  MONTH:月  SEASON:季) */
  dateType;
  /** 月 */
  month;
  /** 季 */
  quarter;
  /** 周 */
  week;
  /** 年 */
  year;
}

export const init = new defs.FormalPoBizDetailVoStandard();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/pobiz/queryApproveBizPoDetail', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
