type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export class AccessResourcesTable {
    /** 应用标识 */
    appName?: string;

    /** 权限说明 */
    authDesc?: string;

    /** 权限名称 */
    authName?: string;

    /** 类型,CATALOG=目录,MENU=菜单,AUTH=权限 */
    authType?: string;

    /** 权限值 */
    authVal?: string;

    /** createTime */
    createTime?: string;

    /** 最后修改人 */
    operator?: string;

    /** 父权限 */
    parentVal?: string;

    /** updateTime */
    updateTime?: string;
  }

  export class AccountTable {
    /** 账号 */
    account?: string;

    /** createTime */
    createTime?: string;

    /** 部门id */
    deptId?: number;

    /** 所属部门 */
    deptName?: string;

    /** 邮箱 */
    email?: string;

    /** 用户id */
    id?: number;

    /** 是否锁定，1=正常,2=锁定 */
    isLock?: number;

    /** 是否管理员,1=是，2=否 */
    master?: number;

    /** 用户姓名 */
    name?: string;

    /** 是否只能在一家公司,1=是,2=否 */
    onlyOneCompany?: number;

    /** 最后修改人员 */
    operator?: string;

    /** 密码 */
    password?: string;

    /** 办公电话 */
    phone?: string;

    /** 角色 */
    roleList?: Array<defs.EnterpriseRoleTable>;

    /** roleName */
    roleName?: Array<string>;

    /** 手机号,系统唯一 */
    telephone?: string;

    /** updateTime */
    updateTime?: string;
  }

  export class AgencyReceiveBo {
    /** 划单/补单 的数据列表 */
    receiveItems?: Array<defs.ReceiveItem>;

    /** 划单/补单 的总数量, 等于各个SKU数量的和 */
    totalAmount?: number;

    /** 划单/补单 的总重量, 等于各个SKU的数量*SKU标准克重 的和 */
    totalGramWeight?: number;

    /** TheRepairOrderID */
    workorderId?: number;

    /** TheRepairOrder编号 */
    workorderNo?: string;
  }

  export class AgencyReceiveItemVo {
    /** 采购量(件数) */
    amount?: number;

    /** 已划单(已交货)的数量 */
    deliveryAmount?: number;

    /** 花型 */
    flowerType?: string;

    /** 克重 */
    gramWeight?: number;

    /** 单据行的唯一标识，全系统唯一，根据单据编号，产品ID,SKU ID 生成hash字符串 */
    lineUnique?: string;

    /** 已投产的数量 */
    lunchedAmount?: number;

    /** 产品图片 */
    picUrl?: string;

    /** 标准产品ID */
    proId?: number;

    /** 销售商已收数量 */
    recipientReceivedAmount?: number;

    /** 回复交期(工厂确认的交货日期) */
    replyDeliveryDate?: string;

    /** SKU ID */
    skuId?: number;

    /** SKU信息,JSON字符串 */
    skuInfo?: string;

    /** 源单的行备注 */
    sourceSkuMark?: string;

    /** 已补单数量,扫码模式不需要显示这个字段 */
    supplementedAmount?: number;

    /** 工厂产品名称 */
    supplierProName?: string;

    /** 工厂产品编号 */
    supplierProNo?: string;
  }

  export class AgencyReceivePagingParamBo {
    /** 关单状态, 0=未关单,1=已关单 */
    closed?: number;

    /** 创建日期(截止)，格式为 'yyyy-MM-dd' */
    createTimeEnd?: string;

    /** 创建日期(起始)，格式为 'yyyy-MM-dd' */
    createTimeStart?: string;

    /** 期望交期(截止)，格式为 'yyyy-MM-dd' */
    deliveryDateEnd?: string;

    /** 期望交期(起始)，格式为 'yyyy-MM-dd' */
    deliveryDateStart?: string;

    /** 成色,直接传 足金999，足金9999 之类的 */
    fineness?: string;

    /** 搜索关键词,可对 二级客户名/柜台/创建人/订单号 进行模糊搜索 */
    keyword?: string;

    /** 页码,必须为大于等于1的整数 */
    pageIndex?: number;

    /** 查询行数,必须为大于等于1的整数 */
    rows?: number;
  }

  export class AgencyReceiveRecordVo {
    /** 划单时间 */
    operateTime?: string;

    /** 划单人 */
    operator?: string;
  }

  export class AgencyReceiveSingleWorkOrderVo {
    /** TheRepairOrder产品详情 */
    agencyReceiveItemVoList?: Array<defs.AgencyReceiveItemVo>;

    /** 客单划单记录 */
    agencyReceiveRecordVos?: Array<defs.AgencyReceiveRecordVo>;

    /** 是否已关单, 0= 未关单, 1=已关单,默认为0 */
    closed?: number;

    /** 工厂名称 */
    companyName?: string;

    /** 工厂划单状态 */
    deliveryStatus?: string;

    /** 成色 */
    fineness?: string;

    /** 是否挂签,0=挂签,1=不挂签 */
    hangLabel?: number;

    /** ID */
    id?: number;

    /** 投产状态,根据各个SKU的投产情况来变更 */
    launchStatus?: string;

    /** 回复交期(最大值) */
    maxReplyDeliveryDate?: string;

    /** 回复交期(最小值) */
    minReplyDeliveryDate?: string;

    /** 一级户名 */
    orderCompanyName?: string;

    /** 接单时间 */
    receiveTime?: string;

    /** 接单人 */
    receiver?: string;

    /** 回复交期(合并) */
    replyDeliveryDateCombine?: string;

    /** 字印名称 */
    signet?: string;

    /** 字印ID */
    signetId?: string;

    /** 字印图片地址 */
    signetPicUrl?: string;

    /** 下单时间(源单创建时间) */
    sourceBizCreateTime?: string;

    /** 下单人 */
    sourceBizCreator?: string;

    /** 下单备注 */
    sourceBizMark?: string;

    /** 源单号 */
    sourceBizNo?: string;

    /** 源单类型 */
    sourceBizType?: string;

    /** 期望交期 */
    sourceDeliveryDate?: string;

    /** 二级客户名/柜台 */
    sourceRecipient?: string;

    /** 总件数 */
    totalAmount?: number;

    /** 总克重 */
    totalGramWeight?: number;

    /** TheRepairOrder号 */
    workorderNo?: string;

    /** TheRepairOrder状态,生成TheRepairOrder时，默认状态是'待接单' */
    workorderStatus?: string;

    /** TheRepairOrder类型,目前有正常和补单两种 */
    workorderType?: string;
  }

  export class AgencyReceiveSourceOrderVo {
    /** 订单号 */
    bizNo?: string;

    /** 关单人 */
    closeOperator?: string;

    /** 关单时间 */
    closeTime?: string;

    /** 是否已关单,0=未关单,1=已关单 */
    closed?: number;

    /** 户名 */
    companyName?: string;

    /** 创建时间 */
    createTime?: string;

    /** 创建人 */
    creator?: string;

    /** 期望交期 */
    deliveryDate?: string;

    /** 成色 */
    fineness?: string;

    /** 单据ID(不需要显示),进入划单详情的页面要作为参数使用 */
    id?: number;

    /** 二级客户/柜台 */
    recipient?: string;

    /** 总件数 */
    totalAmount?: number;

    /** 总重量 */
    totalGramWeight?: number;
  }

  export class AgencyReceiveStandardDetailVo {
    /** 下单备注 */
    bizMark?: string;

    /** 订单号/源单号 */
    bizNo?: string;

    /** 关单人 */
    closeOperator?: string;

    /** 关单时间 */
    closeTime?: string;

    /** 是否已关单,0=未关单,1=已关单 */
    closed?: number;

    /** 户名 */
    companyName?: string;

    /** 创建时间 */
    createTime?: string;

    /** 创建人 */
    creator?: string;

    /** 期望交期 */
    deliveryDate?: string;

    /** 成色 */
    fineness?: string;

    /** 是否挂签,0=挂签,1=不挂签 */
    hangLabel?: number;

    /** 单据ID(不需要显示),进入划单详情的页面要作为参数使用 */
    id?: number;

    /** 二级客户/柜台 */
    recipient?: string;

    /** 字印名称 */
    signet?: string;

    /** 字印ID */
    signetId?: string;

    /** 字印图片地址 */
    signetPicUrl?: string;

    /** 总件数 */
    totalAmount?: number;

    /** 总重量 */
    totalGramWeight?: number;

    /** TheRepairOrder列表 */
    workOrderVoList?: Array<defs.AgencyReceiveWorkOrderVo>;
  }

  export class AgencyReceiveWorkOrderVo {
    /** TheRepairOrder产品详情 */
    agencyReceiveItemVoList?: Array<defs.AgencyReceiveItemVo>;

    /** 客单划单记录 */
    agencyReceiveRecordVos?: Array<defs.AgencyReceiveRecordVo>;

    /** 是否已关单, 0= 未关单, 1=已关单,默认为0 */
    closed?: number;

    /** 工厂名称 */
    companyName?: string;

    /** 工厂划单状态 */
    deliveryStatus?: string;

    /** ID */
    id?: number;

    /** 投产状态,根据各个SKU的投产情况来变更 */
    launchStatus?: string;

    /** 回复交期(最大值) */
    maxReplyDeliveryDate?: string;

    /** 回复交期(最小值) */
    minReplyDeliveryDate?: string;

    /** 接单时间 */
    receiveTime?: string;

    /** 接单人 */
    receiver?: string;

    /** 回复交期(合并) */
    replyDeliveryDateCombine?: string;

    /** 总件数 */
    totalAmount?: number;

    /** 总克重 */
    totalGramWeight?: number;

    /** TheRepairOrder号 */
    workorderNo?: string;

    /** TheRepairOrder状态,生成TheRepairOrder时，默认状态是'待接单' */
    workorderStatus?: string;

    /** TheRepairOrder类型,目前有正常和加急两种 */
    workorderType?: string;
  }

  export class BaseOverviewVo {
    /** 看板概览类型(注意,如果后端未设置概览类型,可能返回'未知',前端同事注意处理),VARIANT_DELIVERY_DATE(交期差异),UNANSWERED(待接单的),REJECTED(拒接订单),OVERDUE(逾期订单),REPAIR_IN_PRODUCTION(补单在产),EXCESS_BIZ(超量订单),UNCLOSED(未关订单) */
    bizBoardType?: string;

    /** bizBoardTypeSortIndex */
    bizBoardTypeSortIndex?: number;

    /** 符合当前看板类型的单据数,不同类型的看板定义名称可能不同,具体请查看需求! */
    currentBizBoardCount?: number;

    /** 比例,不同类型的看板对这个比例的称呼不同,具体请查看需求 */
    rate?: string;

    /** 当前看板的总单数,不同类型的看板定义可能不同,具体请查看需求! */
    totalBizCount?: number;
  }

  export class BizBoardListParamBo {
    /** 字段填一级客户(销售商)ID */
    adverseCompanyId?: number;

    /** 字段填一级客户(销售商)名称 */
    adverseCompanyName?: string;

    /** bizBoardType */
    bizBoardType?: string;

    /** 订单类型  AGENCY 客单, OTC 柜台  */
    bizType?: string;

    /** 该字段填供应商ID */
    companyId?: number;

    /** 该字段填供应商名称 */
    companyName?: string;

    /** 时间类型  week 当前周, month 当前月 */
    dateType?: string;

    /** 结束日期,格式'yyyy-MM-dd' */
    endDate?: string;

    /** 搜索关键词,请根据销售订单看板和工厂订单看板需求使用! */
    keyword?: string;

    /** 页码,必须为大于等于1的整数 */
    pageIndex?: number;

    /** 查询行数,必须为大于等于1的整数 */
    rows?: number;

    /** 排序 1:期望交期升序  2:期望交期降序  3:回复交期升序  4:回复交期降序  5:数占比升序   6:数占比降序 */
    sortType?: number;

    /** 起始日期,格式'yyyy-MM-dd' */
    startDate?: string;
  }

  export class BizBoardTypeAndColumn {
    /** 数据类型的标识 */
    bizBoardType?: string;

    /** 数据类型名称 */
    bizBoardTypeName?: string;

    /** 列名称 */
    columnName?: string;
  }

  export class BizFavoriteInsertBo {
    /** 单据ID */
    bizId?: number;

    /** 收藏备注 */
    favoriteMark?: string;
  }

  export class BizFavoriteUpdateBo {
    /** 单据ID */
    bizId?: number;

    /** 收藏备注信息 */
    favoriteMark?: string;
  }

  export class BizPagingParamBo {
    /** 订单类型标识 */
    bizType?: string;

    /** 成色, 如 足金999,足金9999 */
    createDateEnd?: string;

    /** 成色, 如 足金999,足金9999 */
    createDateStart?: string;

    /** 期望交期 结束 , 格式如 'yyyy-MM-dd' */
    deliveryDateEnd?: string;

    /** 期望交期 开始 , 格式如 'yyyy-MM-dd' */
    deliveryDateStart?: string;

    /** 成色, 如 足金999,足金9999 */
    fineness?: string;

    /** 是否挂签, 0=挂签，1=不挂签 */
    hangLabel?: number;

    /** 搜索关键词,可对  二级客户名/柜台/创建人/订单编号 进行模糊搜索 */
    keyWord?: string;

    /** 页码,必须为大于等于1的整数 */
    pageIndex?: number;

    /** 查询行数,必须为大于等于1的整数 */
    rows?: number;

    /** 订单状态标识 */
    status?: string;
  }

  export class BizPo {
    /** beTakerOver */
    beTakerOver?: number;

    /** bizMark */
    bizMark?: string;

    /** bizNo */
    bizNo?: string;

    /** bizType */
    bizType?: string;

    /** closeOperator */
    closeOperator?: string;

    /** closeTime */
    closeTime?: string;

    /** closed */
    closed?: number;

    /** companyId */
    companyId?: number;

    /** companyName */
    companyName?: string;

    /** createTime */
    createTime?: string;

    /** creator */
    creator?: string;

    /** creatorId */
    creatorId?: number;

    /** deliveryDate */
    deliveryDate?: string;

    /** fineness */
    fineness?: string;

    /** hangLabel */
    hangLabel?: number;

    /** hasFinished */
    hasFinished?: number;

    /** id */
    id?: number;

    /** recipient */
    recipient?: string;

    /** recipientId */
    recipientId?: string;

    /** reson */
    reson?: string;

    /** signet */
    signet?: string;

    /** signetId */
    signetId?: string;

    /** signetPicUrl */
    signetPicUrl?: string;

    /** status */
    status?: string;

    /** totalAmount */
    totalAmount?: number;

    /** totalGramWeight */
    totalGramWeight?: number;
  }

  export class BizSignetListVo {
    /** 字印ID */
    id?: number;

    /** 字印名称 */
    signet?: string;

    /** 字印名称 */
    signetPic?: string;
  }

  export class BusinessTeamTable {
    /** 负责区域 */
    businessArea?: string;

    /** 企业id */
    companyId?: number;

    /** createTime */
    createTime?: string;

    /** 团队id */
    id?: number;

    /** 团队领导id */
    leaderId?: number;

    /** 状态，1=启用，2=禁用 */
    lockStatus?: number;

    /** 团队成员id（数组）例：[1,2,3] */
    memberIds?: string;

    /** 团队成员个数 */
    memberNum?: number;

    /** 最后修改人 */
    operator?: string;

    /** 团队名称 */
    teamName?: string;
  }

  export class CompanyManagementDictionaryTables {
    /** 值 */
    codeName?: string;

    /** 类型: 公司类型 1, 所属业务区域 2, 客户合同类型 3, 客户委托项目 4,工厂类型 5, 供应商合同类型 6, 供应商委托项目7 */
    codeType?: number;

    /** 企业id */
    companyId?: number;
  }

  export class CounterReceiveItemBo {
    /** 划单数量 */
    amount?: number;

    /** 行标识 */
    lineUnique?: string;

    /** 划单备注 */
    mark?: string;

    /** 备注类型,如果选择的是预设备注,则备注类型=预设备注,选择的是其他,则备注类型=其他 */
    markType?: string;
  }

  export class CounterReceivePagingParamBo {
    /** 采购数量,精确匹配 */
    amount?: number;

    /** 柜台ID,如果是全部ID,请不要传这个参数回来! */
    counterId?: string;

    /** 工厂划单数,精确匹配 */
    deliveryAmountItem?: number;

    /** 工厂划单日期(起始),格式为'yyyy-MM-dd' */
    deliveryDateStart?: string;

    /** 工厂划单日期(截止),格式为'yyyy-MM-dd' */
    deliveryDatedEnd?: string;

    /** 花型,模糊搜索 */
    flowerType?: string;

    /** 克重,精确匹配 */
    gramWeight?: number;

    /** 页码,必须为大于等于1的整数 */
    pageIndex?: number;

    /** 工厂产品名称或编号,模糊搜索 */
    proNameOrProNo?: string;

    /** 查询行数,必须为大于等于1的整数 */
    rows?: number;

    /** 尺寸(面宽),精确匹配 */
    size?: string;

    /** 规格备注,模糊搜索 */
    sourceBizMark?: string;

    /** 源单编号,模糊搜索 */
    sourceBizNo?: string;

    /** 供应商公司ID */
    supplierId?: number;

    /** 供应商名称,全匹配 */
    supplierName?: string;

    /** TheRepairOrder编号,模糊搜索 */
    workOrderNo?: string;
  }

  export class CounterReceiveVo {
    /** 采购量(件数) */
    amount?: number;

    /** 工厂划单总数 */
    deliveryAmount?: number;

    /** 工厂划单信息 */
    deliveryList?: Array<defs.SimpleDeliveryVo>;

    /** 花型 */
    flowerType?: string;

    /** 克重 */
    gramWeight?: number;

    /** WorkOrderDetails行标识(全系统唯一),柜台划单的时候要传回来 */
    lineUnique?: string;

    /** 产品图片 */
    picUrl?: string;

    /** 销售商已收数量 */
    recipientReceivedAmount?: number;

    /** SKU信息(JSON字符串) */
    skuInfo?: string;

    /** 源单号 */
    sourceBizNo?: string;

    /** 源单中的行标识 */
    sourceLineUnique?: string;

    /** 规格备注 */
    sourceSkuMark?: string;

    /** 工厂名称 */
    supplierName?: string;

    /** 供应商产品ID */
    supplierProId?: number;

    /** 工厂产品名称 */
    supplierProName?: string;

    /** 工厂产品编号 */
    supplierProNo?: string;

    /** TheRepairOrder号 */
    workOrderNo?: string;

    /** TheRepairOrderID */
    workorderId?: number;
  }

  export class CreateAndEditCustomerData {
    /** 企业简称 */
    abbr?: string;

    /** 公司地址 */
    address?: string;

    /** 所属地区 */
    area?: string;

    /** CustomerContractForm */
    clientContract?: defs.CustomerContractForm;

    /** 客户id */
    clientId?: number;

    /** 企业id */
    companyId?: number;

    /** 企业名称，系统唯一 */
    companyName?: string;

    /** 法人代表 */
    concat?: string;

    /** createTime */
    createTime?: string;

    /** 信用代码 */
    creditNum?: string;

    /** 企业id */
    id?: number;

    /** 锁定，1=启用，2=禁用 */
    isLock?: number;

    /** 营业执照结束时间 */
    licenseEnd?: string;

    /** 营业执照 */
    licenseNum?: string;

    /** 营业执照开始时间 */
    licenseStart?: string;

    /** log图片地址 */
    logUrl?: string;

    /** 关联业务员数组 */
    memberList?: Array<defs.CustomerRelatedSalesmanTable>;

    /** 最后修改人 */
    operator?: string;

    /** 最后修改人id */
    operatorId?: number;

    /** 法人代表电话 */
    phone?: string;

    /** updateTime */
    updateTime?: string;
  }

  export class CustomerContractForm {
    /** 所属业务区域 */
    businessArea?: string;

    /** 保证金 */
    cashDeposit?: number;

    /** 证书图片json数组  ['/目录/图片名','/目录/图片名'] */
    certPic?: string;

    /** 客户统一编码 */
    clientCode?: string;

    /** 客户id */
    clientId?: number;

    /** 客户编码 */
    clientNo?: string;

    /** 企业id */
    companyId?: number;

    /** 公司类型 */
    companyType?: string;

    /** 合同信息json数组  [{'contractType':'合同类型', 'contractNo':'合同编号', 'timeStart':'合同开始日2021-05-24','timeEnd':'合同结束日2051-05-24'}] */
    contractInfo?: string;

    /** 合同受托人json数组  [{'trusteeName':'受托人姓名', 'trusteeCard':'受托人身份证', 'trusteePhone':'受托人电话'}] */
    contractTrustee?: string;

    /** 信用额度 */
    creditLine?: number;

    /** 信用等级 */
    creditRatings?: string;

    /** 财务联系人 */
    finance?: string;

    /** 财务编码 */
    financeCode?: string;

    /** 财务传真 */
    financeFax?: string;

    /** 财务联系电话 */
    financePhone?: string;

    /** 加盟费 */
    franchiseFee?: number;

    /** 加盟费收取时间 */
    franchiseFeeTime?: string;

    /** 店铺形象图片json数组  ['/目录/图片名','/目录/图片名'] */
    imagePic?: string;

    /** 额度审批人 */
    limitApprover?: string;

    /** 组织机构代码 */
    organizationCode?: string;

    /** 授权委托书编号 */
    proxiesNo?: string;

    /** 授权受托人json数组  [{'proxiesName':'授权受托人姓名', 'proxiesCard':'授权受托人身份证', 'proxiesPhone':'授权受托人电话'}] */
    proxiesPeopleInfo?: string;

    /** 委托项目 */
    proxiesProduct?: string;

    /** 委托签订日期 */
    proxiesSignTime?: string;

    /** 委托有效日期结束时间 */
    proxiesTimeEnd?: string;

    /** 委托有效日期开始时间 */
    proxiesTimeStart?: string;

    /** 对方业务员及电话号码json数组  [{'name':'姓名', 'phone':'电话'}] */
    salesmanLink?: string;

    /** 实际控制人 */
    sameController?: string;

    /** 是否出货天津 1是 2否 */
    shipmentTianjing?: number;

    /** 税务登记号 */
    taxNo?: string;
  }

  export class CustomerDataTable {
    /** 企业简称 */
    abbr?: string;

    /** 公司地址 */
    address?: string;

    /** 所属区域 */
    area?: string;

    /** 所在区域 */
    businessArea?: string;

    /** 客户id */
    clientId?: number;

    /** 企业id */
    companyId?: number;

    /** 企业名称，系统唯一 */
    companyName?: string;

    /** 法人代表 */
    concat?: string;

    /** 合同编号 */
    contractNo?: string;

    /** createTime */
    createTime?: string;

    /** 信用代码 */
    creditNum?: string;

    /** 收货地址 */
    delivery?: string;

    /** 企业id */
    id?: number;

    /** 锁定，1=启用，2=禁用 */
    isLock?: number;

    /** 营业执照结束时间 */
    licenseEnd?: string;

    /** 营业执照 */
    licenseNum?: string;

    /** 营业执照开始时间 */
    licenseStart?: string;

    /** log图片地址 */
    logUrl?: string;

    /** 关联业务员 */
    member?: string;

    /** 最后修改人 */
    operator?: string;

    /** 最后修改人id */
    operatorId?: number;

    /** 法人代表电话 */
    phone?: string;

    /** 业务员id，业务员必须在业务团队中 */
    salesmanId?: number;

    /** updateTime */
    updateTime?: string;
  }

  export class CustomerRelatedSalesmanTable {
    /** 客户id */
    clientId?: number;

    /** 企业id */
    companyId?: number;

    /** 业务员id */
    memberId?: number;

    /** 业务员名字 */
    memberName?: string;

    /** 业务团队id */
    teamId?: number;

    /** 业务团队名字 */
    teamName?: string;
  }

  export class DivisionOperatingEntity {
    /** 企业id */
    companyId?: number;

    /** createTime */
    createTime?: string;

    /** 部门地址 */
    deptAddress?: string;

    /** 部门名称 */
    deptName?: string;

    /** 部门id */
    id?: number;

    /** 状态，1=启用，2=禁用 */
    isLock?: number;

    /** 部门领导id */
    leaderId?: number;

    /** 负责人名称 */
    leaderName?: string;

    /** 最后修改人 */
    operator?: string;
  }

  export class EnterpriseOperatingEntity {
    /** 企业简称 */
    abbr?: string;

    /** 企业管理员账号 */
    account?: string;

    /** 公司地址 */
    address?: string;

    /** 所属地区 */
    area?: string;

    /** 企业名称，系统唯一 */
    companyName?: string;

    /** 企业类型，多个用逗号分割 */
    companyType?: string;

    /** 法人代表 */
    concat?: string;

    /** createTime */
    createTime?: string;

    /** 信用代码 */
    creditNum?: string;

    /** 企业id */
    id?: number;

    /** 状态, 1=启用，2=禁用 */
    isLock?: number;

    /** 营业执照结束时间 */
    licenseEnd?: string;

    /** 营业执照 */
    licenseNum?: string;

    /** 营业执照开始时间 */
    licenseStart?: string;

    /** log图片地址 */
    logUrl?: string;

    /** 最后修改人 */
    operator?: string;

    /** 最后修改人id */
    operatorId?: number;

    /** 企业管理员密码 */
    password?: string;

    /** 法人代表电话 */
    phone?: string;

    /** updateTime */
    updateTime?: string;
  }

  export class EnterpriseRoleTable {
    /** 应用标识 */
    appName?: string;

    /** 权限值（数组）例：['a','b'] */
    authValJson?: string;

    /** 企业id */
    companyId?: number;

    /** createTime */
    createTime?: string;

    /** 角色id */
    id?: number;

    /** 最后修改人 */
    operator?: string;

    /** 角色名称 */
    roleName?: string;

    /** updateTime */
    updateTime?: string;
  }

  export class EnterpriseTable {
    /** 企业简称 */
    abbr?: string;

    /** 公司地址 */
    address?: string;

    /** 所属地区 */
    area?: string;

    /** 企业名称，系统唯一 */
    companyName?: string;

    /** 法人代表 */
    concat?: string;

    /** createTime */
    createTime?: string;

    /** 信用代码 */
    creditNum?: string;

    /** 企业id */
    id?: number;

    /** 状态, 1=启用，2=禁用 */
    isLock?: number;

    /** 营业执照结束时间 */
    licenseEnd?: string;

    /** 营业执照 */
    licenseNum?: string;

    /** 营业执照开始时间 */
    licenseStart?: string;

    /** log图片地址 */
    logUrl?: string;

    /** 最后修改人 */
    operator?: string;

    /** 最后修改人id */
    operatorId?: number;

    /** 法人代表电话 */
    phone?: string;

    /** updateTime */
    updateTime?: string;
  }

  export class ExcessOrderDetails {
    /** bizId */
    bizId?: number;

    /** 超量sku集合 */
    excessList?: Array<defs.WorkOrderDetails>;

    /** 超量总件数 */
    excessSumCount?: number;

    /** 超量总克重 */
    excessSumWeight?: number;
  }

  export class FactoryMappingObject {
    /** 鼎捷信号识别码 */
    identityCode?: string;

    /** 供应商企业id */
    supplierId?: number;

    /** 供应商企业名称 */
    supplierName?: string;
  }

  export class FormalBizPoDetailGroupCatagoryVo {
    /** formalBizPoDetailGroupCatagoryVos */
    formalBizPoDetailGroupCatagoryVos?: Array<defs.FormalBizPoDetailGroupProVo>;

    /** 数量 */
    num?: number;

    /** 品类 */
    proCatagory?: string;

    /** 克重 */
    weight?: number;
  }

  export class FormalBizPoDetailGroupProVo {
    /** formalBizPoDetailVos */
    formalBizPoDetailVos?: Array<defs.FormalBizPoDetailVo>;

    /** 数量 */
    num?: number;

    /** 产品id */
    proId?: number;

    /** 克重 */
    weight?: number;
  }

  export class FormalBizPoDetailGroupSupplierVo {
    /** formalBizPoDetailGroupCatagoryVos */
    formalBizPoDetailGroupCatagoryVos?: Array<
      defs.FormalBizPoDetailGroupCatagoryVo
    >;

    /** 数量 */
    num?: number;

    /** 供应商名 */
    supplier?: string;

    /** 克重 */
    weight?: number;
  }

  export class FormalBizPoDetailVo {
    /** amount */
    amount?: number;

    /** bizId */
    bizId?: number;

    /** 日均克重 */
    dayWeight?: number;

    /** flowerType */
    flowerType?: string;

    /** gramWeight */
    gramWeight?: number;

    /** lineUnique */
    lineUnique?: string;

    /** 最高克重 */
    maxWeight?: number;

    /** orderTime */
    orderTime?: string;

    /** 预计销量 */
    predictNumber?: number;

    /** proBaseInfo */
    proBaseInfo?: string;

    /** proCatagory */
    proCatagory?: string;

    /** proId */
    proId?: number;

    /** proNumber */
    proNumber?: string;

    /** proSupplierInfo */
    proSupplierInfo?: string;

    /** 最近一单克重 */
    recentlyWeight?: number;

    /** sku */
    sku?: string;

    /** skuId */
    skuId?: number;

    /** skuInfo */
    skuInfo?: string;

    /** skuMark */
    skuMark?: string;

    /** 供应商/工厂名 */
    supplier?: string;

    /** 总量 */
    totalWeight?: number;
  }

  export class FormalBizPoVo {
    /** 单据是否已经被接管,0=未被接管，1=已被接管，被接管的单据只能由接管者处理状态，接管作业完成之后，需将这个状态修改成未接管 */
    beTakerOver?: number;

    /** 下单备注 */
    bizMark?: string;

    /** 订单编号 */
    bizNo?: string;

    /** 单据类型 */
    bizType?: string;

    /** 采购公司ID */
    companyId?: number;

    /** 采购公司名 */
    companyName?: string;

    /** 制单时间 */
    createTime?: string;

    /** 制单人 */
    creator?: string;

    /** 制单人ID */
    creatorId?: number;

    /** 交货日期 */
    deliveryDate?: string;

    /** 成色 */
    fineness?: string;

    /** 是否挂签 */
    hangLabel?: number;

    /** 单据是否已结束，0=未完成，1=已完成 */
    hasFinished?: number;

    /** 订单id */
    id?: number;

    /** 接收方名称 */
    recipient?: string;

    /** 接收方id */
    recipientId?: string;

    /** 驳回备注 */
    reson?: string;

    /** 字印名称 */
    signet?: string;

    /** 字印ID */
    signetId?: string;

    /** 字印图片地址 */
    signetPicUrl?: string;

    /** 状态 */
    status?: string;

    /** 总量 */
    totalAmount?: number;

    /** 总重量 */
    totalGramWeight?: number;
  }

  export class FormalPoBizDetailVoStandard {
    /** formalBizPoDetailGroupSupplierVos */
    formalBizPoDetailGroupSupplierVos?: Array<
      defs.FormalBizPoDetailGroupSupplierVo
    >;

    /** formalBizPoVo */
    formalBizPoVo?: defs.FormalBizPoVo;
  }

  export class FormalPoPagingParamBo {
    /** 订单类型标识 */
    bizType?: string;

    /** 成色, 如 足金999,足金9999 */
    createDateEnd?: string;

    /** 成色, 如 足金999,足金9999 */
    createDateStart?: string;

    /** 期望交期 结束 , 格式如 'yyyy-MM-dd' */
    deliveryDateEnd?: string;

    /** 期望交期 开始 , 格式如 'yyyy-MM-dd' */
    deliveryDateStart?: string;

    /** 成色, 如 足金999,足金9999 */
    fineness?: string;

    /** 是否挂签, 0=挂签，1=不挂签 */
    hangLabel?: number;

    /** 搜索关键词,可对  二级客户名/柜台/创建人/订单编号 进行模糊搜索 */
    keyWord?: string;

    /** 页码,必须为大于等于1的整数 */
    pageIndex?: number;

    /** 查询行数,必须为大于等于1的整数 */
    rows?: number;

    /** 订单状态标识 */
    status?: string;
  }

  export class FrontResponse {
    /** code */
    code?: number;

    /** data */
    data?: object;

    /** directUrl */
    directUrl?: string;

    /** msg */
    msg?: string;
  }

  export class GDSignetInsertBo {
    /** companyId */
    companyId?: number;

    /** 字印名称,长度为1-15 */
    signet?: string;

    /** 字印图片地址,前端先上传，再把图片相对地址填到这里 */
    signetPic?: string;
  }

  export class GDSignetSelectParamBo {
    /** 字印名称,模糊搜索 */
    signet?: string;
  }

  export class GDSignetUpdateBo {
    /** 字印ID */
    id?: number;

    /** 字印名称 */
    signet?: string;

    /** 字印图片地址,前端把图片文件的相对地址传回来就行 */
    signetPic?: string;
  }

  export class GoldIsSchedulingObjects {
    /** 底料 */
    bedCharge?: number;

    /** 盘点数 */
    checkCount?: number;

    /** 盘点时间 */
    checkDate?: string;

    /** 日损耗 */
    dailyWastage?: number;

    /** 当月周转天数 */
    dayOfTurnover?: number;

    /** 鼎捷信号识别码 */
    identityCode?: string;

    /** 需求量 */
    needCount?: number;

    /** 占有量 */
    ownCount?: number;

    /** 冗余评估 */
    redundancy?: number;

    /** 存欠 */
    saveOwn?: number;

    /** 供应商企业id */
    supplierId?: number;

    /** 供应商企业名称 */
    supplierName?: string;
  }

  export class HistoricalPoSearchBo {
    /** 收藏,默认为false */
    collected?: boolean;

    /** 创建时间(截止),格式'YYYY-mm-dd' */
    createDateEnd?: string;

    /** 创建时间(开始),格式 'YYYY-mm-dd' */
    createDateStart?: string;

    /** 成色，如 足金999，足金9999 等 */
    fineness?: string;

    /** 订单号/收藏备注/创建人 */
    keyWord?: string;

    /** 页码，默认为1 */
    pageIndex?: number;

    /** 每页行数,默认为12 */
    pageRow?: number;

    /** 二级客户/柜台 的ID */
    recipientId?: string;

    /** 单据状态标识 */
    status?: string;
  }

  export class HistoricalPoVo {
    /** 订单编号 */
    bizNo?: string;

    /** 是否已收藏,true=已收藏,false=未收藏 */
    collected?: boolean;

    /** 收藏备注 */
    collectionNote?: string;

    /** 创建时间 */
    createTime?: string;

    /** 创建者 */
    creator?: string;

    /** 成色 */
    fineness?: string;

    /** 订单ID */
    id?: number;

    /** 二级客户/柜台名称 */
    recipient?: string;

    /** 状态 */
    status?: string;

    /** 总数量 */
    totalAmount?: number;

    /** 总重量 */
    totalGramWeight?: number;
  }

  export class IBizBoardDetailVo {
    /** bizId */
    bizId?: number;
  }

  export class KDSignetInsertBo {
    /** 字印归属,比如属于某个柜台或者某个客户的,则填柜台或者客户的唯一标识即可 */
    belongTo?: string;

    /** 字印名称,长度为1-15 */
    signet?: string;

    /** 字印图片地址,前端先上传，再把图片相对地址填到这里 */
    signetPic?: string;
  }

  export class KDSignetSelectParamBo {
    /** 二级客户ID */
    belongTo?: string;

    /** 字印名称,模糊搜索 */
    signet?: string;
  }

  export class KDSignetUpdateBo {
    /** 字印ID */
    id?: number;

    /** 字印名称 */
    signet?: string;

    /** 字印图片地址,前端把图片文件的相对地址传回来就行 */
    signetPic?: string;
  }

  export class NodeUser {
    /** userId */
    userId?: number;

    /** userName */
    userName?: string;
  }

  export class NotCloseTheOrderDetails {
    /** bizId */
    bizId?: number;

    /** 未关sku集合 */
    openBillList?: Array<defs.WorkOrderDetails>;
  }

  export class OrdersForProductSpecification {
    /** proBizDetailVo */
    proBizDetailVo?: defs.ProBizDetailVo;

    /** proBizSpecSaleVolumeVo */
    proBizSpecSaleVolumeVo?: defs.SalesOrdersProductSpecificationClasses;

    /** proSpec */
    proSpec?: defs.ProductSpecificationClass;
  }

  export class OverdueBoardDetailSkuVo {
    /** 采购量 */
    amount?: number;

    /** 计划逾期天数 */
    estimatedOverdueDays?: number;

    /** 花型 */
    flowerType?: string;

    /** 行标识 */
    lineUnique?: string;

    /** 逾期件数 */
    overdueCount?: number;

    /** 逾期现状 */
    overdueSituation?: string;

    /** 逾期重量(单位kg) */
    overdueWeight?: number;

    /** ProductBasicInformationJSON */
    proBaseInfo?: string;

    /** 供应商产品信息JSON */
    proSupplierInfo?: string;

    /** 回复交期 */
    replyDeliveryDate?: string;

    /** SKU ID */
    skuId?: number;

    /** SKU详细信息,缺什么字段可以自行到SKU JSON串中找 */
    skuInfo?: string;

    /** 源单备注(规格备注) */
    sourceSkuMark?: string;

    /** 计划逾期备注 */
    twoMark?: string;

    /** 计划逾期备注类型 */
    twoMarkType?: string;

    /** 实际逾期天数 */
    virtualOverdueDays?: number;
  }

  export class OverdueBoardDetailVo {
    /** TheRepairOrderID */
    bizId?: number;

    /** sku列表 */
    skuList?: Array<defs.OverdueBoardDetailSkuVo>;
  }

  export class OverdueBoardItemVo {
    /** TheRepairOrderID,查看详情的时候要用这个作为参数 */
    bizId?: number;

    /** 成色 */
    fineness?: string;

    /** 最大逾期天数,如果和最小逾期天数相等,前端显示任意一个即可,如不同,则将最小逾期天数和最大逾期天数拼接后显示, 显示规则请参考设计图/原型 */
    maxOverdueDays?: number;

    /** 最小回复交期,如果和最大回复交期相等，前端显示任意一个即可,如果不同,则将最小回复交期和最大回复交期拼接后显示,显示规则请参考设计图/原型 */
    maxReplyDeliveryDate?: string;

    /** 最小逾期天数,如果和最大逾期天数相等,前端显示任意一个即可,如不同,则将最小逾期天数和最大逾期天数拼接后显示, 显示规则请参考设计图/原型 */
    minOverdueDays?: number;

    /** 最小回复交期,如果和最大回复交期相等，前端显示任意一个即可,如果不同,则将最小回复交期和最大回复交期拼接后显示,显示规则请参考设计图/原型 */
    minReplyDeliveryDate?: string;

    /** 下单公司(一级户名/户名) */
    orderCompanyName?: string;

    /** 逾期件数占比 */
    overdueRate?: string;

    /** 下单时间 */
    sourceBizCreateTime?: string;

    /** 下单人 */
    sourceBizCreator?: string;

    /** 源单号 */
    sourceBizNo?: string;

    /** 源单类型,客单/柜台单,AGENCY=客单, OTC=柜台单 */
    sourceBizType?: string;

    /** 期望交期 */
    sourceDeliveryDate?: string;

    /** 二级户名(客户/柜台) */
    sourceRecipient?: string;

    /** 总件数 */
    totalAmount?: number;

    /** 总重量 */
    totalGramWeight?: number;

    /** TheRepairOrder号 */
    workOrderNo?: string;
  }

  export class OverdueBoardListParamBo {
    /** 对方公司的ID,在销售订单看板中,指的是供应商公司ID,在工厂订单看板中,指的是销售商公司ID */
    adverseCompanyId?: number;

    /** 下单人,生产TheRepairOrder看板不需传这个字段 */
    bizCreator?: string;

    /** 订单类型  AGENCY 客单, OTC 柜台  */
    bizType?: string;

    /** 逾期类型,estimated = 计划逾期,virtual=实际逾期,不需要筛选时不用传这个参数 */
    overdueType?: string;

    /** 页码,必须为大于等于1的整数 */
    pageIndex?: number;

    /** 查询行数,必须为大于等于1的整数 */
    rows?: number;

    /** 排序字段,deliveryDate=期望交期,replyDeliveryDate=回复交期,overdueDays=逾期天数,overdueRate=逾期件数占比 */
    sortColumn?: string;

    /** 排序模式,ASC=升序,DESC=降序;默认为ASC */
    sortMode?: string;
  }

  export class PageDTO<T0 = any> {
    /** 数据区 */
    data?: Array<T0>;

    /** 页码 */
    pageIndex?: number;

    /** 每页行数 */
    pageSize?: number;

    /** 总数据量 */
    rowSize?: number;
  }

  export class PoBizDetailFactoryBizVo {
    /** TheRepairOrder列表 */
    bizWorkOrders?: Array<defs.PoBizDetailGroupCatagoryVo>;
  }

  export class PoBizDetailGroupCatagoryVo {
    /** poBizDetailGroupGroupProVos */
    poBizDetailGroupGroupProVos?: Array<defs.PoBizDetailGroupProVo>;

    /** 品类 */
    proCatagory?: string;
  }

  export class PoBizDetailGroupProVo {
    /** bizWorkorderDetailWithBLOBs */
    bizWorkorderDetailWithBLOBs?: Array<defs.WorkOrderDetails>;

    /** 产品id */
    proId?: number;
  }

  export class PoBizFactoryBizVo {
    /** 单头 */
    bizPo?: defs.BizPo;

    /** TheRepairOrder列表 */
    bizWorkOrders?: Array<defs.TheRepairOrder>;
  }

  export class PoBizInsertBo {
    /** 下单备注 */
    bizMark?: string;

    /** 期望交货日期,只能选择一个未来的日期 */
    deliveryDate?: string;

    /** 成色,如 足金999，足金9999，足金 等，直接传成色名称即可 */
    fineness?: string;

    /** 是否挂签，0=挂签，1=不挂签 */
    hangLabel?: number;

    /** 二级客户的名称或者是柜台名称 */
    recipient?: string;

    /** 二级客户ID或者是柜台ID */
    recipientId?: string;

    /** 字印的名称 */
    signet?: string;

    /** 字印ID */
    signetId?: string;

    /** 字印的图片地址 */
    signetPicUrl?: string;
  }

  export class PoBizListVo {
    /** 审核状态 */
    appStatus?: string;

    /** 下单备注 */
    bizMark?: string;

    /** 订单编号 */
    bizNo?: string;

    /** 单据类型 */
    bizType?: string;

    /** 采购公司ID */
    companyId?: number;

    /** 户名 */
    companyName?: string;

    /** 创建时间 */
    createTime?: string;

    /** 创建人/制单人 */
    creator?: string;

    /** 期望交期 */
    deliveryDate?: string;

    /** 成色 */
    fineness?: string;

    /** 是否挂签, 0=挂签，1=不挂签 */
    hangLabel?: number;

    /** 是否已关单,0=未关单,1=已关单 */
    hasFinished?: number;

    /** 订单ID */
    id?: number;

    /** 二级客户/柜台名称 */
    recipient?: string;

    /** 二级客户/柜台ID */
    recipientId?: string;

    /** 字印名称 */
    signet?: string;

    /** 字印ID */
    signetId?: string;

    /** 字印图片地址 */
    signetPicUrl?: string;

    /** 单据状态 */
    status?: string;

    /** 总件数 */
    totalAmount?: number;

    /** 总重量 */
    totalGramWeight?: number;
  }

  export class PoBizSkuUpdateBo {
    /** 数量 */
    amount?: number;

    /** 订单id */
    bizId?: number;

    /** 花型 */
    flowerType?: string;

    /** 重量 */
    gramWeight?: number;

    /** 行编号 */
    lineUnique?: string;

    /** 产品信息 */
    proBaseInfo?: string;

    /** 产品品类 */
    proCatagory?: string;

    /** 产品id */
    proId?: number;

    /** 标准产品编号 */
    proNumber?: string;

    /** 供应商产品信息 */
    proSupplierInfo?: string;

    /** sku编码 */
    sku?: string;

    /** SKU ID */
    skuId?: number;

    /** SKU属性 */
    skuInfo?: string;

    /** 行备注 */
    skuMark?: string;
  }

  export class PoBizUpdateBo {
    /** 下单备注 */
    bizMark?: string;

    /** 期望交货日期,只能选择一个未来的日期 */
    deliveryDate?: string;

    /** 是否挂签，0=挂签，1=不挂签 */
    hangLabel?: number;

    /** 订单ID,在创建单据业务中，前端不可见 */
    id?: number;

    /** preliminaryPoBizDetailUpdateBos */
    preliminaryPoBizDetailUpdateBos?: Array<
      defs.PreliminaryPoBizDetailUpdateBo
    >;

    /** 字印的名称 */
    signet?: string;

    /** 字印ID */
    signetId?: string;

    /** 字印的图片地址 */
    signetPicUrl?: string;
  }

  export class PoStatusVo {
    /** 状态标识 */
    status?: string;

    /** 状态名称 */
    statusName?: string;
  }

  export class PreBizPoDetailGroupVo {
    /** maxDate */
    maxDate?: string;

    /** num */
    num?: number;

    /** preBizPoDetailProGroupVos */
    preBizPoDetailProGroupVos?: Array<defs.PreBizPoDetailProGroupVo>;

    /** proCatagory */
    proCatagory?: string;

    /** weight */
    weight?: number;
  }

  export class PreBizPoDetailProGroupVo {
    /** maxDate */
    maxDate?: string;

    /** num */
    num?: number;

    /** preBizPoDetailVos */
    preBizPoDetailVos?: Array<defs.PreBizPoDetailVo>;

    /** proId */
    proId?: number;

    /** weight */
    weight?: number;
  }

  export class PreBizPoDetailVo {
    /** amount */
    amount?: number;

    /** bizId */
    bizId?: number;

    /** dayWeight */
    dayWeight?: number;

    /** flowerType */
    flowerType?: string;

    /** gramWeight */
    gramWeight?: number;

    /** lineUnique */
    lineUnique?: string;

    /** maxWeight */
    maxWeight?: number;

    /** newAmount */
    newAmount?: number;

    /** newSkuMark */
    newSkuMark?: string;

    /** orderTime */
    orderTime?: string;

    /** predictNumber */
    predictNumber?: number;

    /** proBaseInfo */
    proBaseInfo?: string;

    /** proCatagory */
    proCatagory?: string;

    /** proId */
    proId?: number;

    /** proNumber */
    proNumber?: string;

    /** proSupplierInfo */
    proSupplierInfo?: string;

    /** recentlyWeight */
    recentlyWeight?: number;

    /** sku */
    sku?: string;

    /** skuId */
    skuId?: number;

    /** skuInfo */
    skuInfo?: string;

    /** skuMark */
    skuMark?: string;

    /** totalWeight */
    totalWeight?: number;
  }

  export class PreliminaryPoBizDetailUpdateBo {
    /** 数量 */
    amount?: number;

    /** 订单ID */
    bizId?: number;

    /** SKU 编号 */
    flowerType?: string;

    /** 重量 */
    gramWeight?: number;

    /** 行编号 */
    lineUnique?: string;

    /** 产品信息 */
    proBaseInfo?: string;

    /** 产品品类 */
    proCatagory?: string;

    /** 产品ID */
    proId?: number;

    /** 产品编号 */
    proNumber?: string;

    /** 供应商产品信息 */
    proSupplierInfo?: string;

    /** SKU 编号 */
    sku?: string;

    /** SKU ID */
    skuId?: number;

    /** 重量 */
    skuInfo?: string;

    /** 行备注 */
    skuMark?: string;
  }

  export class PreliminaryPoBizDetailVoProSearchModel {
    /** imgList */
    imgList?: Array<string>;

    /** label */
    label?: string;

    /** proBase */
    proBase?: defs.ProductBasicInformation;

    /** proId */
    proId?: number;

    /** proName */
    proName?: string;

    /** proNumber */
    proNumber?: string;

    /** proSaleBase */
    proSaleBase?: defs.ProductSalesBasedInformation;

    /** proSpecList */
    proSpecList?: Array<defs.OrdersForProductSpecification>;

    /** proSupplierList */
    proSupplierList?: Array<defs.ProSupplierBase>;
  }

  export class PreliminaryPoBizDetailVoStandard {
    /** bizPo */
    bizPo?: defs.BizPo;

    /** groupPoBizDetailVos */
    groupPoBizDetailVos?: Array<defs.PreBizPoDetailGroupVo>;
  }

  export class PreliminaryPoBizListVo {
    /** 单据是否已经被接管,0=未被接管，1=已被接管，被接管的单据只能由接管者处理状态，接管作业完成之后，需将这个状态修改成未接管 */
    beTakerOver?: number;

    /** 下单备注 */
    bizMark?: string;

    /** 订单编号 */
    bizNo?: string;

    /** 单据类型 AGENCY 客单, OTC 柜台 */
    bizType?: string;

    /** 采购公司ID */
    companyId?: number;

    /** 采购公司名称 */
    companyName?: string;

    /** 制单时间 */
    createTime?: string;

    /** 制单人 */
    creator?: string;

    /** 制单人ID */
    creatorId?: number;

    /** 交货日期 */
    deliveryDate?: string;

    /** 成色,如足金999、足金9999、足金 等 */
    fineness?: string;

    /** 是否挂签, 0=挂签，1=不挂签 */
    hangLabel?: number;

    /** 单据是否已结束，0=未完成，1=已完成 */
    hasFinished?: number;

    /** 账单id */
    id?: number;

    /** 接收方名称 */
    recipient?: string;

    /** 接收方ID，这个接收方可以是任何形式的组织机构或者内部组织 */
    recipientId?: string;

    /** 字印名称 */
    signet?: string;

    /** 字印ID */
    signetId?: string;

    /** 字印图片地址 */
    signetPicUrl?: string;

    /** 状态,由业务层来控制各种类型采购单的状态以及业务流程 */
    status?: string;

    /** 总数量 */
    totalAmount?: number;

    /** 总重量 */
    totalGramWeight?: number;
  }

  export class PreliminaryPoBizSummaryVo {
    /** groupVos */
    groupVos?: Array<defs.PreBizPoDetailGroupVo>;

    /** totalSkuNum */
    totalSkuNum?: number;

    /** totalSum */
    totalSum?: number;

    /** totalWeight */
    totalWeight?: number;
  }

  export class PreliminaryPoBizUpdateBo {
    /** 下单备注 */
    bizMark?: string;

    /** 期望交货日期,只能选择一个未来的日期 */
    deliveryDate?: string;

    /** 是否挂签，0=挂签，1=不挂签 */
    hangLabel?: number;

    /** 订单ID,在创建单据业务中，前端不可见 */
    id?: number;

    /** preliminaryPoBizDetailUpdateBos */
    preliminaryPoBizDetailUpdateBos?: Array<
      defs.PreliminaryPoBizDetailUpdateBo
    >;

    /** 字印的名称 */
    signet?: string;

    /** 字印ID */
    signetId?: string;

    /** 字印的图片地址 */
    signetPicUrl?: string;
  }

  export class ProBizDetailVo {
    /** 数量 */
    amount?: number;

    /** 备注 */
    skuMark?: string;
  }

  export class ProCapacity {
    /** averageCapacity */
    averageCapacity?: number;

    /** companyId */
    companyId?: number;

    /** createName */
    createName?: string;

    /** createTime */
    createTime?: string;

    /** id */
    id?: number;

    /** number */
    number?: number;

    /** time */
    time?: number;

    /** timeCapacity */
    timeCapacity?: string;

    /** typeCapacity */
    typeCapacity?: string;

    /** updateName */
    updateName?: string;

    /** updateTime */
    updateTime?: string;
  }

  export class ProSearchBo {
    /** 订单id */
    bizId?: number;

    /** 业务类型 */
    bizType?: string;

    /** 链扣类型(名称) */
    buckleType?: string;

    /** 成色 */
    conditi?: string;

    /** 柜位id */
    counterId?: number;

    /** 柜位名称 */
    counterName?: string;

    /** 结束时间-建档(时间格式为:YYYY-MM-dd HH:mm:ss) */
    dateEnd?: string;

    /** 结束时间-销量(时间格式为:YYYY-MM-dd HH:mm:ss) */
    dateEnds?: string;

    /** 开始时间-建档(时间格式为:YYYY-MM-dd HH:mm:ss) */
    dateStart?: string;

    /** 开始时间-销量(时间格式为:YYYY-MM-dd HH:mm:ss) */
    dateStarts?: string;

    /** 时间类型(WEEK:周  MONTH:月  SEASON:季) */
    dateType?: string;

    /** 款式描述 */
    describe?: string;

    /** 表面工艺 */
    effectName?: string;

    /** 有下单量( 1:存在(勾选)  2:不存在) */
    existAmount?: number;

    /** 花型(名称) */
    flowerName?: string;

    /** 标签 */
    lable?: string;

    /** limit */
    limit?: number;

    /** listProId */
    listProId?: Array<number>;

    /** mapProSpecSku */
    mapProSpecSku?: ObjectMap<any, defs.SalesOrdersProductSpecificationClasses>;

    /** 月 */
    month?: number;

    /** 是否新品 1:新品 2:非新品 */
    newType?: number;

    /** 品类 */
    oneName?: string;

    /** 页码 */
    page?: number;

    /** 产品id */
    proId?: number;

    /** 制造工艺 */
    processName?: string;

    /** 季 */
    quarter?: number;

    /** 行数 */
    rows?: number;

    /** 销售商id(公司id) */
    saleId?: number;

    /** 搜索框 */
    search?: string;

    /** 二级客户id */
    secondLevelClientId?: string;

    /** 尺寸(面宽),链长 */
    size?: string;

    /** sizes */
    sizes?: number;

    /** skuIdList */
    skuIdList?: Array<number>;

    /** skuList */
    skuList?: Array<string>;

    /** start */
    start?: number;

    /** 供应商id(工厂id) */
    supplierId?: number;

    /** 开口类型(名称) */
    type?: string;

    /** 周 */
    week?: number;

    /** 克重 */
    weight?: number;

    /** 结束克重 */
    weightEnd?: number;

    /** 开始克重 */
    weightStart?: number;

    /** 年 */
    year?: number;
  }

  export class ProSupplierBase {
    /** castMaterial */
    castMaterial?: string;

    /** id */
    id?: number;

    /** materialContent */
    materialContent?: string;

    /** output */
    output?: number;

    /** proCapacity */
    proCapacity?: defs.ProCapacity;

    /** proId */
    proId?: number;

    /** proName */
    proName?: string;

    /** proNumber */
    proNumber?: string;

    /** proPeriod */
    proPeriod?: string;

    /** processFlow */
    processFlow?: string;

    /** supplier */
    supplier?: number;

    /** supplierName */
    supplierName?: string;
  }

  export class ProcessNode {
    /** nodeName */
    nodeName?: string;

    /** users */
    users?: Array<defs.NodeUser>;
  }

  export class ProductBasicInformation {
    /** 辅件json字符串  */
    aux?: string;

    /** 大类 */
    bigClass?: string;

    /** 品类Code  */
    code?: string;

    /** 品类名称  */
    codeName?: string;

    /** 公司id  */
    companyId?: number;

    /** 创建人 */
    createName?: string;

    /** 创建时间  */
    createTime?: string;

    /** 产品描述  */
    describe?: string;

    /** 表面工艺  */
    effectCode?: string;

    /** 产品id */
    id?: number;

    /** imgList */
    imgList?: Array<string>;

    /** 产品名称-标准 */
    name?: string;

    /** 产品编号-标准 */
    number?: string;

    /** 专利截止日期  */
    patentEndTime?: string;

    /** 专利编号  */
    patentNumber?: string;

    /** 制作工艺  */
    processCode?: string;

    /** 是否启用:1:制单 2:待启用 3:已启动 4:禁用  */
    state?: number;

    /** 戒指/手镯:开口类型;手链/项链:链扣类型 */
    type?: string;

    /** 更新人 */
    updataName?: string;

    /** 更新时间 */
    updateTime?: string;
  }

  export class ProductSalesBasedInformation {
    /** 是否专销 1:是,2:否' */
    flagType?: number;

    /** id */
    id?: number;

    /** 标签 */
    label?: string;

    /** 是否新品 1:新品 2:非新品 */
    newType?: number;

    /** 产品id */
    proId?: number;

    /** 销售商id */
    saleId?: string;

    /** 销售名称 */
    saleName?: string;

    /** 上市时间 */
    timeToMarket?: string;

    /** timeToMarkets */
    timeToMarkets?: string;
  }

  export class ProductSet {
    /** 产品id */
    id?: number;

    /** 图片数组信息 */
    img?: Array<string>;

    /** 产品基础属性(第一阶段信息) 规格数组数据 */
    list?: Array<defs.ProductSpecificationClass>;

    /** 产品基础属性(第一阶段信息) */
    pro?: defs.ProductBasicInformation;

    /** 产品SalesOfProductInformation(第三阶段) */
    proSale?: defs.ProductSalesBasedInformation;

    /** 产品供应商信息列表(第二阶段) */
    proSupplierList?: Array<defs.ProSupplierBase>;

    /** 产品销售信息) */
    sale?: defs.SalesOfProductInformation;

    /** 是否引用 true 引用  false 引用 */
    tag?: boolean;

    /** 是否上架状态 1 是 2 未上架) */
    upStatus?: number;
  }

  export class ProductSpecificationClass {
    /** 成色 */
    conditi?: string;

    /** 创建时间 */
    createTime?: string;

    /** 扩展属性 */
    extendAttr?: string;

    /** 花型 */
    flowerType?: string;

    /** id */
    id?: number;

    /** 产品id */
    proId?: number;

    /** sku编码 */
    skumuber?: string;

    /** 是否启用 1:禁用 2:启用 */
    status?: number;

    /** 更新时间 */
    updateTime?: string;

    /** 克重 */
    weight?: number;

    /** 克重范围（结束） */
    weightEnd?: number;

    /** 克重范围（开始） */
    weightStart?: number;
  }

  export class ProductionOrder {
    /** 是否已关单, 0= 未关单, 1=已关单,默认为0 */
    closed?: number;

    /** 公司ID,TheRepairOrder所属公司的ID */
    companyId?: number;

    /** 工厂名称 */
    companyName?: string;

    /** 完成时间 */
    completeDate?: string;

    /** 当前单据的创建时间 */
    createTime?: string;

    /** 划单状态(工厂交货的状态),根据各个SKU的交货情况来变更 */
    deliveryStatus?: string;

    /** 成色 */
    fineness?: string;

    /** 是否挂签, 0=挂签，1=不挂签 */
    hangLabel?: number;

    /** ID */
    id?: number;

    /** 投产数量 */
    launchCount?: number;

    /** 投产时间 */
    launchDate?: string;

    /** 投产id */
    launchId?: number;

    /** 投产单号 */
    launchNo?: string;

    /** 投产状态,根据各个SKU的投产情况来变更 */
    launchStatus?: string;

    /** 投产人 */
    launchUser?: string;

    /** 投产人id */
    launchUserId?: string;

    /** 投产重量 */
    launchWeight?: number;

    /** 回复交期(最大值) */
    maxReplyDeliveryDate?: string;

    /** 回复交期(最小值) */
    minReplyDeliveryDate?: string;

    /** 下单公司ID */
    orderCompanyId?: number;

    /** 下单公司,一般指销售商 */
    orderCompanyName?: string;

    /** 接单总数 */
    receiveAmount?: number;

    /** 接单时间 */
    receiveTime?: string;

    /** 接单总克重 */
    receiveWeight?: number;

    /** 接单人 */
    receiver?: string;

    /** 接单人ID */
    receiverId?: number;

    /** 回复交期(合并) */
    replyDeliveryDateCombine?: string;

    /** 字印名称 */
    signet?: string;

    /** 字印ID */
    signetId?: string;

    /** 字印图片 */
    signetPicUrl?: string;

    /** 源单创建时间(下单时间) */
    sourceBizCreateTime?: string;

    /** 源单下单人 */
    sourceBizCreator?: string;

    /** 源单ID */
    sourceBizId?: number;

    /** 源单备注 */
    sourceBizMark?: string;

    /** 源单号 */
    sourceBizNo?: string;

    /** 源单类型 */
    sourceBizType?: string;

    /** 源单中的期望交货日期 */
    sourceDeliveryDate?: string;

    /** 源单中的接收者,可能是二级客户，也可能是柜台 */
    sourceRecipient?: string;

    /** 源单中的接收者ID,可能是二级客户，也可能是柜台 */
    sourceRecipientId?: string;

    /** 总件数 */
    totalAmount?: number;

    /** 总克重 */
    totalGramWeight?: number;

    /** TheRepairOrder号 */
    workorderNo?: string;

    /** TheRepairOrder状态,生成TheRepairOrder时，默认状态是'待接单' */
    workorderStatus?: string;

    /** TheRepairOrder类型,目前有正常和加急两种 */
    workorderType?: string;
  }

  export class ProductionOrderPrintReceiptsBarcodeObject {
    /** 源订单Id（投产单Id） */
    poBizId?: number;

    /** SKU ID */
    skuIds?: Array<number>;

    /** 行标识（作业表的） */
    uniques?: Array<string>;

    /** true=该条码已使用过,false=该条码未被使用过 */
    used?: boolean;

    /** TheRepairOrderId */
    workOrderId?: number;
  }

  export class ReceiveItem {
    /** 划单/补单 数量 */
    amount?: number;

    /** TheRepairOrder行标识 */
    lineUnique?: string;

    /** 划单/补单 备注 */
    mark?: string;

    /** 备注类型,如果是 用户选择预定义的备注，则备注类型=备注，否则，备注类型='其他' */
    markType?: string;
  }

  export class RecordSort {
    /** customerName */
    customerName?: string;

    /** extraInfo */
    extraInfo?: string;

    /** map */
    map?: ObjectMap<any, defs.RecordSort>;

    /** proId */
    proId?: number;

    /** rank */
    rank?: number;

    /** skuNumber */
    skuNumber?: string;

    /** sort */
    sort?: number;

    /** totalNumber */
    totalNumber?: number;

    /** totalWeith */
    totalWeith?: number;
  }

  export class SaleMappingRelationWithBLOBs {
    /** companyId */
    companyId?: string;

    /** companyName */
    companyName?: string;

    /** createName */
    createName?: string;

    /** createTime */
    createTime?: string;

    /** groupType */
    groupType?: number;

    /** id */
    id?: number;

    /** name */
    name?: string;

    /** parentId */
    parentId?: number;

    /** rank */
    rank?: number;

    /** saleId */
    saleId?: string;

    /** saleName */
    saleName?: string;

    /** type */
    type?: number;

    /** updateName */
    updateName?: string;

    /** updateTime */
    updateTime?: string;
  }

  export class SalesOfProductInformation {
    /** 产品id */
    companyId?: number;

    /** 柜台id */
    counterId?: string;

    /** 柜台名称 */
    counterName?: string;

    /** 创建人 */
    createName?: string;

    /** 创建时间 */
    createTime?: string;

    /** id */
    id?: number;

    /** 产品ID */
    proId?: number;

    /** 是否上架状态 1 是 2 未上架 */
    upStatus?: number;

    /** 更新人 */
    updataName?: string;

    /** 更新时间 */
    updateTime?: string;
  }

  export class SalesOrdersProductSpecificationClasses {
    /** dayWeight */
    dayWeight?: number;

    /** maxWeight */
    maxWeight?: number;

    /** predictNumber */
    predictNumber?: number;

    /** proState */
    proState?: number;

    /** recentlyWeight */
    recentlyWeight?: number;

    /** skuState */
    skuState?: number;

    /** standardWeight */
    standardWeight?: number;

    /** totalWeight */
    totalWeight?: number;
  }

  export class ScmLog {
    /** companyId */
    companyId?: number;

    /** companyName */
    companyName?: string;

    /** content */
    content?: string;

    /** createTime */
    createTime?: string;

    /** module */
    module?: string;

    /** motion */
    motion?: string;

    /** name */
    name?: string;

    /** userId */
    userId?: number;
  }

  export class SimpleDeliveryVo {
    /** 工厂划单数量 */
    amount?: number;

    /** 工厂划单时间 */
    createTime?: string;

    /** 交货记录的行标识,前端不用显示 */
    lineUnique?: string;
  }

  export class StandardAggregateRow {
    /** 数据类型标识 */
    bizBoardType?: string;

    /** 列名称 */
    columnName?: string;

    /** 列的值 */
    columnValue?: string;

    /** 排序号(小的排在前面),前端排列数据的时候，按异常类型/类目 和排序号进行分组和排序,比如:两行数据,具有相同的 异常类型和类目，并且排序号也相同,那么这两行数据就要排在相邻的两行 */
    sortIndex?: number;

    /** 工厂ID */
    supplierId?: number;

    /** 工厂名称 */
    supplierName?: string;
  }

  export class StandardAggregateWrap {
    /** 数据类型和列名称汇总 */
    nameList?: Array<defs.BizBoardTypeAndColumn>;

    /** 原始数据,按最小粒度进行封装 */
    resultList?: Array<defs.StandardAggregateRow>;

    /** 工厂名称汇总 */
    supplierNameList?: Array<string>;
  }

  export class SupplierDataSheet {
    /** 企业简称 */
    abbr?: string;

    /** 公司地址 */
    address?: string;

    /** 所属地区 */
    area?: string;

    /** 企业id */
    companyId?: number;

    /** 企业名称，系统唯一 */
    companyName?: string;

    /** 法人代表 */
    concat?: string;

    /** 合同信息json数组  [{'contractType':'合同类型', 'contractNo':'合同编号', 'timeStart':'合同开始日2021-05-24','timeEnd':'合同结束日2051-05-24'}] */
    contractInfo?: string;

    /** 合同受托人json数组  [{'trusteeName':'受托人姓名', 'trusteeCard':'受托人身份证', 'trusteePhone':'受托人电话'}] */
    contractTrustee?: string;

    /** createTime */
    createTime?: string;

    /** 信用代码 */
    creditNum?: string;

    /** 厂印 */
    factorySeal?: string;

    /** 财务联系人 */
    finance?: string;

    /** 财务编码 */
    financeCode?: string;

    /** 财务传真 */
    financeFax?: string;

    /** 财务联系电话 */
    financePhone?: string;

    /** 企业id */
    id?: number;

    /** 是否锁定该供应商，1=启用，2=禁用 */
    isLock?: number;

    /** 营业执照结束时间 */
    licenseEnd?: string;

    /** 营业执照 */
    licenseNum?: string;

    /** 营业执照开始时间 */
    licenseStart?: string;

    /** log图片地址 */
    logUrl?: string;

    /** 最后修改人 */
    operator?: string;

    /** 最后修改人id */
    operatorId?: number;

    /** 法人代表电话 */
    phone?: string;

    /** 授权委托书编号 */
    proxiesNo?: string;

    /** 授权受托人json数组  [{'proxiesName':'授权受托人姓名', 'proxiesCard':'授权受托人身份证', 'proxiesPhone':'授权受托人电话'}] */
    proxiesPeopleInfo?: string;

    /** 委托项目 */
    proxiesProduct?: string;

    /** 委托签订日期 */
    proxiesSignTime?: string;

    /** 委托有效日期结束时间 */
    proxiesTimeEnd?: string;

    /** 委托有效日期开始时间 */
    proxiesTimeStart?: string;

    /** 供应商资料id */
    supplierId?: number;

    /** 对接供应商人员 */
    supplierMember?: string;

    /** 对接供应商人员id */
    supplierMemberId?: number;

    /** 供应商编码 */
    supplierNo?: string;

    /** 供应商类型 */
    supplierType?: string;

    /** updateTime */
    updateTime?: string;
  }

  export class TheCounterTable {
    /** 成色（数组）例：['999','9999'] */
    color?: string;

    /** 企业id */
    companyId?: number;

    /** 柜台名称 */
    counterName?: string;

    /** createTime */
    createTime?: string;

    /** 柜台id */
    id?: number;

    /** 柜台领导id */
    leaderId?: number;

    /** 状态，1=启用，2=禁用 */
    lockStatus?: number;

    /** 柜台成员id（数组）例：[1,2,3] */
    memberIds?: string;

    /** 柜台成员个数 */
    memberNum?: number;

    /** 最后修改人 */
    operator?: string;
  }

  export class TheProcessObject {
    /** 单据类型 */
    bizType?: string;

    /** 公司ID */
    companyId?: number;

    /** 创建日期 */
    createTime?: string;

    /** node */
    node?: Array<defs.ProcessNode>;

    /** 最后操作人 */
    operator?: string;

    /** 审批流程 */
    processStep?: string;

    /** 最后更新时间 */
    updateTime?: string;
  }

  export class TheRepairOrder {
    /** 是否已关单, 0= 未关单, 1=已关单,默认为0 */
    closed?: number;

    /** 公司ID,TheRepairOrder所属公司的ID */
    companyId?: number;

    /** 工厂名称 */
    companyName?: string;

    /** 完成时间 */
    completeDate?: string;

    /** 当前单据的创建时间 */
    createTime?: string;

    /** 划单状态(工厂交货的状态),根据各个SKU的交货情况来变更 */
    deliveryStatus?: string;

    /** 成色 */
    fineness?: string;

    /** 是否挂签, 0=挂签，1=不挂签 */
    hangLabel?: number;

    /** ID */
    id?: number;

    /** 投产状态,根据各个SKU的投产情况来变更 */
    launchStatus?: string;

    /** 回复交期(最大值) */
    maxReplyDeliveryDate?: string;

    /** 回复交期(最小值) */
    minReplyDeliveryDate?: string;

    /** 下单公司ID */
    orderCompanyId?: number;

    /** 下单公司,一般指销售商 */
    orderCompanyName?: string;

    /** 接单总数 */
    receiveAmount?: number;

    /** 接单时间 */
    receiveTime?: string;

    /** 接单总克重 */
    receiveWeight?: number;

    /** 接单人 */
    receiver?: string;

    /** 接单人ID */
    receiverId?: number;

    /** 回复交期(合并) */
    replyDeliveryDateCombine?: string;

    /** 字印名称 */
    signet?: string;

    /** 字印ID */
    signetId?: string;

    /** 字印图片 */
    signetPicUrl?: string;

    /** 源单创建时间(下单时间) */
    sourceBizCreateTime?: string;

    /** 源单下单人 */
    sourceBizCreator?: string;

    /** 源单ID */
    sourceBizId?: number;

    /** 源单备注 */
    sourceBizMark?: string;

    /** 源单号 */
    sourceBizNo?: string;

    /** 源单类型 */
    sourceBizType?: string;

    /** 源单中的期望交货日期 */
    sourceDeliveryDate?: string;

    /** 源单中的接收者,可能是二级客户，也可能是柜台 */
    sourceRecipient?: string;

    /** 源单中的接收者ID,可能是二级客户，也可能是柜台 */
    sourceRecipientId?: string;

    /** 总件数 */
    totalAmount?: number;

    /** 总克重 */
    totalGramWeight?: number;

    /** TheRepairOrder号 */
    workorderNo?: string;

    /** TheRepairOrder状态,生成TheRepairOrder时，默认状态是'待接单' */
    workorderStatus?: string;

    /** TheRepairOrder类型,目前有正常和加急两种 */
    workorderType?: string;
  }

  export class TheRepairOrderDetailsAGroup {
    /** 产能分类 */
    capacity?: defs.ProCapacity;

    /** 回复交期 */
    delivery?: string;

    /** 产品详情 */
    info?: Array<defs.WorkOrderDetails>;

    /** loadRate */
    loadRate?: string;

    /** 下单量 */
    orderWeight?: number;

    /** 件数 */
    sumCount?: number;

    /** 分类名称 */
    type?: string;
  }

  export class Tree<T0 = any> {
    /** check */
    check?: boolean;

    /** children */
    children?: Array<defs.Tree<defs.AccessResourcesTable>>;

    /** data */
    data?: T0;
  }

  export class UnanweredBoardItemVo {
    /** TheRepairOrderID,查看详情的时候要用这个作为参数 */
    bizId?: number;

    /** 结束回复交期 */
    endSourceDeliveryDate?: string;

    /** 成色 */
    fineness?: string;

    /** 占比 */
    offNoteInfo?: string;

    /** 下单公司(一级户名/户名) */
    orderCompanyName?: string;

    /** 下单时间 */
    sourceBizCreateTime?: string;

    /** 下单人 */
    sourceBizCreator?: string;

    /** 源单号 */
    sourceBizNo?: string;

    /** 源单类型,客单/柜台单,AGENCY=客单, OTC=柜台单 */
    sourceBizType?: string;

    /** 期望交期 */
    sourceDeliveryDate?: string;

    /** 二级户名(客户/柜台) */
    sourceRecipient?: string;

    /** 开始回复交期 */
    startSourceDeliveryDate?: string;

    /** 总件数 */
    totalAmount?: number;

    /** 总重量 */
    totalGramWeight?: number;

    /** TheRepairOrder号 */
    workOrderNo?: string;
  }

  export class UniversalOverviewQueryParamBo {
    /** 对方公司ID, 在销售订单看板中,该字段填供应商ID,在工厂订单看板中,该字段填一级客户(销售商)ID */
    adverseCompanyId?: number;

    /** 对方公司名称, 在销售订单看板中,该字段填供应商名称,在工厂订单看板中,该字段填一级客户(销售商)名称 */
    adverseCompanyName?: string;

    /** 结束日期,格式'yyyy-MM-dd' */
    endDate?: string;

    /** 搜索关键词,请根据销售订单看板和工厂订单看板需求使用! */
    keyword?: string;

    /** 源单类型,AGENCY=客单,OTC=柜台单 */
    sourceOrderType?: string;

    /** 起始日期,格式'yyyy-MM-dd' */
    startDate?: string;
  }

  export class VendorDataSheet {
    /** 销售商企业信息 */
    company?: defs.EnterpriseTable;

    /** 企业id */
    companyId?: number;

    /** 合同信息json数组  [{'contractType':'合同类型', 'contractNo':'合同编号', 'timeStart':'合同开始日2021-05-24','timeEnd':'合同结束日2051-05-24'}] */
    contractInfo?: string;

    /** 合同受托人json数组  [{'trusteeName':'受托人姓名', 'trusteeCard':'受托人身份证', 'trusteePhone':'受托人电话'}] */
    contractTrustee?: string;

    /** createTime */
    createTime?: string;

    /** 厂印 */
    factorySeal?: string;

    /** 财务联系人 */
    finance?: string;

    /** 财务编码 */
    financeCode?: string;

    /** 财务传真 */
    financeFax?: string;

    /** 财务联系电话 */
    financePhone?: string;

    /** 是否锁定该供应商，1=启用，2=禁用 */
    isLock?: number;

    /** 最后修改人 */
    operator?: string;

    /** 授权委托书编号 */
    proxiesNo?: string;

    /** 授权受托人json数组  [{'proxiesName':'授权受托人姓名', 'proxiesCard':'授权受托人身份证', 'proxiesPhone':'授权受托人电话'}] */
    proxiesPeopleInfo?: string;

    /** 委托项目 */
    proxiesProduct?: string;

    /** 委托签订日期 */
    proxiesSignTime?: string;

    /** 委托有效日期结束时间 */
    proxiesTimeEnd?: string;

    /** 委托有效日期开始时间 */
    proxiesTimeStart?: string;

    /** 供应商资料id */
    supplierId?: number;

    /** 对接供应商人员 */
    supplierMember?: string;

    /** 对接供应商人员id */
    supplierMemberId?: number;

    /** 供应商编码 */
    supplierNo?: string;

    /** 供应商类型 */
    supplierType?: string;

    /** updateTime */
    updateTime?: string;
  }

  export class WorkOrderDetails {
    /** 采购量(件数) */
    amount?: number;

    /** 产能分类 */
    capacityType?: string;

    /** 是否已关单，0=未关单,1=已关单 */
    closed?: number;

    /** 已划单(已交货)的数量 */
    deliveryAmount?: number;

    /** 差异备注 */
    diffMark?: string;

    /** 差异备注类型 */
    diffMarkType?: string;

    /** 花型 */
    flowerType?: string;

    /** 克重总数量 */
    gramWeight?: number;

    /** 单据行的唯一标识，全系统唯一，根据单据编号，产品ID,SKU ID 生成hash字符串 */
    lineUnique?: string;

    /** 已投产的数量 */
    lunchedAmount?: number;

    /** 标准产品信息 */
    proBaseInfo?: string;

    /** 产品品类 */
    proCatagory?: string;

    /** 标准产品ID */
    proId?: number;

    /** 标准产品编号 */
    proNumber?: string;

    /** 供应商产品信息 */
    proSupplierInfo?: string;

    /** 销售商已收数量 */
    recipientReceivedAmount?: number;

    /** 0=未拒单,1=已拒单, 默认为0 */
    refused?: number;

    /** 拒单备注 */
    refusedMark?: string;

    /** 拒单备注类型 */
    refusedMarkType?: string;

    /** 回复交期(工厂确认的交货日期) */
    replyDeliveryDate?: string;

    /** SKU ID */
    skuId?: number;

    /** SKU信息 */
    skuInfo?: string;

    /** 源单中的行标识 */
    sourceLineUnique?: string;

    /** 源单的行备注 */
    sourceSkuMark?: string;

    /** 补单备注 */
    supplementMark?: string;

    /** 补单备注类型 */
    supplementMarkType?: string;

    /** 已补单数量 */
    supplementedAmount?: number;

    /** 供应商产品ID */
    supplierProId?: number;

    /** 修改的交期 */
    twoDeliveryDate?: string;

    /** 修改交期备注 */
    twoMark?: string;

    /** 修改交期备注类型 */
    twoMarkType?: string;

    /** TheRepairOrderID */
    workorderId?: number;
  }
}

