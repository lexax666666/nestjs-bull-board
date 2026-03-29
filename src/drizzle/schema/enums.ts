import { pgEnum, pgSchema } from 'drizzle-orm/pg-core';

// --- Amazon schema declaration ---
export const amazon = pgSchema('amazon');

// --- Amazon-scoped enum ---
export const job_statusInAmazon = amazon.enum('job_status', [
  'queued',
  'in_progress',
  'succeeded',
  'failed',
]);

// --- Public enums ---
export const address_type_enum = pgEnum('address_type_enum', ['From', 'To']);

export const autoFillListPriceFromEnum = pgEnum('autoFillListPriceFromEnum', [
  'BUY_BOX',
  'HIGHEST_FBA_OFFER',
  'LOWEST_FBA_OFFER',
]);

export const autoFillListPriceOperationEnum = pgEnum(
  'autoFillListPriceOperationEnum',
  ['INCREASE', 'DECREASE'],
);

export const boxContentsProviderTypeEnum = pgEnum(
  'boxContentsProviderTypeEnum',
  ['Boxem', 'Seller', 'Barcode2D'],
);

export const bulk_ungate_status = pgEnum('bulk_ungate_status', [
  'UNGATED',
  'GATED',
  'RESTRICTED',
  'ERRORED',
]);

export const fba_shipment_status_enum = pgEnum('fba_shipment_status_enum', [
  'CREATED',
  'CONFIRMED',
  'CANCELLED',
  'CARTON_SUBMITTED',
  'CARTON_PROCESSED',
  'CARTON_PROCESSED_WITH_ERROR',
  'TRANSPORT_SUBMITTED',
  'TRANSPORT_CONFIRMED',
  'LABEL_ACQUIRED',
  'SHIPPED',
  'IN_TRANSIT',
  'DELIVERED',
  'CHECKED_IN',
  'CARTON_SUBMISSION_FAILED',
  'TRANSPORT_SUBMISSION_ERROR',
  'TRANSPORT_ESTIMATING',
  'TRANSPORT_ESTIMATED',
  'TRANSPORT_ESTIMATED_ERROR',
  'TRANSPORT_CONFIRMING',
  'TRANSPORT_CONFIRMING_ERROR',
  'TRANSPORT_VOIDING',
  'TRANSPORT_VOID_ERROR',
  'TRANSPORT_VOIDED',
  'CLOSED',
  'DELETED',
  'WORKING',
  'READY_TO_SHIP',
  'RECEIVING',
  'ERROR',
]);

export const feedback_campaign_status = pgEnum('feedback_campaign_status', [
  'ACTIVE',
  'INACTIVE',
]);

export const feedback_campaign_target = pgEnum('feedback_campaign_target', [
  'SEND_ONLY_TO_NEW_CUSTOMERS',
  'SEND_ONLY_TO_REPEATED_CUSTOMERS',
  'SEND_NEW_AND_REPEATED_CUSTOMERS',
]);

export const feedback_campaign_type = pgEnum('feedback_campaign_type', [
  'AMAZON_DEFAULT',
  'USER_CUSTOM',
]);

export const feedback_product_selection_type = pgEnum(
  'feedback_product_selection_type',
  [
    'APPLY_CAMPAIGN_TO_ALL_PRODUCTS',
    'APPLY_CAMPAIGN_TO_SELECTED_PRODUCT',
    'APPLY_CAMPAIGN_TO_ALL_PRODUCTS_EXCEPT_THE_SELECTED',
  ],
);

export const feedback_send_days_type = pgEnum('feedback_send_days_type', [
  'DELIVERY_DATE',
  'ORDER_DATE',
  'SHIPPING_DATE',
  'REFUND_DATE',
]);

export const freight_class_enum = pgEnum('freight_class_enum', [
  '50',
  '55',
  '60',
  '65',
  '70',
  '85',
  '100',
  '110',
  '125',
  '150',
  '175',
  '200',
  '250',
  '300',
  '400',
  '500',
  '77.5',
  '92.5',
]);

export const fulfillment_type_enum = pgEnum('fulfillment_type_enum', [
  'FBA',
  'MFN',
  'UNKNOWN',
]);

export const http_method = pgEnum('http_method', [
  'GET',
  'PUT',
  'POST',
  'PATCH',
  'DELETE',
  'HEAD',
  'OPTIONS',
]);

export const inbound_item_fulfillmentstatus_enum = pgEnum(
  'inbound_item_fulfillmentstatus_enum',
  [
    'SUCCESS',
    'PREPINSTRUCTION_FAILED',
    'PREPINSTRUCTION_FETCHING',
    'SHIPMENTPLAN_CREATION',
    'FAILED',
  ],
);

