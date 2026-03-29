import {
  index,
  foreignKey,
  unique,
  serial,
  timestamp,
  integer,
  text,
  varchar,
  jsonb,
  numeric,
  boolean,
  date,
  bigserial,
  bigint,
  primaryKey,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

import { amazon, job_statusInAmazon } from '../enums';
import {
  user,
  fba_batch,
  address,
  supplier,
  feedback_campaigns,
} from '../public';

// ============================================================================
// AMAZON SCHEMA TABLES (20 tables)
// ============================================================================

export const catalogInAmazon = amazon.table(
  'catalog',
  {
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
    price: numeric({ precision: 10, scale: 2 }),
    currency: varchar().default('USD').notNull(),
    weight: numeric({ precision: 10, scale: 2 }),
    weightUnit: varchar().default('ounces'),
    packageQuantity: numeric({ precision: 10, scale: 2 }),
    packageDimensionUnit: varchar(),
    packageWeight: numeric({ precision: 10, scale: 2 }),
    packageWeightUnit: varchar(),
    packageLength: numeric({ precision: 10, scale: 2 }),
    packageWidth: numeric({ precision: 10, scale: 2 }),
    packageHeight: numeric({ precision: 10, scale: 2 }),
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
  },
  (table) => [
    index('IDX_3c60e35c0919180df3e084ed02').using(
      'btree',
      table.asin.asc().nullsLast().op('text_ops'),
    ),
    index().using('btree', table.gtin.asc().nullsLast().op('text_ops')),
    index().using('btree', table.upc.asc().nullsLast().op('text_ops')),
    unique('UQ_3c60e35c0919180df3e084ed02a').on(table.asin),
  ],
);

export const listingInAmazon = amazon.table(
  'listing',
  {
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
    price: numeric({ precision: 10, scale: 2 }),
    currency: varchar().default('USD').notNull(),
    quantity: integer(),
    weight: numeric({ precision: 10, scale: 2 }),
    weightUnit: varchar().default('ounces'),
    packageLength: numeric({ precision: 10, scale: 2 }),
    packageWidth: numeric({ precision: 10, scale: 2 }),
    packageHeight: numeric({ precision: 10, scale: 2 }),
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
    notification_updated_at: timestamp({
      withTimezone: true,
      mode: 'string',
    }),
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
    buyCost: numeric({ precision: 10, scale: 2 }),
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
    debugDeletedReason: varchar().default('').notNull(),
    lastUserUpdatedSoDontLetOlderSyncsOverwriteBoxemDate: numeric()
      .default('0')
      .notNull(),
    fbmShippingTemplateId: varchar().default('').notNull(),
    issues: jsonb().array().default([{}]).notNull(),
  },
  (table) => [
    index('IDX_SKU').using('btree', table.sku.asc().nullsLast().op('text_ops')),
    index('IDX_USERID').using(
      'btree',
      table.userId.asc().nullsLast().op('int4_ops'),
    ),
    index().using(
      'btree',
      table.product_short_name.asc().nullsLast().op('text_ops'),
    ),
    index('prepBatchId').using(
      'btree',
      table.prepBatchId.asc().nullsLast().op('text_ops'),
    ),
    index('syncBatchIdIdx').using(
      'btree',
      table.syncBatchId.asc().nullsLast().op('text_ops'),
    ),
    foreignKey({
      columns: [table.catalogId],
      foreignColumns: [catalogInAmazon.id],
      name: 'listing_catalogId_catalog_id_fk',
    }),
    foreignKey({
      columns: [table.supplierId],
      foreignColumns: [supplier.id],
      name: 'listing_supplierId_supplier_id_fk',
    }),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'listing_userId_user_id_fk',
    }).onDelete('cascade'),
  ],
);

