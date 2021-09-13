/**
 * @desc 编辑登录用户（自己）的信息
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 账号 */
  account;
  /** createTime */
  createTime;
  /** 邮箱 */
  email;
  /** 用户id */
  id;
  /** 是否锁定，1=正常,2=锁定 */
  isLock;
  /** 用户姓名 */
  name;
  /** 新密码 */
  newPassword;
  /** 是否只能在一家公司,1=是,2=否 */
  onlyOneCompany;
  /** 最后修改人员 */
  operator;
  /** 密码 */
  password;
  /** 办公电话 */
  phone;
  /** 手机号,系统唯一 */
  telephone;
  /** updateTime */
  updateTime;
}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/account/myUpdate', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
