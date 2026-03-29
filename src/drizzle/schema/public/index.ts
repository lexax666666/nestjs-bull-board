import {
  pgTable,
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
  uuid,
  doublePrecision,
  time,
  bigint,
  primaryKey,
  pgView,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

import {
  bulk_ungate_status,
  feedback_campaign_status,
  feedback_campaign_target,
  feedback_campaign_type,
  feedback_product_selection_type,
  feedback_send_days_type,
  http_method,
  sync_job_status,
  wfs_lifecycle_status,
  wfs_published_status,
} from '../enums';

// ============================================================================
// PUBLIC SCHEMA TABLES (35 tables)
// ============================================================================

export const user = pgTable(
  'user',
  {
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
    password: varchar().default('').notNull(),
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
    lastBoxiCreditsApplied: timestamp({ mode: 'string' })
      .default('1970-01-01 00:00:00')
      .notNull(),
    wfsItemReportId: text(),
    wfsInventoryReportId: text(),
    wfsInitialSyncedAt: timestamp({ withTimezone: true, mode: 'string' }),
    wfsInventoryUpdateStatus: text(),
    feedback_orders_sync_status: sync_job_status(),
    feedback_orders_sync_at: timestamp({ withTimezone: true, mode: 'string' }),
    feedback_orders_initial_synced_at: timestamp({
      withTimezone: true,
      mode: 'string',
    }),
    feedback_orders_update_status: sync_job_status(),
    feedback_orders_update_at: timestamp({
      withTimezone: true,
      mode: 'string',
    }),
    currentEmailOTP: varchar({ length: 12 }).default('').notNull(),
    currentEmailOTPGeneratedAt: timestamp({ mode: 'string' })
      .default('1970-01-01 00:00:00')
      .notNull(),
    bannedFromRaiseAlerting: boolean().default(false).notNull(),
    amz_orders_sync_status: sync_job_status(),
    amz_orders_sync_at: timestamp({ withTimezone: true, mode: 'string' }),
    amz_transactions_sync_status: sync_job_status(),
    amz_transactions_sync_at: timestamp({
      withTimezone: true,
      mode: 'string',
    }),
    readUpdateNotificationIDs: integer().array().default([]).notNull(),
    listingReportId: varchar({ length: 255 }),
    invalidLoginAttempts: integer().default(0).notNull(),
    loginJwtGenerationIndexForSignoutAllSessions: numeric()
      .default('0')
      .notNull(),
    lastLoginIP: varchar().default('').notNull(),
    pastPasswordHashes: varchar().array().default(['RAY']).notNull(),
    passwordLastResetBoxemDate: numeric()
      .default('sql`(EXTRACT(epoch FROM now()) * (1000)::numeric)`')
      .notNull(),
    userFeatures: numeric().default('0').notNull(),
    paidCarrierBalance: numeric().default('0').notNull(),
    inventoryQuantitySyncStatus: varchar().default('COMPLETED').notNull(),
    emailMFA: boolean().default(false).notNull(),
    stripeCustomerId: varchar().default('').notNull(),
    everSubscribedNoTrial: boolean().default(false).notNull(),
    everSubscribedTrialOrNot: boolean().default(false).notNull(),
    everFailedPayment: boolean().default(false).notNull(),
    everBoughtStripeLookupKeys: varchar().array().default(['']).notNull(),
    signupFinishedCheckout: boolean().default(false).notNull(),
    isActive: boolean().default(true),
    status: varchar().default('NORMAL').notNull(),
    lastActiveBoxemDate: numeric().default('0').notNull(),
    isInTrial: boolean().default(true).notNull(),
    listingReportRequestedBoxemDate: numeric().default('0').notNull(),
    listingQuantityReportRequestedBoxemDate: numeric().default('0').notNull(),
    slackWebhook: varchar().default('').notNull(),
    discordWebhook: varchar().default('').notNull(),
    everDisputedPayment: boolean().default(false).notNull(),
    daysActive: integer().default(0).notNull(),
    daysActiveLastMarked: numeric().default('0').notNull(),
    dateAttemptedCancel: numeric().default('0').notNull(),
    dateAttemptedRenew: numeric().default('0').notNull(),
    sellerAccountsConnectedForDisputes: integer().default(0).notNull(),
    tosAccepted: numeric().default('0').notNull(),
    scheduledDeleteAt: numeric().default('0').notNull(),
    lastSubscribedValid: numeric().default('0').notNull(),
    tosAcceptedOnIp: varchar().default('').notNull(),
  },
  (table) => [
    index('public_uuid').using(
      'btree',
      table.public_uuid.asc().nullsLast().op('uuid_ops'),
    ),
    index().using(
      'btree',
      table.amz_orders_sync_at.asc().nullsLast().op('timestamptz_ops'),
    ),
    index().using(
      'btree',
      table.amz_orders_sync_status.asc().nullsLast().op('enum_ops'),
      table.amz_orders_sync_at.asc().nullsLast().op('enum_ops'),
    ),
    index().using(
      'btree',
      table.amz_orders_sync_status.asc().nullsLast().op('enum_ops'),
    ),
    index().using(
      'btree',
      table.amz_transactions_sync_at.asc().nullsLast().op('timestamptz_ops'),
    ),
    index(
      'user_amz_transactions_sync_status_amz_transactions_sync_at_inde',
    ).using(
      'btree',
      table.amz_transactions_sync_status
        .asc()
        .nullsLast()
        .op('timestamptz_ops'),
      table.amz_transactions_sync_at.asc().nullsLast().op('timestamptz_ops'),
    ),
    index().using(
      'btree',
      table.amz_transactions_sync_status.asc().nullsLast().op('enum_ops'),
    ),
    index().using(
      'btree',
      table.feedback_orders_sync_at.asc().nullsLast().op('timestamptz_ops'),
    ),
    index().using(
      'btree',
      table.feedback_orders_sync_status.asc().nullsLast().op('timestamptz_ops'),
      table.feedback_orders_sync_at.asc().nullsLast().op('timestamptz_ops'),
    ),
    index().using(
      'btree',
      table.feedback_orders_sync_status.asc().nullsLast().op('enum_ops'),
    ),
    index().using(
      'btree',
      table.feedback_orders_update_at.asc().nullsLast().op('timestamptz_ops'),
    ),
    index(
      'user_feedback_orders_update_status_feedback_orders_update_at_in',
    ).using(
      'btree',
      table.feedback_orders_update_status
        .asc()
        .nullsLast()
        .op('timestamptz_ops'),
      table.feedback_orders_update_at.asc().nullsLast().op('timestamptz_ops'),
    ),
    index().using(
      'btree',
      table.feedback_orders_update_status.asc().nullsLast().op('enum_ops'),
    ),
    unique('user_email_unique').on(table.email),
    unique('uuid_unique').on(table.public_uuid),
  ],
);

export const assistants_to_sellers = pgTable(
  'assistants_to_sellers',
  {
    id: serial().primaryKey().notNull(),
    created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
    updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
    sellerId: integer().notNull(),
    assistantId: integer().notNull(),
    status: text().default('PENDING').notNull(),
    permissions: integer(),
  },
  (table) => [
    index('seller_index').using(
      'btree',
      table.sellerId.asc().nullsLast().op('int4_ops'),
    ),
    foreignKey({
      columns: [table.assistantId],
      foreignColumns: [user.id],
      name: 'assistants_to_sellers_assistantId_user_id_fk',
    }),
    foreignKey({
      columns: [table.sellerId],
      foreignColumns: [user.id],
      name: 'assistants_to_sellers_sellerId_user_id_fk',
    }).onDelete('cascade'),
    unique('assistantIdAndSellerIdComboUnique').on(
      table.sellerId,
      table.assistantId,
    ),
  ],
);

export const fba_pallet = pgTable(
  'fba_pallet',
  {
    id: serial().primaryKey().notNull(),
    created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
    updated_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
    width: numeric({ precision: 6, scale: 2 }),
    height: numeric({ precision: 6, scale: 2 }),
    length: numeric({ precision: 6, scale: 2 }),
    dimensionUnit: varchar().default('INCH').notNull(),
    weight: numeric({ precision: 6, scale: 2 }),
    weightUnit: varchar().default('POUNDS').notNull(),
    shipmentId: integer(),
    isStacked: boolean().default(false),
    carrierName: varchar(),
    fromSync: boolean().default(false),
  },
  (table) => [
    index('pallet_shipment_index').using(
      'btree',
      table.shipmentId.asc().nullsLast().op('int4_ops'),
    ),
    // NOTE: Foreign key to fba_shipmentInAmazon (amazon schema) is defined
    // at the Drizzle relations level, not as a pgTable-level FK here,
    // because cross-schema FK references require the amazon table import.
    // The actual DB constraint exists; we rely on relations.ts for the ORM mapping.
  ],
);

export const sellerIdsEverUsed_SoWeDontDupeTrials = pgTable(
  'sellerIdsEverUsed_SoWeDontDupeTrials',
  {
    sellerId: varchar({ length: 128 }).primaryKey().notNull(),
    userUUID: uuid().notNull(),
  },
);

export const sellerIdsBannedForDispute = pgTable('sellerIdsBannedForDispute', {
  sellerId: varchar({ length: 128 }).primaryKey().notNull(),
  userUUID: uuid().notNull(),
});

export const deletedUser = pgTable('deletedUser', {
  userUUID: varchar().primaryKey().notNull(),
  email: varchar().notNull(),
  date: numeric().notNull(),
  disputeInfo: jsonb().default({ version: -1 }).notNull(),
});

export const bulk_ungate_result = pgTable(
  'bulk_ungate_result',
  {
    id: uuid().notNull(),
    user_uuid: uuid().notNull(),
    asin: varchar({ length: 16 }).notNull(),
    status: bulk_ungate_status().notNull(),
    json: jsonb().notNull(),
    attempts: integer().default(1).notNull(),
    lastAttempted: doublePrecision().default(
      sql`trunc((EXTRACT(epoch FROM now()) * (1000)::numeric))`,
    ),
  },
  (table) => [
    foreignKey({
      columns: [table.user_uuid],
      foreignColumns: [user.public_uuid],
      name: 'bulk_ungate_result_user_uuid_fkey',
    }),
    unique('bulk_ungate_result_user_uuid_asin_key').on(
      table.user_uuid,
      table.asin,
    ),
  ],
);

export const pgmigrations = pgTable('pgmigrations', {
  id: serial().primaryKey().notNull(),
  name: varchar({ length: 255 }).notNull(),
  run_on: timestamp({ mode: 'string' }).notNull(),
});

export const supplier = pgTable(
  'supplier',
  {
    id: serial().primaryKey().notNull(),
    created_at: timestamp({ mode: 'string' }).defaultNow().notNull(),
    name: varchar(),
    userId: integer().notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'supplier_userId_fkey',
    }),
    unique('unique_name_user').on(table.name, table.userId),
  ],
);