declare namespace API {
  /**
   * 用户相关的API
   */
  export namespace account {
    /**
     * 添加员工
     * /account/addStaff
     */
    export namespace addStaff {
      export class Params {
        /** 账号 */
        account?: string;
        /** createTime */
        createTime?: string;
        /** 部门id */
        deptId?: number;
        /** 所属部门 */
        deptName?: string;
        /** 邮箱 */
        email?: string;
        /** 用户id */
        id?: number;
        /** 是否锁定，1=正常,2=锁定 */
        isLock?: number;
        /** 是否管理员,1=是，2=否 */
        master?: number;
        /** 用户姓名 */
        name?: string;
        /** 是否只能在一家公司,1=是,2=否 */
        onlyOneCompany?: number;
        /** 最后修改人员 */
        operator?: string;
        /** 密码 */
        password?: string;
        /** 办公电话 */
        phone?: string;
        /** 权限值（数组）例：['a','b'] */
        authValJson?: string;
        /** 企业id */
        companyId?: number;
        /** 角色名称 */
        roleName?: string;
        /** updateTime */
        updateTime?: string;
        /** 手机号,系统唯一 */
        telephone?: string;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新建员工
     * /account/create
     */
    export namespace add {
      export class Params {
        /** 账号 */
        account?: string;
        /** createTime */
        createTime?: string;
        /** 部门id */
        deptId?: number;
        /** 所属部门 */
        deptName?: string;
        /** 邮箱 */
        email?: string;
        /** 用户id */
        id?: number;
        /** 是否锁定，1=正常,2=锁定 */
        isLock?: number;
        /** 是否管理员,1=是，2=否 */
        master?: number;
        /** 用户姓名 */
        name?: string;
        /** 是否只能在一家公司,1=是,2=否 */
        onlyOneCompany?: number;
        /** 最后修改人员 */
        operator?: string;
        /** 密码 */
        password?: string;
        /** 办公电话 */
        phone?: string;
        /** 权限值（数组）例：['a','b'] */
        authValJson?: string;
        /** 企业id */
        companyId?: number;
        /** 角色名称 */
        roleName?: string;
        /** updateTime */
        updateTime?: string;
        /** 手机号,系统唯一 */
        telephone?: string;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查看所有的用户列表
     * /account/getAllUserList
     */
    export namespace getAllUserList {
      export class Params {
        /** 页码 */
        page?: number;
        /** 搜索字段 */
        search?: string;
        /** 条数 */
        size?: number;
      }