export const amz_transactionsInAmazon = amazon.table(
  'amz_transactions',
  {
    posted_date: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
    transaction_type: text(),
    transaction_event: text().notNull(),
    user_id: integer().notNull(),
    order_id: text(),
    sku: text(),
    asin: text(),
    marketplace_id: text(),
    amount: numeric({ precision: 18, scale: 5 }).notNull(),
    currency: text().notNull(),
    amount_type: text().notNull(),
    amount_description: text().notNull(),
    amount_component: text().notNull(),
    created_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    synced_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    source_path: text(),
    amazonMetadata: jsonb().notNull(),
  },
  (table) => [
    index('amz_transactions_asin_idx')
      .using(
        'btree',
        table.user_id.asc().nullsLast().op('int4_ops'),
        table.asin.asc().nullsLast().op('text_ops'),
      )
      .where(sql`(asin IS NOT NULL)`),
    index('amz_transactions_date_user_idx').using(
      'btree',
      table.posted_date.asc().nullsLast().op('timestamptz_ops'),
      table.user_id.asc().nullsLast().op('timestamptz_ops'),
    ),
    index('amz_transactions_date_user_order_sku_idx').using(
      'btree',
      table.posted_date.asc().nullsLast().op('timestamptz_ops'),
      table.user_id.asc().nullsLast().op('int4_ops'),
      table.order_id.asc().nullsLast().op('timestamptz_ops'),
      table.sku.asc().nullsLast().op('int4_ops'),
    ),
    index('amz_transactions_order_idx')
      .using(
        'btree',
        table.order_id.asc().nullsLast().op('int4_ops'),
        table.user_id.asc().nullsLast().op('text_ops'),
        table.sku.asc().nullsLast().op('int4_ops'),
      )
      .where(sql`(order_id IS NOT NULL)`),
    index('amz_transactions_sku_idx')
      .using(
        'btree',
        table.user_id.asc().nullsLast().op('int4_ops'),
        table.sku.asc().nullsLast().op('text_ops'),
      )
      .where(sql`(sku IS NOT NULL)`),
    index('idx_amz_transactions_fees_by_user')
      .using(
        'btree',
        table.user_id.asc().nullsLast().op('text_ops'),
        table.order_id.asc().nullsLast().op('int4_ops'),
        table.amount_description.asc().nullsLast().op('int4_ops'),
        table.amount.asc().nullsLast().op('text_ops'),
      )
      .where(
        sql`((amount_type = 'Debit'::text) AND (transaction_event = ANY (ARRAY['ItemFee'::text, 'ServiceFee'::text, 'ItemFeeAdjustment'::text, 'Promotion'::text])) AND (amount <> (0)::numeric))`,
      ),
    index('idx_amz_transactions_refunds_by_user')
      .using(
        'btree',
        table.user_id.asc().nullsLast().op('int4_ops'),
        table.order_id.asc().nullsLast().op('int4_ops'),
        table.amount_description.asc().nullsLast().op('text_ops'),
        table.amount.asc().nullsLast().op('text_ops'),
        table.amount_type.asc().nullsLast().op('text_ops'),
        table.posted_date.asc().nullsLast().op('int4_ops'),
      )
      .where(
        sql`((transaction_type = 'Refund'::text) AND (amount <> (0)::numeric))`,
      ),
    unique('amz_transactions_unique').on(
      table.posted_date,
      table.transaction_type,
      table.user_id,
      table.order_id,
      table.marketplace_id,
      table.amount,
      table.currency,
      table.amount_type,
      table.amount_description,
      table.source_path,
    ),
  ],
);

export const feedback_campaigns_order_itemsInAmazon = amazon.table(
  'feedback_campaigns_order_items',
  {
    id: serial().primaryKey().notNull(),
    user_id: integer().notNull(),
    order_id: text().notNull(),
    name: text().notNull(),
    sku: text().notNull(),
    asin: text().notNull(),
    quantity_ordered: integer().default(0).notNull(),
    quantity_shipped: integer().default(0).notNull(),
    item_price: numeric({ precision: 10, scale: 5 }).notNull(),
    item_tax: numeric({ precision: 10, scale: 5 }),
    item_promotion_discount: numeric({ precision: 10, scale: 5 }),
    shipping_price: numeric({ precision: 10, scale: 5 }),
    shipping_tax: numeric({ precision: 10, scale: 5 }),
    shipping_promotion_discount: numeric({ precision: 10, scale: 5 }),
    gift_wrap_price: numeric({ precision: 10, scale: 5 }),
    gift_wrap_tax: numeric({ precision: 10, scale: 5 }),
    currency: text(),
    created_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    synced_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    amazonMetadata: jsonb(),
  },
  (table) => [
    index().using('btree', table.asin.asc().nullsLast().op('text_ops')),
    index().using('btree', table.order_id.asc().nullsLast().op('text_ops')),
    index().using('btree', table.sku.asc().nullsLast().op('text_ops')),
    index().using('btree', table.user_id.asc().nullsLast().op('int4_ops')),
    index().using(
      'btree',
      table.user_id.asc().nullsLast().op('text_ops'),
      table.order_id.asc().nullsLast().op('int4_ops'),
    ),
    foreignKey({
      columns: [table.order_id],
      foreignColumns: [feedback_campaigns_ordersInAmazon.order_id],
      name: 'feedback_campaigns_order_items_order_id_fkey',
    }).onDelete('cascade'),
    unique('feedback_campaigns_order_items_unique').on(
      table.user_id,
      table.order_id,
      table.sku,
      table.asin,
    ),
  ],
);

