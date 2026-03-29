import { pgTable, index, foreignKey, unique, serial, timestamp, integer, text, pgSchema, varchar, jsonb, numeric, boolean, date, uuid, doublePrecision, time, bigserial, bigint, primaryKey, pgView, smallint, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const amazon = pgSchema("amazon");
export const job_statusInAmazon = amazon.enum("job_status", ['queued', 'in_progress', 'succeeded', 'failed'])
export const address_type_enum = pgEnum("address_type_enum", ['From', 'To'])
export const autoFillListPriceFromEnum = pgEnum("autoFillListPriceFromEnum", ['BUY_BOX', 'HIGHEST_FBA_OFFER', 'LOWEST_FBA_OFFER'])
export const autoFillListPriceOperationEnum = pgEnum("autoFillListPriceOperationEnum", ['INCREASE', 'DECREASE'])
export const boxContentsProviderTypeEnum = pgEnum("boxContentsProviderTypeEnum", ['Boxem', 'Seller', 'Barcode2D'])
export const bulk_ungate_status = pgEnum("bulk_ungate_status", ['UNGATED', 'GATED', 'RESTRICTED', 'ERRORED'])
export const fba_shipment_status_enum = pgEnum("fba_shipment_status_enum", ['CREATED', 'CONFIRMED', 'CANCELLED', 'CARTON_SUBMITTED', 'CARTON_PROCESSED', 'CARTON_PROCESSED_WITH_ERROR', 'TRANSPORT_SUBMITTED', 'TRANSPORT_CONFIRMED', 'LABEL_ACQUIRED', 'SHIPPED', 'IN_TRANSIT', 'DELIVERED', 'CHECKED_IN', 'CARTON_SUBMISSION_FAILED', 'TRANSPORT_SUBMISSION_ERROR', 'TRANSPORT_ESTIMATING', 'TRANSPORT_ESTIMATED', 'TRANSPORT_ESTIMATED_ERROR', 'TRANSPORT_CONFIRMING', 'TRANSPORT_CONFIRMING_ERROR', 'TRANSPORT_VOIDING', 'TRANSPORT_VOID_ERROR', 'TRANSPORT_VOIDED', 'CLOSED', 'DELETED', 'WORKING', 'READY_TO_SHIP', 'RECEIVING', 'ERROR'])
export const feedback_campaign_status = pgEnum("feedback_campaign_status", ['ACTIVE', 'INACTIVE'])
export const feedback_campaign_target = pgEnum("feedback_campaign_target", ['SEND_ONLY_TO_NEW_CUSTOMERS', 'SEND_ONLY_TO_REPEATED_CUSTOMERS', 'SEND_NEW_AND_REPEATED_CUSTOMERS'])
export const feedback_campaign_type = pgEnum("feedback_campaign_type", ['AMAZON_DEFAULT', 'USER_CUSTOM'])
export const feedback_product_selection_type = pgEnum("feedback_product_selection_type", ['APPLY_CAMPAIGN_TO_ALL_PRODUCTS', 'APPLY_CAMPAIGN_TO_SELECTED_PRODUCT', 'APPLY_CAMPAIGN_TO_ALL_PRODUCTS_EXCEPT_THE_SELECTED'])
export const feedback_send_days_type = pgEnum("feedback_send_days_type", ['DELIVERY_DATE', 'ORDER_DATE', 'SHIPPING_DATE', 'REFUND_DATE'])
export const freight_class_enum = pgEnum("freight_class_enum", ['50', '55', '60', '65', '70', '85', '100', '110', '125', '150', '175', '200', '250', '300', '400', '500', '77.5', '92.5'])
export const fulfillment_type_enum = pgEnum("fulfillment_type_enum", ['FBA', 'MFN', 'UNKNOWN'])
export const http_method = pgEnum("http_method", ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'])
export const inbound_item_fulfillmentstatus_enum = pgEnum("inbound_item_fulfillmentstatus_enum", ['SUCCESS', 'PREPINSTRUCTION_FAILED', 'PREPINSTRUCTION_FETCHING', 'SHIPMENTPLAN_CREATION', 'FAILED'])
export const inbound_ltl_amazoncalculatedcurrency_enum = pgEnum("inbound_ltl_amazoncalculatedcurrency_enum", ['USD', 'GBP'])
export const inbound_ltl_partnerestimatecurrency_enum = pgEnum("inbound_ltl_partnerestimatecurrency_enum", ['USD', 'GBP'])
export const inbound_ltl_sellerdeclaredcurrency_enum = pgEnum("inbound_ltl_sellerdeclaredcurrency_enum", ['USD', 'GBP'])
export const inbound_ltl_totalweightunit_enum = pgEnum("inbound_ltl_totalweightunit_enum", ['pounds', 'kilograms'])
export const inbound_sp_partnerestimatecurrency_enum = pgEnum("inbound_sp_partnerestimatecurrency_enum", ['USD', 'GBP'])
export const label_prep_preference_enum = pgEnum("label_prep_preference_enum", ['SELLER_LABEL', 'AMAZON_LABEL_PREFERRED', 'AMAZON_LABEL_ONLY'])
export const label_prep_type_enum = pgEnum("label_prep_type_enum", ['NO_LABEL', 'SELLER_LABEL', 'AMAZON_LABEL'])
export const listing_inboundeligibilitystatus_enum = pgEnum("listing_inboundeligibilitystatus_enum", ['UNKNOWN', 'ELIGIBLE', 'NOT_ELIGIBLE'])
export const package_inboundpackagestatus_enum = pgEnum("package_inboundpackagestatus_enum", ['SHIPPED', 'RECEIVING', 'DELETED', 'CLOSED', 'IN_TRANSIT', 'DELIVERED', 'CHECKED_IN'])
export const packing_type_enum = pgEnum("packing_type_enum", ['INDIVIDUAL', 'CASE_PACKED'])
export const product_inboundeligibilitystatus_enum = pgEnum("product_inboundeligibilitystatus_enum", ['UNKNOWN', 'ELIGIBLE', 'NOT_ELIGIBLE'])
export const shipment_boxcontents_enum = pgEnum("shipment_boxcontents_enum", ['Boxem', 'Amazon', 'Seller'])
export const shipment_fulfillmenttype_enum = pgEnum("shipment_fulfillmenttype_enum", ['FBA', 'MFN'])
export const shipment_labelingpreference_enum = pgEnum("shipment_labelingpreference_enum", ['Amazon', 'Seller'])
export const shipment_packingtype_enum = pgEnum("shipment_packingtype_enum", ['Individual', 'Case_Packed'])
export const shipment_plan_boxcontent_enum = pgEnum("shipment_plan_boxcontent_enum", ['Boxem', 'Amazon', 'Seller'])
export const shipment_plan_cartonfeedstatus_enum = pgEnum("shipment_plan_cartonfeedstatus_enum", ['CANCELLED', 'DONE', 'DONE_WITH_ERROR', 'FATAL', 'IN_PROGRESS', 'IN_QUEUE'])
export const shipment_plan_fulfillmenttype_enum = pgEnum("shipment_plan_fulfillmenttype_enum", ['FBA', 'MFN'])
export const shipment_plan_labelpreptype_enum = pgEnum("shipment_plan_labelpreptype_enum", ['AMAZON_LABEL_ONLY', 'SELLER_LABEL', 'AMZON_LABEL_PREFERRED', 'NO_LABEL'])
export const shipment_plan_listingfeedstatus_enum = pgEnum("shipment_plan_listingfeedstatus_enum", ['CANCELLED', 'DONE', 'DONE_WITH_ERROR', 'FATAL', 'IN_PROGRESS', 'IN_QUEUE'])
export const shipment_plan_packingtype_enum = pgEnum("shipment_plan_packingtype_enum", ['Individual', 'Case_Packed'])
export const shipment_plan_shipmentboxcontentsource_enum = pgEnum("shipment_plan_shipmentboxcontentsource_enum", ['NONE', 'FEED', '2D_BARCODE'])
export const shipment_plan_shipmentstatus_enum = pgEnum("shipment_plan_shipmentstatus_enum", ['WORKING', 'CARTON_DOCUMENT_UPLOADED', 'CARTON_FEED_CREATED', 'SHIPPED', 'RECEIVING', 'CANCELLED', 'DELETED', 'CLOSED', 'ERROR', 'IN_TRANSIT', 'DELIVERED', 'CHECKED_IN'])
export const shipment_plan_shipmenttype_enum = pgEnum("shipment_plan_shipmenttype_enum", ['LTL', 'SPD', 'FTL'])
export const shipment_plan_status_enum = pgEnum("shipment_plan_status_enum", ['Draft', 'Submitted', 'Deleted', 'Cancelled', 'ShipmentCreated'])
export const shipment_plan_transportstatus_enum = pgEnum("shipment_plan_transportstatus_enum", ['WORKING', 'ESTIMATING', 'ESTIMATED', 'ERROR_ON_ESTIMATING', 'CONFIRMING', 'CONFIRMED', 'ERROR_ON_CONFIRMING', 'VOIDING', 'VOIDED', 'ERROR_IN_VOIDING', 'ERROR'])
export const shipment_plan_transporttype_enum = pgEnum("shipment_plan_transporttype_enum", ['LTL', 'SPD', 'FTL'])
export const shipment_shippingmethod_enum = pgEnum("shipment_shippingmethod_enum", ['SPD', 'LTL', 'FTL'])
export const shipment_status_enum = pgEnum("shipment_status_enum", ['Draft', 'Working', 'Shipped', 'Active', 'In_Transit', 'Delivered', 'Checked_In', 'Receiving', 'Closed'])
export const shipping_label_labeltype_enum = pgEnum("shipping_label_labeltype_enum", ['BARCODE_2D', 'UNIQUE', 'PALLET'])
export const shipping_label_page_type_enum = pgEnum("shipping_label_page_type_enum", ['PackageLabel_Letter_2', 'PackageLabel_Letter_4', 'PackageLabel_Letter_6', 'PackageLabel_Letter_6_CarrierLeft', 'PackageLabel_A4_2', 'PackageLabel_A4_4', 'PackageLabel_Plain_Paper', 'PackageLabel_Plain_Paper_CarrierBottom', 'PackageLabel_Thermal', 'PackageLabel_Thermal_Unified', 'PackageLabel_Thermal_NonPCP', 'PackageLabel_Thermal_No_Carrier_Rotation'])
export const shipping_label_pagetype_enum = pgEnum("shipping_label_pagetype_enum", ['PackageLabel_Letter_2', 'PackageLabel_Letter_4', 'PackageLabel_Letter_6', 'PackageLabel_Letter_6_CarrierLeft', 'PackageLabel_A4_2', 'PackageLabel_A4_4', 'PackageLabel_Plain_Paper', 'PackageLabel_Plain_Paper_CarrierBottom', 'PackageLabel_Thermal', 'PackageLabel_Thermal_Unified', 'PackageLabel_Thermal_NonPCP', 'PackageLabel_Thermal_No_Carrier_Rotation'])
export const shipping_label_type_enum = pgEnum("shipping_label_type_enum", ['BARCODE_2D', 'PALLET', 'UNIQUE'])
export const sync_job_status = pgEnum("sync_job_status", ['PROCESSING', 'TERMINATED_WITH_ERROR', 'COMPLETED'])
export const transport_type_enum = pgEnum("transport_type_enum", ['SPD', 'LTL', 'FTL'])
export const wfs_fulfillment_type = pgEnum("wfs_fulfillment_type", ['SPD', 'LTL', 'FTL'])
export const wfs_lifecycle_status = pgEnum("wfs_lifecycle_status", ['ACTIVE', 'ARCHIVED', 'RETIRED', 'UNPUBLISHED'])
export const wfs_published_status = pgEnum("wfs_published_status", ['PUBLISHED', 'UNPUBLISHED', 'SYSTEM_PROBLEM', 'STAGE', 'PENDING_PUBLISH', 'IN_PROGRESS'])
export const wfs_shipment_status = pgEnum("wfs_shipment_status", ['PENDING_SHIPMENT_DETAILS', 'AWAITING_DELIVERY', 'CLOSED', 'CANCELLED', 'RECEIVING_IN_PROGRESS'])


export const assistants_to_sellers = pgTable("assistants_to_sellers", {
	id: serial().primaryKey().notNull(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	sellerId: integer().notNull(),
	assistantId: integer().notNull(),
	status: text().default('PENDING').notNull(),
	permissions: integer(),
}, (table) => [
	index("seller_index").using("btree", table.sellerId.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.assistantId],
			foreignColumns: [user.id],
			name: "assistants_to_sellers_assistantId_user_id_fk"
		}),
	foreignKey({
			columns: [table.sellerId],
			foreignColumns: [user.id],
			name: "assistants_to_sellers_sellerId_user_id_fk"
		}).onDelete("cascade"),
	unique("assistantIdAndSellerIdComboUnique").on(table.sellerId, table.assistantId),
]);

export const listingInAmazon = amazon.table("listing", {
	id: serial().primaryKey().notNull(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	name: varchar(),
	description: varchar(),
	asin: varchar(),
	sku: varchar(),
	fnSku: varchar(),
	gtin: varchar(),
	ean: varchar(),
	upc: varchar(),
	type: varchar(),
	offers: jsonb(),
	country: varchar(),
	components: varchar({ length: 2048 }),
	warranty: varchar(),
	condition: varchar({ length: 2048 }),
	image0: varchar(),
	image1: varchar(),
	image2: varchar(),
	image3: varchar(),
	image4: varchar(),
	image5: varchar(),
	image6: varchar(),
	image7: varchar(),
	manufacturer: varchar(),
	brand: varchar(),
	style: varchar(),
	price: numeric({ precision: 10, scale:  2 }),
	currency: varchar().default('USD').notNull(),
	quantity: integer(),
	weight: numeric({ precision: 10, scale:  2 }),
	weightUnit: varchar().default('ounces'),
	packageLength: numeric({ precision: 10, scale:  2 }),
	packageWidth: numeric({ precision: 10, scale:  2 }),
	packageHeight: numeric({ precision: 10, scale:  2 }),
	cpsiaCautionaryStatement: varchar(),
	bulletPoint: varchar(),
	batteryType: varchar(),
	numberOfBatteries: integer(),
	batteryRequired: boolean(),
	batteryIncluded: boolean(),
	batterySpecs: jsonb(),
	batteryCells: integer(),
	batteryInfo: jsonb(),
	supplierDgHzRegulation: varchar().default('not_applicable'),
	locale: varchar().default('en_US').notNull(),
	isActive: boolean().default(true).notNull(),
	userId: integer(),
	status: varchar().default('DRAFT'),
	notification_updated_at: timestamp({ withTimezone: true, mode: 'string' }),
	status_updated_at: timestamp({ withTimezone: true, mode: 'string' }),
	listingFeedMessageId: varchar(),
	listingFeedMessage: varchar(),
	inboundEligibilityStatus: text().default('UNKNOWN'),
	catalogId: integer(),
	fulfillmentType: text(),
	syncStatus: varchar().default('PENDING'),
	syncBatchId: varchar(),
	syncError: jsonb(),
	openDate: timestamp({ withTimezone: true, mode: 'string' }),
	fetchListing: boolean().default(false),
	prepInstructions: jsonb(),
	fromSync: boolean().default(false),
	merchantShippingGroup: varchar(),
	buyCost: numeric({ precision: 10, scale:  2 }),
	inboundWorkingQuantity: integer(),
	inboundShippedQuantity: integer(),
	inboundReceivingQuantity: integer(),
	reservedQuantity: integer(),
	unfulfillableQuantity: integer(),
	researchingQuantity: integer(),
	isDiscoverable: boolean(),
	isBuyable: boolean(),
	buyCostType: text().default('FIXED'),
	conditionNotes: varchar(),
	quantityInCase: integer(),
	datePurchased: date(),
	expirationDate: date(),
	pricingFeedMessage: varchar(),
	quantityFeedMessage: varchar(),
	issueSyncStatus: varchar(),
	supplierId: integer(),
	submitted_at: timestamp({ mode: 'string' }),
	prepBatchId: varchar(),
	prepStatus: varchar(),
	strandedAction: varchar(),
	strandedDate: timestamp({ withTimezone: true, mode: 'string' }),
	strandedReason: varchar(),
	strandedRemoveDate: timestamp({ withTimezone: true, mode: 'string' }),
	product_short_name: text(),
	amazonMetadata: jsonb().notNull(),
	debugDeletedReason: varchar().default(').notNull(),
	lastUserUpdatedSoDontLetOlderSyncsOverwriteBoxemDate: numeric().default('0').notNull(),
	fbmShippingTemplateId: varchar().default(').notNull(),
	issues: jsonb().array().default([{}]).notNull(),
}, (table) => [
	index("IDX_SKU").using("btree", table.sku.asc().nullsLast().op("text_ops")),
	index("IDX_USERID").using("btree", table.userId.asc().nullsLast().op("int4_ops")),
	index().using("btree", table.product_short_name.asc().nullsLast().op("text_ops")),
	index("prepBatchId").using("btree", table.prepBatchId.asc().nullsLast().op("text_ops")),
	index("syncBatchIdIdx").using("btree", table.syncBatchId.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.catalogId],
			foreignColumns: [catalogInAmazon.id],
			name: "listing_catalogId_catalog_id_fk"
		}),
	foreignKey({
			columns: [table.supplierId],
			foreignColumns: [supplier.id],
			name: "listing_supplierId_supplier_id_fk"
		}),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "listing_userId_user_id_fk"
		}).onDelete("cascade"),
]);