      export type Response = defs.PageDTO<defs.AccountTable>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查看员工详情
     * /account/getStaff
     */
    export namespace getStaff {
      export class Params {
        /** 用户id */
        uid?: number;
      }

      export type Response = defs.AccountTable;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查看登录用户企业里员工列表
     * /account/getUserList
     */
    export namespace getUserList {
      export class Params {
        /** 页码 */
        page?: number;
        /** 搜索字段 */
        search?: string;
        /** 条数 */
        size?: number;
        /** 状态,是否禁用，1=启用,2=禁用 */
        state?: number;
      }

      export type Response = defs.PageDTO<defs.AccountTable>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 登录
     * /account/login
     */
    export namespace login {
      export class Params {
        /** 账号 */
        loginName?: string;
        /** 密码 */
        password?: string;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 登录(选择公司)
     * /account/loginByCompany
     */
    export namespace loginByCompany {
      export class Params {
        /** 公司id */
        companyId?: number;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 退出登录
     * /account/logout
     */
    export namespace logout {
      export class Params {}

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查看员工(自己)详情
     * /account/myInfo
     */
    export namespace myInfo {
      export class Params {}

      export type Response = defs.AccountTable;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 编辑登录用户（自己）的信息
     * /account/myUpdate
     */
    export namespace update {
      export class Params {
        /** 账号 */
        account?: string;
        /** createTime */
        createTime?: string;
        /** 邮箱 */
        email?: string;
        /** 用户id */
        id?: number;
        /** 是否锁定，1=正常,2=锁定 */
        isLock?: number;
        /** 用户姓名 */
        name?: string;
        /** 新密码 */
        newPassword?: string;
        /** 是否只能在一家公司,1=是,2=否 */
        onlyOneCompany?: number;
        /** 最后修改人员 */
        operator?: string;
        /** 密码 */
        password?: string;
        /** 办公电话 */
        phone?: string;
        /** 手机号,系统唯一 */
        telephone?: string;
        /** updateTime */
        updateTime?: string;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 设置/取消管理员
     * /account/setAdmin
     */
    export namespace setAdmin {
      export class Params {
        /** 设置管理员：true（设置）  false（取消） */
        is?: string;
        /** 用户id */
        uid?: number;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 编辑员工
     * /account/update
     */
    export namespace postUpdate {
      export class Params {
        /** 账号 */
        account?: string;
        /** createTime */
        createTime?: string;
        /** 部门id */
        deptId?: number;
        /** 所属部门 */
        deptName?: string;
        /** 邮箱 */
        email?: string;
        /** 用户id */
        id?: number;
        /** 是否锁定，1=正常,2=锁定 */
        isLock?: number;
        /** 是否管理员,1=是，2=否 */
        master?: number;
        /** 用户姓名 */
        name?: string;
        /** 是否只能在一家公司,1=是,2=否 */
        onlyOneCompany?: number;
        /** 最后修改人员 */
        operator?: string;
        /** 密码 */
        password?: string;
        /** 办公电话 */
        phone?: string;
        /** 权限值（数组）例：['a','b'] */
        authValJson?: string;
        /** 企业id */
        companyId?: number;
        /** 角色名称 */
        roleName?: string;
        /** updateTime */
        updateTime?: string;
        /** 手机号,系统唯一 */
        telephone?: string;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 客单划单
   */
  export namespace agencyReceive {
    /**
     * 客单关单
     * /agency/receive/close
     */
    export namespace close {
      export class Params {
        /** 客单ID */
        bizId: number;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 客单划单列表
     * /agency/receive/list
     */
    export namespace list {
      export class Params {}