export const fba_shipment_itemInAmazon = amazon.table(
  'fba_shipment_item',
  {
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
  },
  (table) => [
    index('shipmentIdItem_index').using(
      'btree',
      table.shipmentId.asc().nullsLast().op('int4_ops'),
    ),
    foreignKey({
      columns: [table.fbaItemId],
      foreignColumns: [fba_itemInAmazon.id],
      name: 'fba_shipment_item_fbaItemId_fba_item_id_fk',
    }),
    foreignKey({
      columns: [table.shipmentId],
      foreignColumns: [fba_shipmentInAmazon.id],
      name: 'fba_shipment_item_shipmentId_fba_shipment_id_fk',
    }).onDelete('cascade'),
  ],
);

export const amz_ordersInAmazon = amazon.table(
  'amz_orders',
  {
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
    created_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    synced_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    encrypted_buyer_email: text(),
    earliest_shipping_date: timestamp({
      withTimezone: true,
      mode: 'string',
    }),
    number_of_items_shipped: integer().default(0),
    number_of_items_unshipped: integer().default(0),
    has_regulated_items: boolean().default(false),
    latest_shipping_date: timestamp({
      withTimezone: true,
      mode: 'string',
    }),
    is_access_point_order: boolean().default(false),
    payment_method: text(),
    order_total_amount: numeric({ precision: 10, scale: 2 }),
    currency: text(),
    shipping_state: text(),
    shipping_postal_code: text(),
    shipping_city: text(),
    shipping_country_code: text(),
    earliest_delivery_date: timestamp({
      withTimezone: true,
      mode: 'string',
    }),
    latest_delivery_date: timestamp({
      withTimezone: true,
      mode: 'string',
    }),
    amazonMetadata: jsonb().notNull(),
  },
  (table) => [
    index('amz_orders_date_user_order_idx').using(
      'btree',
      table.order_date.asc().nullsLast().op('int4_ops'),
      table.user_id.asc().nullsLast().op('text_ops'),
      table.order_id.asc().nullsLast().op('timestamptz_ops'),
    ),
    index('amz_orders_order_id_idx').using(
      'btree',
      table.order_id.asc().nullsLast().op('text_ops'),
    ),
    index('amz_orders_user_id_idx').using(
      'btree',
      table.user_id.asc().nullsLast().op('int4_ops'),
    ),
    unique('amz_orders_user_order_unique').on(table.order_id, table.user_id),
  ],
);

export const fba_itemInAmazon = amazon.table(
  'fba_item',
  {
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
    prepCategory: varchar().default('').notNull(),
  },
  (table) => [
    index('batch_index').using(
      'btree',
      table.batchId.asc().nullsLast().op('int4_ops'),
    ),
    index('listing_index').using(
      'btree',
      table.listingId.asc().nullsLast().op('int4_ops'),
    ),
    foreignKey({
      columns: [table.batchId],
      foreignColumns: [fba_batch.id],
      name: 'fba_item_batchId_fba_batch_id_fk',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.listingId],
      foreignColumns: [listingInAmazon.id],
      name: 'fba_item_listingId_listing_id_fk',
    }),
    foreignKey({
      columns: [table.supplierId],
      foreignColumns: [supplier.id],
      name: 'fba_item_supplierId_supplier_id_fk',
    }),
  ],
);

export const analytics_jobsInAmazon = amazon.table(
  'analytics_jobs',
  {
    id: bigserial({ mode: 'bigint' }).primaryKey().notNull(),
    job_type: text().notNull(),
    api_path: text().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    user_id: bigint({ mode: 'number' }).notNull(),
    range_start_at: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
    range_end_at: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
    status: job_statusInAmazon().default('queued').notNull(),
    attempts: integer().default(0).notNull(),
    lease_until: timestamp({ withTimezone: true, mode: 'string' }),
    last_error: text(),
    created_at: timestamp({ withTimezone: true, mode: 'string' })
      .defaultNow()
      .notNull(),
    updated_at: timestamp({ withTimezone: true, mode: 'string' })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index('idx_analytics_jobs_claim').using(
      'btree',
      table.status.asc().nullsLast().op('enum_ops'),
    ),
    index('idx_analytics_jobs_range_start').using(
      'btree',
      table.range_start_at.asc().nullsLast().op('timestamptz_ops'),
    ),
    index('idx_analytics_jobs_reclaim').using(
      'btree',
      table.lease_until.asc().nullsLast().op('timestamptz_ops'),
    ),
    unique('analytics_jobs_unique_range').on(
      table.job_type,
      table.api_path,
      table.user_id,
      table.range_start_at,
      table.range_end_at,
    ),
  ],
);