export const amz_transactionsInAmazon = amazon.table("amz_transactions", {
	posted_date: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	transaction_type: text(),
	transaction_event: text().notNull(),
	user_id: integer().notNull(),
	order_id: text(),
	sku: text(),
	asin: text(),
	marketplace_id: text(),
	amount: numeric({ precision: 18, scale:  5 }).notNull(),
	currency: text().notNull(),
	amount_type: text().notNull(),
	amount_description: text().notNull(),
	amount_component: text().notNull(),
	created_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	synced_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	source_path: text(),
	amazonMetadata: jsonb().notNull(),
}, (table) => [
	index("amz_transactions_asin_idx").using("btree", table.user_id.asc().nullsLast().op("int4_ops"), table.asin.asc().nullsLast().op("text_ops")).where(sql`(asin IS NOT NULL)`),
	index("amz_transactions_date_user_idx").using("btree", table.posted_date.asc().nullsLast().op("timestamptz_ops"), table.user_id.asc().nullsLast().op("timestamptz_ops")),
	index("amz_transactions_date_user_order_sku_idx").using("btree", table.posted_date.asc().nullsLast().op("timestamptz_ops"), table.user_id.asc().nullsLast().op("int4_ops"), table.order_id.asc().nullsLast().op("timestamptz_ops"), table.sku.asc().nullsLast().op("int4_ops")),
	index("amz_transactions_order_idx").using("btree", table.order_id.asc().nullsLast().op("int4_ops"), table.user_id.asc().nullsLast().op("text_ops"), table.sku.asc().nullsLast().op("int4_ops")).where(sql`(order_id IS NOT NULL)`),
	index("amz_transactions_sku_idx").using("btree", table.user_id.asc().nullsLast().op("int4_ops"), table.sku.asc().nullsLast().op("text_ops")).where(sql`(sku IS NOT NULL)`),
	index("idx_amz_transactions_fees_by_user").using("btree", table.user_id.asc().nullsLast().op("text_ops"), table.order_id.asc().nullsLast().op("int4_ops"), table.amount_description.asc().nullsLast().op("int4_ops"), table.amount.asc().nullsLast().op("text_ops")).where(sql`((amount_type = 'Debit'::text) AND (transaction_event = ANY (ARRAY['ItemFee'::text, 'ServiceFee'::text, 'ItemFeeAdjustment'::text, 'Promotion'::text])) AND (amount <> (0)::numeric))`),
	index("idx_amz_transactions_refunds_by_user").using("btree", table.user_id.asc().nullsLast().op("int4_ops"), table.order_id.asc().nullsLast().op("int4_ops"), table.amount_description.asc().nullsLast().op("text_ops"), table.amount.asc().nullsLast().op("text_ops"), table.amount_type.asc().nullsLast().op("text_ops"), table.posted_date.asc().nullsLast().op("int4_ops")).where(sql`((transaction_type = 'Refund'::text) AND (amount <> (0)::numeric))`),
	unique("amz_transactions_unique").on(table.posted_date, table.transaction_type, table.user_id, table.order_id, table.marketplace_id, table.amount, table.currency, table.amount_type, table.amount_description, table.source_path),
]);

