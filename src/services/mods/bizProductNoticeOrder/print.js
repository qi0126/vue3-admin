/**
 * @desc 打印/补打小票/批量打印
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 生成条码的条数 */
  count;
  /** 源订单Id（投产单Id） */
  poBizId;
  /** 补打小票的原因 */
  remark;
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
    PontCore.getUrl('/product_notice/print', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