export const packing_optionInAmazon = amazon.table(
  'packing_option',
  {
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
  },
  (table) => [
    index('packing_option_batch_index').using(
      'btree',
      table.batchId.asc().nullsLast().op('int4_ops'),
    ),
    index('packing_option_id_index').using(
      'btree',
      table.packingOptionId.asc().nullsLast().op('text_ops'),
    ),
    foreignKey({
      columns: [table.batchId],
      foreignColumns: [fba_batch.id],
      name: 'packing_option_batchId_fba_batch_id_fk',
    }).onDelete('cascade'),
  ],
);

export const fba_shipmentInAmazon = amazon.table(
  'fba_shipment',
  {
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
    estimateAmount: numeric({ precision: 9, scale: 2 }),
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
    declaredValue: numeric({ precision: 9, scale: 2 }),
    declaredValueCurrency: varchar().default('USD'),
    freightClass: text(),
    freightReadyDate: timestamp({ withTimezone: true, mode: 'string' }),
    previewFreightClass: text(),
    previewFreightPickupDate: timestamp({
      withTimezone: true,
      mode: 'string',
    }),
    ltlBoxCount: integer(),
    ltlTotalWeight: numeric({ precision: 7, scale: 2 }),
    ltlTotalWeightUnit: varchar().default('pounds'),
    previewFreightDeliveryDate: timestamp({
      withTimezone: true,
      mode: 'string',
    }),
    amazonCalculatedValue: numeric({ precision: 9, scale: 2 }),
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
  },
  (table) => [
    index('carton_content_index').using(
      'btree',
      table.cartonContentFeedId.asc().nullsLast().op('text_ops'),
    ),
    index('shipmentId_index').using(
      'btree',
      table.shipmentId.asc().nullsLast().op('text_ops'),
    ),
    index('shipment_batch_index').using(
      'btree',
      table.batchId.asc().nullsLast().op('int4_ops'),
    ),
    index('status_index').using(
      'btree',
      table.status.asc().nullsLast().op('text_ops'),
    ),
    index('userId_index').using(
      'btree',
      table.userId.asc().nullsLast().op('int4_ops'),
    ),
    foreignKey({
      columns: [table.batchId],
      foreignColumns: [fba_batch.id],
      name: 'fba_shipment_batchId_fba_batch_id_fk',
    }),
    foreignKey({
      columns: [table.fromId],
      foreignColumns: [address.id],
      name: 'fba_shipment_fromId_address_id_fk',
    }),
    foreignKey({
      columns: [table.placementOptionId],
      foreignColumns: [placement_optionInAmazon.id],
      name: 'fba_shipment_placementOptionId_placement_option_id_fk',
    }),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'fba_shipment_userId_user_id_fk',
    }).onDelete('cascade'),
  ],
);

export const fba_boxInAmazon = amazon.table(
  'fba_box',
  {
    id: serial().primaryKey().notNull(),
    created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
    updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
    width: numeric({ precision: 6, scale: 2 }),
    height: numeric({ precision: 6, scale: 2 }),
    length: numeric({ precision: 6, scale: 2 }),
    dimensionUnit: varchar().default('inches').notNull(),
    weight: numeric({ precision: 7, scale: 2 }),
    weightUnit: varchar().default('pounds').notNull(),
    insuredValue: numeric({ precision: 9, scale: 2 }),
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
  },
  (table) => [
    index('box_batch_index').using(
      'btree',
      table.batchId.asc().nullsLast().op('int4_ops'),
    ),
    index('box_shipment_index').using(
      'btree',
      table.shipmentId.asc().nullsLast().op('int4_ops'),
    ),
    foreignKey({
      columns: [table.batchId],
      foreignColumns: [fba_batch.id],
      name: 'fba_box_batchId_fba_batch_id_fk',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.packingOptionId],
      foreignColumns: [packing_optionInAmazon.id],
      name: 'fba_box_packingOptionId_packing_option_id_fk',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.shipmentId],
      foreignColumns: [fba_shipmentInAmazon.id],
      name: 'fba_box_shipmentId_fba_shipment_id_fk',
    }).onDelete('cascade'),
  ],
);