export const fba_pallet = pgTable("fba_pallet", {
	id: serial().primaryKey().notNull(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	width: numeric({ precision: 6, scale:  2 }),
	height: numeric({ precision: 6, scale:  2 }),
	length: numeric({ precision: 6, scale:  2 }),
	dimensionUnit: varchar().default('INCH').notNull(),
	weight: numeric({ precision: 6, scale:  2 }),
	weightUnit: varchar().default('POUNDS').notNull(),
	shipmentId: integer(),
	isStacked: boolean().default(false),
	carrierName: varchar(),
	fromSync: boolean().default(false),
}, (table) => [
	index("pallet_shipment_index").using("btree", table.shipmentId.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.shipmentId],
			foreignColumns: [fba_shipmentInAmazon.id],
			name: "fba_pallet_shipmentId_fba_shipment_id_fk"
		}).onDelete("cascade"),
]);

export const sellerIdsEverUsed_SoWeDontDupeTrials = pgTable("sellerIdsEverUsed_SoWeDontDupeTrials", {
	sellerId: varchar({ length: 128 }).primaryKey().notNull(),
	userUUID: uuid().notNull(),
});

export const sellerIdsBannedForDispute = pgTable("sellerIdsBannedForDispute", {
	sellerId: varchar({ length: 128 }).primaryKey().notNull(),
	userUUID: uuid().notNull(),
});

export const deletedUser = pgTable("deletedUser", {
	userUUID: varchar().primaryKey().notNull(),
	email: varchar().notNull(),
	date: numeric().notNull(),
	disputeInfo: jsonb().default({"version":-1}).notNull(),
});

export const feedback_campaigns_order_itemsInAmazon = amazon.table("feedback_campaigns_order_items", {
	id: serial().primaryKey().notNull(),
	user_id: integer().notNull(),
	order_id: text().notNull(),
	name: text().notNull(),
	sku: text().notNull(),
	asin: text().notNull(),
	quantity_ordered: integer().default(0).notNull(),
	quantity_shipped: integer().default(0).notNull(),
	item_price: numeric({ precision: 10, scale:  5 }).notNull(),
	item_tax: numeric({ precision: 10, scale:  5 }),
	item_promotion_discount: numeric({ precision: 10, scale:  5 }),
	shipping_price: numeric({ precision: 10, scale:  5 }),
	shipping_tax: numeric({ precision: 10, scale:  5 }),
	shipping_promotion_discount: numeric({ precision: 10, scale:  5 }),
	gift_wrap_price: numeric({ precision: 10, scale:  5 }),
	gift_wrap_tax: numeric({ precision: 10, scale:  5 }),
	currency: text(),
	created_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	synced_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	amazonMetadata: jsonb(),
}, (table) => [
	index().using("btree", table.asin.asc().nullsLast().op("text_ops")),
	index().using("btree", table.order_id.asc().nullsLast().op("text_ops")),
	index().using("btree", table.sku.asc().nullsLast().op("text_ops")),
	index().using("btree", table.user_id.asc().nullsLast().op("int4_ops")),
	index().using("btree", table.user_id.asc().nullsLast().op("text_ops"), table.order_id.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.order_id],
			foreignColumns: [feedback_campaigns_ordersInAmazon.order_id],
			name: "feedback_campaigns_order_items_order_id_fkey"
		}).onDelete("cascade"),
	unique("feedback_campaigns_order_items_unique").on(table.user_id, table.order_id, table.sku, table.asin),
]);

export const bulk_ungate_result = pgTable("bulk_ungate_result", {
	id: uuid().notNull(),
	user_uuid: uuid().notNull(),
	asin: varchar({ length: 16 }).notNull(),
	status: bulk_ungate_status().notNull(),
	json: jsonb().notNull(),
	attempts: integer().default(1).notNull(),
	lastAttempted: doublePrecision().default(sql`trunc((EXTRACT(epoch FROM now()) * (1000)::numeric))`),
}, (table) => [
	foreignKey({
			columns: [table.user_uuid],
			foreignColumns: [user.public_uuid],
			name: "bulk_ungate_result_user_uuid_fkey"
		}),
	unique("bulk_ungate_result_user_uuid_asin_key").on(table.user_uuid, table.asin),
]);

export const pgmigrations = pgTable("pgmigrations", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	run_on: timestamp({ mode: 'string' }).notNull(),
});

export const supplier = pgTable("supplier", {
	id: serial().primaryKey().notNull(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	name: varchar(),
	userId: integer().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "supplier_userId_fkey"
		}),
	unique("unique_name_user").on(table.name, table.userId),
]);

export const boxi_chat = pgTable("boxi_chat", {
	uuid: uuid().defaultRandom().primaryKey().notNull(),
	name: varchar({ length: 30 }).default(').notNull(),
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	owner: integer().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.owner],
			foreignColumns: [user.id],
			name: "boxi_chat_owner_fkey"
		}).onDelete("cascade"),
]);

export const log = pgTable("log", {
	id: serial().primaryKey().notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	source: text().notNull(),
	tags: text().array(),
	text: text().notNull(),
	json: jsonb(),
	commitHash: varchar().default(').notNull(),
	stack: jsonb().default([]).notNull(),
}, (table) => [
	index("idx_log_createdAt").using("btree", table.createdAt.asc().nullsLast().op("timestamptz_ops")),
	index("idx_log_tag").using("gin", table.tags.asc().nullsLast().op("array_ops")).with({fastupdate: "on"}),
]);

export const fba_batch = pgTable("fba_batch", {
	id: serial().primaryKey().notNull(),
	created_at: timestamp({ withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	name: varchar(),
	labelPrepPreference: text().default('SELLER_LABEL'),
	fromId: integer(),
	userId: integer(),
	targetCountry: varchar(),
	targetSubdivision: varchar(),
	packingType: text(),
	shipmentType: text().default('SPD'),
	fulfillmentType: text().default('FBA'),
	listingFeedId: varchar(),
	status: varchar().default('CHOOSE_PRODUCTS').notNull(),
	boxContentsProvider: varchar(),
	isPartnered: boolean().default(true),
	printBoxLabelsStep3: boolean(),
	autoFillListPrice: boolean().default(false),
	autoFillListPriceOperation: text().default('INCREASE'),
	autoFillListPriceFrom: text().default('BUY_BOX'),
	autoFillListPriceAmount: numeric({ precision: 6, scale:  2 }).default('0'),
	showSupplierInput: boolean().default(true),
	showBuyCostInput: boolean().default(true),
	showDatePurchasedInput: boolean().default(true),
	printFNSKUAfterAddingToShipment: boolean().default(false),
	printFNSKUAfterIncreaseQuantityInShipment: boolean().default(false),
	printFNSKUAfterAssigningToBox: boolean().default(false),
	printFNSKUAfterIncreaseQuantityInBox: boolean().default(false),
	inboundPlanId: varchar(),
	inboundErrors: jsonb(),
	ready_to_ship: timestamp({ mode: 'string' }),
	freightClass: varchar(),
	version: varchar().default('1'),
	step1EndDate: timestamp({ withTimezone: true, mode: 'string' }),
	step2EndDate: timestamp({ withTimezone: true, mode: 'string' }),
	step3EndDate: timestamp({ withTimezone: true, mode: 'string' }),
	batchRecipe: jsonb(),
}, (table) => [
	index("batch_userId_index").using("btree", table.userId.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.fromId],
			foreignColumns: [address.id],
			name: "fba_batch_fromId_address_id_fk"
		}),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "fba_batch_userId_user_id_fk"
		}).onDelete("cascade"),
]);

export const disputeSession = pgTable("disputeSession", {
	userUUID: uuid().notNull(),
	at: numeric().notNull(),
	sesh: jsonb().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userUUID],
			foreignColumns: [user.public_uuid],
			name: "disputeSession_userUUID_fkey"
		}),
	unique("disputeSession_userUUID_at_key").on(table.userUUID, table.at),
]);

export const fba_shipment_itemInAmazon = amazon.table("fba_shipment_item", {
	id: serial().primaryKey().notNull(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	asin: varchar(),
	sku: varchar(),
	fnSku: varchar(),
	quantity: integer(),
	prepDetails: jsonb(),
	shipmentId: integer(),
	fbaItemId: integer(),
	quantityInCase: integer(),
	quantityReceived: integer(),
	fromSync: boolean().default(false),
	condition: varchar(),
	whenQuantityReceivedFirstMatchedQuantity: timestamp({ mode: 'string' }),
	amazonMetadata: jsonb().notNull(),
}, (table) => [
	index("shipmentIdItem_index").using("btree", table.shipmentId.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.fbaItemId],
			foreignColumns: [fba_itemInAmazon.id],
			name: "fba_shipment_item_fbaItemId_fba_item_id_fk"
		}),
	foreignKey({
			columns: [table.shipmentId],
			foreignColumns: [fba_shipmentInAmazon.id],
			name: "fba_shipment_item_shipmentId_fba_shipment_id_fk"
		}).onDelete("cascade"),
]);

export const amz_ordersInAmazon = amazon.table("amz_orders", {
	order_id: text().notNull(),
	order_status: text().notNull(),
	user_id: integer().notNull(),
	marketplace_id: text().notNull(),
	order_date: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	fulfillment_channel: text().notNull(),
	sales_channel: text().notNull(),
	ship_service_level: text(),
	order_type: text(),
	is_prime: boolean().default(false),
	is_replacement_order: boolean().default(false),
	is_sold_by_ab: boolean().default(false),
	is_global_express_enabled: boolean().default(false),
	created_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	synced_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	encrypted_buyer_email: text(),
	earliest_shipping_date: timestamp({ withTimezone: true, mode: 'string' }),
	number_of_items_shipped: integer().default(0),
	number_of_items_unshipped: integer().default(0),
	has_regulated_items: boolean().default(false),
	latest_shipping_date: timestamp({ withTimezone: true, mode: 'string' }),
	is_access_point_order: boolean().default(false),
	payment_method: text(),
	order_total_amount: numeric({ precision: 10, scale:  2 }),
	currency: text(),
	shipping_state: text(),
	shipping_postal_code: text(),
	shipping_city: text(),
	shipping_country_code: text(),
	earliest_delivery_date: timestamp({ withTimezone: true, mode: 'string' }),
	latest_delivery_date: timestamp({ withTimezone: true, mode: 'string' }),
	amazonMetadata: jsonb().notNull(),
}, (table) => [
	index("amz_orders_date_user_order_idx").using("btree", table.order_date.asc().nullsLast().op("int4_ops"), table.user_id.asc().nullsLast().op("text_ops"), table.order_id.asc().nullsLast().op("timestamptz_ops")),
	index("amz_orders_order_id_idx").using("btree", table.order_id.asc().nullsLast().op("text_ops")),
	index("amz_orders_user_id_idx").using("btree", table.user_id.asc().nullsLast().op("int4_ops")),
	unique("amz_orders_user_order_unique").on(table.order_id, table.user_id),
]);

