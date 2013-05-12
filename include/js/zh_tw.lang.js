/*********************************************************************************

** The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 ********************************************************************************/

	
	var alert_arr = {       DELETE:'确认删除选择 ',
                                RECORDS:' 记录?',
                                SELECT:'请至少选择一条记录',
                                DELETE_ACCOUNT:'Deleting this account(s) will remove its related Potentials & Quotes. Are you sure you want to delete the selected ',
                                DELETE_VENDOR:'Deleting this vendor(s) will remove its related Purchase Orders. Are you sure you want to delete the selected ',
                                SELECT_MAILID:'请选择一个Email',
                                OVERWRITE_EXISTING_ACCOUNT2:') address details?',
                                MISSING_FIELDS:'必填字段不能为空:',
                                NOT_ALLOWED_TO_EDIT:'禁止编辑这个字段',
                                COLUMNS_CANNOT_BE_EMPTY:'选择字段不能为空',
                                CANNOT_BE_EMPTY:' 不能为空',
                                CANNOT_BE_NONE:' 不能为空',
                                ENTER_VALID:'请输入有效的 ',
                                SHOULDBE_LESS:' 应该小于 ',
                                SHOULDBE_LESS_EQUAL:' 应该小于等于 ',
                                SHOULDBE_EQUAL:' 应该等于 ',
                                SHOULDBE_GREATER:' 应该大于 ',
                                SHOULDBE_GREATER_EQUAL:' 应该大于等于 ',
                                INVALID:'无效的 ',
                                EXCEEDS_MAX:' 超过最大限制 ',
                                OUT_OF_RANGE:' 越界',
                                SHOULDNOTBE_EQUAL:' 应该等于 ',
                                PORTAL_PROVIDE_EMAILID:'Portal用户应该提供有效的Email',
                                ADD_CONFIRMATION:'Are you sure you want to add the selected ',
                                ACCOUNTNAME_CANNOT_EMPTY:'客户名称不能为空',
		                        ACCOUNT_CANNOT_EMPTY:'客户不能为空',
								VENDOR_CANNOT_EMPTY:'供应商不能为空',
                                CANT_SELECT_CONTACTS:"You can\'t select related contacts from Lead",
                                LBL_THIS:'This ',
                                DOESNOT_HAVE_MAILIDS:" doesn\'t have any mail ids",
                                ARE_YOU_SURE:'确认?',
                                DOESNOT_HAVE_AN_MAILID:"Email为空！",
                                MISSING_REQUIRED_FIELDS:'必填字段不能为空: ',
                                READONLY:"只读",
				SELECT_ATLEAST_ONE_USER:'至少选择一个用户',
                                DISABLE_SHARING_CONFIRMATION:'Are you sure you want to disable sharing for selected ',
                                USERS:' user(s) ?',
                                ENDTIME_GREATER_THAN_STARTTIME:'结束时间应该大于开始时间 ',
                                FOLLOWUPTIME_GREATER_THAN_STARTTIME:'Followup Time should be greater than End Time ',
                                MISSING_EVENT_NAME:'Missing Event Name',
                                EVENT_TYPE_NOT_SELECTED:'Event Type is not selected',
                                CLOSEDATE_CANNOT_BE_EMPTY:'Close Date field cannot be empty',
                                SITEURL_CANNOT_BE_EMPTY:'Site Url cannot be empty',
                                SITENAME_CANNOT_BE_EMPTY:'Site Name cannot be empty',
                                LISTPRICE_CANNOT_BE_EMPTY:'价格不能为空',
                                INVALID_LIST_PRICE:'无效的价格',
                                PROBLEM_ACCESSSING_URL:'Problem accessing url: ',
                                CODE:' Code: ',
                                WISH_TO_QUALIFY_MAIL_AS_CONTACT:'Are you sure you wish to Qualify this Mail as Contact?',
                                SELECT_ATLEAST_ONEMSG_TO_DEL:'Please select at least one message to delete',
                                ERROR:'错误',
                                FIELD_TYPE_NOT_SELECTED:'没有选择字段类型',
		                        LABEL:'标签',
								LENGTH:'标签',
								LABEL:'标签',
								LABEL:'标签',
                                SPECIAL_CHARACTERS_NOT_ALLOWED:'标签禁止包含特殊字符',
                                PICKLIST_CANNOT_BE_EMPTY:'下拉框列表值不能为空',
                                DUPLICATE_VALUES_FOUND:'下拉框列表值重复',
                                DUPLICATE_MAPPING_ACCOUNTS:'重复映射!',
                                DUPLICATE_MAPPING_CONTACTS:'重复映射!',
                                DUPLICATE_MAPPING_POTENTIAL:'重复映射!',
                                ERROR_WHILE_EDITING:'编辑错误',
								IMAGE_DELETED:'图片已删除',
								ERROR_WHILE_DELING:'删除错误',
                                CURRENCY_CHANGE_INFO:'Currency Changes has been made Successfully',
                                CURRENCY_CONVERSION_INFO:'Are you using Dollar $ as Currency? \n Click OK to remain as $, Cancel to change the currency conversion rate.',
                                THE_EMAILID: "The email id \'",
                                EMAIL_FIELD_INVALID:"\' in the email field is invalid",
                                MISSING_REPORT_NAME:'报表名称不能为空',
                                REPORT_NAME_EXISTS:'报表名称已存在，请重试...',
                                WANT_TO_CHANGE_CONTACT_ADDR:'Do you want to change the addresses of the Contacts related to this Account?',
                                SURE_TO_DELETE:'确认删除？',
				NO_PRODUCT_SELECTED:'请至少选择一个产品',
                                VALID_FINAL_PERCENT:'输入有效的折扣比例',
                                VALID_FINAL_AMOUNT:'输入有效的折扣数量',
                                VALID_SHIPPING_CHARGE:'Enter a valid Shipping & Handling charge',
                                VALID_ADJUSTMENT:'输入有效的调整',
                                WANT_TO_CONTINUE:'继续？',
                                ENTER_VALID_TAX:'Please enter Valid TAX value',
                                VALID_TAX_NAME:'Enter valid Tax Name',
                                CORRECT_TAX_VALUE:'Enter Correct Tax Value',
                                ENTER_POSITIVE_VALUE:'Please enter positive value',
                                LABEL_SHOULDNOT_EMPTY:'The tax label name should not be empty',
                                NOT_VALID_ENTRY:'is not a valid entry. Please enter correct value',
                                VALID_DISCOUNT_PERCENT:'输入有效的折扣比例',
                                VALID_DISCOUNT_AMOUNT:'输入有效的折扣数量',
                                LBL_PRODUCT:'产品',
                                LBL_QTY:'数量',
                                LBL_LISTPRICE:'价格',
                                LBL_PRODUCT_NAME:'产品名称',
                                SELECT_TEMPLATE_TO_MERGE:'Please select a template to merge',
				SELECTED_MORE_THAN_ONCE:'以下产品选择多次。',
				YES:'是',
                                NO:'不',
                                MAIL:'mail',
				EQUALS:'等于',
				NOT_EQUALS_TO:'不等于',
				STARTS_WITH:'开始为',
				CONTAINS:'包含',	
				DOES_NOT_CONTAINS:'不包含',
				LESS_THAN:'小于',
				GREATER_THAN:'大于',
				LESS_OR_EQUALS:'小于等于',
				GREATER_OR_EQUALS:'大于等于',

				NO_SPECIAL_CHARS:'Special Characters are not allowed in Invoice String',
				PLS_SELECT_VALID_FILE:'Please select a file with the following extension:\n',
                                NO_SPECIAL:'Special Characters are not allowed',
				IN_PROFILENAME:' in Profile Name',
				IN_GROUPNAME:' in Group Name',
				IN_ROLENAME:' in Role Name',
                                VALID_TAX_PERCENT:'Enter a valid Tax percentage',
                                VALID_SH_TAX:'Enter valid Taxes for shipping and handling ',
				ROLE_DRAG_ERR_MSG:'You cannot move a Parent Node under a Child Node',
				LBL_DEL:'删除',
				VALID_DATA :' 请输入有效的数据，请重试... ',
                                STDFILTER : '标准过滤器',
                                STARTDATE : '开始日期',
                                ENDDATE : '结束日期',
                                START_DATE_TIME : '开始日期和时间',
                                START_TIME : '开始时间',
                                DATE_SHOULDNOT_PAST :'Current date & time for Activities with status as Planned',
                                TIME_SHOULDNOT_PAST :'Current Time for Activities with status as Planned',
				LBL_AND : 'And',
				LBL_ENTER_VALID_PORT: '请输入有效的端口',
				IN_USERNAME :' in Username ',
				LBL_ENTER_VALID_NO: '请输入有效的数字',
				LBL_PROVIDE_YES_NO: ' 无效的值。\n 请输入是或不',
				LBL_SELECT_CRITERIA: ' 无效的条件。\n 请选择条件',
				// Added/Updated for vtiger CRM 5.0.4
				OPPORTUNITYNAME_CANNOT_BE_EMPTY:'销售机会名称不能为空',
                		OVERWRITE_EXISTING_ACCOUNT1:'Do you want to Overwrite the existing address with this selected account(',
                		NAME_DESC:' for Folder Name & Description',
                		ENDS_WITH:'结束为',
                		SHARED_EVENT_DEL_MSG:'The User does not have permission to Edit/Delete Shared Event.',
                                                                                                                             

				LBL_WRONG_IMAGE_TYPE: '允许的文件类型：jpeg, png, jpg, pjpeg, x-png 和 gif',
				SELECT_MAIL_MOVE: 'Please select a mail and then move..',
				
				LBL_NOTSEARCH_WITHSEARCH_ALL:'You haven\'t used the search. All the records will be Exported from ',
				LBL_NOTSEARCH_WITHSEARCH_CURRENTPAGE:'You haven\'t searched any thing. But you selected with search & current page options. So the records in the current page will be Exported from ',
				LBL_NO_DATA_SELECTED:'There is no record selected. Select at least one record to Export',
				LBL_SEARCH_WITHOUTSEARCH_ALL:'You have used search option but you have not selected without search & all options.\nYou can click [ok] to export all data or You can click [cancel] and try again with other export criteria',
				STOCK_IS_NOT_ENOUGH : 'Stock is not enough',
				INVALID_QTY : '无效的数量',
				LBL_SEARCH_WITHOUTSEARCH_CURRENTPAGE:'You have used search option but you have not selected without search & currentpage options.\nYou can click [ok] to export current page data or You can click [cancel] and try again with some other export criteria.',
				CONFIRM_APPROVE:'确认审批通过？',
				ALREADY_APPROVED:'已经审批过！',
				APPROVE_FAILED:'审批失败',
				APPROVED:'完成审批操作',
				REJECT_DESC:'拒绝原因',
				INPUT_REJECT_DESC:'请输入拒绝原因'
                       };