export const inventory_detailsInAmazon = amazon.table(
  'inventory_details',
  {
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
    latest_notification_updated_at: timestamp({
      withTimezone: true,
      mode: 'string',
    }),
    listingId: integer(),
    asin: varchar(),
    userId: integer(),
    fromSync: boolean().default(false),
    amazonMetadata: jsonb().notNull(),
  },
  (table) => [
    index('IDX_1530e623ff87676d2d7b8df315').using(
      'btree',
      table.sellerSku.asc().nullsLast().op('text_ops'),
    ),
    index('ID_LISTING_IDX').using(
      'btree',
      table.listingId.asc().nullsLast().op('int4_ops'),
    ),
    foreignKey({
      columns: [table.listingId],
      foreignColumns: [listingInAmazon.id],
      name: 'inventory_details_listingId_listing_id_fk',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'inventory_details_userId_user_id_fk',
    }),
  ],
);

export const placement_optionInAmazon = amazon.table(
  'placement_option',
  {
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
  },
  (table) => [
    index('placement_option_batch_index').using(
      'btree',
      table.batchId.asc().nullsLast().op('int4_ops'),
    ),
    foreignKey({
      columns: [table.batchId],
      foreignColumns: [fba_batch.id],
      name: 'placement_option_batchId_fba_batch_id_fk',
    }).onDelete('cascade'),
  ],
);

export const shipment_optionInAmazon = amazon.table(
  'shipment_option',
  {
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
    estimateAmount: numeric({ precision: 9, scale: 2 }),
    estimateCurrency: varchar().default('USD'),
    transportationOptions: jsonb(),
    placementOptionId: integer(),
    status: varchar(),
    loadingStatus: varchar().default('PROCESSING'),
    items: jsonb(),
    amazonMetadata: jsonb().notNull(),
  },
  (table) => [
    index('shipment_option_placement_option_index').using(
      'btree',
      table.placementOptionId.asc().nullsLast().op('int4_ops'),
    ),
    foreignKey({
      columns: [table.placementOptionId],
      foreignColumns: [placement_optionInAmazon.id],
      name: 'shipment_option_placementOptionId_placement_option_id_fk',
    }).onDelete('cascade'),
  ],
);

export const transportation_optionInAmazon = amazon.table(
  'transportation_option',
  {
    id: serial().primaryKey().notNull(),
    created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
    updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
    carrier: jsonb(),
    carrierAppointment: jsonb(),
    preconditions: jsonb(),
    cost: numeric({ precision: 6, scale: 2 }),
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
  },
  (table) => [
    index().using(
      'btree',
      table.placementOptionId.asc().nullsLast().op('int4_ops'),
    ),
    index().using('btree', table.shipmentId.asc().nullsLast().op('int4_ops')),
    foreignKey({
      columns: [table.placementOptionId],
      foreignColumns: [placement_optionInAmazon.id],
      name: 'transportation_option_placementOptionId_placement_option_id_fk',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.shipmentId],
      foreignColumns: [fba_shipmentInAmazon.id],
      name: 'transportation_option_shipmentId_fba_shipment_id_fk',
    }).onDelete('cascade'),
  ],
);

export const listing_quantityInAmazon = amazon.table(
  'listing_quantity',
  {
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
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'listing_quantity_userId_user_id_fk',
    }).onDelete('cascade'),
  ],
);

export const listing_updateInAmazon = amazon.table(
  'listing_update',
  {
    created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
    updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
    asin: varchar(),
    sku: varchar(),
    fulfillmentType: text(),
    quantity: integer(),
    price: numeric({ precision: 10, scale: 2 }),
    condition: varchar({ length: 2048 }),
    name: varchar(),
    description: varchar(),
    status: varchar(),
    merchantShippingGroup: varchar(),
    userId: integer(),
    amazonMetadata: jsonb().notNull(),
    fbmShippingTemplateId: varchar().default('').notNull(),
  },
  (table) => [
    index('LISTING_UPDATE_IDX_USERID').using(
      'btree',
      table.userId.asc().nullsLast().op('int4_ops'),
    ),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'listing_update_userId_user_id_fk',
    }).onDelete('cascade'),
  ],
);