      export type Response = defs.PageDTO<defs.AgencyReceiveSourceOrderVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.AgencyReceivePagingParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 客单划单
     * /agency/receive/receive
     */
    export namespace receive {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.AgencyReceiveBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
        * 扫码
查询条码信息
        * /agency/receive/scan
        */
    export namespace barcodeScan {
      export class Params {
        /** 条码 */
        code: string;
      }

      export type Response = defs.ProductionOrderPrintReceiptsBarcodeObject;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
        * 扫码/TheRepairOrder号划单
根据条码/TheRepairOrder号查询TheRepairOrder信息,如果是条码号,则只显示条码中包含的SKU
        * /agency/receive/singleDetail
        */
    export namespace queryByBarCode {
      export class Params {
        /** TheRepairOrder号/条码 */
        code: string;
      }

      export type Response = defs.AgencyReceiveSingleWorkOrderVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 客单划单详情(标准模式)
     * /agency/receive/standardDetail
     */
    export namespace detailByBizId {
      export class Params {
        /** 客单ID */
        bizId: number;
      }

      export type Response = defs.AgencyReceiveStandardDetailVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 客单补单
     * /agency/receive/supplement
     */
    export namespace supplement {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.AgencyReceiveBo,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 权限相关的API
   */
  export namespace auth {
    /**
     * 添加
     * /auth/add
     */
    export namespace add {
      export class Params {
        /** 应用标识 */
        appName?: string;
        /** 权限说明 */
        authDesc?: string;
        /** 权限名称 */
        authName?: string;
        /** 类型,CATALOG=目录,MENU=菜单,AUTH=权限 */
        authType?: string;
        /** 权限值 */
        authVal?: string;
        /** createTime */
        createTime?: string;
        /** 最后修改人 */
        operator?: string;
        /** 父权限 */
        parentVal?: string;
        /** updateTime */
        updateTime?: string;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询企业的权限树
     * /auth/companyAuth
     */
    export namespace companyAuth {
      export class Params {
        /** 应用标识 */
        appName?: string;
        /** 企业id */
        companyId?: number;
      }

      export type Response = Array<defs.Tree<defs.AccessResourcesTable>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 删除
     * /auth/del
     */
    export namespace del {
      export class Params {
        /** 权限值 */
        val?: string;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 修改
     * /auth/edit
     */
    export namespace edit {
      export class Params {
        /** 应用标识 */
        appName?: string;
        /** 权限说明 */
        authDesc?: string;
        /** 权限名称 */
        authName?: string;
        /** 类型,CATALOG=目录,MENU=菜单,AUTH=权限 */
        authType?: string;
        /** 权限值 */
        authVal?: string;
        /** createTime */
        createTime?: string;
        /** 最后修改人 */
        operator?: string;
        /** 父权限 */
        parentVal?: string;
        /** updateTime */
        updateTime?: string;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询登录用户的权限
     * /auth/myAuth
     */
    export namespace myAuth {
      export class Params {}

      export type Response = Array<string>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询角色的权限树
     * /auth/roleAuth
     */
    export namespace roleAuth {
      export class Params {
        /** 角色id */
        roleId?: number;
      }

      export type Response = Array<defs.Tree<defs.AccessResourcesTable>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 保存企业的权限
     * /auth/saveCompanyAuth
     */
    export namespace saveCompanyAuth {
      export class Params {
        /** 应用标识 */
        appName?: string;
        /** 权限，用逗号分割 */
        auths?: string;
        /** 企业id */
        companyId?: number;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 保存角色的权限
     * /auth/saveRoleAuth
     */
    export namespace saveRoleAuth {
      export class Params {
        /** 权限，用逗号分割 */
        auths?: string;
        /** 角色id */
        roleId?: number;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 保存企业类型的权限
     * /auth/saveTypeAuth
     */
    export namespace saveTypeAuth {
      export class Params {
        /** 应用标识 */
        appName?: string;
        /** 权限，用逗号分割 */
        auths?: string;
        /** 企业类型 */
        type?: string;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询权限树
     * /auth/select
     */
    export namespace select {
      export class Params {
        /** appName */
        appName?: string;
      }

      export type Response = Array<defs.Tree<defs.AccessResourcesTable>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询企业类型的权限,带勾选
     * /auth/typeAuth
     */
    export namespace typeAuth {
      export class Params {
        /** 应用标识 */
        appName?: string;
        /** 企业类型 */
        type?: string;
      }

      export type Response = Array<defs.Tree<defs.AccessResourcesTable>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 工厂划单相关的API
   */
  export namespace bizFactoryDivideOrder {
    /**
     * 划单/部分划单
     * /factory_divide/divide
     */
    export namespace divide {
      export class Params {
        /** 划单数量 */
        amount?: number;
        /** 源单数据标识 */
        sourceId?: string;
        /** orderId */
        orderId?: number;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查看工厂划单详情
     * /factory_divide/get
     */
    export namespace get {
      export class Params {
        /** TheRepairOrderid */
        id?: number;
      }

      export type Response = object;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 获取工厂划单列表
     * /factory_divide/list
     */
    export namespace list {
      export class Params {
        /** 源单类型 */
        bizType?: string;
        /** 成色 */
        color?: string;
        /** 期望交期时间——结束 */
        deliveryDateEnd?: string;
        /** 期望交期时间——开始 */
        deliveryDateStart?: string;
        /** 划单状态 */
        divideStatus?: string;
        /** 下单时间——结束 */
        downDateEnd?: string;
        /** 下单时间——开始 */
        downDateStart?: string;
        /** 一级户名 */
        oneCompany?: number;
        /** 户名名称 */
        oneCompanyName?: string;
        /** 页码 */
        page?: number;
        /** 接单时间——结束 */
        receiveDateEnd?: string;
        /** 接单时间——开始 */
        receiveDateStart?: string;
        /** 回复交期 */
        replyDate?: string;
        /** 搜索字段 */
        search?: string;
        /** 条数 */
        size?: number;
        /** 1为接单升序,2为接单降序,3回复交期升序,4回复交期降序 */
        sort?: number;
        /** TheRepairOrder类型 */
        workType?: string;
      }

      export type Response = defs.PageDTO<defs.TheRepairOrder>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 扫码/工厂划单
     * /factory_divide/scan
     */
    export namespace scan {
      export class Params {
        /** 条码号 */
        barCode?: string;
        /** 详情扫码需要传TheRepairOrder号 */
        workNo?: string;
      }

      export type Response = object;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 收藏单据
   */
  export namespace bizFavorite {
    /**
     * 收藏单据
     * /favorite/add
     */
    export namespace addFavorite {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BizFavoriteInsertBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
        * 取消收藏
柜台单和客单都可以用这个接口删除收藏
        * /favorite/del
        */
    export namespace delFavorite {
      export class Params {
        /** bizId */
        bizId?: number;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
        * 修改收藏备注
如果备注内容为空,会设置默认值'无'
        * /favorite/update
        */
    export namespace updateFavorite {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BizFavoriteUpdateBo,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 投产单相关的API
   */
  export namespace bizLaunchOrder {
    /**
     * 批量投产
     * /launch/batchPut
     */
    export namespace batchPut {
      export class Params {
        /** 投产数量 */
        amount?: number;
        /** 投产备注 */
        remark?: string;
        /** 源单数据标识 */
        sourceId?: string;
        /** 源TheRepairOrderid */
        workorderId?: number;
        /** orderId */
        orderId?: number;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查看投产单详情
     * /launch/get
     */
    export namespace get {
      export class Params {
        /** TheRepairOrderid */
        id?: number;
      }

      export type Response = object;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 获取投产单列表
     * /launch/list
     */
    export namespace list {
      export class Params {
        /** 源订单类型：客单等 */
        bizType?: string;
        /** 成色 */
        color?: string;
        /** 下单时间——结束 */
        downDateEnd?: string;
        /** 下单时间——开始 */
        downDateStart?: string;
        /** 一级户名 */
        oneCompany?: number;
        /** 户名名称 */
        oneCompanyName?: string;
        /** TheRepairOrder类型,多个逗号分割 */
        orderTyp?: string;
        /** 页码 */
        page?: number;
        /** 投产状态,多个逗号分割 */
        putStatus?: string;
        /** 接单时间——结束 */
        receiveDateEnd?: string;
        /** 接单时间——开始 */
        receiveDateStart?: string;
        /** 搜索字段 */
        search?: string;
        /** 条数 */
        size?: number;
        /** 1为交期升序,2为交期将序,3为接单升序,4为接单将序 */
        sort?: number;
      }

      export type Response = defs.PageDTO<defs.TheRepairOrder>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 投产/部分投产
     * /launch/put
     */
    export namespace put {
      export class Params {
        /** 投产数量 */
        amount?: number;
        /** 投产备注 */
        remark?: string;
        /** 源单数据标识 */
        sourceId?: string;
        /** 源TheRepairOrderid */
        workorderId?: number;
        /** orderId */
        orderId?: number;
      }

      export type Response = number;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 流程相关的API
   */
  export namespace bizProcess {
    /**
     * 根据订单类型获取设置的流程
     * /bizprocess/get
     */
    export namespace get {
      export class Params {
        /** type */
        type?: string;
      }

      export type Response = defs.TheProcessObject;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新增/编辑流程
     * /bizprocess/save
     */
    export namespace saveProcess {
      export class Params {
        /** 单据类型 */
        bizType?: string;
        /** 公司ID */
        companyId?: number;
        /** 创建日期 */
        createTime?: string;
        /** nodeName */
        nodeName?: string;
        /** userId */
        userId?: number;
        /** userName */
        userName?: string;
        /** 最后操作人 */
        operator?: string;
        /** 审批流程 */
        processStep?: string;
        /** 最后更新时间 */
        updateTime?: string;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * ProductionOrder相关的API
   */
  export namespace bizProductNoticeOrder {
    /**
     * 导出ProductionOrder（详细版）
     * /product_notice/export
     */
    export namespace exporting {
      export class Params {
        /** 投产单id列表，用逗号分割 */
        ids?: number;
        /** 投产单号，单个导出需要 */
        no?: string;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 导出ProductionOrder（简易版）
     * /product_notice/exportSmall
     */
    export namespace exportSmall {
      export class Params {
        /** 投产单id列表，用逗号分割 */
        ids?: number;
        /** 投产单号，单个导出需要 */
        no?: string;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查看ProductionOrder详情
     * /product_notice/get
     */
    export namespace get {
      export class Params {
        /** 投产单id */
        id?: number;
      }

