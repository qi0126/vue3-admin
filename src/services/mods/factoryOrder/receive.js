/**
 * @desc 修改交期
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 采购量(件数) */
  amount;
  /** 产能分类 */
  capacityType;
  /** 是否已关单，0=未关单,1=已关单 */
  closed;
  /** 已划单(已交货)的数量 */
  deliveryAmount;
  /** 差异备注 */
  diffMark;
  /** 差异备注类型 */
  diffMarkType;
  /** 花型 */
  flowerType;
  /** 克重总数量 */
  gramWeight;
  /** 单据行的唯一标识，全系统唯一，根据单据编号，产品ID,SKU ID 生成hash字符串 */
  lineUnique;
  /** 已投产的数量 */
  lunchedAmount;
  /** 标准产品信息 */
  proBaseInfo;
  /** 产品品类 */
  proCatagory;
  /** 标准产品ID */
  proId;
  /** 标准产品编号 */
  proNumber;
  /** 供应商产品信息 */
  proSupplierInfo;
  /** 销售商已收数量 */
  recipientReceivedAmount;
  /** 0=未拒单,1=已拒单, 默认为0 */
  refused;
  /** 拒单备注 */
  refusedMark;
  /** 拒单备注类型 */
  refusedMarkType;
  /** 回复交期(工厂确认的交货日期) */
  replyDeliveryDate;
  /** SKU ID */
  skuId;
  /** SKU信息 */
  skuInfo;
  /** 源单中的行标识 */
  sourceLineUnique;
  /** 源单的行备注 */
  sourceSkuMark;
  /** 补单备注 */
  supplementMark;
  /** 补单备注类型 */
  supplementMarkType;
  /** 已补单数量 */
  supplementedAmount;
  /** 供应商产品ID */
  supplierProId;
  /** 修改的交期 */
  twoDeliveryDate;
  /** 修改交期备注 */
  twoMark;
  /** 修改交期备注类型 */
  twoMarkType;
  /** TheRepairOrderID */
  workorderId;
  /** orderId */
  orderId;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/factory_order/receive', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