export const disputeIpHistory = pgTable("disputeIpHistory", {
	userUUID: uuid().notNull(),
	lastUsedIp: numeric().notNull(),
	ip: varchar().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userUUID],
			foreignColumns: [user.public_uuid],
			name: "disputeIpHistory_userUUID_fkey"
		}),
	unique("disputeIpHistory_userUUID_ip_key").on(table.userUUID, table.ip),
]);

export const wfs_batch_json = pgTable("wfs_batch_json", {
	id: varchar({ length: 36 }).primaryKey().notNull(),
	userId: integer().notNull(),
	json: jsonb().notNull(),
});

export const feedback_campaigns = pgTable("feedback_campaigns", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	status: feedback_campaign_status().default('INACTIVE').notNull(),
	target: feedback_campaign_target().default('SEND_ONLY_TO_NEW_CUSTOMERS').notNull(),
	priority: integer().default(1).notNull(),
	exclude_fbm: boolean().default(false).notNull(),
	exclude_promo: boolean().default(false).notNull(),
	exclude_negative_feedback: boolean().default(false).notNull(),
	product_selection_type: feedback_product_selection_type().default('APPLY_CAMPAIGN_TO_SELECTED_PRODUCT').notNull(),
	selected_product_count: integer().default(0).notNull(),
	campaign_type: feedback_campaign_type().default('USER_CUSTOM').notNull(),
	user_id: integer(),
	created_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updated_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
	index().using("btree", table.priority.asc().nullsLast().op("int4_ops")),
	index().using("btree", table.status.asc().nullsLast().op("enum_ops")),
	index().using("btree", table.user_id.asc().nullsLast().op("int4_ops")),
]);

export const feedback_message_templates = pgTable("feedback_message_templates", {
	id: serial().primaryKey().notNull(),
	campaign_id: integer().notNull(),
	name: varchar({ length: 255 }).notNull(),
	subject: text().notNull(),
	message_type: feedback_campaign_type().default('USER_CUSTOM').notNull(),
	email_content: text().notNull(),
	send_days: integer().default(5).notNull(),
	send_days_type: feedback_send_days_type().default('DELIVERY_DATE').notNull(),
	send_time: time().default('00:00:00').notNull(),
	exclude_refunded: boolean().default(false).notNull(),
	user_id: integer(),
	created_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updated_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
	index().using("btree", table.campaign_id.asc().nullsLast().op("int4_ops")),
	index().using("btree", table.user_id.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.campaign_id],
			foreignColumns: [feedback_campaigns.id],
			name: "feedback_message_templates_campaign_id_fkey"
		}).onDelete("cascade"),
]);

export const feedback_campaign_products = pgTable("feedback_campaign_products", {
	id: serial().primaryKey().notNull(),
	campaign_id: integer().notNull(),
	product_id: integer(),
	sku: varchar({ length: 255 }).notNull(),
	asin: varchar({ length: 20 }),
	user_id: integer(),
	created_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
	index().using("btree", table.campaign_id.asc().nullsLast().op("int4_ops")),
	index().using("btree", table.sku.asc().nullsLast().op("text_ops")),
	index().using("btree", table.user_id.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.campaign_id],
			foreignColumns: [feedback_campaigns.id],
			name: "feedback_campaign_products_campaign_id_fkey"
		}).onDelete("cascade"),
	unique("unique_campaign_product").on(table.campaign_id, table.sku, table.user_id),
]);

export const address = pgTable("address", {
	id: serial().primaryKey().notNull(),
	type: text(),
	name: varchar(),
	company: varchar({ length: 1024 }),
	address1: varchar(),
	address2: varchar(),
	city: varchar(),
	state: varchar(),
	country: varchar().default('US'),
	zipcode: varchar(),
	phone: varchar(),
	email: varchar(),
	userId: integer(),
	fromSync: boolean().default(false),
	manuallyHidden: boolean().default(false).notNull(),
}, (table) => [
	index("idx_address_userId").using("btree", table.userId.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "address_userId_user_id_fk"
		}).onDelete("cascade"),
]);

export const fba_itemInAmazon = amazon.table("fba_item", {
	id: serial().primaryKey().notNull(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	name: varchar(),
	asin: varchar(),
	sku: varchar(),
	fnSku: varchar(),
	quantity: integer(),
	quantityInCase: integer(),
	condition: varchar(),
	buyCost: numeric(),
	datePurchased: date(),
	expirationDate: date(),
	destinations: jsonb().default([]),
	supplierId: integer(),
	batchId: integer(),
	image: varchar(),
	listingId: integer(),
	listPrice: numeric(),
	conditionNotes: varchar(),
	category: varchar(),
	manufacturingLotCode: varchar(),
	labelOwner: text().default('SELLER'),
	prepOwner: text().default('SELLER'),
	amazonMetadata: jsonb().notNull(),
	prepCategory: varchar().default(').notNull(),
}, (table) => [
	index("batch_index").using("btree", table.batchId.asc().nullsLast().op("int4_ops")),
	index("listing_index").using("btree", table.listingId.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.batchId],
			foreignColumns: [fba_batch.id],
			name: "fba_item_batchId_fba_batch_id_fk"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.listingId],
			foreignColumns: [listingInAmazon.id],
			name: "fba_item_listingId_listing_id_fk"
		}),
	foreignKey({
			columns: [table.supplierId],
			foreignColumns: [supplier.id],
			name: "fba_item_supplierId_supplier_id_fk"
		}),
]);

export const catalogInAmazon = amazon.table("catalog", {
	id: serial().primaryKey().notNull(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	name: varchar(),
	description: varchar(),
	asin: varchar(),
	gtin: varchar(),
	ean: varchar(),
	upc: varchar(),
	type: varchar(),
	size: jsonb(),
	country: varchar(),
	components: varchar({ length: 2048 }),
	warranty: varchar(),
	condition: varchar({ length: 2048 }),
	image0: varchar(),
	image1: varchar(),
	image2: varchar(),
	image3: varchar(),
	image4: varchar(),
	image5: varchar(),
	image6: varchar(),
	image7: varchar(),
	manufacturer: varchar(),
	brand: varchar(),
	style: varchar(),
	price: numeric({ precision: 10, scale:  2 }),
	currency: varchar().default('USD').notNull(),
	weight: numeric({ precision: 10, scale:  2 }),
	weightUnit: varchar().default('ounces'),
	packageQuantity: numeric({ precision: 10, scale:  2 }),
	packageDimensionUnit: varchar(),
	packageWeight: numeric({ precision: 10, scale:  2 }),
	packageWeightUnit: varchar(),
	packageLength: numeric({ precision: 10, scale:  2 }),
	packageWidth: numeric({ precision: 10, scale:  2 }),
	packageHeight: numeric({ precision: 10, scale:  2 }),
	cpsiaCautionaryStatement: varchar(),
	bulletPoint: varchar(),
	batteryType: varchar(),
	numberOfBatteries: integer(),
	batteryRequired: boolean(),
	batteryIncluded: boolean(),
	batterySpecs: jsonb(),
	batteryCells: integer(),
	batteryInfo: jsonb(),
	supplierDgHzRegulation: varchar().default('not_applicable'),
	locale: varchar().default('en_US').notNull(),
	issues: jsonb().default([]),
	status: varchar(),
	fromSync: boolean().default(false),
	isbn: varchar(),
	identifierResyncStatus: varchar().default('PENDING'),
	category: varchar(),
	itemId: text(),
	amazonMetadata: jsonb().notNull(),
	marketplaceId: varchar({ length: 16 }).default('ATVPDKIKX0DER').notNull(),
}, (table) => [
	index("IDX_3c60e35c0919180df3e084ed02").using("btree", table.asin.asc().nullsLast().op("text_ops")),
	index().using("btree", table.gtin.asc().nullsLast().op("text_ops")),
	index().using("btree", table.upc.asc().nullsLast().op("text_ops")),
	unique("UQ_3c60e35c0919180df3e084ed02a").on(table.asin),
]);

export const analytics_jobsInAmazon = amazon.table("analytics_jobs", {
	id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
	job_type: text().notNull(),
	api_path: text().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	user_id: bigint({ mode: "number" }).notNull(),
	range_start_at: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	range_end_at: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	status: job_statusInAmazon().default('queued').notNull(),
	attempts: integer().default(0).notNull(),
	lease_until: timestamp({ withTimezone: true, mode: 'string' }),
	last_error: text(),
	created_at: timestamp({ withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	index("idx_analytics_jobs_claim").using("btree", table.status.asc().nullsLast().op("enum_ops")),
	index("idx_analytics_jobs_range_start").using("btree", table.range_start_at.asc().nullsLast().op("timestamptz_ops")),
	index("idx_analytics_jobs_reclaim").using("btree", table.lease_until.asc().nullsLast().op("timestamptz_ops")),
	unique("analytics_jobs_unique_range").on(table.job_type, table.api_path, table.user_id, table.range_start_at, table.range_end_at),
]);

export const packing_optionInAmazon = amazon.table("packing_option", {
	id: serial().primaryKey().notNull(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	packingOptionId: varchar(),
	fees: jsonb(),
	discounts: jsonb(),
	supportedShippingConfigurations: jsonb(),
	packingGroups: jsonb(),
	batchId: integer(),
	status: varchar(),
	packingConfigurations: jsonb(),
	amazonMetadata: jsonb().notNull(),
}, (table) => [
	index("packing_option_batch_index").using("btree", table.batchId.asc().nullsLast().op("int4_ops")),
	index("packing_option_id_index").using("btree", table.packingOptionId.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.batchId],
			foreignColumns: [fba_batch.id],
			name: "packing_option_batchId_fba_batch_id_fk"
		}).onDelete("cascade"),
]);

export const fba_shipmentInAmazon = amazon.table("fba_shipment", {
	id: serial().primaryKey().notNull(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	shipmentId: varchar(),
	fulfillmentCenterId: varchar(),
	destinationAddress: jsonb(),
	labelPrepType: text(),
	estimatedFee: jsonb(),
	status: text().default('CREATED'),
	fromId: integer(),
	batchId: integer(),
	userId: integer(),
	cartonContentFeedId: varchar(),
	cartonContentError: varchar(),
	packingType: text().default('INDIVIDUAL'),
	isParnterCarrier: boolean().default(true),
	transportType: text().default('SPD'),
	estimateCurrency: varchar().default('USD'),
	estimateAmount: numeric({ precision: 9, scale:  2 }),
	confirmDeadline: timestamp({ withTimezone: true, mode: 'string' }),
	voidDeadline: timestamp({ withTimezone: true, mode: 'string' }),
	shipmentName: varchar(),
	boxContentSource: varchar(),
	casesRequired: boolean(),
	fromSync: boolean().default(false),
	itemSyncStatus: varchar(),
	itemSyncErrors: jsonb(),
	itemSyncRetries: integer().default(0),
	transportSyncStatus: varchar(),
	transportSyncErrors: jsonb(),
	transportSyncRetries: integer().default(0),
	declaredValue: numeric({ precision: 9, scale:  2 }),
	declaredValueCurrency: varchar().default('USD'),
	freightClass: text(),
	freightReadyDate: timestamp({ withTimezone: true, mode: 'string' }),
	previewFreightClass: text(),
	previewFreightPickupDate: timestamp({ withTimezone: true, mode: 'string' }),
	ltlBoxCount: integer(),
	ltlTotalWeight: numeric({ precision: 7, scale:  2 }),
	ltlTotalWeightUnit: varchar().default('pounds'),
	previewFreightDeliveryDate: timestamp({ withTimezone: true, mode: 'string' }),
	amazonCalculatedValue: numeric({ precision: 9, scale:  2 }),
	amazonValueCurrency: varchar().default('USD'),
	amazonLTLReferenceId: varchar(),
	isBillOfLadingAvailable: boolean(),
	carrierName: varchar(),
	last_updated: timestamp({ mode: 'string' }),
	shipped_date: timestamp({ mode: 'string' }),
	transportSubmissionError: varchar(),
	ready_to_ship: timestamp({ mode: 'string' }),
	inboundId: varchar(),
	boxes: jsonb(),
	inboundPlacementOptionId: varchar(),
	placementOptionId: integer(),
	placementError: jsonb(),
	transportationOptionId: varchar(),
	deliveryWindowOptionStatus: varchar(),
	deliveryWindowOptionError: jsonb(),
	billOfLadingUrl: varchar(),
	storedBillOfLadingUrl: varchar(),
	bolErrors: jsonb(),
	shippingLabelUrl: varchar(),
	storedShippingLabelUrl: varchar(),
	billOfLadingNumber: varchar(),
	freightBillNumber: jsonb(),
	contactName: text(),
	contactEmail: text(),
	contactPhone: text(),
	step4EndDate: timestamp({ withTimezone: true, mode: 'string' }),
	amazonMetadata: jsonb().notNull(),
}, (table) => [
	index("carton_content_index").using("btree", table.cartonContentFeedId.asc().nullsLast().op("text_ops")),
	index("shipmentId_index").using("btree", table.shipmentId.asc().nullsLast().op("text_ops")),
	index("shipment_batch_index").using("btree", table.batchId.asc().nullsLast().op("int4_ops")),
	index("status_index").using("btree", table.status.asc().nullsLast().op("text_ops")),
	index("userId_index").using("btree", table.userId.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.batchId],
			foreignColumns: [fba_batch.id],
			name: "fba_shipment_batchId_fba_batch_id_fk"
		}),
	foreignKey({
			columns: [table.fromId],
			foreignColumns: [address.id],
			name: "fba_shipment_fromId_address_id_fk"
		}),
	foreignKey({
			columns: [table.placementOptionId],
			foreignColumns: [placement_optionInAmazon.id],
			name: "fba_shipment_placementOptionId_placement_option_id_fk"
		}),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "fba_shipment_userId_user_id_fk"
		}).onDelete("cascade"),
]);