export const boxi_chat = pgTable(
  'boxi_chat',
  {
    uuid: uuid().defaultRandom().primaryKey().notNull(),
    name: varchar({ length: 30 }).default('').notNull(),
    createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
    owner: integer().notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.owner],
      foreignColumns: [user.id],
      name: 'boxi_chat_owner_fkey',
    }).onDelete('cascade'),
  ],
);

export const log = pgTable(
  'log',
  {
    id: serial().primaryKey().notNull(),
    createdAt: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    source: text().notNull(),
    tags: text().array(),
    text: text().notNull(),
    json: jsonb(),
    commitHash: varchar().default('').notNull(),
    stack: jsonb().default([]).notNull(),
  },
  (table) => [
    index('idx_log_createdAt').using(
      'btree',
      table.createdAt.asc().nullsLast().op('timestamptz_ops'),
    ),
    index('idx_log_tag')
      .using('gin', table.tags.asc().nullsLast().op('array_ops'))
      .with({ fastupdate: 'on' }),
  ],
);

export const fba_batch = pgTable(
  'fba_batch',
  {
    id: serial().primaryKey().notNull(),
    created_at: timestamp({ withTimezone: true, mode: 'string' })
      .defaultNow()
      .notNull(),
    updated_at: timestamp({ withTimezone: true, mode: 'string' })
      .defaultNow()
      .notNull(),
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
    autoFillListPriceAmount: numeric({ precision: 6, scale: 2 }).default('0'),
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
  },
  (table) => [
    index('batch_userId_index').using(
      'btree',
      table.userId.asc().nullsLast().op('int4_ops'),
    ),
    foreignKey({
      columns: [table.fromId],
      foreignColumns: [address.id],
      name: 'fba_batch_fromId_address_id_fk',
    }),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'fba_batch_userId_user_id_fk',
    }).onDelete('cascade'),
  ],
);

