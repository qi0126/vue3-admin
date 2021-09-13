/**
 * @desc 查看预订单详情
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

export const init = new defs.PreliminaryPoBizDetailVoStandard();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/preliminary/pobiz/queryBizPoDetail', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