export const fba_boxInAmazon = amazon.table("fba_box", {
	id: serial().primaryKey().notNull(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	width: numeric({ precision: 6, scale:  2 }),
	height: numeric({ precision: 6, scale:  2 }),
	length: numeric({ precision: 6, scale:  2 }),
	dimensionUnit: varchar().default('inches').notNull(),
	weight: numeric({ precision: 7, scale:  2 }),
	weightUnit: varchar().default('pounds').notNull(),
	insuredValue: numeric({ precision: 9, scale:  2 }),
	insuredValueUnit: varchar().default('USD').notNull(),
	packageClientReferenceId: varchar(),
	shipmentId: integer(),
	isStacked: boolean().default(false),
	carrierName: varchar(),
	trackingId: varchar(),
	inboundPackageStatus: text(),
	cartonId: varchar(),
	displayIndex: integer().notNull(),
	fromSync: boolean().default(false),
	hasPrintedLabel: boolean().default(false),
	batchId: integer(),
	packingOptionId: integer(),
	packingGroupId: varchar(),
	packingItems: jsonb(),
	fbaBoxId: varchar(),
	amazonMetadata: jsonb(),
}, (table) => [
	index("box_batch_index").using("btree", table.batchId.asc().nullsLast().op("int4_ops")),
	index("box_shipment_index").using("btree", table.shipmentId.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.batchId],
			foreignColumns: [fba_batch.id],
			name: "fba_box_batchId_fba_batch_id_fk"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.packingOptionId],
			foreignColumns: [packing_optionInAmazon.id],
			name: "fba_box_packingOptionId_packing_option_id_fk"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.shipmentId],
			foreignColumns: [fba_shipmentInAmazon.id],
			name: "fba_box_shipmentId_fba_shipment_id_fk"
		}).onDelete("cascade"),
]);

export const wfs_listing_sync = pgTable("wfs_listing_sync", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 1000 }).notNull(),
	wpid: varchar({ length: 100 }),
	gtin: varchar({ length: 100 }),
	ean: varchar({ length: 100 }),
	upc: varchar({ length: 100 }),
	sku: varchar({ length: 200 }),
	description: text(),
	condition: varchar({ length: 100 }),
	price: numeric(),
	type: varchar({ length: 200 }),
	shelf: varchar({ length: 2000 }),
	mainImageUrl: text(),
	wfsEligible: boolean(),
	isDuplicate: boolean(),
	userId: integer().notNull(),
	variantGroupId: text(),
	isPrimary: boolean(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	publishedStatus: wfs_published_status(),
	lifecycleStatus: wfs_lifecycle_status(),
	itemId: text(),
	reviews: integer(),
	rating: numeric({ precision: 10, scale:  2 }),
	searchable: boolean(),
	fulfillmentLagTime: varchar({ length: 30 }),
	offerStartDate: timestamp({ withTimezone: true, mode: 'string' }),
	offerEndDate: timestamp({ withTimezone: true, mode: 'string' }),
	variantGroupAttributes: jsonb(),
	statusChangeReason: text(),
	comparisonPrice: numeric(),
	msrp: numeric(),
	wfsSalesRestriction: text(),
	itemPageUrl: text(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "wfs_listing_sync_userId_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const inventory_detailsInAmazon = amazon.table("inventory_details", {
	id: serial().primaryKey().notNull(),
	fulfillableQuantity: integer(),
	inboundWorkingQuantity: integer(),
	inboundShippedQuantity: integer(),
	inboundReceivingQuantity: integer(),
	reservedQuantity: jsonb(),
	researchingQuantity: jsonb(),
	unfulfillableQuantity: jsonb(),
	futureSupplyQuantity: jsonb(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	sellerSku: varchar(),
	fnSku: varchar(),
	totalQuantity: integer(),
	pendingCustomerOrderInTransit: integer(),
	latest_notification_updated_at: timestamp({ withTimezone: true, mode: 'string' }),
	listingId: integer(),
	asin: varchar(),
	userId: integer(),
	fromSync: boolean().default(false),
	amazonMetadata: jsonb().notNull(),
}, (table) => [
	index("IDX_1530e623ff87676d2d7b8df315").using("btree", table.sellerSku.asc().nullsLast().op("text_ops")),
	index("ID_LISTING_IDX").using("btree", table.listingId.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.listingId],
			foreignColumns: [listingInAmazon.id],
			name: "inventory_details_listingId_listing_id_fk"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "inventory_details_userId_user_id_fk"
		}),
]);

export const placement_optionInAmazon = amazon.table("placement_option", {
	id: serial().primaryKey().notNull(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	expiration: timestamp({ mode: 'string' }).defaultNow().notNull(),
	placementOptionId: varchar(),
	fees: jsonb(),
	discounts: jsonb(),
	shipments: jsonb(),
	batchId: integer(),
	status: varchar(),
	errors: jsonb(),
	transportOptionRetries: integer().default(0),
	transportOptionStatus: varchar(),
	amazonMetadata: jsonb().notNull(),
}, (table) => [
	index("placement_option_batch_index").using("btree", table.batchId.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.batchId],
			foreignColumns: [fba_batch.id],
			name: "placement_option_batchId_fba_batch_id_fk"
		}).onDelete("cascade"),
]);

export const shipment_optionInAmazon = amazon.table("shipment_option", {
	id: serial().primaryKey().notNull(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	expiration: timestamp({ mode: 'string' }).defaultNow().notNull(),
	name: varchar(),
	amazonReferenceId: varchar(),
	inboundShipmentId: varchar(),
	boxes: jsonb(),
	fulfillmentCenter: jsonb(),
	freightClass: varchar(),
	estimateAmount: numeric({ precision: 9, scale:  2 }),
	estimateCurrency: varchar().default('USD'),
	transportationOptions: jsonb(),
	placementOptionId: integer(),
	status: varchar(),
	loadingStatus: varchar().default('PROCESSING'),
	items: jsonb(),
	amazonMetadata: jsonb().notNull(),
}, (table) => [
	index("shipment_option_placement_option_index").using("btree", table.placementOptionId.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.placementOptionId],
			foreignColumns: [placement_optionInAmazon.id],
			name: "shipment_option_placementOptionId_placement_option_id_fk"
		}).onDelete("cascade"),
]);