export const disputeSession = pgTable(
  'disputeSession',
  {
    userUUID: uuid().notNull(),
    at: numeric().notNull(),
    sesh: jsonb().notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.userUUID],
      foreignColumns: [user.public_uuid],
      name: 'disputeSession_userUUID_fkey',
    }),
    unique('disputeSession_userUUID_at_key').on(table.userUUID, table.at),
  ],
);

export const disputeIpHistory = pgTable(
  'disputeIpHistory',
  {
    userUUID: uuid().notNull(),
    lastUsedIp: numeric().notNull(),
    ip: varchar().notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.userUUID],
      foreignColumns: [user.public_uuid],
      name: 'disputeIpHistory_userUUID_fkey',
    }),
    unique('disputeIpHistory_userUUID_ip_key').on(table.userUUID, table.ip),
  ],
);

export const wfs_batch_json = pgTable('wfs_batch_json', {
  id: varchar({ length: 36 }).primaryKey().notNull(),
  userId: integer().notNull(),
  json: jsonb().notNull(),
});

export const feedback_campaigns = pgTable(
  'feedback_campaigns',
  {
    id: serial().primaryKey().notNull(),
    name: varchar({ length: 255 }).notNull(),
    status: feedback_campaign_status().default('INACTIVE').notNull(),
    target: feedback_campaign_target()
      .default('SEND_ONLY_TO_NEW_CUSTOMERS')
      .notNull(),
    priority: integer().default(1).notNull(),
    exclude_fbm: boolean().default(false).notNull(),
    exclude_promo: boolean().default(false).notNull(),
    exclude_negative_feedback: boolean().default(false).notNull(),
    product_selection_type: feedback_product_selection_type()
      .default('APPLY_CAMPAIGN_TO_SELECTED_PRODUCT')
      .notNull(),
    selected_product_count: integer().default(0).notNull(),
    campaign_type: feedback_campaign_type().default('USER_CUSTOM').notNull(),
    user_id: integer(),
    created_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updated_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => [
    index().using('btree', table.priority.asc().nullsLast().op('int4_ops')),
    index().using('btree', table.status.asc().nullsLast().op('enum_ops')),
    index().using('btree', table.user_id.asc().nullsLast().op('int4_ops')),
  ],
);

export const feedback_message_templates = pgTable(
  'feedback_message_templates',
  {
    id: serial().primaryKey().notNull(),
    campaign_id: integer().notNull(),
    name: varchar({ length: 255 }).notNull(),
    subject: text().notNull(),
    message_type: feedback_campaign_type().default('USER_CUSTOM').notNull(),
    email_content: text().notNull(),
    send_days: integer().default(5).notNull(),
    send_days_type: feedback_send_days_type()
      .default('DELIVERY_DATE')
      .notNull(),
    send_time: time().default('00:00:00').notNull(),
    exclude_refunded: boolean().default(false).notNull(),
    user_id: integer(),
    created_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updated_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => [
    index().using('btree', table.campaign_id.asc().nullsLast().op('int4_ops')),
    index().using('btree', table.user_id.asc().nullsLast().op('int4_ops')),
    foreignKey({
      columns: [table.campaign_id],
      foreignColumns: [feedback_campaigns.id],
      name: 'feedback_message_templates_campaign_id_fkey',
    }).onDelete('cascade'),
  ],
);

export const feedback_campaign_products = pgTable(
  'feedback_campaign_products',
  {
    id: serial().primaryKey().notNull(),
    campaign_id: integer().notNull(),
    product_id: integer(),
    sku: varchar({ length: 255 }).notNull(),
    asin: varchar({ length: 20 }),
    user_id: integer(),
    created_at: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => [
    index().using('btree', table.campaign_id.asc().nullsLast().op('int4_ops')),
    index().using('btree', table.sku.asc().nullsLast().op('text_ops')),
    index().using('btree', table.user_id.asc().nullsLast().op('int4_ops')),
    foreignKey({
      columns: [table.campaign_id],
      foreignColumns: [feedback_campaigns.id],
      name: 'feedback_campaign_products_campaign_id_fkey',
    }).onDelete('cascade'),
    unique('unique_campaign_product').on(
      table.campaign_id,
      table.sku,
      table.user_id,
    ),
  ],
);

export const address = pgTable(
  'address',
  {
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
  },
  (table) => [
    index('idx_address_userId').using(
      'btree',
      table.userId.asc().nullsLast().op('int4_ops'),
    ),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'address_userId_user_id_fk',
    }).onDelete('cascade'),
  ],
);

export const wfs_listing_sync = pgTable(
  'wfs_listing_sync',
  {
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
    createdAt: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    publishedStatus: wfs_published_status(),
    lifecycleStatus: wfs_lifecycle_status(),
    itemId: text(),
    reviews: integer(),
    rating: numeric({ precision: 10, scale: 2 }),
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
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'wfs_listing_sync_userId_fkey',
    })
      .onUpdate('cascade')
      .onDelete('cascade'),
  ],
);