export const inbound_ltl_amazoncalculatedcurrency_enum = pgEnum(
  'inbound_ltl_amazoncalculatedcurrency_enum',
  ['USD', 'GBP'],
);

export const inbound_ltl_partnerestimatecurrency_enum = pgEnum(
  'inbound_ltl_partnerestimatecurrency_enum',
  ['USD', 'GBP'],
);

export const inbound_ltl_sellerdeclaredcurrency_enum = pgEnum(
  'inbound_ltl_sellerdeclaredcurrency_enum',
  ['USD', 'GBP'],
);

export const inbound_ltl_totalweightunit_enum = pgEnum(
  'inbound_ltl_totalweightunit_enum',
  ['pounds', 'kilograms'],
);

export const inbound_sp_partnerestimatecurrency_enum = pgEnum(
  'inbound_sp_partnerestimatecurrency_enum',
  ['USD', 'GBP'],
);

export const label_prep_preference_enum = pgEnum('label_prep_preference_enum', [
  'SELLER_LABEL',
  'AMAZON_LABEL_PREFERRED',
  'AMAZON_LABEL_ONLY',
]);

export const label_prep_type_enum = pgEnum('label_prep_type_enum', [
  'NO_LABEL',
  'SELLER_LABEL',
  'AMAZON_LABEL',
]);

export const listing_inboundeligibilitystatus_enum = pgEnum(
  'listing_inboundeligibilitystatus_enum',
  ['UNKNOWN', 'ELIGIBLE', 'NOT_ELIGIBLE'],
);

export const package_inboundpackagestatus_enum = pgEnum(
  'package_inboundpackagestatus_enum',
  [
    'SHIPPED',
    'RECEIVING',
    'DELETED',
    'CLOSED',
    'IN_TRANSIT',
    'DELIVERED',
    'CHECKED_IN',
  ],
);

export const packing_type_enum = pgEnum('packing_type_enum', [
  'INDIVIDUAL',
  'CASE_PACKED',
]);

export const product_inboundeligibilitystatus_enum = pgEnum(
  'product_inboundeligibilitystatus_enum',
  ['UNKNOWN', 'ELIGIBLE', 'NOT_ELIGIBLE'],
);

export const shipment_boxcontents_enum = pgEnum('shipment_boxcontents_enum', [
  'Boxem',
  'Amazon',
  'Seller',
]);

export const shipment_fulfillmenttype_enum = pgEnum(
  'shipment_fulfillmenttype_enum',
  ['FBA', 'MFN'],
);

export const shipment_labelingpreference_enum = pgEnum(
  'shipment_labelingpreference_enum',
  ['Amazon', 'Seller'],
);

export const shipment_packingtype_enum = pgEnum('shipment_packingtype_enum', [
  'Individual',
  'Case_Packed',
]);

export const shipment_plan_boxcontent_enum = pgEnum(
  'shipment_plan_boxcontent_enum',
  ['Boxem', 'Amazon', 'Seller'],
);

export const shipment_plan_cartonfeedstatus_enum = pgEnum(
  'shipment_plan_cartonfeedstatus_enum',
  ['CANCELLED', 'DONE', 'DONE_WITH_ERROR', 'FATAL', 'IN_PROGRESS', 'IN_QUEUE'],
);

export const shipment_plan_fulfillmenttype_enum = pgEnum(
  'shipment_plan_fulfillmenttype_enum',
  ['FBA', 'MFN'],
);

export const shipment_plan_labelpreptype_enum = pgEnum(
  'shipment_plan_labelpreptype_enum',
  ['AMAZON_LABEL_ONLY', 'SELLER_LABEL', 'AMZON_LABEL_PREFERRED', 'NO_LABEL'],
);

export const shipment_plan_listingfeedstatus_enum = pgEnum(
  'shipment_plan_listingfeedstatus_enum',
  ['CANCELLED', 'DONE', 'DONE_WITH_ERROR', 'FATAL', 'IN_PROGRESS', 'IN_QUEUE'],
);

export const shipment_plan_packingtype_enum = pgEnum(
  'shipment_plan_packingtype_enum',
  ['Individual', 'Case_Packed'],
);

export const shipment_plan_shipmentboxcontentsource_enum = pgEnum(
  'shipment_plan_shipmentboxcontentsource_enum',
  ['NONE', 'FEED', '2D_BARCODE'],
);