export const transportation_optionInAmazon = amazon.table("transportation_option", {
	id: serial().primaryKey().notNull(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	carrier: jsonb(),
	carrierAppointment: jsonb(),
	preconditions: jsonb(),
	cost: numeric({ precision: 6, scale:  2 }),
	costCurrency: varchar().default('USD'),
	shippingMode: varchar(),
	shippingSolution: varchar(),
	transportationOptionId: varchar(),
	expiration: timestamp({ mode: 'string' }),
	status: text().default('OFFERED'),
	shipmentId: integer(),
	placementOptionId: integer(),
	voidableUntil: timestamp({ mode: 'string' }),
	amazonMetadata: jsonb().notNull(),
}, (table) => [
	index().using("btree", table.placementOptionId.asc().nullsLast().op("int4_ops")),
	index().using("btree", table.shipmentId.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.placementOptionId],
			foreignColumns: [placement_optionInAmazon.id],
			name: "transportation_option_placementOptionId_placement_option_id_fk"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.shipmentId],
			foreignColumns: [fba_shipmentInAmazon.id],
			name: "transportation_option_shipmentId_fba_shipment_id_fk"
		}).onDelete("cascade"),
]);

export const listing_quantityInAmazon = amazon.table("listing_quantity", {
	id: serial().primaryKey().notNull(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	asin: varchar(),
	sku: varchar(),
	fulfillmentType: text(),
	quantity: integer(),
	inboundWorkingQuantity: integer(),
	inboundShippedQuantity: integer(),
	inboundReceivingQuantity: integer(),
	reservedQuantity: integer(),
	unfulfillableQuantity: integer(),
	researchingQuantity: integer(),
	userId: integer(),
	fnsku: varchar({ length: 60 }),
	amazonMetadata: jsonb().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "listing_quantity_userId_user_id_fk"
		}).onDelete("cascade"),
]);

export const listing_updateInAmazon = amazon.table("listing_update", {
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	asin: varchar(),
	sku: varchar(),
	fulfillmentType: text(),
	quantity: integer(),
	price: numeric({ precision: 10, scale:  2 }),
	condition: varchar({ length: 2048 }),
	name: varchar(),
	description: varchar(),
	status: varchar(),
	merchantShippingGroup: varchar(),
	userId: integer(),
	amazonMetadata: jsonb().notNull(),
	fbmShippingTemplateId: varchar().default(').notNull(),
}, (table) => [
	index("LISTING_UPDATE_IDX_USERID").using("btree", table.userId.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "listing_update_userId_user_id_fk"
		}).onDelete("cascade"),
]);

export const feedback_email_to_sendInAmazon = amazon.table("feedback_email_to_send", {
	id: serial().primaryKey().notNull(),
	order_id: varchar({ length: 255 }).notNull(),
	subject: text().notNull(),
	email_content: text().notNull(),
	buyer_email: varchar({ length: 255 }).notNull(),
	to_send_date: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	user_id: integer().notNull(),
	campaign_id: integer(),
	template_id: integer(),
	status: varchar({ length: 50 }).default('\'PENDING\'').notNull(),
	sent_at: timestamp({ withTimezone: true, mode: 'string' }),
	error_message: text(),
	created_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updated_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	amazonMetadata: jsonb().notNull(),
}, (table) => [
	index().using("btree", table.order_id.asc().nullsLast().op("text_ops")),
	index().using("btree", table.status.asc().nullsLast().op("text_ops")),
	index().using("btree", table.status.asc().nullsLast().op("timestamptz_ops"), table.to_send_date.asc().nullsLast().op("text_ops")),
	index().using("btree", table.to_send_date.asc().nullsLast().op("timestamptz_ops")),
	index().using("btree", table.user_id.asc().nullsLast().op("int4_ops")),
	unique("unique_order_user").on(table.order_id, table.user_id),
]);

export const update_notifications = pgTable("update_notifications", {
	id: serial().primaryKey().notNull(),
	type: numeric().notNull(),
	name: varchar().notNull(),
	tagline: varchar().notNull(),
	body: varchar().notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	publishAt: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	expireAt: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const feedback_campaigns_ordersInAmazon = amazon.table("feedback_campaigns_orders", {
	id: serial().primaryKey().notNull(),
	order_date: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	shipping_date: timestamp({ withTimezone: true, mode: 'string' }),
	delivery_date: timestamp({ withTimezone: true, mode: 'string' }),
	order_id: varchar({ length: 255 }).notNull(),
	marketplace_id: varchar({ length: 255 }).notNull(),
	encrypted_buyer_email: text(),
	user_id: integer().notNull(),
	campaign_id: integer(),
	status: varchar({ length: 100 }),
	order_status: varchar({ length: 100 }),
	last_sent_date: timestamp({ withTimezone: true, mode: 'string' }),
	blacklisted: boolean().default(false).notNull(),
	created_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updated_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	amazonMetadata: jsonb(),
}, (table) => [
	index().using("btree", table.campaign_id.asc().nullsLast().op("int4_ops")),
	index().using("btree", table.marketplace_id.asc().nullsLast().op("text_ops")),
	index().using("btree", table.order_date.asc().nullsLast().op("timestamptz_ops")),
	index().using("btree", table.user_id.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.campaign_id],
			foreignColumns: [feedback_campaigns.id],
			name: "feedback_campaigns_orders_campaign_id_fkey"
		}).onDelete("cascade"),
	unique("feedback_campaigns_orders_order_id_unique").on(table.order_id),
]);

export const carrier_accounts_ups = pgTable("carrier_accounts_ups", {
	uuid: uuid().defaultRandom().primaryKey().notNull(),
	clientId: varchar().notNull(),
	clientSecret: varchar().notNull(),
	billingAccountAkaAccountNumber: varchar().notNull(),
	label: varchar().default(').notNull(),
});

export const carrier_accounts_fedex = pgTable("carrier_accounts_fedex", {
	uuid: uuid().defaultRandom().primaryKey().notNull(),
	apiKeyAkaClientId: varchar().notNull(),
	secretKeyAkaClientSecret: varchar().notNull(),
	billingAccount: varchar().notNull(),
	label: varchar().default(').notNull(),
});

export const carrierLabels = pgTable("carrierLabels", {
	uuid: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp({ mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	labelBase64: varchar().default(').notNull(),
	userUUID: uuid().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	lastSyncedBoxemDate: bigint({ mode: "number" }).default(0).notNull(),
	project: jsonb().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userUUID],
			foreignColumns: [user.public_uuid],
			name: "user_uuid_fkey"
		}),
]);

export const spapi_stats = pgTable("spapi_stats", {
	id: uuid().primaryKey().notNull(),
	url: varchar().notNull(),
	method: http_method().notNull(),
	startTime: numeric().notNull(),
	endTime: numeric().notNull(),
	count: integer().notNull(),
	userUUID: uuid().notNull(),
}, (table) => [
	unique("spapi_stats_url_method_startTime_userUUID_key").on(table.url, table.method, table.startTime, table.userUUID),
]);

export const restock = pgTable("restock", {
	sourceStoreUrl: varchar().notNull(),
	sourcePrice: numeric().notNull(),
	asin: varchar({ length: 10 }).notNull(),
	userUUID: uuid().notNull(),
	uuid: uuid().defaultRandom().primaryKey().notNull(),
	sourceUnits: numeric().default('1').notNull(),
	amazonUnits: numeric().default('1').notNull(),
	condition: varchar().default('New').notNull(),
	originalEnteredCost: numeric().default('0').notNull(),
	created: numeric().default('trunc((EXTRACT(epoch FROM CURRENT_TIMESTAMP) * (1000)::numeric))').notNull(),
	targetROI: numeric().default('0.3').notNull(),
	scrapePrice: boolean().default(true).notNull(),
	leadDaysOverrideGlobal: numeric().default('0').notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userUUID],
			foreignColumns: [user.public_uuid],
			name: "userUUID_fkey"
		}),
]);

export const wfs_shipment_sync = pgTable("wfs_shipment_sync", {
	id: serial().primaryKey().notNull(),
	shipmentId: varchar({ length: 30 }),
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	userId: integer(),
	inboundOrderId: varchar({ length: 100 }),
	fcName: varchar({ length: 100 }),
	addressLine1: varchar({ length: 255 }),
	city: varchar({ length: 100 }),
	stateCode: varchar({ length: 20 }),
	countryCode: varchar({ length: 20 }),
	postalCode: varchar({ length: 20 }),
	status: varchar({ length: 100 }),
	shipmentUnits: integer(),
	receivedUnits: integer(),
	expectedDeliveryDate: timestamp({ mode: 'string' }),
	updatedExpectedDeliveryDate: timestamp({ mode: 'string' }),
	carrierName: varchar({ length: 30 }),
	trackingNo: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "wfs_shipment_sync_userId_fkey"
		}).onDelete("cascade"),
]);

export const wfs_shipment_item_sync = pgTable("wfs_shipment_item_sync", {
	id: serial().primaryKey().notNull(),
	userId: integer(),
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	shipmentId: varchar({ length: 30 }),
	gtin: varchar({ length: 100 }),
	sku: varchar({ length: 100 }),
	itemQty: integer(),
	vendorPackQty: integer(),
	innerPackQty: integer(),
	damagedQty: integer(),
	receivedQty: integer(),
	fillRate: numeric(),
	expectedDeliveryDate: timestamp({ mode: 'string' }),
	updatedExpectedDeliveryDate: timestamp({ mode: 'string' }),
	shipNodeName: varchar({ length: 100 }),
	receivingStartDate: timestamp({ mode: 'string' }),
	receivedUnitsAtFc: integer(),
	imageUrl: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "wfs_shipment_item_sync_userId_fkey"
		}).onDelete("cascade"),
]);

export const box_templates = pgTable("box_templates", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	sellerId: integer(),
	name: varchar({ length: 32 }).default('Default').notNull(),
	length: numeric().default('0').notNull(),
	width: numeric().default('0').notNull(),
	height: numeric().default('0').notNull(),
	weight: numeric().default('0').notNull(),
	isAutoGenerated: boolean().default(false).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.sellerId],
			foreignColumns: [user.id],
			name: "box_templates_sellerId_fkey"
		}).onDelete("cascade"),
]);

export const wfs_inventory_sync = pgTable("wfs_inventory_sync", {
	id: serial().primaryKey().notNull(),
	userId: integer(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	itemId: text(),
	sku: text(),
	gtin: text(),
	availableUnits: integer(),
	inboundUnits: integer(),
	unavailableUnits: integer(),
	onhandUnits: integer(),
	inventoryAge: jsonb(),
	inventoryInsights: jsonb(),
	imageUrl: text(),
	reviews: integer(),
	rating: numeric(),
	wfsEligible: boolean(),
	upc: text(),
	name: text(),
	price: numeric(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "wfs_inventory_sync_userId_fkey"
		}).onDelete("cascade"),
]);