      export type Response = Array<defs.TheRepairOrderDetailsAGroup>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查看打印ProductionOrder详情
     * /product_notice/get2
     */
    export namespace get2 {
      export class Params {
        /** 投产单id */
        id?: number;
        /** TheRepairOrderid */
        orderId?: number;
      }

      export type Response = object;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 获取ProductionOrder列表
     * /product_notice/list
     */
    export namespace list {
      export class Params {
        /** 成色 */
        color?: string;
        /** 交期时间——结束 */
        deliveryDateEnd?: string;
        /** 交期时间——开始 */
        deliveryDateStart?: string;
        /** 下单时间——结束 */
        downDateEnd?: string;
        /** 下单时间——开始 */
        downDateStart?: string;
        /** 投产时间——结束 */
        launchDateEnd?: string;
        /** 投产时间——开始 */
        launchDateStart?: string;
        /** 一级户名 */
        oneCompany?: number;
        /** 户名名称 */
        oneCompanyName?: string;
        /** 页码 */
        page?: number;
        /** 搜索字段 */
        search?: string;
        /** 条数 */
        size?: number;
      }

      export type Response = defs.PageDTO<defs.ProductionOrder>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查看打印备料单详情
     * /product_notice/material
     */
    export namespace material {
      export class Params {
        /** 投产单id列表，用逗号分割 */
        ids?: number;
        /** 投料组名称 */
        material?: string;
      }

      export type Response = object;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 合并打印小票
     * /product_notice/mergePrint
     */
    export namespace mergePrint {
      export class Params {
        /** 生成条码的条数 */
        count?: number;
        /** 源订单Id（投产单Id） */
        poBizId?: number;
        /** SKU ID */
        skuIds?: Array<number>;
        /** 行标识（作业表的） */
        uniques?: Array<string>;
        /** true=该条码已使用过,false=该条码未被使用过 */
        used?: boolean;
        /** TheRepairOrderId */
        workOrderId?: number;
      }

      export type Response = Array<string>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 打印/补打小票/批量打印
     * /product_notice/print
     */
    export namespace print {
      export class Params {
        /** 生成条码的条数 */
        count?: number;
        /** 源订单Id（投产单Id） */
        poBizId?: number;
        /** 补打小票的原因 */
        remark?: string;
        /** SKU ID */
        skuIds?: Array<number>;
        /** 行标识（作业表的） */
        uniques?: Array<string>;
        /** true=该条码已使用过,false=该条码未被使用过 */
        used?: boolean;
        /** TheRepairOrderId */
        workOrderId?: number;
      }

      export type Response = Array<string>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 字印管理
   */
  export namespace bizSignet {
    /**
     * 字印下拉选,柜台单
     * /bizSignet/GDSelect
     */
    export namespace querySelectGD {
      export class Params {}

      export type Response = Array<defs.BizSignetListVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.GDSignetSelectParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 字印下拉选,客单
     * /bizSignet/KDSelect
     */
    export namespace querySelectKD {
      export class Params {}

      export type Response = Array<defs.BizSignetListVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.KDSignetSelectParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 删除字印, 可用于删除当前公司的任何字印
     * /bizSignet/delete
     */
    export namespace delSignet {
      export class Params {
        /** signetId */
        signetId?: number;
        /** id */
        '字印ID': number;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新增柜台单字印
     * /bizSignet/insertSignetGD
     */
    export namespace insertSignetGD {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.GDSignetInsertBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 新增客单字印
     * /bizSignet/insertSignetKD
     */
    export namespace insertSignetKD {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.KDSignetInsertBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 查询当前公司的柜台字印列表
     * /bizSignet/queryListGD
     */
    export namespace queryListGD {
      export class Params {
        /** signet */
        signet?: string;
        /** signet */
        '字印名称搜索字段'?: string;
      }

      export type Response = Array<defs.BizSignetListVo>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询当前公司的指定客户的字印列表
     * /bizSignet/queryListKD
     */
    export namespace queryListKD {
      export class Params {
        /** clientId */
        clientId?: string;
        /** signet */
        signet?: string;
        /** clientId */
        '二级客户的ID': string;
        /** signet */
        '字印名称搜索字段'?: string;
      }

      export type Response = Array<defs.BizSignetListVo>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 柜台单字印编辑
     * /bizSignet/updateGD
     */
    export namespace updateSignetGD {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.GDSignetUpdateBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 客单字印编辑
     * /bizSignet/updateKD
     */
    export namespace updateSignetKD {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.KDSignetUpdateBo,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * TheRepairOrder相关的API
   */
  export namespace bizWorkOrder {
    /**
     * 批量接单
     * /work_order/batchReceive
     */
    export namespace batchReceive {
      export class Params {
        /** 采购量(件数) */
        amount?: number;
        /** 产能分类 */
        capacityType?: string;
        /** 是否已关单，0=未关单,1=已关单 */
        closed?: number;
        /** 已划单(已交货)的数量 */
        deliveryAmount?: number;
        /** 差异备注 */
        diffMark?: string;
        /** 差异备注类型 */
        diffMarkType?: string;
        /** 花型 */
        flowerType?: string;
        /** 克重总数量 */
        gramWeight?: number;
        /** 单据行的唯一标识，全系统唯一，根据单据编号，产品ID,SKU ID 生成hash字符串 */
        lineUnique?: string;
        /** 已投产的数量 */
        lunchedAmount?: number;
        /** 标准产品信息 */
        proBaseInfo?: string;
        /** 产品品类 */
        proCatagory?: string;
        /** 标准产品ID */
        proId?: number;
        /** 标准产品编号 */
        proNumber?: string;
        /** 供应商产品信息 */
        proSupplierInfo?: string;
        /** 销售商已收数量 */
        recipientReceivedAmount?: number;
        /** 0=未拒单,1=已拒单, 默认为0 */
        refused?: number;
        /** 拒单备注 */
        refusedMark?: string;
        /** 拒单备注类型 */
        refusedMarkType?: string;
        /** 回复交期(工厂确认的交货日期) */
        replyDeliveryDate?: string;
        /** SKU ID */
        skuId?: number;
        /** SKU信息 */
        skuInfo?: string;
        /** 源单中的行标识 */
        sourceLineUnique?: string;
        /** 源单的行备注 */
        sourceSkuMark?: string;
        /** 补单备注 */
        supplementMark?: string;
        /** 补单备注类型 */
        supplementMarkType?: string;
        /** 已补单数量 */
        supplementedAmount?: number;
        /** 供应商产品ID */
        supplierProId?: number;
        /** 修改的交期 */
        twoDeliveryDate?: string;
        /** 修改交期备注 */
        twoMark?: string;
        /** 修改交期备注类型 */
        twoMarkType?: string;
        /** TheRepairOrderID */
        workorderId?: number;
        /** orderId */
        orderId?: number;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查看WorkOrderDetails
     * /work_order/get
     */
    export namespace get {
      export class Params {
        /** TheRepairOrderid */
        id?: number;
      }

      export type Response = Array<defs.TheRepairOrderDetailsAGroup>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查看TheRepairOrder头信息
     * /work_order/getOrder
     */
    export namespace getOrder {
      export class Params {
        /** TheRepairOrderid */
        id?: number;
        /** 作业id */
        operateId?: string;
      }

      export type Response = object;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 获取TheRepairOrder列表
     * /work_order/list
     */
    export namespace list {
      export class Params {
        /** 源订单类型：客单等 */
        bizType?: string;
        /** 成色 */
        color?: string;
        /** 交期时间——结束 */
        deliveryDateEnd?: string;
        /** 交期时间——开始 */
        deliveryDateStart?: string;
        /** 下单时间——结束 */
        downDateEnd?: string;
        /** 下单时间——开始 */
        downDateStart?: string;
        /** 一级户名 */
        oneCompany?: number;
        /** 户名名称 */
        oneCompanyName?: string;
        /** 订单状态 */
        orderStatus?: string;
        /** TheRepairOrder类型,多个逗号分割 */
        orderTyp?: string;
        /** 页码 */
        page?: number;
        /** 接单时间——结束 */
        receiveDateEnd?: string;
        /** 接单时间——开始 */
        receiveDateStart?: string;
        /** 搜索字段 */
        search?: string;
        /** 条数 */
        size?: number;
        /** 1为交期升序,2为交期将序 */
        sort?: number;
      }

      export type Response = defs.PageDTO<defs.TheRepairOrder>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 计算产能复核
     * /work_order/material
     */
    export namespace material {
      export class Params {
        /** TheRepairOrderid列表，用逗号分割 */
        ids?: number;
      }

      export type Response = object;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 接单
     * /work_order/receive
     */
    export namespace receive {
      export class Params {
        /** 采购量(件数) */
        amount?: number;
        /** 产能分类 */
        capacityType?: string;
        /** 是否已关单，0=未关单,1=已关单 */
        closed?: number;
        /** 已划单(已交货)的数量 */
        deliveryAmount?: number;
        /** 差异备注 */
        diffMark?: string;
        /** 差异备注类型 */
        diffMarkType?: string;
        /** 花型 */
        flowerType?: string;
        /** 克重总数量 */
        gramWeight?: number;
        /** 单据行的唯一标识，全系统唯一，根据单据编号，产品ID,SKU ID 生成hash字符串 */
        lineUnique?: string;
        /** 已投产的数量 */
        lunchedAmount?: number;
        /** 标准产品信息 */
        proBaseInfo?: string;
        /** 产品品类 */
        proCatagory?: string;
        /** 标准产品ID */
        proId?: number;
        /** 标准产品编号 */
        proNumber?: string;
        /** 供应商产品信息 */
        proSupplierInfo?: string;
        /** 销售商已收数量 */
        recipientReceivedAmount?: number;
        /** 0=未拒单,1=已拒单, 默认为0 */
        refused?: number;
        /** 拒单备注 */
        refusedMark?: string;
        /** 拒单备注类型 */
        refusedMarkType?: string;
        /** 回复交期(工厂确认的交货日期) */
        replyDeliveryDate?: string;
        /** SKU ID */
        skuId?: number;
        /** SKU信息 */
        skuInfo?: string;
        /** 源单中的行标识 */
        sourceLineUnique?: string;
        /** 源单的行备注 */
        sourceSkuMark?: string;
        /** 补单备注 */
        supplementMark?: string;
        /** 补单备注类型 */
        supplementMarkType?: string;
        /** 已补单数量 */
        supplementedAmount?: number;
        /** 供应商产品ID */
        supplierProId?: number;
        /** 修改的交期 */
        twoDeliveryDate?: string;
        /** 修改交期备注 */
        twoMark?: string;
        /** 修改交期备注类型 */
        twoMarkType?: string;
        /** TheRepairOrderID */
        workorderId?: number;
        /** orderId */
        orderId?: number;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 拒单
     * /work_order/reject
     */
    export namespace reject {
      export class Params {
        /** TheRepairOrderid */
        orderId?: number;
        /** 拒绝原因 */
        reason?: string;
        /** 拒绝备注 */
        remark?: string;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 统一回复交期
     * /work_order/unify
     */
    export namespace unify {
      export class Params {
        /** 交期时间 */
        delivery?: string;
        /** TheRepairOrderid */
        orderId?: number;
        /** 交期差异原因 */
        reason?: string;
        /** 交期差异备注 */
        remark?: string;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 订单看板公共接口
   */
  export namespace boardCommon {
    /**
     * 查询前五供应商（销售商）企业
     * /board/common/companyList
     */
    export namespace select {
      export class Params {
        /** 企业类型 */
        type?: string;
      }

      export type Response = Array<defs.EnterpriseTable>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
        * 销售订单看板下单人下拉选
该接口搜索当前销售商的TheRepairOrder中的源单下单人,如果不传任何搜索关键词，则搜索最近下过单的10个姓名
        * /board/common/orderPlacerSelectByRetailer
        */
    export namespace orderPlacerSelectByRetailer {
      export class Params {
        /** 搜索关键词,对订单的下单人进行模糊搜索 */
        keyword?: string;
      }

      export type Response = Array<string>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
        * 生产TheRepairOrder看板下单人下拉选
该接口搜索当前工厂的TheRepairOrder中的源单下单人,如果不传任何搜索关键词，则搜索最近下过单的10个姓名
        * /board/common/orderPlacerSelectBySupplier
        */
    export namespace orderPlacerSelectBySupplier {
      export class Params {
        /** 搜索关键词,对订单的下单人进行模糊搜索 */
        keyword?: string;
      }

      export type Response = Array<string>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 销售订单看板概览列表
     * /board/common/retailerOverview
     */
    export namespace queryRetailerOverview {
      export class Params {}

      export type Response = Array<defs.BaseOverviewVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.UniversalOverviewQueryParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 工厂异常总概
     * /board/common/supplierAggregate
     */
    export namespace querySupplierAggregate {
      export class Params {
        /** 结束日期,格式要求:'yyyy-MM-dd' */
        endDate: string;
        /** 起始日期,格式要求:'yyyy-MM-dd' */
        startDate: string;
      }

      export type Response = defs.StandardAggregateWrap;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 生产TheRepairOrder看板概览列表
     * /board/common/supplierOverview
     */
    export namespace querySupplierOverview {
      export class Params {}

      export type Response = Array<defs.BaseOverviewVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.UniversalOverviewQueryParamBo,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 客户相关的API
   */
  export namespace client {
    /**
     * 编辑客户资料
     * /client/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = number;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.CreateAndEditCustomerData,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 根据客户id查询客户
     * /client/get
     */
    export namespace get {
      export class Params {
        /** 客户id */
        clientId?: number;
      }

      export type Response = defs.CreateAndEditCustomerData;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询客户是否可以添加
     * /client/getAdd
     */
    export namespace getAdd {
      export class Params {
        /** 客户id */
        clientId?: number;
      }

      export type Response = boolean;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 导入客户excel
     * /client/import
     */
    export namespace importExcel {
      export class Params {
        /** 文件 */
        file?: ref;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询客户
     * /client/list
     */
    export namespace getList {
      export class Params {
        /** 所在区域 */
        businessArea?: string;
        /** 1 启用/2 禁用 */
        isLock?: number;
        /** 关联业务员id */
        memberId?: number;
        /** 页码 最小1 */
        pageIndex?: number;
        /** 每页行数 最小1 */
        pageSize?: number;
        /** 模糊搜索字段 */
        search?: string;
      }

      export type Response = defs.PageDTO<defs.CustomerDataTable>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新建客户资料
     * /client/save
     */
    export namespace save {
      export class Params {}

      export type Response = number;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.CreateAndEditCustomerData,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 基础设置
   */
  export namespace code {
    /**
     * 新增
     * /code/add
     */
    export namespace add {
      export class Params {
        /** 代号 */
        code: string;
        /** 成色 */
        conditi: string;
        /** 内容 */
        name: string;
        /** number */
        number?: number;
        /** 序号 */
        numner: number;
        /** 图片 */
        pic?: string;
        /** 状态: 1:启用 2:禁用 */
        status?: number;
        /** 如:MANUFACTURE_CRAFT , */
        type?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 导入基础数据
     * /code/import
     */
    export namespace importExcel {
      export class Params {
        /** 文件 */
        file?: ref;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询列表信息
     * /code/select
     */
    export namespace select {
      export class Params {
        /** 页码 */
        page: number;
        /** 行数 */
        rows: number;
        /** code名称 */
        search?: string;
        /** 状态: 1:启用 2:禁用 */
        status?: number;
        /** 如:MANUFACTURE_CRAFT , */
        type?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 下拉列表,类型
     * /code/typeList
     */
    export namespace selectTypeList {
      export class Params {}

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 更新
     * /code/update
     */
    export namespace update {
      export class Params {
        /** 代号 */
        code: string;
        /** 成色 */
        conditi: string;
        /** id */
        id?: number;
        /** 内容 */
        name: string;
        /** number */
        number?: number;
        /** 序号 */
        numner: number;
        /** 图片 */
        pic?: string;
        /** 状态: 1:启用 2:禁用 */
        status?: number;
        /** 如:MANUFACTURE_CRAFT , */
        type?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 企业相关的API
   */
  export namespace company {
    /**
     * 新建企业
     * /company/create
     */
    export namespace add {
      export class Params {
        /** 企业简称 */
        abbr?: string;
        /** 企业管理员账号 */
        account?: string;
        /** 公司地址 */
        address?: string;
        /** 所属地区 */
        area?: string;
        /** 企业名称，系统唯一 */
        companyName?: string;
        /** 企业类型，多个用逗号分割 */
        companyType?: string;
        /** 法人代表 */
        concat?: string;
        /** createTime */
        createTime?: string;
        /** 信用代码 */
        creditNum?: string;
        /** 企业id */
        id?: number;
        /** 状态, 1=启用，2=禁用 */
        isLock?: number;
        /** 营业执照结束时间 */
        licenseEnd?: string;
        /** 营业执照 */
        licenseNum?: string;
        /** 营业执照开始时间 */
        licenseStart?: string;
        /** log图片地址 */
        logUrl?: string;
        /** 最后修改人 */
        operator?: string;
        /** 最后修改人id */
        operatorId?: number;
        /** 企业管理员密码 */
        password?: string;
        /** 法人代表电话 */
        phone?: string;
        /** updateTime */
        updateTime?: string;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 编辑企业
     * /company/edit
     */
    export namespace update {
      export class Params {
        /** 企业简称 */
        abbr?: string;
        /** 企业管理员账号 */
        account?: string;
        /** 公司地址 */
        address?: string;
        /** 所属地区 */
        area?: string;
        /** 企业名称，系统唯一 */
        companyName?: string;
        /** 企业类型，多个用逗号分割 */
        companyType?: string;
        /** 法人代表 */
        concat?: string;
        /** createTime */
        createTime?: string;
        /** 信用代码 */
        creditNum?: string;
        /** 企业id */
        id?: number;
        /** 状态, 1=启用，2=禁用 */
        isLock?: number;
        /** 营业执照结束时间 */
        licenseEnd?: string;
        /** 营业执照 */
        licenseNum?: string;
        /** 营业执照开始时间 */
        licenseStart?: string;
        /** log图片地址 */
        logUrl?: string;
        /** 最后修改人 */
        operator?: string;
        /** 最后修改人id */
        operatorId?: number;
        /** 企业管理员密码 */
        password?: string;
        /** 法人代表电话 */
        phone?: string;
        /** updateTime */
        updateTime?: string;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询企业详情
     * /company/get
     */
    export namespace get {
      export class Params {
        /** 企业id */
        companyId?: number;
      }

      export type Response = defs.EnterpriseOperatingEntity;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 保存企业的应用
     * /company/saveApp
     */
    export namespace updateCompanyApp {
      export class Params {
        /** 应用列表，用逗号分割 */
        apps?: number;
        /** 企业id */
        companyId?: number;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询企业
     * /company/search
     */
    export namespace search {
      export class Params {
        /** 页码 */
        page?: number;
        /** 搜索字段 */
        search?: string;
        /** 条数 */
        size?: number;
      }

      export type Response = defs.PageDTO<defs.EnterpriseTable>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询企业的应用，是否勾选
     * /company/selectApp
     */
    export namespace selectApp {
      export class Params {
        /** 企业id */
        companyId?: number;
      }

      export type Response = Array<ObjectMap<string, ObjectMap>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询企业员工账号
     * /company/selectUserList
     */
    export namespace selectUserList {
      export class Params {
        /** 企业id */
        companyId?: number;
        /** 页码 */
        page?: number;
        /** 搜索字段 */
        search?: string;
        /** 条数 */
        size?: number;
      }

      export type Response = defs.PageDTO<defs.AccountTable>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 公司管理字典相关的API
   */
  export namespace companyCode {
    /**
     * 查询公司管理字典
     * /companyCode/list
     */
    export namespace getList {
      export class Params {
        /** 值,模糊查询 */
        codeName?: string;
        /** 类型: 公司类型 1, 所属区 2, 客户合同类型 3, 客户委托项目 4,工厂类型 5, 供应商合同类型 6, 供应商委托项目7 */
        codeType?: number;
      }

      export type Response = Array<defs.CompanyManagementDictionaryTables>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新建公司字典
     * /companyCode/save
     */
    export namespace save {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.CompanyManagementDictionaryTables,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 柜台相关的API
   */
  export namespace counter {
    /**
     * 查询柜台
     * /counter/list
     */
    export namespace getList {
      export class Params {
        /** 柜台名称 */
        counterName?: string;
        /** 1 启用/2 禁用 */
        lockStatus?: number;
      }

      export type Response = Array<defs.TheCounterTable>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新建或编辑柜台
     * /counter/save
     */
    export namespace save {
      export class Params {
        /** 成色（数组）例：['999','9999'] */
        color?: string;
        /** 企业id */
        companyId?: number;
        /** 柜台名称 */
        counterName?: string;
        /** createTime */
        createTime?: string;
        /** 柜台id */
        id?: number;
        /** 柜台领导id */
        leaderId?: number;
        /** 状态，1=启用，2=禁用 */
        lockStatus?: number;
        /** 柜台成员id（数组）例：[1,2,3] */
        memberIds?: string;
        /** 柜台成员个数 */
        memberNum?: number;
        /** 最后修改人 */
        operator?: string;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 柜台划单
   */
  export namespace counterReceive {
    /**
     * 柜台关单
     * /counter/receive/close
     */
    export namespace closeWorkorder {
      export class Params {
        /** TheRepairOrder行标识 */
        lineUnique: string;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 柜台划单列表查询
     * /counter/receive/list
     */
    export namespace queryList {
      export class Params {}

      export type Response = defs.PageDTO<defs.CounterReceiveVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.CounterReceivePagingParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 柜台划单
     * /counter/receive/receive
     */
    export namespace counterReceive {
      export class Params {
        /** 实收数量 */
        amount: number;
        /** TheRepairOrder行标识 */
        lineUnique: string;
        /** 划单备注 */
        mark?: string;
        /** 备注类型 */
        markType?: string;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 批量柜台划单
     * /counter/receive/receiveBatch
     */
    export namespace counterReceiveBatch {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: Array<defs.CounterReceiveItemBo>,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 部门相关的API
   */
  export namespace dept {
    /**
     * 查询部门
     * /dept/list
     */
    export namespace getList {
      export class Params {}

      export type Response = Array<defs.DivisionOperatingEntity>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新建或编辑部门
     * /dept/save
     */
    export namespace save {
      export class Params {
        /** 企业id */
        companyId?: number;
        /** createTime */
        createTime?: string;
        /** 部门地址 */
        deptAddress?: string;
        /** 部门名称 */
        deptName?: string;
        /** 部门id */
        id?: number;
        /** 状态，1=启用，2=禁用 */
        isLock?: number;
        /** 部门领导id */
        leaderId?: number;
        /** 最后修改人 */
        operator?: string;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 超量订单相关api
   */
  export namespace excessOrder {
    /**
     * 销售商WorkOrderDetails
     * /excessOrder/sale_detail
     */
    export namespace sale_detail {
      export class Params {
        /** TheRepairOrderid */
        bizId?: number;
      }