export const shipment_plan_shipmentstatus_enum = pgEnum(
  'shipment_plan_shipmentstatus_enum',
  [
    'WORKING',
    'CARTON_DOCUMENT_UPLOADED',
    'CARTON_FEED_CREATED',
    'SHIPPED',
    'RECEIVING',
    'CANCELLED',
    'DELETED',
    'CLOSED',
    'ERROR',
    'IN_TRANSIT',
    'DELIVERED',
    'CHECKED_IN',
  ],
);

export const shipment_plan_shipmenttype_enum = pgEnum(
  'shipment_plan_shipmenttype_enum',
  ['LTL', 'SPD', 'FTL'],
);

export const shipment_plan_status_enum = pgEnum('shipment_plan_status_enum', [
  'Draft',
  'Submitted',
  'Deleted',
  'Cancelled',
  'ShipmentCreated',
]);

export const shipment_plan_transportstatus_enum = pgEnum(
  'shipment_plan_transportstatus_enum',
  [
    'WORKING',
    'ESTIMATING',
    'ESTIMATED',
    'ERROR_ON_ESTIMATING',
    'CONFIRMING',
    'CONFIRMED',
    'ERROR_ON_CONFIRMING',
    'VOIDING',
    'VOIDED',
    'ERROR_IN_VOIDING',
    'ERROR',
  ],
);

export const shipment_plan_transporttype_enum = pgEnum(
  'shipment_plan_transporttype_enum',
  ['LTL', 'SPD', 'FTL'],
);

export const shipment_shippingmethod_enum = pgEnum(
  'shipment_shippingmethod_enum',
  ['SPD', 'LTL', 'FTL'],
);

export const shipment_status_enum = pgEnum('shipment_status_enum', [
  'Draft',
  'Working',
  'Shipped',
  'Active',
  'In_Transit',
  'Delivered',
  'Checked_In',
  'Receiving',
  'Closed',
]);

export const shipping_label_labeltype_enum = pgEnum(
  'shipping_label_labeltype_enum',
  ['BARCODE_2D', 'UNIQUE', 'PALLET'],
);

export const shipping_label_page_type_enum = pgEnum(
  'shipping_label_page_type_enum',
  [
    'PackageLabel_Letter_2',
    'PackageLabel_Letter_4',
    'PackageLabel_Letter_6',
    'PackageLabel_Letter_6_CarrierLeft',
    'PackageLabel_A4_2',
    'PackageLabel_A4_4',
    'PackageLabel_Plain_Paper',
    'PackageLabel_Plain_Paper_CarrierBottom',
    'PackageLabel_Thermal',
    'PackageLabel_Thermal_Unified',
    'PackageLabel_Thermal_NonPCP',
    'PackageLabel_Thermal_No_Carrier_Rotation',
  ],
);

export const shipping_label_pagetype_enum = pgEnum(
  'shipping_label_pagetype_enum',
  [
    'PackageLabel_Letter_2',
    'PackageLabel_Letter_4',
    'PackageLabel_Letter_6',
    'PackageLabel_Letter_6_CarrierLeft',
    'PackageLabel_A4_2',
    'PackageLabel_A4_4',
    'PackageLabel_Plain_Paper',
    'PackageLabel_Plain_Paper_CarrierBottom',
    'PackageLabel_Thermal',
    'PackageLabel_Thermal_Unified',
    'PackageLabel_Thermal_NonPCP',
    'PackageLabel_Thermal_No_Carrier_Rotation',
  ],
);

export const shipping_label_type_enum = pgEnum('shipping_label_type_enum', [
  'BARCODE_2D',
  'PALLET',
  'UNIQUE',
]);

export const sync_job_status = pgEnum('sync_job_status', [
  'PROCESSING',
  'TERMINATED_WITH_ERROR',
  'COMPLETED',
]);

export const transport_type_enum = pgEnum('transport_type_enum', [
  'SPD',
  'LTL',
  'FTL',
]);

export const wfs_fulfillment_type = pgEnum('wfs_fulfillment_type', [
  'SPD',
  'LTL',
  'FTL',
]);

export const wfs_lifecycle_status = pgEnum('wfs_lifecycle_status', [
  'ACTIVE',
  'ARCHIVED',
  'RETIRED',
  'UNPUBLISHED',
]);

export const wfs_published_status = pgEnum('wfs_published_status', [
  'PUBLISHED',
  'UNPUBLISHED',
  'SYSTEM_PROBLEM',
  'STAGE',
  'PENDING_PUBLISH',
  'IN_PROGRESS',
]);

export const wfs_shipment_status = pgEnum('wfs_shipment_status', [
  'PENDING_SHIPMENT_DETAILS',
  'AWAITING_DELIVERY',
  'CLOSED',
  'CANCELLED',
  'RECEIVING_IN_PROGRESS',
]);