export const wfs_listing = pgTable("wfs_listing", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 1000 }).notNull(),
	wpid: varchar({ length: 100 }),
	gtin: varchar({ length: 100 }),
	ean: varchar({ length: 100 }),
	upc: varchar({ length: 100 }),
	sku: varchar({ length: 200 }).notNull(),
	description: text(),
	condition: varchar({ length: 100 }),
	price: numeric(),
	type: varchar({ length: 255 }),
	shelf: varchar({ length: 2000 }),
	mainImageUrl: text(),
	wfsEligible: boolean().default(false).notNull(),
	isDuplicate: boolean(),
	userId: integer().notNull(),
	variantGroupId: text(),
	isPrimary: boolean(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	publishedStatus: wfs_published_status().notNull(),
	lifecycleStatus: wfs_lifecycle_status().notNull(),
	itemId: varchar({ length: 50 }),
	availToSellQuantity: integer(),
	fulfillmentLagTime: varchar({ length: 30 }),
	offerStartDate: timestamp({ withTimezone: true, mode: 'string' }),
	offerEndDate: timestamp({ withTimezone: true, mode: 'string' }),
	reviews: integer(),
	rating: numeric({ precision: 10, scale:  2 }),
	searchable: boolean(),
	feedId: varchar({ length: 60 }),
	listingFailed: boolean(),
	variantGroupAttributes: jsonb(),
	inboundQuantity: integer(),
	statusChangeReason: text(),
	comparisonPrice: numeric(),
	msrp: numeric(),
	wfsSalesRestriction: text(),
	itemPageUrl: text(),
}, (table) => [
	index().using("btree", table.sku.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "wfs_listing_userId_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	unique("wfs_listing_sku_unique").on(table.sku, table.userId),
]);

export const bulkUngateStats = pgTable("bulkUngateStats", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	start: bigint({ mode: "number" }).notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	end: bigint({ mode: "number" }).notNull(),
	ungated: numeric().notNull(),
	gated: numeric().notNull(),
	restricted: numeric().notNull(),
	errored: numeric().notNull(),
}, (table) => [
	index("bulkUngateEnd").using("btree", table.end.asc().nullsLast().op("int8_ops")),
	index("bulkUngateStart").using("btree", table.start.asc().nullsLast().op("int8_ops")),
]);