      export type Response = defs.ExcessOrderDetails;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 销售商查询列表
     * /excessOrder/sale_list
     */
    export namespace sale_list {
      export class Params {
        /** 字段填一级客户(销售商)ID */
        adverseCompanyId?: number;
        /** 字段填一级客户(销售商)名称 */
        adverseCompanyName?: string;
        /** bizBoardType */
        bizBoardType?: string;
        /** 订单类型  AGENCY 客单, OTC 柜台  */
        bizType?: string;
        /** 该字段填供应商ID */
        companyId?: number;
        /** 该字段填供应商名称 */
        companyName?: string;
        /** 时间类型  week 当前周, month 当前月 */
        dateType?: string;
        /** 结束日期,格式'yyyy-MM-dd' */
        endDate?: string;
        /** 搜索关键词,请根据销售订单看板和工厂订单看板需求使用! */
        keyword?: string;
        /** 页码,必须为大于等于1的整数 */
        pageIndex: number;
        /** 查询行数,必须为大于等于1的整数 */
        rows: number;
        /** 排序 1:期望交期升序  2:期望交期降序  3:回复交期升序  4:回复交期降序  5:数占比升序   6:数占比降序 */
        sortType?: number;
        /** 起始日期,格式'yyyy-MM-dd' */
        startDate?: string;
      }

      export type Response = defs.PageDTO<defs.UnanweredBoardItemVo>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 工厂WorkOrderDetails
     * /excessOrder/supplier_detail
     */
    export namespace supplier_detail {
      export class Params {
        /** TheRepairOrderid */
        bizId?: number;
      }

      export type Response = defs.ExcessOrderDetails;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 工厂查询列表
     * /excessOrder/supplier_list
     */
    export namespace supplier_list {
      export class Params {
        /** 字段填一级客户(销售商)ID */
        adverseCompanyId?: number;
        /** 字段填一级客户(销售商)名称 */
        adverseCompanyName?: string;
        /** bizBoardType */
        bizBoardType?: string;
        /** 订单类型  AGENCY 客单, OTC 柜台  */
        bizType?: string;
        /** 该字段填供应商ID */
        companyId?: number;
        /** 该字段填供应商名称 */
        companyName?: string;
        /** 时间类型  week 当前周, month 当前月 */
        dateType?: string;
        /** 结束日期,格式'yyyy-MM-dd' */
        endDate?: string;
        /** 搜索关键词,请根据销售订单看板和工厂订单看板需求使用! */
        keyword?: string;
        /** 页码,必须为大于等于1的整数 */
        pageIndex: number;
        /** 查询行数,必须为大于等于1的整数 */
        rows: number;
        /** 排序 1:期望交期升序  2:期望交期降序  3:回复交期升序  4:回复交期降序  5:数占比升序   6:数占比降序 */
        sortType?: number;
        /** 起始日期,格式'yyyy-MM-dd' */
        startDate?: string;
      }

      export type Response = defs.PageDTO<defs.UnanweredBoardItemVo>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 订单导出
   */
  export namespace exportBiz {
    /**
     * 正式订单导出
     * /export/exportFormal
     */
    export namespace exportFormal {
      export class Params {
        /** 订单id(必填) */
        bizId?: number;
        /** TheRepairOrderid(必填) */
        workOrderId?: number;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 获取正式订单导出验证码
     * /export/exportFormalCode
     */
    export namespace exportFormalCode {
      export class Params {
        /** 订单id(必填) */
        bizId?: number;
        /** TheRepairOrderid(必填) */
        workOrderId?: number;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 获取柜台单导出验证码
     * /export/exportGTCode
     */
    export namespace exportGTCode {
      export class Params {
        /** 订单id(必填) */
        bizId?: number;
        /** TheRepairOrderid(必填) */
        workOrderId?: number;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 获取客单导出验证码
     * /export/exportKDCode
     */
    export namespace exportKDCode {
      export class Params {
        /** 订单id(必填) */
        bizId?: number;
        /** TheRepairOrderid(必填) */
        workOrderId?: number;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 订单管理导出
     * /export/exportManage
     */
    export namespace exportManage {
      export class Params {
        /** 订单id(必填) */
        bizId?: number;
        /** TheRepairOrderid(必填) */
        workOrderId?: number;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 获取订单管理导出验证码
     * /export/exportManageCode
     */
    export namespace exportManageCode {
      export class Params {
        /** 订单id(必填) */
        bizId?: number;
        /** TheRepairOrderid(必填) */
        workOrderId?: number;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 工厂映射相关的API
   */
  export namespace factoryMapping {
    /**
     * 新增
     * /factory_mapping/add
     */
    export namespace add {
      export class Params {
        /** 鼎捷信号识别码 */
        identityCode?: string;
        /** 供应商企业id */
        supplierId?: number;
        /** 供应商企业名称 */
        supplierName?: string;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 删除
     * /factory_mapping/del
     */
    export namespace del {
      export class Params {
        /** 供应商企业id */
        supplierId?: number;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 编辑
     * /factory_mapping/edit
     */
    export namespace edit {
      export class Params {
        /** 鼎捷信号识别码 */
        identityCode?: string;
        /** 供应商企业id */
        supplierId?: number;
        /** 供应商企业名称 */
        supplierName?: string;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 列表
     * /factory_mapping/list
     */
    export namespace list {
      export class Params {}

      export type Response = Array<defs.FactoryMappingObject>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 工厂订单相关的API
   */
  export namespace factoryOrder {
    /**
     * 查看详情
     * /factory_order/get
     */
    export namespace get {
      export class Params {
        /** TheRepairOrderid */
        id?: number;
      }

      export type Response = object;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 列表
     * /factory_order/list
     */
    export namespace list {
      export class Params {
        /** 源单类型 */
        bizType?: string;
        /** 关单状态,0=未关单,1=已关单 */
        closeStatus?: number;
        /** 成色 */
        color?: string;
        /** 期望时间——结束 */
        deliveryDateEnd?: string;
        /** 期望时间——开始 */
        deliveryDateStart?: string;
        /** 划单状态 */
        divideStatus?: string;
        /** 下单时间——结束 */
        downDateEnd?: string;
        /** 下单时间——开始 */
        downDateStart?: string;
        /** 一级户名 */
        oneCompany?: number;
        /** 户名名称 */
        oneCompanyName?: string;
        /** 接单(TheRepairOrder)状态 */
        orderStatus?: string;
        /** TheRepairOrder类型,多个逗号分割 */
        orderType?: string;
        /** 页码 */
        page?: number;
        /** 投产状态,多个逗号分割 */
        putStatus?: string;
        /** 接单时间——结束 */
        receiveDateEnd?: string;
        /** 接单时间——开始 */
        receiveDateStart?: string;
        /** 搜索字段 */
        search?: string;
        /** 条数 */
        size?: number;
      }

      export type Response = defs.PageDTO<defs.TheRepairOrder>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 修改交期
     * /factory_order/receive
     */
    export namespace receive {
      export class Params {
        /** 采购量(件数) */
        amount?: number;
        /** 产能分类 */
        capacityType?: string;
        /** 是否已关单，0=未关单,1=已关单 */
        closed?: number;
        /** 已划单(已交货)的数量 */
        deliveryAmount?: number;
        /** 差异备注 */
        diffMark?: string;
        /** 差异备注类型 */
        diffMarkType?: string;
        /** 花型 */
        flowerType?: string;
        /** 克重总数量 */
        gramWeight?: number;
        /** 单据行的唯一标识，全系统唯一，根据单据编号，产品ID,SKU ID 生成hash字符串 */
        lineUnique?: string;
        /** 已投产的数量 */
        lunchedAmount?: number;
        /** 标准产品信息 */
        proBaseInfo?: string;
        /** 产品品类 */
        proCatagory?: string;
        /** 标准产品ID */
        proId?: number;
        /** 标准产品编号 */
        proNumber?: string;
        /** 供应商产品信息 */
        proSupplierInfo?: string;
        /** 销售商已收数量 */
        recipientReceivedAmount?: number;
        /** 0=未拒单,1=已拒单, 默认为0 */
        refused?: number;
        /** 拒单备注 */
        refusedMark?: string;
        /** 拒单备注类型 */
        refusedMarkType?: string;
        /** 回复交期(工厂确认的交货日期) */
        replyDeliveryDate?: string;
        /** SKU ID */
        skuId?: number;
        /** SKU信息 */
        skuInfo?: string;
        /** 源单中的行标识 */
        sourceLineUnique?: string;
        /** 源单的行备注 */
        sourceSkuMark?: string;
        /** 补单备注 */
        supplementMark?: string;
        /** 补单备注类型 */
        supplementMarkType?: string;
        /** 已补单数量 */
        supplementedAmount?: number;
        /** 供应商产品ID */
        supplierProId?: number;
        /** 修改的交期 */
        twoDeliveryDate?: string;
        /** 修改交期备注 */
        twoMark?: string;
        /** 修改交期备注类型 */
        twoMarkType?: string;
        /** TheRepairOrderID */
        workorderId?: number;
        /** orderId */
        orderId?: number;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 订单审批相关的API
   */
  export namespace formalBizApprove {
    /**
     * 订单审批通过
     * /formalBizApprove/approve
     */
    export namespace approve {
      export class Params {
        /** 订单id */
        bizId?: number;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据订单id查询审批流程
     * /formalBizApprove/getOrderProcessRecord
     */
    export namespace getOrderProcessRecord {
      export class Params {
        /** 订单id */
        bizId?: number;
      }

      export type Response = object;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 订单审批驳回
     * /formalBizApprove/reject
     */
    export namespace reject {
      export class Params {
        /** 订单id */
        bizId?: number;
        /** 驳回备注 */
        rejectReason?: string;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 金料调度相关的API
   */
  export namespace goldManage {
    /**
     * 列表（合计自己算）
     * /gold_manage/list
     */
    export namespace list {
      export class Params {}

      export type Response = Array<defs.GoldIsSchedulingObjects>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 更新盘点数据
     * /gold_manage/update
     */
    export namespace update {
      export class Params {
        /** appId */
        appId?: string;
        /** goldStr */
        goldStr?: string;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 下拉相关的API
   */
  export namespace lower {
    /**
     * 应用标识
     * /lower/appName
     */
    export namespace appName {
      export class Params {}

      export type Response = Array<ObjectMap<string, ObjectMap>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据企业查询可用应用
     * /lower/companyApp
     */
    export namespace companyApp {
      export class Params {
        /** 企业id */
        companyId?: number;
      }

      export type Response = Array<ObjectMap<string, ObjectMap>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 企业类型
     * /lower/companyType
     */
    export namespace getList {
      export class Params {}

      export type Response = Array<ObjectMap<string, ObjectMap>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据企业类型查询可用应用
     * /lower/companyTypeApp
     */
    export namespace companyTypeApp {
      export class Params {
        /** 企业类型 */
        type?: string;
      }

      export type Response = Array<ObjectMap<string, ObjectMap>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询登录用户所属企业
     * /lower/myCompany
     */
    export namespace myCompany {
      export class Params {}

      export type Response = Array<ObjectMap<string, ObjectMap>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据登录用户查询可用应用
     * /lower/myCompanyApp
     */
    export namespace myCompanyApp {
      export class Params {}

      export type Response = Array<ObjectMap<string, ObjectMap>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询登录用户企业的柜台
     * /lower/myCompanyCounter
     */
    export namespace myCompanyCounter {
      export class Params {
        /** 只查看自己的客户：true(是)  */
        isMy?: string;
        /** 搜索字段 */
        search?: string;
      }

      export type Response = Array<ObjectMap<string, ObjectMap>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询登录用户企业的客户
     * /lower/myCompanyCus
     */
    export namespace myCompanyCus {
      export class Params {
        /** 只查看自己的客户：true(是)  */
        isMy?: string;
        /** 搜索字段 */
        search?: string;
      }

      export type Response = Array<ObjectMap<string, ObjectMap>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询登录用户的企业的应用里的角色
     * /lower/myCompanyRole
     */
    export namespace myCompanyRole {
      export class Params {
        /** appName */
        appName?: string;
      }

      export type Response = Array<ObjectMap<string, ObjectMap>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询特定类型的企业
     * /lower/select
     */
    export namespace select {
      export class Params {
        /** 搜索字段 */
        search?: string;
        /** 企业类型 */
        type?: string;
      }

      export type Response = Array<defs.EnterpriseTable>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 料组
   */
  export namespace materialGroup {
    /**
     * 新增料组
     * /materialGroup/add
     */
    export namespace add {
      export class Params {
        /** 料组名称 */
        name: string;
        /** 状态: 1:启用 2:禁勇 */
        status: number;
        /** 供应商id(多个供应商则以逗号隔开) */
        supplierId: string;
        /** 供应商名称(多个供应商则以逗号隔开) */
        supplierName: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 获取料组数据
     * /materialGroup/get
     */
    export namespace updateStatus {
      export class Params {
        /** id */
        id: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询列表信息
     * /materialGroup/select
     */
    export namespace select {
      export class Params {
        /** 页码 */
        page: number;
        /** 行数 */
        rows: number;
        /** 料组名称 */
        search?: string;
        /** 状态: 1:启用 2:禁勇 */
        status?: number;
        /** supplier */
        supplier?: string;
        /** 供应商id(多个供应商则以逗号隔开) */
        supplierId?: string;
        /** 供应商名称(多个供应商则以逗号隔开) */
        supplierName?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询特定类型的企业
     * /materialGroup/selectCompanyId
     */
    export namespace postSelectCompanyId {
      export class Params {
        /** search */
        search?: string;
        /** 企业类型: SUPPLIER:供应商 ,SALE:销售商   */
        type?: string;
      }

      export type Response = Array<defs.EnterpriseTable>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 更新料组
     * /materialGroup/update
     */
    export namespace update {
      export class Params {
        /** id */
        id: string;
        /** 料组名称 */
        name: string;
        /** 状态: 1:启用 2:禁勇 */
        status: number;
        /** 供应商id(多个供应商则以逗号隔开) */
        supplierId: string;
        /** 供应商名称(多个供应商则以逗号隔开) */
        supplierName: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 更新料组状态
     * /materialGroup/updateStatus
     */
    export namespace postUpdateStatus {
      export class Params {
        /** id */
        id: string;
        /** 状态: 1:启用 2:禁勇 */
        status: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 未关订单相关api
   */
  export namespace openBillOrder {
    /**
     * 销售商WorkOrderDetails
     * /openBillOrder/sale_detail
     */
    export namespace sale_detail {
      export class Params {
        /** TheRepairOrderid */
        bizId?: number;
      }

      export type Response = defs.NotCloseTheOrderDetails;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 销售商查询列表
     * /openBillOrder/sale_list
     */
    export namespace sale_list {
      export class Params {
        /** 字段填一级客户(销售商)ID */
        adverseCompanyId?: number;
        /** 字段填一级客户(销售商)名称 */
        adverseCompanyName?: string;
        /** bizBoardType */
        bizBoardType?: string;
        /** 订单类型  AGENCY 客单, OTC 柜台  */
        bizType?: string;
        /** 该字段填供应商ID */
        companyId?: number;
        /** 该字段填供应商名称 */
        companyName?: string;
        /** 时间类型  week 当前周, month 当前月 */
        dateType?: string;
        /** 结束日期,格式'yyyy-MM-dd' */
        endDate?: string;
        /** 搜索关键词,请根据销售订单看板和工厂订单看板需求使用! */
        keyword?: string;
        /** 页码,必须为大于等于1的整数 */
        pageIndex: number;
        /** 查询行数,必须为大于等于1的整数 */
        rows: number;
        /** 排序 1:期望交期升序  2:期望交期降序  3:回复交期升序  4:回复交期降序  5:数占比升序   6:数占比降序 */
        sortType?: number;
        /** 起始日期,格式'yyyy-MM-dd' */
        startDate?: string;
      }

      export type Response = defs.PageDTO<defs.UnanweredBoardItemVo>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 工厂WorkOrderDetails
     * /openBillOrder/supplier_detail
     */
    export namespace supplier_detail {
      export class Params {
        /** TheRepairOrderid */
        bizId?: number;
      }

      export type Response = defs.NotCloseTheOrderDetails;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 工厂查询列表
     * /openBillOrder/supplier_list
     */
    export namespace supplier_list {
      export class Params {
        /** 字段填一级客户(销售商)ID */
        adverseCompanyId?: number;
        /** 字段填一级客户(销售商)名称 */
        adverseCompanyName?: string;
        /** bizBoardType */
        bizBoardType?: string;
        /** 订单类型  AGENCY 客单, OTC 柜台  */
        bizType?: string;
        /** 该字段填供应商ID */
        companyId?: number;
        /** 该字段填供应商名称 */
        companyName?: string;
        /** 时间类型  week 当前周, month 当前月 */
        dateType?: string;
        /** 结束日期,格式'yyyy-MM-dd' */
        endDate?: string;
        /** 搜索关键词,请根据销售订单看板和工厂订单看板需求使用! */
        keyword?: string;
        /** 页码,必须为大于等于1的整数 */
        pageIndex: number;
        /** 查询行数,必须为大于等于1的整数 */
        rows: number;
        /** 排序 1:期望交期升序  2:期望交期降序  3:回复交期升序  4:回复交期降序  5:数占比升序   6:数占比降序 */
        sortType?: number;
        /** 起始日期,格式'yyyy-MM-dd' */
        startDate?: string;
      }

      export type Response = defs.PageDTO<defs.UnanweredBoardItemVo>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 订单数据查看产品
   */
  export namespace orderPro {
    /**
     * 新增标签
     * /ordrePro/addLabel
     */
    export namespace addlabel {
      export class Params {
        /** 标签名 */
        label?: string;
        /** 产品id */
        proId?: string;
      }

      export type Response = boolean;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询产品列表
     * /ordrePro/select
     */
    export namespace select {
      export class Params {}

      export type Response = defs.PageDTO<
        defs.PreliminaryPoBizDetailVoProSearchModel
      >;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.ProSearchBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 查询code列表
     * /ordrePro/selectCode
     */
    export namespace selectCode {
      export class Params {
        /** code:BRACELET_TYPE (链扣类型) MANUFACTURE_CRAFT (制造工艺) SURFACE_CRAFT (表面工艺)  PATTERN_TYPE )(花型) CONDITI_TYPE(成色) ONE_CODE(品类)  OPEN_TYPE(开口类型) TAB_CODE(标签) */
        code?: string;
        /** 名称 */
        search?: string;
        /** 是否需要禁用 非启用状态数据 1:禁用 2:不禁用  (产品列表取值(请选择2)) */
        type?: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询特定类型的企业
     * /ordrePro/selectCompanyId
     */
    export namespace selectCompanyId {
      export class Params {
        /** search */
        search?: string;
        /** 企业类型: SUPPLIER:供应商 ,SALE:销售商   */
        type?: string;
      }

      export type Response = Array<defs.EnterpriseTable>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询款式描述列表
     * /ordrePro/selectStyle
     */
    export namespace selectStyle {
      export class Params {
        /** 制造code */
        manufacture?: string;
        /** 品类code */
        one?: string;
        /** 名称 */
        search?: string;
        /** 是否需要禁用 非启用状态数据 1:禁用 2:不禁用  (产品列表取值(请选择2)) */
        type?: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 逾期订单
   */
  export namespace overdueBoard {
    /**
     * 销售订单看板查看逾期订单详情
     * /overdue/detailByRetailer
     */
    export namespace detailByRetailer {
      export class Params {
        /** bizId */
        bizId?: number;
      }

      export type Response = defs.OverdueBoardDetailVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 生产TheRepairOrder看板查看逾期订单详情
     * /overdue/detailBySupplier
     */
    export namespace detailBySupplier {
      export class Params {
        /** bizId */
        bizId?: number;
      }

      export type Response = defs.OverdueBoardDetailVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 销售订单看板查看逾期订单列表
     * /overdue/listByRetailer
     */
    export namespace queryListByRetailer {
      export class Params {}

      export type Response = defs.PageDTO<defs.OverdueBoardItemVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.OverdueBoardListParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 生产TheRepairOrder看板查看逾期订单列表
     * /overdue/listBySupplier
     */
    export namespace queryListBySupplier {
      export class Params {}

      export type Response = defs.PageDTO<defs.OverdueBoardItemVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.OverdueBoardListParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 销售订单看板查看逾期订单概览
     * /overdue/overviewByRetailer
     */
    export namespace queryOverdueOverviewByRetailer {
      export class Params {}

      export type Response = defs.BaseOverviewVo;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.UniversalOverviewQueryParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 生产TheRepairOrder看板查看逾期订单概览
     * /overdue/overviewBySupplier
     */
    export namespace queryOverdueOverviewBySupplier {
      export class Params {}

      export type Response = defs.BaseOverviewVo;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.UniversalOverviewQueryParamBo,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 正式订单
   */
  export namespace poBiz {
    /**
     * 订单审核编辑
     * /pobiz/editApproveBizPo
     */
    export namespace editApproveBizPo {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.PoBizUpdateBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 订单管理编辑
     * /pobiz/editFormalBizPo
     */
    export namespace editFormalBizPo {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.PoBizUpdateBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 柜台单管理编辑
     * /pobiz/editGTManageBizPo
     */
    export namespace editGTManageBizPo {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.PoBizUpdateBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 客单管理编辑
     * /pobiz/editKDManageBizPo
     */
    export namespace editKDManageBizPo {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.PoBizUpdateBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 历史柜台单搜索
     * /pobiz/historicalGD
     */
    export namespace queryHistoricalGD {
      export class Params {}

      export type Response = defs.PageDTO<defs.HistoricalPoVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.HistoricalPoSearchBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 历史客单搜索
     * /pobiz/historicalKD
     */
    export namespace queryHistoricalKD {
      export class Params {}

      export type Response = defs.PageDTO<defs.HistoricalPoVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.HistoricalPoSearchBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 根据订单id查询 订单审核列表的详情(待审核,审核驳回都用这个)
     * /pobiz/queryApproveBizPoDetail
     */
    export namespace queryApproveBizPoDetail {
      export class Params {
        /** 订单id */
        bizId?: number;
        /** 时间类型 时间类型(WEEK:周  MONTH:月  SEASON:季) */
        dateType?: string;
        /** 月 */
        month?: number;
        /** 季 */
        quarter?: number;
        /** 周 */
        week?: number;
        /** 年 */
        year?: number;
      }

      export type Response = defs.FormalPoBizDetailVoStandard;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
        * 订单审核列表查询
订单审核列表查询
        * /pobiz/queryApproveBizPoList
        */
    export namespace queryApproveBizPoList {
      export class Params {}

      export type Response = defs.PageDTO<defs.PoBizListVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BizPagingParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 业务状态列表(正式订单)
     * /pobiz/queryBizStatus
     */
    export namespace queryBizStatusList {
      export class Params {}

      export type Response = Array<defs.PoStatusVo>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据订单id查询客单管理/柜台单管理的详情(待审核,审核驳回都用这个)
     * /pobiz/queryBizTypeMangeDetail
     */
    export namespace queryBizTypeMangeDetail {
      export class Params {
        /** 订单id */
        bizId?: number;
        /** 时间类型 时间类型(WEEK:周  MONTH:月  SEASON:季) */
        dateType?: string;
        /** 月 */
        month?: number;
        /** 季 */
        quarter?: number;
        /** 周 */
        week?: number;
        /** 年 */
        year?: number;
      }