export const feedback_email_to_sendInAmazon = amazon.table(
  'feedback_email_to_send',
  {
    id: serial().primaryKey().notNull(),
    order_id: varchar({ length: 255 }).notNull(),
    subject: text().notNull(),
    email_content: text().notNull(),
    buyer_email: varchar({ length: 255 }).notNull(),
    to_send_date: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
    user_id: integer().notNull(),
    campaign_id: integer(),
    template_id: integer(),
    status: varchar({ length: 50 }).default("'PENDING'").notNull(),
    sent_at: timestamp({ withTimezone: true, mode: 'string' }),
    error_message: text(),
    created_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updated_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    amazonMetadata: jsonb().notNull(),
  },
  (table) => [
    index().using('btree', table.order_id.asc().nullsLast().op('text_ops')),
    index().using('btree', table.status.asc().nullsLast().op('text_ops')),
    index().using(
      'btree',
      table.status.asc().nullsLast().op('timestamptz_ops'),
      table.to_send_date.asc().nullsLast().op('text_ops'),
    ),
    index().using(
      'btree',
      table.to_send_date.asc().nullsLast().op('timestamptz_ops'),
    ),
    index().using('btree', table.user_id.asc().nullsLast().op('int4_ops')),
    unique('unique_order_user').on(table.order_id, table.user_id),
  ],
);

export const feedback_campaigns_ordersInAmazon = amazon.table(
  'feedback_campaigns_orders',
  {
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
    created_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updated_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    amazonMetadata: jsonb(),
  },
  (table) => [
    index().using('btree', table.campaign_id.asc().nullsLast().op('int4_ops')),
    index().using(
      'btree',
      table.marketplace_id.asc().nullsLast().op('text_ops'),
    ),
    index().using(
      'btree',
      table.order_date.asc().nullsLast().op('timestamptz_ops'),
    ),
    index().using('btree', table.user_id.asc().nullsLast().op('int4_ops')),
    foreignKey({
      columns: [table.campaign_id],
      foreignColumns: [feedback_campaigns.id],
      name: 'feedback_campaigns_orders_campaign_id_fkey',
    }).onDelete('cascade'),
    unique('feedback_campaigns_orders_order_id_unique').on(table.order_id),
  ],
);

export const amz_order_itemsInAmazon = amazon.table(
  'amz_order_items',
  {
    user_id: integer().notNull(),
    order_id: text().notNull(),
    name: text().notNull(),
    sku: text().notNull(),
    asin: text().notNull(),
    quantity_ordered: integer().default(0).notNull(),
    quantity_shipped: integer().default(0).notNull(),
    item_price: numeric({ precision: 10, scale: 5 }).notNull(),
    item_tax: numeric({ precision: 10, scale: 5 }),
    item_promotion_discount: numeric({ precision: 10, scale: 5 }),
    shipping_price: numeric({ precision: 10, scale: 5 }),
    shipping_tax: numeric({ precision: 10, scale: 5 }),
    shipping_promotion_discount: numeric({ precision: 10, scale: 5 }),
    gift_wrap_price: numeric({ precision: 10, scale: 5 }),
    gift_wrap_tax: numeric({ precision: 10, scale: 5 }),
    currency: text(),
    condition_id: text(),
    condition_subtype_id: text(),
    is_gift: boolean().default(false),
    gift_message_text: text(),
    gift_wrap_level: text(),
    product_info: text(),
    serial_number_required: boolean().default(false),
    is_transparency: boolean().default(false),
    created_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    synced_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    amazonMetadata: jsonb().notNull(),
  },
  (table) => [
    index('amz_order_items_asin_idx').using(
      'btree',
      table.asin.asc().nullsLast().op('text_ops'),
    ),
    index('amz_order_items_sku_idx').using(
      'btree',
      table.sku.asc().nullsLast().op('text_ops'),
    ),
    index('amz_order_items_user_asin_idx').using(
      'btree',
      table.user_id.asc().nullsLast().op('text_ops'),
      table.asin.asc().nullsLast().op('text_ops'),
    ),
    index('amz_order_items_user_id_idx').using(
      'btree',
      table.user_id.asc().nullsLast().op('int4_ops'),
    ),
    index('amz_order_items_user_sku_idx').using(
      'btree',
      table.user_id.asc().nullsLast().op('text_ops'),
      table.sku.asc().nullsLast().op('text_ops'),
    ),
    primaryKey({
      columns: [table.user_id, table.order_id, table.sku, table.asin],
      name: 'amz_order_items_pkey',
    }),
  ],
);