export const update_notifications = pgTable('update_notifications', {
  id: serial().primaryKey().notNull(),
  type: numeric().notNull(),
  name: varchar().notNull(),
  tagline: varchar().notNull(),
  body: varchar().notNull(),
  createdAt: timestamp({ withTimezone: true, mode: 'string' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  publishAt: timestamp({ withTimezone: true, mode: 'string' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  expireAt: timestamp({ withTimezone: true, mode: 'string' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const carrier_accounts_ups = pgTable('carrier_accounts_ups', {
  uuid: uuid().defaultRandom().primaryKey().notNull(),
  clientId: varchar().notNull(),
  clientSecret: varchar().notNull(),
  billingAccountAkaAccountNumber: varchar().notNull(),
  label: varchar().default('').notNull(),
});

export const carrier_accounts_fedex = pgTable('carrier_accounts_fedex', {
  uuid: uuid().defaultRandom().primaryKey().notNull(),
  apiKeyAkaClientId: varchar().notNull(),
  secretKeyAkaClientSecret: varchar().notNull(),
  billingAccount: varchar().notNull(),
  label: varchar().default('').notNull(),
});

export const carrierLabels = pgTable(
  'carrierLabels',
  {
    uuid: uuid().defaultRandom().primaryKey().notNull(),
    createdAt: timestamp({ mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    labelBase64: varchar().default('').notNull(),
    userUUID: uuid().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    lastSyncedBoxemDate: bigint({ mode: 'number' }).default(0).notNull(),
    project: jsonb().notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.userUUID],
      foreignColumns: [user.public_uuid],
      name: 'user_uuid_fkey',
    }),
  ],
);

export const spapi_stats = pgTable(
  'spapi_stats',
  {
    id: uuid().primaryKey().notNull(),
    url: varchar().notNull(),
    method: http_method().notNull(),
    startTime: numeric().notNull(),
    endTime: numeric().notNull(),
    count: integer().notNull(),
    userUUID: uuid().notNull(),
  },
  (table) => [
    unique('spapi_stats_url_method_startTime_userUUID_key').on(
      table.url,
      table.method,
      table.startTime,
      table.userUUID,
    ),
  ],
);

export const restock = pgTable(
  'restock',
  {
    sourceStoreUrl: varchar().notNull(),
    sourcePrice: numeric().notNull(),
    asin: varchar({ length: 10 }).notNull(),
    userUUID: uuid().notNull(),
    uuid: uuid().defaultRandom().primaryKey().notNull(),
    sourceUnits: numeric().default('1').notNull(),
    amazonUnits: numeric().default('1').notNull(),
    condition: varchar().default('New').notNull(),
    originalEnteredCost: numeric().default('0').notNull(),
    created: numeric()
      .default(
        'trunc((EXTRACT(epoch FROM CURRENT_TIMESTAMP) * (1000)::numeric))',
      )
      .notNull(),
    targetROI: numeric().default('0.3').notNull(),
    scrapePrice: boolean().default(true).notNull(),
    leadDaysOverrideGlobal: numeric().default('0').notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.userUUID],
      foreignColumns: [user.public_uuid],
      name: 'userUUID_fkey',
    }),
  ],
);

export const wfs_shipment_sync = pgTable(
  'wfs_shipment_sync',
  {
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
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'wfs_shipment_sync_userId_fkey',
    }).onDelete('cascade'),
  ],
);

export const wfs_shipment_item_sync = pgTable(
  'wfs_shipment_item_sync',
  {
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
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'wfs_shipment_item_sync_userId_fkey',
    }).onDelete('cascade'),
  ],
);