      export type Response = defs.FormalPoBizDetailVoStandard;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据订单id查询正式订单/订单管理的详情(已审核用这个)
     * /pobiz/queryDetail
     */
    export namespace queryDetail {
      export class Params {
        /** 订单id */
        bizId?: number;
      }

      export type Response = defs.PoBizFactoryBizVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据TheRepairOrderid查询WorkOrderDetails(已审核用这个)
     * /pobiz/queryFactoryDetail
     */
    export namespace queryFactoryDetail {
      export class Params {
        /** TheRepairOrderid */
        workOrderId?: number;
      }

      export type Response = defs.PoBizDetailFactoryBizVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据订单id查询正式订单的详情(待审核,审核驳回都用这个)
     * /pobiz/queryFormalBizDetail
     */
    export namespace queryFormalBizDetail {
      export class Params {
        /** 订单id */
        bizId?: number;
        /** 时间类型 时间类型(WEEK:周  MONTH:月  SEASON:季) */
        dateType?: string;
        /** 月 */
        month?: number;
        /** 季 */
        quarter?: number;
        /** 周 */
        week?: number;
        /** 年 */
        year?: number;
      }

      export type Response = defs.FormalPoBizDetailVoStandard;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
        * 正式订单列表查询
查询当前登录者创建的订单
        * /pobiz/queryFormalPoList
        */
    export namespace queryFormalPoList {
      export class Params {}

      export type Response = defs.PageDTO<defs.PoBizListVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.FormalPoPagingParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
        * 柜台单管理列表查询
柜台单管理默认只查询当前登录用户所管柜台下的柜台单
        * /pobiz/queryGTManagePoList
        */
    export namespace queryGTManagePoList {
      export class Params {}

      export type Response = defs.PageDTO<defs.PoBizListVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BizPagingParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 根据历史订单id和新订单id查询柜台订单详情,以及加入新订单sku的数量
     * /pobiz/queryHistoryGTBizDetail
     */
    export namespace queryHistoryGTBizDetail {
      export class Params {
        /** 时间类型 时间类型(WEEK:周  MONTH:月  SEASON:季) */
        dateType?: string;
        /** 历史订单id */
        historyBizId?: number;
        /** 月 */
        month?: number;
        /** 新订单id */
        newBizId?: number;
        /** 季 */
        quarter?: number;
        /** 周 */
        week?: number;
        /** 年 */
        year?: number;
      }

      export type Response = defs.PreliminaryPoBizDetailVoStandard;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据历史订单id和新订单id查询客单订单详情,以及加入新订单sku的数量
     * /pobiz/queryHistoryKDBizDetail
     */
    export namespace queryHistoryKDBizDetail {
      export class Params {
        /** 时间类型 时间类型(WEEK:周  MONTH:月  SEASON:季) */
        dateType?: string;
        /** 历史订单id */
        historyBizId?: number;
        /** 月 */
        month?: number;
        /** 新订单id */
        newBizId?: number;
        /** 季 */
        quarter?: number;
        /** 周 */
        week?: number;
        /** 年 */
        year?: number;
      }

      export type Response = defs.PreliminaryPoBizDetailVoStandard;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
        * 客单管理列表查询
客单管理默认只查询当前登录用户所管辖区域下二级户名的客单
        * /pobiz/queryKDManagePoList
        */
    export namespace queryKDManagePoList {
      export class Params {}

      export type Response = defs.PageDTO<defs.PoBizListVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BizPagingParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 根据订单id查询客单管理/柜台单管理的详情(已审核用这个)
     * /pobiz/queryManageDetail
     */
    export namespace queryManageDetail {
      export class Params {
        /** 订单id */
        bizId?: number;
      }

      export type Response = defs.PoBizFactoryBizVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据TheRepairOrderid查询客单/柜台单WorkOrderDetails(已审核用这个)
     * /pobiz/queryManageFactoryDetail
     */
    export namespace queryManageFactoryDetail {
      export class Params {
        /** TheRepairOrderid */
        workOrderId?: number;
      }

      export type Response = defs.PoBizDetailFactoryBizVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据订单id查询正式订单管理的详情(待审核,审核驳回都用这个)
     * /pobiz/queryMangeBizDetail
     */
    export namespace queryMangeBizDetail {
      export class Params {
        /** 订单id */
        bizId?: number;
        /** 时间类型 时间类型(WEEK:周  MONTH:月  SEASON:季) */
        dateType?: string;
        /** 月 */
        month?: number;
        /** 季 */
        quarter?: number;
        /** 周 */
        week?: number;
        /** 年 */
        year?: number;
      }

      export type Response = defs.FormalPoBizDetailVoStandard;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
        * 订单管理列表查询
查询当前公司所有的正式订单
        * /pobiz/queryPoManageList
        */
    export namespace queryPoManageList {
      export class Params {}

      export type Response = defs.PageDTO<defs.PoBizListVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BizPagingParamBo,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 预订单相关的接口
   */
  export namespace preliminaryPoBiz {
    /**
     * 创建预订单-柜单(只创建单头)
     * /preliminary/pobiz/createGT
     */
    export namespace createGTPoBiz {
      export class Params {}

      export type Response = number;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.PoBizInsertBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 创建预订单-客单(只创建单头)
     * /preliminary/pobiz/createKD
     */
    export namespace createKDPoBiz {
      export class Params {}

      export type Response = number;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.PoBizInsertBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 根据订单id删除预订单
     * /preliminary/pobiz/deleteBizPo
     */
    export namespace deleteBizPo {
      export class Params {
        /** 订单id */
        bizId?: number;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 编辑柜台
     * /preliminary/pobiz/editGT
     */
    export namespace editGT {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.PreliminaryPoBizUpdateBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 编辑客单
     * /preliminary/pobiz/editKD
     */
    export namespace editKD {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.PreliminaryPoBizUpdateBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 查询订单所有的状态
     * /preliminary/pobiz/getAllStatus
     */
    export namespace queryStatusList {
      export class Params {}

      export type Response = Array<defs.PoStatusVo>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据订单id查询单头
     * /preliminary/pobiz/queryBizPo
     */
    export namespace queryBizPo {
      export class Params {
        /** 订单id */
        bizId?: number;
      }

      export type Response = defs.BizPo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查看预订单详情
     * /preliminary/pobiz/queryBizPoDetail
     */
    export namespace queryBizPoDetail {
      export class Params {
        /** 订单id */
        bizId?: number;
        /** 时间类型 时间类型(WEEK:周  MONTH:月  SEASON:季) */
        dateType?: string;
        /** 月 */
        month?: number;
        /** 季 */
        quarter?: number;
        /** 周 */
        week?: number;
        /** 年 */
        year?: number;
      }

      export type Response = defs.PreliminaryPoBizDetailVoStandard;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查看预订单信息汇总
     * /preliminary/pobiz/queryBizPoSum
     */
    export namespace queryBizPoSum {
      export class Params {
        /** 订单id */
        bizId?: number;
      }

      export type Response = defs.PreliminaryPoBizSummaryVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询预订单列表
     * /preliminary/pobiz/queryList
     */
    export namespace queryList {
      export class Params {
        /** 订单类型 */
        bizType?: string;
        /** 创建结束时间 格式:2021-05-31 23:59:59 */
        createDateEnd?: number;
        /** 创建起始时间 格式:2021-05-01 00:00:00 */
        createDateStart?: number;
        /** 期望交期结束时间 格式:2021-05-31 23:59:59 */
        deliveryDateEnd?: number;
        /** 期望交期起始时间 格式:2021-05-01 00:00:00 */
        deliveryDateStart?: number;
        /** 成色 成色接口 */
        fineness?: string;
        /** 是否挂签 0=挂签，1=不挂签 */
        hangLabel?: number;
        /** 二级客户名/柜台模糊搜索字段 */
        keyWord?: string;
        /** 每页行数 12 */
        rows?: number;
        /** 起始页 1 */
        startIndex?: number;
      }

      export type Response = defs.PageDTO<defs.PreliminaryPoBizListVo>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新增和编辑,柜台sku明细
     * /preliminary/pobiz/updateGTBizSku
     */
    export namespace updateGTBizSku {
      export class Params {}

      export type Response = string;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.PoBizSkuUpdateBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 新增和编辑,客单sku明细
     * /preliminary/pobiz/updateKDBizSku
     */
    export namespace updateKDBizSku {
      export class Params {}

      export type Response = string;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.PoBizSkuUpdateBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 保存并生成正式订单(柜台)
     * /preliminary/pobiz/updateToGTFormalBiz
     */
    export namespace updateToGTFormalBiz {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.PreliminaryPoBizUpdateBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 保存并生成正式订单(客单)
     * /preliminary/pobiz/updateToKDFormalBiz
     */
    export namespace updateToKDFormalBiz {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.PreliminaryPoBizUpdateBo,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 辅件
   */
  export namespace proAux {
    /**
     * 新增
     * /proAux/add
     */
    export namespace add {
      export class Params {
        /** 图片 */
        img: string;
        /** 名称 */
        name: string;
        /** 状态: 1:启用 2:禁勇 */
        status: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 获取数据
     * /proAux/get
     */
    export namespace get {
      export class Params {
        /** id */
        id: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询列表信息
     * /proAux/select
     */
    export namespace select {
      export class Params {
        /** 结束日期 格式如: yyyy-MM-dd */
        dataEnd?: string;
        /** 开始日期 格式如: yyyy-MM-dd */
        dataStart?: string;
        /** 页码 */
        page: number;
        /** 行数 */
        rows: number;
        /** 名称 */
        search?: string;
        /** 状态: 1:启用 2:禁勇 */
        status?: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 更新
     * /proAux/update
     */
    export namespace update {
      export class Params {
        /** id */
        id: string;
        /** 图片 */
        img: string;
        /** 名称 */
        name: string;
        /** 状态: 1:启用 2:禁勇 */
        status: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 更新状态
     * /proAux/updateStatus
     */
    export namespace updateStatus {
      export class Params {
        /** id */
        id: string;
        /** 状态: 1:启用 2:禁勇 */
        status: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 产能
   */
  export namespace proCapacity {
    /**
     * 新增
     * /proCapacity/add
     */
    export namespace add {
      export class Params {}

      export type Response = boolean;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.ProCapacity,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 查询
     * /proCapacity/get
     */
    export namespace get {
      export class Params {
        /** id */
        id?: number;
      }

      export type Response = defs.ProCapacity;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 列表
     * /proCapacity/select
     */
    export namespace select {
      export class Params {
        /** 页码 */
        page: number;
        /** 行数 */
        rows: number;
        /** 产能分类 */
        search?: string;
      }

      export type Response = defs.PageDTO<defs.ProCapacity>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 更新
     * /proCapacity/update
     */
    export namespace update {
      export class Params {}

      export type Response = boolean;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.ProCapacity,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 产品迁移
   */
  export namespace proMigration {
    /**
     * 品类列表
     * /proMigra/codeList
     */
    export namespace codeList {
      export class Params {
        /** 页码 */
        page: number;
        /** 行数 */
        rows: number;
        /** 搜索 */
        search: string;
        /** 类型   code:BRACELET_TYPE (链扣类型) MANUFACTURE_CRAFT (制造工艺) SURFACE_CRAFT (表面工艺)  PATTERN_TYPE )(花型) CONDITI_TYPE(成色) ONE_CODE(品类)  OPEN_TYPE(开口类型) TAB_CODE(标签) */
        type: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 复制新建产品数据
     * /proMigra/copyPro
     */
    export namespace copyPro {
      export class Params {
        /** 产品类 */
        pro?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据id查询产品信息
     * /proMigra/get
     */
    export namespace get {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据id查询产品信息
     * /proMigra/getMigration
     */
    export namespace getMigration {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询产品列表(数据迁移)
     * /proMigra/list
     */
    export namespace list {
      export class Params {
        /** 品类code */
        code: string;
        /** describe */
        describe?: string;
        /** 表面工艺name */
        effectName: string;
        /** 是否专销  1:是,2:否 */
        flagType: number;
        /** 迁移状态  1:待迁移,2:已迁移, 3:暂不迁移 */
        migrationType: number;
        /** 页码 */
        page: number;
        /** 制造工艺name */
        processCode: string;
        /** 行数 */
        rows: number;
        /** 专销销售商id */
        saleId: number;
        /** 搜索 */
        search: string;
        /** 供应商id */
        supplierId: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 迁移数据
     * /proMigra/migration
     */
    export namespace migration {
      export class Params {
        /** 产品类 */
        pro?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询code列表
     * /proMigra/selectCode
     */
    export namespace selectCode {
      export class Params {
        /** code:BRACELET_TYPE (链扣类型) MANUFACTURE_CRAFT (制造工艺) SURFACE_CRAFT (表面工艺)  PATTERN_TYPE )(花型) CONDITI_TYPE(成色) ONE_CODE(品类)  OPEN_TYPE(开口类型) TAB_CODE(标签) */
        code?: string;
        /** 名称 */
        search?: string;
        /** 是否需要禁用 非启用状态数据 1:禁用 2:不禁用  (产品列表取值(请选择2)) */
        type?: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询特定类型的企业
     * /proMigra/selectCompanyId
     */
    export namespace select {
      export class Params {
        /** search */
        search?: string;
        /** 企业类型: SUPPLIER:供应商 ,SALE:销售商   */
        type?: string;
      }

      export type Response = Array<defs.EnterpriseTable>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 逐个迁移.(下一个)
     * /proMigra/selectOne
     */
    export namespace selectOne {
      export class Params {
        /** 品类code */
        code: string;
        /** 表面工艺name */
        effectName: string;
        /** 是否专销  1:是,2:否 */
        flagType: number;
        /** 迁移状态  1:待迁移,2:已迁移, 3:暂不迁移 */
        migrationType: number;
        /** 制造工艺name */
        processCode: string;
        /** processName */
        processName?: string;
        /** 专销销售商id */
        saleId: number;
        /** 搜索 */
        search: string;
        /** 供应商id */
        supplierId: number;
        /** 是否过滤暂不迁移 1:过滤 2:不过滤 */
        type: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询产能列表
     * /proMigra/selectProCapacity
     */
    export namespace selectProCapacity {
      export class Params {
        /** 名称 */
        search?: string;
        /** 供应商id */
        supplierId?: number;
        /** type */
        type?: number;
      }

      export type Response = Array<defs.ProCapacity>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询款式描述列表
     * /proMigra/selectStyle
     */
    export namespace selectStyle {
      export class Params {
        /** 制造code */
        manufacture?: string;
        /** 品类code */
        one?: string;
        /** 名称 */
        search?: string;
        /** 是否需要禁用 非启用状态数据 1:禁用 2:不禁用  (产品列表取值(请选择2)) */
        type?: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 供应商(销售商)列表
     * /proMigra/supplierList
     */
    export namespace supplierList {
      export class Params {
        /** 页码 */
        page: number;
        /** 行数 */
        rows: number;
        /** 搜索 */
        search: string;
        /** 类型   供应商:_FACTORY  , 销售商:_SUBSIDIARY */
        type: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据id修改状态
     * /proMigra/updateStatus
     */
    export namespace updateStatus {
      export class Params {
        /** id */
        id: number;
        /** 迁移状态(不传值默认为:暂不迁移)  1:待迁移,2:已迁移, 3:暂不迁移 */
        status: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 转换图片
     * /proMigra/uploadImg
     */
    export namespace getPath {
      export class Params {
        /** pathEnd */
        pathEnd?: string;
        /** url */
        url?: string;
      }

      export type Response = string;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 款式描述
   */
  export namespace proStyle {
    /**
     * 新增
     * /proStyle/add
     */
    export namespace add {
      export class Params {
        /** 代号 */
        code: string;
        /** 图片 */
        img?: string;
        /** 关键字 */
        keyword: string;
        /** number */
        number?: number;
        /** 序号 */
        numner: number;
        /** 品类code */
        oneCode: string;
        /** 品类名称 */
        oneName: string;
        /** 制造供应code */
        processCode: string;
        /** 制造工艺名称 */
        processName: string;
        /** 状态: 1:启用 2:禁用 */
        status?: number;
        /** 款式描述 , */
        styleName?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 导入基础数据
     * /proStyle/import
     */
    export namespace importExcel {
      export class Params {
        /** 文件 */
        file?: ref;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询列表信息
     * /proStyle/select
     */
    export namespace select {
      export class Params {
        /** 页码 */
        page: number;
        /** 行数 */
        rows: number;
        /** 搜索框 */
        search?: string;
        /** 状态: 1:启用 2:禁用 */
        status?: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询Code列表信息
     * /proStyle/selectCode
     */
    export namespace selectCode {
      export class Params {
        /** code: 品类:ONE_CODE 制造工艺:MANUFACTURE_CRAFT */
        code?: string;
        /** 搜索框 */
        search?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 更新
     * /proStyle/update
     */
    export namespace update {
      export class Params {
        /** 代号 */
        code: string;
        /** id */
        id?: number;
        /** 图片 */
        img?: string;
        /** 关键字 */
        keyword: string;
        /** number */
        number?: number;
        /** 序号 */
        numner: number;
        /** 品类code */
        oneCode: string;
        /** 品类名称 */
        oneName: string;
        /** 制造供应code */
        processCode: string;
        /** 制造工艺名称 */
        processName: string;
        /** 状态: 1:启用 2:禁用 */
        status?: number;
        /** 款式描述 , */
        styleName?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 工序
   */
  export namespace process {
    /**
     * 新增
     * /process/add
     */
    export namespace add {
      export class Params {
        /** 名称 */
        name: string;
        /** 状态: 1:启用 2:禁勇 */
        status: number;
        /** 供应商id(多个供应商则以逗号隔开) */
        supplierId: string;
        /** 供应商名称(多个供应商则以逗号隔开) */
        supplierName: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 获取数据
     * /process/get
     */
    export namespace get {
      export class Params {
        /** id */
        id: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询列表信息
     * /process/select
     */
    export namespace select {
      export class Params {
        /** 页码 */
        page: number;
        /** 行数 */
        rows: number;
        /** 名称 */
        search?: string;
        /** 状态: 1:启用 2:禁勇 */
        status?: number;
        /** supplier */
        supplier?: string;
        /** 供应商id(多个供应商则以逗号隔开) */
        supplierId?: string;
        /** 供应商名称(多个供应商则以逗号隔开) */
        supplierName?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询特定类型的企业
     * /process/selectCompanyId
     */
    export namespace postSelectCompanyId {
      export class Params {
        /** search */
        search?: string;
        /** 企业类型: SUPPLIER:供应商 ,SALE:销售商   */
        type?: string;
      }

      export type Response = Array<defs.EnterpriseTable>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 更新
     * /process/update
     */
    export namespace update {
      export class Params {
        /** id */
        id: string;
        /** 名称 */
        name: string;
        /** 状态: 1:启用 2:禁勇 */
        status: number;
        /** 供应商id(多个供应商则以逗号隔开) */
        supplierId: string;
        /** 供应商名称(多个供应商则以逗号隔开) */
        supplierName: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 更新状态
     * /process/updateStatus
     */
    export namespace updateStatus {
      export class Params {
        /** id */
        id: string;
        /** 状态: 1:启用 2:禁勇 */
        status: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 产品
   */
  export namespace product {
    /**
     * 新增产品(第一阶段)
     * /pro/add
     */
    export namespace add {
      export class Params {
        /** 产品类 */
        pro?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新增标签
     * /pro/addLabel
     */
    export namespace addLabel {
      export class Params {
        /** 标签名称 */
        name?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新增产品(第三阶段)
     * /pro/addProSale
     */
    export namespace addProSale {
      export class Params {}

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.ProductSet,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 新增产品(第二阶段)
     * /pro/addProSupplier
     */
    export namespace addProSupplier {
      export class Params {}

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.ProductSet,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 禁用产品(根据状态批量或则单个修改数据)
     * /pro/forbidden
     */
    export namespace forbidden {
      export class Params {
        /** id 多个 则用逗号相隔开  132,456,789 */
        id: string;
        /** 是否启用:1:制单 2:待启用 3:已启动 4:禁用 */
        state: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 导入产品excel
     * /pro/import
     */
    export namespace importExcel {
      export class Params {
        /** 文件 */
        file?: ref;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询产品列表(生产商)
     * /pro/list
     */
    export namespace list {
      export class Params {
        /** 品类code */
        code: string;
        /** 产品描述name */
        describe: string;
        /** 表面工艺name */
        effectCode: string;
        /** 结束时间 格式:YYYY-MM-dd */
        endTime: string;
        /** 是否专销  1:是,2:否 */
        flagType: number;
        /** 是否新品 1:新品 2:非新品 */
        newType: number;
        /** 页码 */
        page: number;
        /** 制造工艺name */
        processCode: string;
        /** 行数 */
        rows: number;
        /** 专销销售商id */
        saleId: number;
        /** 搜索 */
        search: string;
        /** 开始时间 格式:YYYY-MM-dd */
        startTime: string;
        /** 状态:1:制单 2:待启用 3:已启动 4:禁用 */
        state: number;
        /** 供应商id */
        supplierId: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 批量启用产品
     * /pro/open
     */
    export namespace openProduct {
      export class Params {
        /** id 多个 则用逗号相隔开  132,456,789 */
        id: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询辅件列表
     * /pro/selectAux
     */
    export namespace selectAux {
      export class Params {
        /** 名称 */
        search?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据产品id查询产品信息
     * /pro/selectById
     */
    export namespace selectById {
      export class Params {
        /** 产品id */
        id?: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询code列表
     * /pro/selectCode
     */
    export namespace selectCode {
      export class Params {
        /** code:BRACELET_TYPE (链扣类型) MANUFACTURE_CRAFT (制造工艺) SURFACE_CRAFT (表面工艺)  PATTERN_TYPE )(花型) CONDITI_TYPE(成色) ONE_CODE(品类)  OPEN_TYPE(开口类型) TAB_CODE(标签) */
        code?: string;
        /** 名称 */
        search?: string;
        /** 是否需要禁用 非启用状态数据 1:禁用 2:不禁用  (产品列表取值(请选择2)) */
        type?: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询特定类型的企业
     * /pro/selectCompanyId
     */
    export namespace select {
      export class Params {
        /** search */
        search?: string;
        /** 企业类型: SUPPLIER:供应商 ,SALE:销售商   */
        type?: string;
      }

      export type Response = Array<defs.EnterpriseTable>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询投料组列表(产品供应商页面下拉条件)
     * /pro/selectMaterialGroup
     */
    export namespace selectMaterialGroup {
      export class Params {
        /** 名称 */
        search?: string;
        /** 供应商id */
        supplierId?: number;
        /** 是否需要禁用 非启用状态数据 1:禁用 2:不禁用  (产品列表取值(请选择2)) */
        type?: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询产能列表
     * /pro/selectProCapacity
     */
    export namespace selectProCapacity {
      export class Params {
        /** 名称 */
        search?: string;
        /** 供应商id */
        supplierId?: number;
        /** type */
        type?: number;
      }

