/**
 * @desc 根据历史订单id和新订单id查询客单订单详情,以及加入新订单sku的数量
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 时间类型 时间类型(WEEK:周  MONTH:月  SEASON:季) */
  dateType;
  /** 历史订单id */
  historyBizId;
  /** 月 */
  month;
  /** 新订单id */
  newBizId;
  /** 季 */
  quarter;
  /** 周 */
  week;
  /** 年 */
  year;
}

export const init = new defs.PreliminaryPoBizDetailVoStandard();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/pobiz/queryHistoryKDBizDetail', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