export const box_templates = pgTable(
  'box_templates',
  {
    id: uuid().defaultRandom().primaryKey().notNull(),
    createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
    sellerId: integer(),
    name: varchar({ length: 32 }).default('Default').notNull(),
    length: numeric().default('0').notNull(),
    width: numeric().default('0').notNull(),
    height: numeric().default('0').notNull(),
    weight: numeric().default('0').notNull(),
    isAutoGenerated: boolean().default(false).notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.sellerId],
      foreignColumns: [user.id],
      name: 'box_templates_sellerId_fkey',
    }).onDelete('cascade'),
  ],
);

export const wfs_inventory_sync = pgTable(
  'wfs_inventory_sync',
  {
    id: serial().primaryKey().notNull(),
    userId: integer(),
    createdAt: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
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
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'wfs_inventory_sync_userId_fkey',
    }).onDelete('cascade'),
  ],
);

export const wfs_listing = pgTable(
  'wfs_listing',
  {
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
    createdAt: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp({ withTimezone: true, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    publishedStatus: wfs_published_status().notNull(),
    lifecycleStatus: wfs_lifecycle_status().notNull(),
    itemId: varchar({ length: 50 }),
    availToSellQuantity: integer(),
    fulfillmentLagTime: varchar({ length: 30 }),
    offerStartDate: timestamp({ withTimezone: true, mode: 'string' }),
    offerEndDate: timestamp({ withTimezone: true, mode: 'string' }),
    reviews: integer(),
    rating: numeric({ precision: 10, scale: 2 }),
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
  },
  (table) => [
    index().using('btree', table.sku.asc().nullsLast().op('text_ops')),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'wfs_listing_userId_fkey',
    })
      .onUpdate('cascade')
      .onDelete('cascade'),
    unique('wfs_listing_sku_unique').on(table.sku, table.userId),
  ],
);