      export type Response = Array<defs.ProCapacity>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询工序列表(产品供应商页面下拉条件)
     * /pro/selectProcess
     */
    export namespace selectProcess {
      export class Params {
        /** 名称 */
        search?: string;
        /** 供应商id */
        supplierId?: number;
        /** 是否需要禁用 非启用状态数据 1:禁用 2:不禁用  (产品列表取值(请选择2)) */
        type?: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询款式描述列表
     * /pro/selectStyle
     */
    export namespace selectStyle {
      export class Params {
        /** 制造code */
        manufacture?: string;
        /** 品类code */
        one?: string;
        /** 名称 */
        search?: string;
        /** 是否需要禁用 非启用状态数据 1:禁用 2:不禁用  (产品列表取值(请选择2)) */
        type?: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 更新产品(第一阶段)
     * /pro/update
     */
    export namespace update {
      export class Params {}

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.ProductSet,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 更新产品(第三阶段)
     * /pro/updateProSale
     */
    export namespace updateProSale {
      export class Params {}

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.ProductSet,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 更新产品(第二阶段)
     * /pro/updateProSupplier
     */
    export namespace updateProSupplier {
      export class Params {}

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.ProductSet,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 更新产品状态
     * /pro/updateState
     */
    export namespace updateState {
      export class Params {
        /** id */
        id: number;
        /** 是否启用:1:制单 2:待启用 3:已启动 4:禁用 */
        state: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 导入产品excel
     * /pro/updateZipFile
     */
    export namespace test {
      export class Params {
        /** 文件 */
        file?: ref;
        /** 供应商id */
        supplierId?: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(
        params: Params,
        form: FormData,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 销售产品
   */
  export namespace productSale {
    /**
     * 批量添加柜台
     * /proSale/addCounter
     */
    export namespace addCounter {
      export class Params {
        /** 柜台id 多个则以逗号隔开  123,456 */
        counterId?: string;
        /** 柜台名称 多个则以逗号隔开  123Name,456Name */
        counterName?: string;
        /** 产品id(生产商产品ID)  多个则用逗号隔开 如:id1,id2 */
        ids?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 柜位下拉接口
     * /proSale/counter
     */
    export namespace counter {
      export class Params {
        /** 搜索 */
        search: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 批量删除柜位
     * /proSale/delCounter
     */
    export namespace delCounter {
      export class Params {
        /** 柜台id 多个则以逗号隔开  123,456 */
        counterId?: string;
        /** 柜台名称 多个则以逗号隔开  123Name,456Name */
        counterName?: string;
        /** 产品id(生产商产品ID)  多个则用逗号隔开 如:id1,id2 */
        ids?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询产品列表(销售商)
     * /proSale/list
     */
    export namespace list {
      export class Params {
        /** 品类code */
        code: string;
        /** 成色 */
        conditi: string;
        /** 柜号id */
        counterId: string;
        /** 是否分柜 1:是,2:否 */
        counterType: number;
        /** 产品描述name */
        describe: string;
        /** 表面工艺name */
        effectCode: string;
        /** (建档时间)结束时间 格式:YYYY-MM-dd */
        endCreateTime: string;
        /** (上市)结束时间 格式:YYYY-MM-dd */
        endTime: string;
        /** 是否专销  1:是,2:否 */
        flagType: number;
        /** 是否新品 1:新品 2:非新品 */
        newType: number;
        /** 页码 */
        page: number;
        /** 制造工艺name */
        processCode: string;
        /** 行数 */
        rows: number;
        /** 搜索 */
        search: string;
        /** (建档时间)开始时间 格式:YYYY-MM-dd */
        startCreateTime: string;
        /** (上市)开始时间 格式:YYYY-MM-dd */
        startTime: string;
        /** 供应商id */
        supplierId: number;
        /** 是否引用 1 引用 2:未引用 */
        tag: number;
        /** 1 上架 2:未上架 3:待上架 */
        upStatus: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 批量引用产品数据
     * /proSale/quotePro
     */
    export namespace quotePro {
      export class Params {
        /** 产品id(生产商产品ID)  多个则用逗号隔开 如:id1,id2 */
        ids?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据产品id查询产品信息
     * /proSale/selectById
     */
    export namespace selectById {
      export class Params {
        /** 产品id */
        id?: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询特定类型的企业
     * /proSale/selectCompanyId
     */
    export namespace select {
      export class Params {
        /** search */
        search?: string;
        /** 企业类型: SUPPLIER:供应商 ,SALE:销售商   */
        type?: string;
      }

      export type Response = Array<defs.EnterpriseTable>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 批量上下架产品数据
     * /proSale/upDowPro
     */
    export namespace upDowPro {
      export class Params {
        /** 产品id(生产商产品ID)  多个则用逗号隔开 如:id1,id2 */
        ids?: string;
        /** type 1:上架,2:未上架 */
        type?: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 公共接口
   */
  export namespace public {
    /**
     * index
     * /
     */
    export namespace index {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 上传文件,只限于zip rar文件,其他类型的文件无法上传 限制大小为200Mb以下
     * /common/uploadFile
     */
    export namespace uploadCompressedFile {
      export class Params {
        /** uploadType */
        uploadType?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(
        params: Params,
        form: FormData,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 上传图片(图片大小不能超过2MB)支持图片格式有:jpg或者png格式
     * /common/uploadImg
     */
    export namespace uploadImageFile {
      export class Params {
        /** uploadType */
        uploadType?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(
        params: Params,
        form: FormData,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 上传图片(图片大小不能超过10MB)支持图片格式有:jpg或者png格式
     * /common/uploadImgs
     */
    export namespace uploadImageFiles {
      export class Params {
        /** uploadType */
        uploadType?: string;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(
        params: Params,
        form: FormData,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * exceptionInfo
     * /exception
     */
    export namespace exceptionInfo {
      export class Params {}

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * getAllUrl
     * /getAllUrl
     */
    export namespace getAllUrl {
      export class Params {}

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * index
     * /index
     */
    export namespace getIndex {
      export class Params {}

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * methodError
     * /methodError
     */
    export namespace methodError {
      export class Params {}

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * notFound
     * /pageNotFound
     */
    export namespace notFound {
      export class Params {}

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 排序
   */
  export namespace recordSort {
    /**
     * 查询登录用户企业的客户
     * /recordSort/myCompanyCus
     */
    export namespace myCompanyCus {
      export class Params {
        /** 只查看自己的客户：true(是)  */
        isMy?: string;
        /** 搜索字段 */
        search?: string;
        /** 设置id  必填 */
        setId?: number;
      }

      export type Response = Array<ObjectMap<string, ObjectMap>>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询排序
     * /recordSort/select
     */
    export namespace select {
      export class Params {
        /** 公司id(如果是多个以顿号','开拼接起来) 必填 */
        companyId: string;
        /** 时间类型   MONTH:上月    SEASON:上季  YEAR:上年  CURRENT_YEAR:本年  必填 */
        dateType: string;
        /** 品类code */
        oneCode?: string;
        /** 页码 必填 */
        page: number;
        /** 行数 必填 */
        rows: number;
        /** 设置id  必填 */
        setId: ref;
        /** 类型(销售排序:1.生产排序:2,客户排序:3)  必填 */
        type: number;
      }

      export type Response = defs.PageDTO<defs.RecordSort>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询客户分组排序
     * /recordSort/selectClient
     */
    export namespace selectClient {
      export class Params {
        /** 时间类型   MONTH:上月    SEASON:上季  YEAR:上年  CURRENT_YEAR:本年  必填 */
        dateType: string;
        /** 页码 必填 */
        page: number;
        /** 产品id 必填 */
        proId: number;
        /** 行数 必填 */
        rows: number;
        /** 设置id  必填 */
        setId: ref;
      }

      export type Response = defs.PageDTO<defs.RecordSort>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询code列表-品类
     * /recordSort/selectCode
     */
    export namespace selectCode {
      export class Params {
        /** code:BRACELET_TYPE (链扣类型) MANUFACTURE_CRAFT (制造工艺) SURFACE_CRAFT (表面工艺)  PATTERN_TYPE )(花型) CONDITI_TYPE(成色) ONE_CODE(品类)  OPEN_TYPE(开口类型) TAB_CODE(标签) */
        code?: string;
        /** 名称 */
        search?: string;
        /** 是否需要禁用 非启用状态数据 1:禁用 2:不禁用  (产品列表取值(请选择2)) */
        type?: number;
      }

      export type Response = defs.FrontResponse;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 根据类型,查看配置列表
     * /recordSort/selectSet
     */
    export namespace postSelectSet {
      export class Params {
        /** 模糊搜索虚拟名称 */
        search?: string;
        /**  '映射类型 1:销售商设置 2:供应商设置 3:客户设置',  */
        type?: number;
      }

      export type Response = Array<defs.SaleMappingRelationWithBLOBs>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询sku排序
     * /recordSort/selectSkuList
     */
    export namespace selectSkuList {
      export class Params {
        /** 公司id(如果是多个以顿号','开拼接起来) 必填 */
        companyId: string;
        /** 时间类型   MONTH:上月    SEASON:上季  YEAR:上年  CURRENT_YEAR:本年  必填 */
        dateType: string;
        /** 品类code */
        oneCode?: string;
        /** 页码 必填 */
        page: number;
        /** 产品id 必填 */
        proId: number;
        /** 行数 必填 */
        rows: number;
        /** 设置id  必填 */
        setId: ref;
        /** 类型(销售排序:1.生产排序:2,客户排序:3)  必填 */
        type: number;
      }

      export type Response = defs.PageDTO<defs.RecordSort>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 拒绝订单
   */
  export namespace rejectBoard {
    /**
     * 根据TheRepairOrderid.查询工厂拒单详情
     * /reject/getGcDetail
     */
    export namespace getGcDetail {
      export class Params {
        /** TheRepairOrderid */
        bizId?: number;
      }

      export type Response = defs.IBizBoardDetailVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 工厂拒单列表
     * /reject/getGcList
     */
    export namespace getGcList {
      export class Params {}

      export type Response = defs.PageDTO<defs.UnanweredBoardItemVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BizBoardListParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 根据TheRepairOrderid.查询销售拒单详情
     * /reject/getXsDetail
     */
    export namespace getXsDetail {
      export class Params {
        /** TheRepairOrderid */
        bizId?: number;
      }

      export type Response = defs.IBizBoardDetailVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 销售拒单列表
     * /reject/getXsList
     */
    export namespace getXsList {
      export class Params {}

      export type Response = defs.PageDTO<defs.UnanweredBoardItemVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BizBoardListParamBo,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 补单在产单
   */
  export namespace repairinproductionBoard {
    /**
     * 查询列表
     * /repairinproduction/list
     */
    export namespace list {
      export class Params {}

      export type Response = defs.PageDTO<defs.UnanweredBoardItemVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BizBoardListParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 根据TheRepairOrderid.查询WorkOrderDetails信息
     * /repairinproduction/queryDetail
     */
    export namespace queryDetail {
      export class Params {
        /** TheRepairOrderid */
        bizId?: number;
      }

      export type Response = defs.IBizBoardDetailVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询看板
     * /repairinproduction/view
     */
    export namespace view {
      export class Params {
        /** 对方公司ID, 在销售订单看板中,该字段填供应商ID,在工厂订单看板中,该字段填一级客户(销售商)ID */
        adverseCompanyId?: number;
        /** 对方公司名称, 在销售订单看板中,该字段填供应商名称,在工厂订单看板中,该字段填一级客户(销售商)名称 */
        adverseCompanyName?: string;
        /** bizBoardType */
        bizBoardType?: string;
        /** 订单类型  AGENCY 客单, OTC 柜台  */
        bizType?: string;
        /** 该字段填供应商ID */
        companyId?: number;
        /** 该字段填供应商名称 */
        companyName?: string;
        /** 时间类型  week 当前周, month 当前月 */
        dateType?: string;
        /** 结束日期,格式'yyyy-MM-dd' */
        endDate?: string;
        /** 搜索关键词,请根据销售订单看板和工厂订单看板需求使用! */
        keyword?: string;
        /** 源单类型,AGENCY=客单,OTC=柜台单 */
        sourceOrderType?: string;
        /** 起始日期,格式'yyyy-MM-dd' */
        startDate?: string;
        /** TheRepairOrder状态 */
        workorderStatus?: string;
      }

      export type Response = defs.BaseOverviewVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 补单在产单--工厂
   */
  export namespace repairinproductionWorkBoard {
    /**
     * 查询列表
     * /repairinproductionSupplier/list
     */
    export namespace list {
      export class Params {}

      export type Response = defs.PageDTO<defs.UnanweredBoardItemVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BizBoardListParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 根据TheRepairOrderid.查询WorkOrderDetails信息
     * /repairinproductionSupplier/queryDetail
     */
    export namespace queryDetail {
      export class Params {
        /** TheRepairOrderid */
        bizId?: number;
      }

      export type Response = defs.IBizBoardDetailVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询看板
     * /repairinproductionSupplier/view
     */
    export namespace view {
      export class Params {
        /** 对方公司ID, 在销售订单看板中,该字段填供应商ID,在工厂订单看板中,该字段填一级客户(销售商)ID */
        adverseCompanyId?: number;
        /** 对方公司名称, 在销售订单看板中,该字段填供应商名称,在工厂订单看板中,该字段填一级客户(销售商)名称 */
        adverseCompanyName?: string;
        /** bizBoardType */
        bizBoardType?: string;
        /** 订单类型  AGENCY 客单, OTC 柜台  */
        bizType?: string;
        /** 该字段填供应商ID */
        companyId?: number;
        /** 该字段填供应商名称 */
        companyName?: string;
        /** 时间类型  week 当前周, month 当前月 */
        dateType?: string;
        /** 结束日期,格式'yyyy-MM-dd' */
        endDate?: string;
        /** 搜索关键词,请根据销售订单看板和工厂订单看板需求使用! */
        keyword?: string;
        /** 源单类型,AGENCY=客单,OTC=柜台单 */
        sourceOrderType?: string;
        /** 起始日期,格式'yyyy-MM-dd' */
        startDate?: string;
        /** TheRepairOrder状态 */
        workorderStatus?: string;
      }

      export type Response = defs.BaseOverviewVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 角色相关的API
   */
  export namespace role {
    /**
     * 新建角色
     * /role/add
     */
    export namespace add {
      export class Params {
        /** 应用名称 */
        appName?: string;
        /** 角色名称 */
        roleName?: string;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 编辑角色名称
     * /role/edit
     */
    export namespace edit {
      export class Params {
        /** 应用名称 */
        appName?: string;
        /** 角色id */
        roleId?: string;
        /** 角色名称 */
        roleName?: string;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 销售商相关的API
   */
  export namespace sale {
    /**
     * 查询销售商详情
     * /sale/get
     */
    export namespace get {
      export class Params {
        /** 销售商企业id */
        saleId?: number;
      }

      export type Response = defs.VendorDataSheet;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询销售商列表
     * /sale/search
     */
    export namespace search {
      export class Params {
        /** 页码 */
        page?: number;
        /** 搜索字段 */
        search?: string;
        /** 条数 */
        size?: number;
      }

      export type Response = defs.PageDTO<defs.EnterpriseTable>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 配置信息
   */
  export namespace saleMappingRelation {
    /**
     * 新增配置
     * /saleMappingRelation/add
     */
    export namespace add {
      export class Params {}

      export type Response = boolean;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.SaleMappingRelationWithBLOBs,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 删除配置
     * /saleMappingRelation/delete
     */
    export namespace remove {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = boolean;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查看配置列表
     * /saleMappingRelation/select
     */
    export namespace select {
      export class Params {
        /** 页码 */
        page: number;
        /** 行数 */
        rows: number;
        /** 模糊搜索虚拟名称 */
        search?: string;
        /**  '映射类型 1:销售商设置 2:供应商设置 3:客户设置',  */
        type?: number;
      }

      export type Response = defs.PageDTO<defs.SaleMappingRelationWithBLOBs>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 修改配置
     * /saleMappingRelation/update
     */
    export namespace update {
      export class Params {}

      export type Response = boolean;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.SaleMappingRelationWithBLOBs,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 操作日志
   */
  export namespace scmLog {
    /**
        * 查询操作日志
如果是管理员，则查询出当前公司所有的操作日志,否则,只查询当前用户的操作日志
        * /log/queryList
        */
    export namespace queryList {
      export class Params {
        /** 截止日期字符串,格式如'yyyy-MM-dd' */
        endDate: string;
        /** 搜索关键词,对公司名,姓名,模块,动作 进行模糊搜索 */
        keyWord?: string;
        /** 页码,为大于0的整数 */
        page: number;
        /** 每页行数,为大于0的整数 */
        pageRow: number;
        /** 起始日期字符串,格式如'yyyy-MM-dd' */
        startDate: string;
      }

      export type Response = defs.PageDTO<defs.ScmLog>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 供应商相关的API
   */
  export namespace supplier {
    /**
     * 编辑供应商资料
     * /supplier/edit
     */
    export namespace edit {
      export class Params {}

      export type Response = number;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.SupplierDataSheet,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 根据供应商id查询供应商
     * /supplier/get
     */
    export namespace get {
      export class Params {
        /** 供应商id */
        supplierId?: number;
      }

      export type Response = object;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询供应商是否可以添加
     * /supplier/getAdd
     */
    export namespace getAdd {
      export class Params {
        /** 供应商id */
        supplierId?: number;
      }

      export type Response = boolean;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询供应商
     * /supplier/list
     */
    export namespace getList {
      export class Params {
        /** 1 启用/2 禁用 */
        isLock?: number;
        /** 页码 最小1 */
        pageIndex?: number;
        /** 每页行数 最小1 */
        pageSize?: number;
        /** 模糊搜索字段 */
        search?: string;
      }

      export type Response = defs.PageDTO<defs.SupplierDataSheet>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新建供应商资料
     * /supplier/save
     */
    export namespace save {
      export class Params {}

      export type Response = number;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.SupplierDataSheet,
        options?: any,
      ): Promise<Response>;
    }
  }

  /**
   * 团队相关的API
   */
  export namespace team {
    /**
     * 查询团队
     * /team/list
     */
    export namespace getList {
      export class Params {
        /** 1 启用/2 禁用 */
        lockStatus?: number;
        /** 团队名称 */
        teamName?: string;
      }

      export type Response = Array<defs.BusinessTeamTable>;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 新建或编辑团队
     * /team/save
     */
    export namespace save {
      export class Params {
        /** 负责区域 */
        businessArea?: string;
        /** 企业id */
        companyId?: number;
        /** createTime */
        createTime?: string;
        /** 团队id */
        id?: number;
        /** 团队领导id */
        leaderId?: number;
        /** 状态，1=启用，2=禁用 */
        lockStatus?: number;
        /** 团队成员id（数组）例：[1,2,3] */
        memberIds?: string;
        /** 团队成员个数 */
        memberNum?: number;
        /** 最后修改人 */
        operator?: string;
        /** 团队名称 */
        teamName?: string;
      }

      export type Response = any;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 未接单
   */
  export namespace unansweredBoard {
    /**
     * 查询列表
     * /unanswered/list
     */
    export namespace list {
      export class Params {}

      export type Response = defs.PageDTO<defs.UnanweredBoardItemVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BizBoardListParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 根据TheRepairOrderid.查询WorkOrderDetails信息
     * /unanswered/queryDetail
     */
    export namespace queryDetail {
      export class Params {
        /** TheRepairOrderid */
        bizId?: number;
      }

      export type Response = defs.IBizBoardDetailVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询看板
     * /unanswered/view
     */
    export namespace view {
      export class Params {
        /** 对方公司ID, 在销售订单看板中,该字段填供应商ID,在工厂订单看板中,该字段填一级客户(销售商)ID */
        adverseCompanyId?: number;
        /** 对方公司名称, 在销售订单看板中,该字段填供应商名称,在工厂订单看板中,该字段填一级客户(销售商)名称 */
        adverseCompanyName?: string;
        /** bizBoardType */
        bizBoardType?: string;
        /** 订单类型  AGENCY 客单, OTC 柜台  */
        bizType?: string;
        /** 该字段填供应商ID */
        companyId?: number;
        /** 该字段填供应商名称 */
        companyName?: string;
        /** 时间类型  week 当前周, month 当前月 */
        dateType?: string;
        /** 结束日期,格式'yyyy-MM-dd' */
        endDate?: string;
        /** 搜索关键词,请根据销售订单看板和工厂订单看板需求使用! */
        keyword?: string;
        /** 源单类型,AGENCY=客单,OTC=柜台单 */
        sourceOrderType?: string;
        /** 起始日期,格式'yyyy-MM-dd' */
        startDate?: string;
        /** TheRepairOrder状态 */
        workorderStatus?: string;
      }

      export type Response = defs.BaseOverviewVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 未接单--工厂
   */
  export namespace unansweredWordBoard {
    /**
     * 查询列表
     * /unansweredSupplier/list
     */
    export namespace list {
      export class Params {}

      export type Response = defs.PageDTO<defs.UnanweredBoardItemVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BizBoardListParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 根据TheRepairOrderid.查询WorkOrderDetails信息
     * /unansweredSupplier/queryDetail
     */
    export namespace queryDetail {
      export class Params {
        /** TheRepairOrderid */
        bizId?: number;
      }

      export type Response = defs.IBizBoardDetailVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 查询看板
     * /unansweredSupplier/view
     */
    export namespace view {
      export class Params {
        /** 对方公司ID, 在销售订单看板中,该字段填供应商ID,在工厂订单看板中,该字段填一级客户(销售商)ID */
        adverseCompanyId?: number;
        /** 对方公司名称, 在销售订单看板中,该字段填供应商名称,在工厂订单看板中,该字段填一级客户(销售商)名称 */
        adverseCompanyName?: string;
        /** bizBoardType */
        bizBoardType?: string;
        /** 订单类型  AGENCY 客单, OTC 柜台  */
        bizType?: string;
        /** 该字段填供应商ID */
        companyId?: number;
        /** 该字段填供应商名称 */
        companyName?: string;
        /** 时间类型  week 当前周, month 当前月 */
        dateType?: string;
        /** 结束日期,格式'yyyy-MM-dd' */
        endDate?: string;
        /** 搜索关键词,请根据销售订单看板和工厂订单看板需求使用! */
        keyword?: string;
        /** 源单类型,AGENCY=客单,OTC=柜台单 */
        sourceOrderType?: string;
        /** 起始日期,格式'yyyy-MM-dd' */
        startDate?: string;
        /** TheRepairOrder状态 */
        workorderStatus?: string;
      }

      export type Response = defs.BaseOverviewVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }
  }

  /**
   * 交期差异
   */
  export namespace variantDeliveryDateBoard {
    /**
     * 根据TheRepairOrderid.查询工厂交期差异详情
     * /variant/getGcDetail
     */
    export namespace getGcDetail {
      export class Params {
        /** TheRepairOrderid */
        bizId?: number;
      }

      export type Response = defs.IBizBoardDetailVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 工厂交期差异列表
     * /variant/getGcList
     */
    export namespace getGcList {
      export class Params {}

      export type Response = defs.PageDTO<defs.UnanweredBoardItemVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BizBoardListParamBo,
        options?: any,
      ): Promise<Response>;
    }

    /**
     * 根据TheRepairOrderid.查询销售交期差异详情
     * /variant/getXsDetail
     */
    export namespace getXsDetail {
      export class Params {
        /** TheRepairOrderid */
        bizId?: number;
      }

      export type Response = defs.IBizBoardDetailVo;

      export const init: Response;

      export function request(params: Params, options?: any): Promise<Response>;
    }

    /**
     * 销售交期差异列表
     * /variant/getXsList
     */
    export namespace getXsList {
      export class Params {}

      export type Response = defs.PageDTO<defs.UnanweredBoardItemVo>;

      export const init: Response;

      export function request(
        params: Params,
        body: defs.BizBoardListParamBo,
        options?: any,
      ): Promise<Response>;
    }
  }
}