export const user = pgTable("user", {
	id: serial().primaryKey().notNull(),
	name: varchar().notNull(),
	email: varchar().notNull(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	role: varchar().default('SELLER'),
	sellerId: varchar(),
	accessToken: varchar({ length: 1024 }),
	refreshToken: varchar({ length: 1024 }),
	recurlyPlanCode: varchar(),
	public_uuid: uuid().defaultRandom().notNull(),
	email_verified: boolean().default(false).notNull(),
	password: varchar().default(').notNull(),
	selectedPlan: text(),
	active_campaign_contact_id: text(),
	inventoryReportId: varchar(),
	listingSyncStatus: text(),
	shipmentSyncStatus: text(),
	isSubscribed: boolean().default(false).notNull(),
	phone: varchar(),
	activeMarketplaceId: varchar().default('ATVPDKIKX0DER').notNull(),
	shipmentSyncedDate: timestamp({ withTimezone: true, mode: 'string' }),
	forceChangePassword: boolean().default(false),
	last_login_at: timestamp({ mode: 'string' }),
	hasPastDueInvoice: boolean().default(false).notNull(),
	activeAllSalesSyncId: varchar(),
	xid: varchar(),
	active_order_backfill_id: varchar(),
	active_finance_backfill_id: varchar(),
	active_estimated_fee_backfill_id: varchar(),
	go_aura_integration: boolean().default(false),
	strandedReportId: varchar(),
	totalLogins: integer().default(0),
	totalMinutesSpentInApp: integer().default(0),
	last_canceled_reason_selected: text(),
	last_canceled_reason_feedback: varchar(),
	seller_snap_integration: boolean().default(false),
	bqool_integration: boolean().default(false),
	wfsSellerId: varchar({ length: 20 }),
	wfsRefreshToken: text(),
	wfsItemSyncStatus: varchar({ length: 20 }),
	wfsShipmentSyncStatus: varchar({ length: 20 }),
	wfsMarketplace: varchar({ length: 50 }),
	wfsItemSyncAt: timestamp({ withTimezone: true, mode: 'string' }),
	wfsShipmentSyncAt: timestamp({ withTimezone: true, mode: 'string' }),
	defaultBoxTemplateId: uuid(),
	conversion_id: varchar({ length: 255 }),
	lastCreatedShareImage: timestamp({ mode: 'string' }).defaultNow().notNull(),
	boxiCredits: numeric().default('0').notNull(),
	lastBoxiCreditsApplied: timestamp({ mode: 'string' }).default('1970-01-01 00:00:00').notNull(),
	wfsItemReportId: text(),
	wfsInventoryReportId: text(),
	wfsInitialSyncedAt: timestamp({ withTimezone: true, mode: 'string' }),
	wfsInventoryUpdateStatus: text(),
	feedback_orders_sync_status: sync_job_status(),
	feedback_orders_sync_at: timestamp({ withTimezone: true, mode: 'string' }),
	feedback_orders_initial_synced_at: timestamp({ withTimezone: true, mode: 'string' }),
	feedback_orders_update_status: sync_job_status(),
	feedback_orders_update_at: timestamp({ withTimezone: true, mode: 'string' }),
	currentEmailOTP: varchar({ length: 12 }).default(').notNull(),
	currentEmailOTPGeneratedAt: timestamp({ mode: 'string' }).default('1970-01-01 00:00:00').notNull(),
	bannedFromRaiseAlerting: boolean().default(false).notNull(),
	amz_orders_sync_status: sync_job_status(),
	amz_orders_sync_at: timestamp({ withTimezone: true, mode: 'string' }),
	amz_transactions_sync_status: sync_job_status(),
	amz_transactions_sync_at: timestamp({ withTimezone: true, mode: 'string' }),
	readUpdateNotificationIDs: integer().array().default([]).notNull(),
	listingReportId: varchar({ length: 255 }),
	invalidLoginAttempts: integer().default(0).notNull(),
	loginJwtGenerationIndexForSignoutAllSessions: numeric().default('0').notNull(),
	lastLoginIP: varchar().default(').notNull(),
	pastPasswordHashes: varchar().array().default(["RAY"]).notNull(),
	passwordLastResetBoxemDate: numeric().default('sql`(EXTRACT(epoch FROM now()) * (1000)::numeric)`').notNull(),
	userFeatures: numeric().default('0').notNull(),
	paidCarrierBalance: numeric().default('0').notNull(),
	inventoryQuantitySyncStatus: varchar().default('COMPLETED').notNull(),
	emailMFA: boolean().default(false).notNull(),
	stripeCustomerId: varchar().default(').notNull(),
	everSubscribedNoTrial: boolean().default(false).notNull(),
	everSubscribedTrialOrNot: boolean().default(false).notNull(),
	everFailedPayment: boolean().default(false).notNull(),
	everBoughtStripeLookupKeys: varchar().array().default([""]).notNull(),
	signupFinishedCheckout: boolean().default(false).notNull(),
	isActive: boolean().default(true),
	status: varchar().default('NORMAL').notNull(),
	lastActiveBoxemDate: numeric().default('0').notNull(),
	isInTrial: boolean().default(true).notNull(),
	listingReportRequestedBoxemDate: numeric().default('0').notNull(),
	listingQuantityReportRequestedBoxemDate: numeric().default('0').notNull(),
	slackWebhook: varchar().default(').notNull(),
	discordWebhook: varchar().default(').notNull(),
	everDisputedPayment: boolean().default(false).notNull(),
	daysActive: integer().default(0).notNull(),
	daysActiveLastMarked: numeric().default('0').notNull(),
	dateAttemptedCancel: numeric().default('0').notNull(),
	dateAttemptedRenew: numeric().default('0').notNull(),
	sellerAccountsConnectedForDisputes: integer().default(0).notNull(),
	tosAccepted: numeric().default('0').notNull(),
	scheduledDeleteAt: numeric().default('0').notNull(),
	lastSubscribedValid: numeric().default('0').notNull(),
	tosAcceptedOnIp: varchar().default(').notNull(),
}, (table) => [
	index("public_uuid").using("btree", table.public_uuid.asc().nullsLast().op("uuid_ops")),
	index().using("btree", table.amz_orders_sync_at.asc().nullsLast().op("timestamptz_ops")),
	index().using("btree", table.amz_orders_sync_status.asc().nullsLast().op("enum_ops"), table.amz_orders_sync_at.asc().nullsLast().op("enum_ops")),
	index().using("btree", table.amz_orders_sync_status.asc().nullsLast().op("enum_ops")),
	index().using("btree", table.amz_transactions_sync_at.asc().nullsLast().op("timestamptz_ops")),
	index("user_amz_transactions_sync_status_amz_transactions_sync_at_inde").using("btree", table.amz_transactions_sync_status.asc().nullsLast().op("timestamptz_ops"), table.amz_transactions_sync_at.asc().nullsLast().op("timestamptz_ops")),
	index().using("btree", table.amz_transactions_sync_status.asc().nullsLast().op("enum_ops")),
	index().using("btree", table.feedback_orders_sync_at.asc().nullsLast().op("timestamptz_ops")),
	index().using("btree", table.feedback_orders_sync_status.asc().nullsLast().op("timestamptz_ops"), table.feedback_orders_sync_at.asc().nullsLast().op("timestamptz_ops")),
	index().using("btree", table.feedback_orders_sync_status.asc().nullsLast().op("enum_ops")),
	index().using("btree", table.feedback_orders_update_at.asc().nullsLast().op("timestamptz_ops")),
	index("user_feedback_orders_update_status_feedback_orders_update_at_in").using("btree", table.feedback_orders_update_status.asc().nullsLast().op("timestamptz_ops"), table.feedback_orders_update_at.asc().nullsLast().op("timestamptz_ops")),
	index().using("btree", table.feedback_orders_update_status.asc().nullsLast().op("enum_ops")),
	unique("user_email_unique").on(table.email),
	unique("uuid_unique").on(table.public_uuid),
]);

export const activitySnapshot = pgTable("activitySnapshot", {
	snapshotBoxemDate: numeric().notNull(),
	activeUsers: integer().notNull(),
}, (table) => [
	index("snapshotBoxemDate").using("btree", table.snapshotBoxemDate.asc().nullsLast().op("numeric_ops")),
]);

export const setting = pgTable("setting", {
	id: serial().primaryKey().notNull(),
	created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
	shipmentType: text().default('SPD'),
	fulfillmentType: text().default('FBA'),
	packingType: text().default('INDIVIDUAL'),
	labelingPreference: text().default('SELLER_LABEL'),
	boxContentsPreference: text().default('Boxem'),
	autoFillListPrice: boolean().default(false),
	autoFillListPriceFrom: text().default('BUY_BOX'),
	autoFillListPriceOperation: text().default('INCREASE'),
	autoFillListPriceAmount: numeric({ precision: 6, scale:  2 }).default('25'),
	userId: integer(),
	fromId: integer(),
	printLabelsEarly: boolean().default(false),
	skuGenerationOption: text().default('boxemGenerated'),
	skuGenerationFormula: text().default('[{"type":"asin"},{"type":"condition"},{"type":"count"}]'),
	skuGenerationCount: integer().default(0),
	printFNSKUAfterAddingToShipment: boolean().default(false),
	printFNSKUAfterIncreaseQuantityInShipment: boolean().default(false),
	printFNSKUAfterAssigningToBox: boolean().default(false),
	printFNSKUAfterIncreaseQuantityInBox: boolean().default(false),
	fbmShippingTemplateIdNew: varchar().default(').notNull(),
	restockLeadWeight: jsonb().notNull(),
	restockLeadDays: numeric().default('0').notNull(),
}, (table) => [
	foreignKey({
			columns: [table.fromId],
			foreignColumns: [address.id],
			name: "setting_fromId_address_id_fk"
		}),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "setting_userId_user_id_fk"
		}).onDelete("cascade"),
	unique("settingUserIdUnique").on(table.userId),
]);

export const boxi_message = pgTable("boxi_message", {
	uuid: uuid().defaultRandom().notNull(),
	senderIsUser: boolean().default(false).notNull(),
	createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
	owner: integer().notNull(),
	chat: uuid().notNull(),
	message: varchar({ length: 65535 }).default(').notNull(),
}, (table) => [
	foreignKey({
			columns: [table.chat],
			foreignColumns: [boxi_chat.uuid],
			name: "boxi_message_chat_fkey"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.owner],
			foreignColumns: [user.id],
			name: "boxi_message_owner_fkey"
		}).onDelete("cascade"),
	primaryKey({ columns: [table.uuid, table.senderIsUser], name: "boxi_message_pkey"}),
	unique("boxi_message_uuid_key").on(table.uuid),
]);

export const amz_order_itemsInAmazon = amazon.table("amz_order_items", {
	user_id: integer().notNull(),
	order_id: text().notNull(),
	name: text().notNull(),
	sku: text().notNull(),
	asin: text().notNull(),
	quantity_ordered: integer().default(0).notNull(),
	quantity_shipped: integer().default(0).notNull(),
	item_price: numeric({ precision: 10, scale:  5 }).notNull(),
	item_tax: numeric({ precision: 10, scale:  5 }),
	item_promotion_discount: numeric({ precision: 10, scale:  5 }),
	shipping_price: numeric({ precision: 10, scale:  5 }),
	shipping_tax: numeric({ precision: 10, scale:  5 }),
	shipping_promotion_discount: numeric({ precision: 10, scale:  5 }),
	gift_wrap_price: numeric({ precision: 10, scale:  5 }),
	gift_wrap_tax: numeric({ precision: 10, scale:  5 }),
	currency: text(),
	condition_id: text(),
	condition_subtype_id: text(),
	is_gift: boolean().default(false),
	gift_message_text: text(),
	gift_wrap_level: text(),
	product_info: text(),
	serial_number_required: boolean().default(false),
	is_transparency: boolean().default(false),
	created_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	synced_at: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	amazonMetadata: jsonb().notNull(),
}, (table) => [
	index("amz_order_items_asin_idx").using("btree", table.asin.asc().nullsLast().op("text_ops")),
	index("amz_order_items_sku_idx").using("btree", table.sku.asc().nullsLast().op("text_ops")),
	index("amz_order_items_user_asin_idx").using("btree", table.user_id.asc().nullsLast().op("text_ops"), table.asin.asc().nullsLast().op("text_ops")),
	index("amz_order_items_user_id_idx").using("btree", table.user_id.asc().nullsLast().op("int4_ops")),
	index("amz_order_items_user_sku_idx").using("btree", table.user_id.asc().nullsLast().op("text_ops"), table.sku.asc().nullsLast().op("text_ops")),
	primaryKey({ columns: [table.user_id, table.order_id, table.sku, table.asin], name: "amz_order_items_pkey"}),
]);
export const pg_stat_statements_info = pgView("pg_stat_statements_info", {	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	dealloc: bigint({ mode: "number" }),
	stats_reset: timestamp({ withTimezone: true, mode: 'string' }),
}).as(sql`SELECT dealloc, stats_reset FROM pg_stat_statements_info() pg_stat_statements_info(dealloc, stats_reset)`);

export const pg_stat_statements = pgView("pg_stat_statements", {	// TODO: failed to parse database type 'oid'
	userid: unknown("userid"),
	// TODO: failed to parse database type 'oid'
	dbid: unknown("dbid"),
	toplevel: boolean(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	queryid: bigint({ mode: "number" }),
	query: text(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	plans: bigint({ mode: "number" }),
	total_plan_time: doublePrecision(),
	min_plan_time: doublePrecision(),
	max_plan_time: doublePrecision(),
	mean_plan_time: doublePrecision(),
	stddev_plan_time: doublePrecision(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	calls: bigint({ mode: "number" }),
	total_exec_time: doublePrecision(),
	min_exec_time: doublePrecision(),
	max_exec_time: doublePrecision(),
	mean_exec_time: doublePrecision(),
	stddev_exec_time: doublePrecision(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	rows: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	shared_blks_hit: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	shared_blks_read: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	shared_blks_dirtied: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	shared_blks_written: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	local_blks_hit: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	local_blks_read: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	local_blks_dirtied: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	local_blks_written: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	temp_blks_read: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	temp_blks_written: bigint({ mode: "number" }),
	blk_read_time: doublePrecision(),
	blk_write_time: doublePrecision(),
	temp_blk_read_time: doublePrecision(),
	temp_blk_write_time: doublePrecision(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	wal_records: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	wal_fpi: bigint({ mode: "number" }),
	wal_bytes: numeric(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	jit_functions: bigint({ mode: "number" }),
	jit_generation_time: doublePrecision(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	jit_inlining_count: bigint({ mode: "number" }),
	jit_inlining_time: doublePrecision(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	jit_optimization_count: bigint({ mode: "number" }),
	jit_optimization_time: doublePrecision(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	jit_emission_count: bigint({ mode: "number" }),
	jit_emission_time: doublePrecision(),
}).as(sql`SELECT userid, dbid, toplevel, queryid, query, plans, total_plan_time, min_plan_time, max_plan_time, mean_plan_time, stddev_plan_time, calls, total_exec_time, min_exec_time, max_exec_time, mean_exec_time, stddev_exec_time, rows, shared_blks_hit, shared_blks_read, shared_blks_dirtied, shared_blks_written, local_blks_hit, local_blks_read, local_blks_dirtied, local_blks_written, temp_blks_read, temp_blks_written, blk_read_time, blk_write_time, temp_blk_read_time, temp_blk_write_time, wal_records, wal_fpi, wal_bytes, jit_functions, jit_generation_time, jit_inlining_count, jit_inlining_time, jit_optimization_count, jit_optimization_time, jit_emission_count, jit_emission_time FROM pg_stat_statements(true) pg_stat_statements(userid, dbid, toplevel, queryid, query, plans, total_plan_time, min_plan_time, max_plan_time, mean_plan_time, stddev_plan_time, calls, total_exec_time, min_exec_time, max_exec_time, mean_exec_time, stddev_exec_time, rows, shared_blks_hit, shared_blks_read, shared_blks_dirtied, shared_blks_written, local_blks_hit, local_blks_read, local_blks_dirtied, local_blks_written, temp_blks_read, temp_blks_written, blk_read_time, blk_write_time, temp_blk_read_time, temp_blk_write_time, wal_records, wal_fpi, wal_bytes, jit_functions, jit_generation_time, jit_inlining_count, jit_inlining_time, jit_optimization_count, jit_optimization_time, jit_emission_count, jit_emission_time)`);

export const "latest-inventory-details" = pgView("latest-inventory-details", {	pid: integer(),
	id: integer(),
	fulfillableQuantity: integer(),
	inboundWorkingQuantity: integer(),
	inboundShippedQuantity: integer(),
	inboundReceivingQuantity: integer(),
	reservedQuantity: jsonb(),
	researchingQuantity: jsonb(),
	unfulfillableQuantity: jsonb(),
	futureSupplyQuantity: jsonb(),
	created_at: timestamp({ mode: 'string' }),
	updated_at: timestamp({ mode: 'string' }),
	sellerSku: varchar(),
	fnSku: varchar(),
	totalQuantity: integer(),
	pendingCustomerOrderInTransit: integer(),
	latest_notification_updated_at: timestamp({ withTimezone: true, mode: 'string' }),
	productId: integer(),
}).as(sql`SELECT DISTINCT ON ("listingId") "listingId" AS pid, id, "fulfillableQuantity", "inboundWorkingQuantity", "inboundShippedQuantity", "inboundReceivingQuantity", "reservedQuantity", "researchingQuantity", "unfulfillableQuantity", "futureSupplyQuantity", created_at, updated_at, "sellerSku", "fnSku", "totalQuantity", "pendingCustomerOrderInTransit", latest_notification_updated_at, "listingId" AS "productId" FROM amazon.inventory_details ORDER BY "listingId", latest_notification_updated_at DESC`);

export const pg_buffercache = pgView("pg_buffercache", {	bufferid: integer(),
	// TODO: failed to parse database type 'oid'
	relfilenode: unknown("relfilenode"),
	// TODO: failed to parse database type 'oid'
	reltablespace: unknown("reltablespace"),
	// TODO: failed to parse database type 'oid'
	reldatabase: unknown("reldatabase"),
	relforknumber: smallint(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	relblocknumber: bigint({ mode: "number" }),
	isdirty: boolean(),
	usagecount: smallint(),
	pinning_backends: integer(),
}).as(sql`SELECT bufferid, relfilenode, reltablespace, reldatabase, relforknumber, relblocknumber, isdirty, usagecount, pinning_backends FROM pg_buffercache_pages() p(bufferid integer, relfilenode oid, reltablespace oid, reldatabase oid, relforknumber smallint, relblocknumber bigint, isdirty boolean, usagecount smallint, pinning_backends integer)`);