export const bulkUngateStats = pgTable(
  'bulkUngateStats',
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    start: bigint({ mode: 'number' }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    end: bigint({ mode: 'number' }).notNull(),
    ungated: numeric().notNull(),
    gated: numeric().notNull(),
    restricted: numeric().notNull(),
    errored: numeric().notNull(),
  },
  (table) => [
    index('bulkUngateEnd').using(
      'btree',
      table.end.asc().nullsLast().op('int8_ops'),
    ),
    index('bulkUngateStart').using(
      'btree',
      table.start.asc().nullsLast().op('int8_ops'),
    ),
  ],
);

export const activitySnapshot = pgTable(
  'activitySnapshot',
  {
    snapshotBoxemDate: numeric().notNull(),
    activeUsers: integer().notNull(),
  },
  (table) => [
    index('snapshotBoxemDate').using(
      'btree',
      table.snapshotBoxemDate.asc().nullsLast().op('numeric_ops'),
    ),
  ],
);

export const setting = pgTable(
  'setting',
  {
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
    autoFillListPriceAmount: numeric({ precision: 6, scale: 2 }).default('25'),
    userId: integer(),
    fromId: integer(),
    printLabelsEarly: boolean().default(false),
    skuGenerationOption: text().default('boxemGenerated'),
    skuGenerationFormula: text().default(
      '[{"type":"asin"},{"type":"condition"},{"type":"count"}]',
    ),
    skuGenerationCount: integer().default(0),
    printFNSKUAfterAddingToShipment: boolean().default(false),
    printFNSKUAfterIncreaseQuantityInShipment: boolean().default(false),
    printFNSKUAfterAssigningToBox: boolean().default(false),
    printFNSKUAfterIncreaseQuantityInBox: boolean().default(false),
    fbmShippingTemplateIdNew: varchar().default('').notNull(),
    restockLeadWeight: jsonb().notNull(),
    restockLeadDays: numeric().default('0').notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.fromId],
      foreignColumns: [address.id],
      name: 'setting_fromId_address_id_fk',
    }),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'setting_userId_user_id_fk',
    }).onDelete('cascade'),
    unique('settingUserIdUnique').on(table.userId),
  ],
);

