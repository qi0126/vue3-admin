/**
 * @desc 合并打印小票
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 生成条码的条数 */
  count;
  /** 源订单Id（投产单Id） */
  poBizId;
  /** SKU ID */
  skuIds;
  /** 行标识（作业表的） */
  uniques;
  /** true=该条码已使用过,false=该条码未被使用过 */
  used;
  /** TheRepairOrderId */
  workOrderId;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/product_notice/mergePrint', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