export const boxi_message = pgTable(
  'boxi_message',
  {
    uuid: uuid().defaultRandom().notNull(),
    senderIsUser: boolean().default(false).notNull(),
    createdAt: timestamp({ mode: 'string' }).defaultNow().notNull(),
    owner: integer().notNull(),
    chat: uuid().notNull(),
    message: varchar({ length: 65535 }).default('').notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.chat],
      foreignColumns: [boxi_chat.uuid],
      name: 'boxi_message_chat_fkey',
    }).onDelete('cascade'),
    foreignKey({
      columns: [table.owner],
      foreignColumns: [user.id],
      name: 'boxi_message_owner_fkey',
    }).onDelete('cascade'),
    primaryKey({
      columns: [table.uuid, table.senderIsUser],
      name: 'boxi_message_pkey',
    }),
    unique('boxi_message_uuid_key').on(table.uuid),
  ],
);

// ============================================================================
// APPLICATION VIEW (renamed from "latest-inventory-details")
// ============================================================================

export const latestInventoryDetails = pgView('latest-inventory-details', {
  pid: integer(),
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
  latest_notification_updated_at: timestamp({
    withTimezone: true,
    mode: 'string',
  }),
  productId: integer(),
}).as(
  sql`SELECT DISTINCT ON ("listingId") "listingId" AS pid, id, "fulfillableQuantity", "inboundWorkingQuantity", "inboundShippedQuantity", "inboundReceivingQuantity", "reservedQuantity", "researchingQuantity", "unfulfillableQuantity", "futureSupplyQuantity", created_at, updated_at, "sellerSku", "fnSku", "totalQuantity", "pendingCustomerOrderInTransit", latest_notification_updated_at, "listingId" AS "productId" FROM amazon.inventory_details ORDER BY "listingId", latest_notification_updated_at DESC`,
);
