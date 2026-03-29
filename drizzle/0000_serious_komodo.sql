-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE SCHEMA "amazon";
--> statement-breakpoint
CREATE TYPE "amazon"."job_status" AS ENUM('queued', 'in_progress', 'succeeded', 'failed');--> statement-breakpoint
CREATE TYPE "public"."address_type_enum" AS ENUM('From', 'To');--> statement-breakpoint
CREATE TYPE "public"."autoFillListPriceFromEnum" AS ENUM('BUY_BOX', 'HIGHEST_FBA_OFFER', 'LOWEST_FBA_OFFER');--> statement-breakpoint
CREATE TYPE "public"."autoFillListPriceOperationEnum" AS ENUM('INCREASE', 'DECREASE');--> statement-breakpoint
CREATE TYPE "public"."boxContentsProviderTypeEnum" AS ENUM('Boxem', 'Seller', 'Barcode2D');--> statement-breakpoint
CREATE TYPE "public"."bulk_ungate_status" AS ENUM('UNGATED', 'GATED', 'RESTRICTED', 'ERRORED');--> statement-breakpoint
CREATE TYPE "public"."fba_shipment_status_enum" AS ENUM('CREATED', 'CONFIRMED', 'CANCELLED', 'CARTON_SUBMITTED', 'CARTON_PROCESSED', 'CARTON_PROCESSED_WITH_ERROR', 'TRANSPORT_SUBMITTED', 'TRANSPORT_CONFIRMED', 'LABEL_ACQUIRED', 'SHIPPED', 'IN_TRANSIT', 'DELIVERED', 'CHECKED_IN', 'CARTON_SUBMISSION_FAILED', 'TRANSPORT_SUBMISSION_ERROR', 'TRANSPORT_ESTIMATING', 'TRANSPORT_ESTIMATED', 'TRANSPORT_ESTIMATED_ERROR', 'TRANSPORT_CONFIRMING', 'TRANSPORT_CONFIRMING_ERROR', 'TRANSPORT_VOIDING', 'TRANSPORT_VOID_ERROR', 'TRANSPORT_VOIDED', 'CLOSED', 'DELETED', 'WORKING', 'READY_TO_SHIP', 'RECEIVING', 'ERROR');--> statement-breakpoint
CREATE TYPE "public"."feedback_campaign_status" AS ENUM('ACTIVE', 'INACTIVE');--> statement-breakpoint
CREATE TYPE "public"."feedback_campaign_target" AS ENUM('SEND_ONLY_TO_NEW_CUSTOMERS', 'SEND_ONLY_TO_REPEATED_CUSTOMERS', 'SEND_NEW_AND_REPEATED_CUSTOMERS');--> statement-breakpoint
CREATE TYPE "public"."feedback_campaign_type" AS ENUM('AMAZON_DEFAULT', 'USER_CUSTOM');--> statement-breakpoint
CREATE TYPE "public"."feedback_product_selection_type" AS ENUM('APPLY_CAMPAIGN_TO_ALL_PRODUCTS', 'APPLY_CAMPAIGN_TO_SELECTED_PRODUCT', 'APPLY_CAMPAIGN_TO_ALL_PRODUCTS_EXCEPT_THE_SELECTED');--> statement-breakpoint
CREATE TYPE "public"."feedback_send_days_type" AS ENUM('DELIVERY_DATE', 'ORDER_DATE', 'SHIPPING_DATE', 'REFUND_DATE');--> statement-breakpoint
CREATE TYPE "public"."freight_class_enum" AS ENUM('50', '55', '60', '65', '70', '85', '100', '110', '125', '150', '175', '200', '250', '300', '400', '500', '77.5', '92.5');--> statement-breakpoint
CREATE TYPE "public"."fulfillment_type_enum" AS ENUM('FBA', 'MFN', 'UNKNOWN');--> statement-breakpoint
CREATE TYPE "public"."http_method" AS ENUM('GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS');--> statement-breakpoint
CREATE TYPE "public"."inbound_item_fulfillmentstatus_enum" AS ENUM('SUCCESS', 'PREPINSTRUCTION_FAILED', 'PREPINSTRUCTION_FETCHING', 'SHIPMENTPLAN_CREATION', 'FAILED');--> statement-breakpoint
CREATE TYPE "public"."inbound_ltl_amazoncalculatedcurrency_enum" AS ENUM('USD', 'GBP');--> statement-breakpoint
CREATE TYPE "public"."inbound_ltl_partnerestimatecurrency_enum" AS ENUM('USD', 'GBP');--> statement-breakpoint
CREATE TYPE "public"."inbound_ltl_sellerdeclaredcurrency_enum" AS ENUM('USD', 'GBP');--> statement-breakpoint
CREATE TYPE "public"."inbound_ltl_totalweightunit_enum" AS ENUM('pounds', 'kilograms');--> statement-breakpoint
CREATE TYPE "public"."inbound_sp_partnerestimatecurrency_enum" AS ENUM('USD', 'GBP');--> statement-breakpoint
CREATE TYPE "public"."label_prep_preference_enum" AS ENUM('SELLER_LABEL', 'AMAZON_LABEL_PREFERRED', 'AMAZON_LABEL_ONLY');--> statement-breakpoint
CREATE TYPE "public"."label_prep_type_enum" AS ENUM('NO_LABEL', 'SELLER_LABEL', 'AMAZON_LABEL');--> statement-breakpoint
CREATE TYPE "public"."listing_inboundeligibilitystatus_enum" AS ENUM('UNKNOWN', 'ELIGIBLE', 'NOT_ELIGIBLE');--> statement-breakpoint
CREATE TYPE "public"."package_inboundpackagestatus_enum" AS ENUM('SHIPPED', 'RECEIVING', 'DELETED', 'CLOSED', 'IN_TRANSIT', 'DELIVERED', 'CHECKED_IN');--> statement-breakpoint
CREATE TYPE "public"."packing_type_enum" AS ENUM('INDIVIDUAL', 'CASE_PACKED');--> statement-breakpoint
CREATE TYPE "public"."product_inboundeligibilitystatus_enum" AS ENUM('UNKNOWN', 'ELIGIBLE', 'NOT_ELIGIBLE');--> statement-breakpoint
CREATE TYPE "public"."shipment_boxcontents_enum" AS ENUM('Boxem', 'Amazon', 'Seller');--> statement-breakpoint
CREATE TYPE "public"."shipment_fulfillmenttype_enum" AS ENUM('FBA', 'MFN');--> statement-breakpoint
CREATE TYPE "public"."shipment_labelingpreference_enum" AS ENUM('Amazon', 'Seller');--> statement-breakpoint
CREATE TYPE "public"."shipment_packingtype_enum" AS ENUM('Individual', 'Case_Packed');--> statement-breakpoint
CREATE TYPE "public"."shipment_plan_boxcontent_enum" AS ENUM('Boxem', 'Amazon', 'Seller');--> statement-breakpoint
CREATE TYPE "public"."shipment_plan_cartonfeedstatus_enum" AS ENUM('CANCELLED', 'DONE', 'DONE_WITH_ERROR', 'FATAL', 'IN_PROGRESS', 'IN_QUEUE');--> statement-breakpoint
CREATE TYPE "public"."shipment_plan_fulfillmenttype_enum" AS ENUM('FBA', 'MFN');--> statement-breakpoint
CREATE TYPE "public"."shipment_plan_labelpreptype_enum" AS ENUM('AMAZON_LABEL_ONLY', 'SELLER_LABEL', 'AMZON_LABEL_PREFERRED', 'NO_LABEL');--> statement-breakpoint
CREATE TYPE "public"."shipment_plan_listingfeedstatus_enum" AS ENUM('CANCELLED', 'DONE', 'DONE_WITH_ERROR', 'FATAL', 'IN_PROGRESS', 'IN_QUEUE');--> statement-breakpoint
CREATE TYPE "public"."shipment_plan_packingtype_enum" AS ENUM('Individual', 'Case_Packed');--> statement-breakpoint
CREATE TYPE "public"."shipment_plan_shipmentboxcontentsource_enum" AS ENUM('NONE', 'FEED', '2D_BARCODE');--> statement-breakpoint
CREATE TYPE "public"."shipment_plan_shipmentstatus_enum" AS ENUM('WORKING', 'CARTON_DOCUMENT_UPLOADED', 'CARTON_FEED_CREATED', 'SHIPPED', 'RECEIVING', 'CANCELLED', 'DELETED', 'CLOSED', 'ERROR', 'IN_TRANSIT', 'DELIVERED', 'CHECKED_IN');--> statement-breakpoint
CREATE TYPE "public"."shipment_plan_shipmenttype_enum" AS ENUM('LTL', 'SPD', 'FTL');--> statement-breakpoint
CREATE TYPE "public"."shipment_plan_status_enum" AS ENUM('Draft', 'Submitted', 'Deleted', 'Cancelled', 'ShipmentCreated');--> statement-breakpoint
CREATE TYPE "public"."shipment_plan_transportstatus_enum" AS ENUM('WORKING', 'ESTIMATING', 'ESTIMATED', 'ERROR_ON_ESTIMATING', 'CONFIRMING', 'CONFIRMED', 'ERROR_ON_CONFIRMING', 'VOIDING', 'VOIDED', 'ERROR_IN_VOIDING', 'ERROR');--> statement-breakpoint
CREATE TYPE "public"."shipment_plan_transporttype_enum" AS ENUM('LTL', 'SPD', 'FTL');--> statement-breakpoint
CREATE TYPE "public"."shipment_shippingmethod_enum" AS ENUM('SPD', 'LTL', 'FTL');--> statement-breakpoint
CREATE TYPE "public"."shipment_status_enum" AS ENUM('Draft', 'Working', 'Shipped', 'Active', 'In_Transit', 'Delivered', 'Checked_In', 'Receiving', 'Closed');--> statement-breakpoint
CREATE TYPE "public"."shipping_label_labeltype_enum" AS ENUM('BARCODE_2D', 'UNIQUE', 'PALLET');--> statement-breakpoint
CREATE TYPE "public"."shipping_label_page_type_enum" AS ENUM('PackageLabel_Letter_2', 'PackageLabel_Letter_4', 'PackageLabel_Letter_6', 'PackageLabel_Letter_6_CarrierLeft', 'PackageLabel_A4_2', 'PackageLabel_A4_4', 'PackageLabel_Plain_Paper', 'PackageLabel_Plain_Paper_CarrierBottom', 'PackageLabel_Thermal', 'PackageLabel_Thermal_Unified', 'PackageLabel_Thermal_NonPCP', 'PackageLabel_Thermal_No_Carrier_Rotation');--> statement-breakpoint
CREATE TYPE "public"."shipping_label_pagetype_enum" AS ENUM('PackageLabel_Letter_2', 'PackageLabel_Letter_4', 'PackageLabel_Letter_6', 'PackageLabel_Letter_6_CarrierLeft', 'PackageLabel_A4_2', 'PackageLabel_A4_4', 'PackageLabel_Plain_Paper', 'PackageLabel_Plain_Paper_CarrierBottom', 'PackageLabel_Thermal', 'PackageLabel_Thermal_Unified', 'PackageLabel_Thermal_NonPCP', 'PackageLabel_Thermal_No_Carrier_Rotation');--> statement-breakpoint
CREATE TYPE "public"."shipping_label_type_enum" AS ENUM('BARCODE_2D', 'PALLET', 'UNIQUE');--> statement-breakpoint
CREATE TYPE "public"."sync_job_status" AS ENUM('PROCESSING', 'TERMINATED_WITH_ERROR', 'COMPLETED');--> statement-breakpoint
CREATE TYPE "public"."transport_type_enum" AS ENUM('SPD', 'LTL', 'FTL');--> statement-breakpoint
CREATE TYPE "public"."wfs_fulfillment_type" AS ENUM('SPD', 'LTL', 'FTL');--> statement-breakpoint
CREATE TYPE "public"."wfs_lifecycle_status" AS ENUM('ACTIVE', 'ARCHIVED', 'RETIRED', 'UNPUBLISHED');--> statement-breakpoint
CREATE TYPE "public"."wfs_published_status" AS ENUM('PUBLISHED', 'UNPUBLISHED', 'SYSTEM_PROBLEM', 'STAGE', 'PENDING_PUBLISH', 'IN_PROGRESS');--> statement-breakpoint
CREATE TYPE "public"."wfs_shipment_status" AS ENUM('PENDING_SHIPMENT_DETAILS', 'AWAITING_DELIVERY', 'CLOSED', 'CANCELLED', 'RECEIVING_IN_PROGRESS');--> statement-breakpoint
CREATE TABLE "assistants_to_sellers" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"sellerId" integer NOT NULL,
	"assistantId" integer NOT NULL,
	"status" text DEFAULT 'PENDING' NOT NULL,
	"permissions" integer,
	CONSTRAINT "assistantIdAndSellerIdComboUnique" UNIQUE("sellerId","assistantId")
);
--> statement-breakpoint
CREATE TABLE "amazon"."listing" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"name" varchar,
	"description" varchar,
	"asin" varchar,
	"sku" varchar,
	"fnSku" varchar,
	"gtin" varchar,
	"ean" varchar,
	"upc" varchar,
	"type" varchar,
	"offers" jsonb,
	"country" varchar,
	"components" varchar(2048),
	"warranty" varchar,
	"condition" varchar(2048),
	"image0" varchar,
	"image1" varchar,
	"image2" varchar,
	"image3" varchar,
	"image4" varchar,
	"image5" varchar,
	"image6" varchar,
	"image7" varchar,
	"manufacturer" varchar,
	"brand" varchar,
	"style" varchar,
	"price" numeric(10, 2),
	"currency" varchar DEFAULT 'USD' NOT NULL,
	"quantity" integer,
	"weight" numeric(10, 2),
	"weightUnit" varchar DEFAULT 'ounces',
	"packageLength" numeric(10, 2),
	"packageWidth" numeric(10, 2),
	"packageHeight" numeric(10, 2),
	"cpsiaCautionaryStatement" varchar,
	"bulletPoint" varchar,
	"batteryType" varchar,
	"numberOfBatteries" integer,
	"batteryRequired" boolean,
	"batteryIncluded" boolean,
	"batterySpecs" jsonb,
	"batteryCells" integer,
	"batteryInfo" jsonb,
	"supplierDgHzRegulation" varchar DEFAULT 'not_applicable',
	"locale" varchar DEFAULT 'en_US' NOT NULL,
	"isActive" boolean DEFAULT true NOT NULL,
	"userId" integer,
	"status" varchar DEFAULT 'DRAFT',
	"notification_updated_at" timestamp with time zone,
	"status_updated_at" timestamp with time zone,
	"listingFeedMessageId" varchar,
	"listingFeedMessage" varchar,
	"inboundEligibilityStatus" text DEFAULT 'UNKNOWN',
	"catalogId" integer,
	"fulfillmentType" text,
	"syncStatus" varchar DEFAULT 'PENDING',
	"syncBatchId" varchar,
	"syncError" jsonb,
	"openDate" timestamp with time zone,
	"fetchListing" boolean DEFAULT false,
	"prepInstructions" jsonb,
	"fromSync" boolean DEFAULT false,
	"merchantShippingGroup" varchar,
	"buyCost" numeric(10, 2),
	"inboundWorkingQuantity" integer,
	"inboundShippedQuantity" integer,
	"inboundReceivingQuantity" integer,
	"reservedQuantity" integer,
	"unfulfillableQuantity" integer,
	"researchingQuantity" integer,
	"isDiscoverable" boolean,
	"isBuyable" boolean,
	"buyCostType" text DEFAULT 'FIXED',
	"conditionNotes" varchar,
	"quantityInCase" integer,
	"datePurchased" date,
	"expirationDate" date,
	"pricingFeedMessage" varchar,
	"quantityFeedMessage" varchar,
	"issueSyncStatus" varchar,
	"supplierId" integer,
	"submitted_at" timestamp,
	"prepBatchId" varchar,
	"prepStatus" varchar,
	"strandedAction" varchar,
	"strandedDate" timestamp with time zone,
	"strandedReason" varchar,
	"strandedRemoveDate" timestamp with time zone,
	"product_short_name" text,
	"amazonMetadata" jsonb NOT NULL,
	"debugDeletedReason" varchar DEFAULT '' NOT NULL,
	"lastUserUpdatedSoDontLetOlderSyncsOverwriteBoxemDate" numeric DEFAULT '0' NOT NULL,
	"fbmShippingTemplateId" varchar DEFAULT '' NOT NULL,
	"issues" jsonb[] DEFAULT '{"{}"}' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "amazon"."amz_transactions" (
	"posted_date" timestamp with time zone NOT NULL,
	"transaction_type" text,
	"transaction_event" text NOT NULL,
	"user_id" integer NOT NULL,
	"order_id" text,
	"sku" text,
	"asin" text,
	"marketplace_id" text,
	"amount" numeric(18, 5) NOT NULL,
	"currency" text NOT NULL,
	"amount_type" text NOT NULL,
	"amount_description" text NOT NULL,
	"amount_component" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"synced_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"source_path" text,
	"amazonMetadata" jsonb NOT NULL,
	CONSTRAINT "amz_transactions_unique" UNIQUE("posted_date","transaction_type","user_id","order_id","marketplace_id","amount","currency","amount_type","amount_description","source_path")
);
--> statement-breakpoint
CREATE TABLE "fba_pallet" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"width" numeric(6, 2),
	"height" numeric(6, 2),
	"length" numeric(6, 2),
	"dimensionUnit" varchar DEFAULT 'INCH' NOT NULL,
	"weight" numeric(6, 2),
	"weightUnit" varchar DEFAULT 'POUNDS' NOT NULL,
	"shipmentId" integer,
	"isStacked" boolean DEFAULT false,
	"carrierName" varchar,
	"fromSync" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE "sellerIdsEverUsed_SoWeDontDupeTrials" (
	"sellerId" varchar(128) PRIMARY KEY NOT NULL,
	"userUUID" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sellerIdsBannedForDispute" (
	"sellerId" varchar(128) PRIMARY KEY NOT NULL,
	"userUUID" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "deletedUser" (
	"userUUID" varchar PRIMARY KEY NOT NULL,
	"email" varchar NOT NULL,
	"date" numeric NOT NULL,
	"disputeInfo" jsonb DEFAULT '{"version":-1}'::jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "amazon"."feedback_campaigns_order_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"order_id" text NOT NULL,
	"name" text NOT NULL,
	"sku" text NOT NULL,
	"asin" text NOT NULL,
	"quantity_ordered" integer DEFAULT 0 NOT NULL,
	"quantity_shipped" integer DEFAULT 0 NOT NULL,
	"item_price" numeric(10, 5) NOT NULL,
	"item_tax" numeric(10, 5),
	"item_promotion_discount" numeric(10, 5),
	"shipping_price" numeric(10, 5),
	"shipping_tax" numeric(10, 5),
	"shipping_promotion_discount" numeric(10, 5),
	"gift_wrap_price" numeric(10, 5),
	"gift_wrap_tax" numeric(10, 5),
	"currency" text,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"synced_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"amazonMetadata" jsonb,
	CONSTRAINT "feedback_campaigns_order_items_unique" UNIQUE("user_id","order_id","sku","asin")
);
--> statement-breakpoint
CREATE TABLE "bulk_ungate_result" (
	"id" uuid NOT NULL,
	"user_uuid" uuid NOT NULL,
	"asin" varchar(16) NOT NULL,
	"status" "bulk_ungate_status" NOT NULL,
	"json" jsonb NOT NULL,
	"attempts" integer DEFAULT 1 NOT NULL,
	"lastAttempted" double precision DEFAULT trunc((EXTRACT(epoch FROM now()) * (1000)::numeric)),
	CONSTRAINT "bulk_ungate_result_user_uuid_asin_key" UNIQUE("user_uuid","asin")
);
--> statement-breakpoint
CREATE TABLE "pgmigrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"run_on" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "supplier" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"name" varchar,
	"userId" integer NOT NULL,
	CONSTRAINT "unique_name_user" UNIQUE("name","userId")
);
--> statement-breakpoint
CREATE TABLE "boxi_chat" (
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(30) DEFAULT '' NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"owner" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "log" (
	"id" serial PRIMARY KEY NOT NULL,
	"createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"source" text NOT NULL,
	"tags" text[],
	"text" text NOT NULL,
	"json" jsonb,
	"commitHash" varchar DEFAULT '' NOT NULL,
	"stack" jsonb DEFAULT '[]'::jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "fba_batch" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"name" varchar,
	"labelPrepPreference" text DEFAULT 'SELLER_LABEL',
	"fromId" integer,
	"userId" integer,
	"targetCountry" varchar,
	"targetSubdivision" varchar,
	"packingType" text,
	"shipmentType" text DEFAULT 'SPD',
	"fulfillmentType" text DEFAULT 'FBA',
	"listingFeedId" varchar,
	"status" varchar DEFAULT 'CHOOSE_PRODUCTS' NOT NULL,
	"boxContentsProvider" varchar,
	"isPartnered" boolean DEFAULT true,
	"printBoxLabelsStep3" boolean,
	"autoFillListPrice" boolean DEFAULT false,
	"autoFillListPriceOperation" text DEFAULT 'INCREASE',
	"autoFillListPriceFrom" text DEFAULT 'BUY_BOX',
	"autoFillListPriceAmount" numeric(6, 2) DEFAULT '0',
	"showSupplierInput" boolean DEFAULT true,
	"showBuyCostInput" boolean DEFAULT true,
	"showDatePurchasedInput" boolean DEFAULT true,
	"printFNSKUAfterAddingToShipment" boolean DEFAULT false,
	"printFNSKUAfterIncreaseQuantityInShipment" boolean DEFAULT false,
	"printFNSKUAfterAssigningToBox" boolean DEFAULT false,
	"printFNSKUAfterIncreaseQuantityInBox" boolean DEFAULT false,
	"inboundPlanId" varchar,
	"inboundErrors" jsonb,
	"ready_to_ship" timestamp,
	"freightClass" varchar,
	"version" varchar DEFAULT '1',
	"step1EndDate" timestamp with time zone,
	"step2EndDate" timestamp with time zone,
	"step3EndDate" timestamp with time zone,
	"batchRecipe" jsonb
);
--> statement-breakpoint
CREATE TABLE "disputeSession" (
	"userUUID" uuid NOT NULL,
	"at" numeric NOT NULL,
	"sesh" jsonb NOT NULL,
	CONSTRAINT "disputeSession_userUUID_at_key" UNIQUE("userUUID","at")
);
--> statement-breakpoint
CREATE TABLE "amazon"."fba_shipment_item" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"asin" varchar,
	"sku" varchar,
	"fnSku" varchar,
	"quantity" integer,
	"prepDetails" jsonb,
	"shipmentId" integer,
	"fbaItemId" integer,
	"quantityInCase" integer,
	"quantityReceived" integer,
	"fromSync" boolean DEFAULT false,
	"condition" varchar,
	"whenQuantityReceivedFirstMatchedQuantity" timestamp,
	"amazonMetadata" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "amazon"."amz_orders" (
	"order_id" text NOT NULL,
	"order_status" text NOT NULL,
	"user_id" integer NOT NULL,
	"marketplace_id" text NOT NULL,
	"order_date" timestamp with time zone NOT NULL,
	"fulfillment_channel" text NOT NULL,
	"sales_channel" text NOT NULL,
	"ship_service_level" text,
	"order_type" text,
	"is_prime" boolean DEFAULT false,
	"is_replacement_order" boolean DEFAULT false,
	"is_sold_by_ab" boolean DEFAULT false,
	"is_global_express_enabled" boolean DEFAULT false,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"synced_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"encrypted_buyer_email" text,
	"earliest_shipping_date" timestamp with time zone,
	"number_of_items_shipped" integer DEFAULT 0,
	"number_of_items_unshipped" integer DEFAULT 0,
	"has_regulated_items" boolean DEFAULT false,
	"latest_shipping_date" timestamp with time zone,
	"is_access_point_order" boolean DEFAULT false,
	"payment_method" text,
	"order_total_amount" numeric(10, 2),
	"currency" text,
	"shipping_state" text,
	"shipping_postal_code" text,
	"shipping_city" text,
	"shipping_country_code" text,
	"earliest_delivery_date" timestamp with time zone,
	"latest_delivery_date" timestamp with time zone,
	"amazonMetadata" jsonb NOT NULL,
	CONSTRAINT "amz_orders_user_order_unique" UNIQUE("order_id","user_id")
);
--> statement-breakpoint
CREATE TABLE "disputeIpHistory" (
	"userUUID" uuid NOT NULL,
	"lastUsedIp" numeric NOT NULL,
	"ip" varchar NOT NULL,
	CONSTRAINT "disputeIpHistory_userUUID_ip_key" UNIQUE("userUUID","ip")
);
--> statement-breakpoint
CREATE TABLE "wfs_batch_json" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"json" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "feedback_campaigns" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"status" "feedback_campaign_status" DEFAULT 'INACTIVE' NOT NULL,
	"target" "feedback_campaign_target" DEFAULT 'SEND_ONLY_TO_NEW_CUSTOMERS' NOT NULL,
	"priority" integer DEFAULT 1 NOT NULL,
	"exclude_fbm" boolean DEFAULT false NOT NULL,
	"exclude_promo" boolean DEFAULT false NOT NULL,
	"exclude_negative_feedback" boolean DEFAULT false NOT NULL,
	"product_selection_type" "feedback_product_selection_type" DEFAULT 'APPLY_CAMPAIGN_TO_SELECTED_PRODUCT' NOT NULL,
	"selected_product_count" integer DEFAULT 0 NOT NULL,
	"campaign_type" "feedback_campaign_type" DEFAULT 'USER_CUSTOM' NOT NULL,
	"user_id" integer,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "feedback_message_templates" (
	"id" serial PRIMARY KEY NOT NULL,
	"campaign_id" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	"subject" text NOT NULL,
	"message_type" "feedback_campaign_type" DEFAULT 'USER_CUSTOM' NOT NULL,
	"email_content" text NOT NULL,
	"send_days" integer DEFAULT 5 NOT NULL,
	"send_days_type" "feedback_send_days_type" DEFAULT 'DELIVERY_DATE' NOT NULL,
	"send_time" time DEFAULT '00:00:00' NOT NULL,
	"exclude_refunded" boolean DEFAULT false NOT NULL,
	"user_id" integer,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "feedback_campaign_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"campaign_id" integer NOT NULL,
	"product_id" integer,
	"sku" varchar(255) NOT NULL,
	"asin" varchar(20),
	"user_id" integer,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT "unique_campaign_product" UNIQUE("campaign_id","sku","user_id")
);
--> statement-breakpoint
CREATE TABLE "address" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" text,
	"name" varchar,
	"company" varchar(1024),
	"address1" varchar,
	"address2" varchar,
	"city" varchar,
	"state" varchar,
	"country" varchar DEFAULT 'US',
	"zipcode" varchar,
	"phone" varchar,
	"email" varchar,
	"userId" integer,
	"fromSync" boolean DEFAULT false,
	"manuallyHidden" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "amazon"."fba_item" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"name" varchar,
	"asin" varchar,
	"sku" varchar,
	"fnSku" varchar,
	"quantity" integer,
	"quantityInCase" integer,
	"condition" varchar,
	"buyCost" numeric,
	"datePurchased" date,
	"expirationDate" date,
	"destinations" jsonb DEFAULT '[]'::jsonb,
	"supplierId" integer,
	"batchId" integer,
	"image" varchar,
	"listingId" integer,
	"listPrice" numeric,
	"conditionNotes" varchar,
	"category" varchar,
	"manufacturingLotCode" varchar,
	"labelOwner" text DEFAULT 'SELLER',
	"prepOwner" text DEFAULT 'SELLER',
	"amazonMetadata" jsonb NOT NULL,
	"prepCategory" varchar DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "amazon"."catalog" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"name" varchar,
	"description" varchar,
	"asin" varchar,
	"gtin" varchar,
	"ean" varchar,
	"upc" varchar,
	"type" varchar,
	"size" jsonb,
	"country" varchar,
	"components" varchar(2048),
	"warranty" varchar,
	"condition" varchar(2048),
	"image0" varchar,
	"image1" varchar,
	"image2" varchar,
	"image3" varchar,
	"image4" varchar,
	"image5" varchar,
	"image6" varchar,
	"image7" varchar,
	"manufacturer" varchar,
	"brand" varchar,
	"style" varchar,
	"price" numeric(10, 2),
	"currency" varchar DEFAULT 'USD' NOT NULL,
	"weight" numeric(10, 2),
	"weightUnit" varchar DEFAULT 'ounces',
	"packageQuantity" numeric(10, 2),
	"packageDimensionUnit" varchar,
	"packageWeight" numeric(10, 2),
	"packageWeightUnit" varchar,
	"packageLength" numeric(10, 2),
	"packageWidth" numeric(10, 2),
	"packageHeight" numeric(10, 2),
	"cpsiaCautionaryStatement" varchar,
	"bulletPoint" varchar,
	"batteryType" varchar,
	"numberOfBatteries" integer,
	"batteryRequired" boolean,
	"batteryIncluded" boolean,
	"batterySpecs" jsonb,
	"batteryCells" integer,
	"batteryInfo" jsonb,
	"supplierDgHzRegulation" varchar DEFAULT 'not_applicable',
	"locale" varchar DEFAULT 'en_US' NOT NULL,
	"issues" jsonb DEFAULT '[]'::jsonb,
	"status" varchar,
	"fromSync" boolean DEFAULT false,
	"isbn" varchar,
	"identifierResyncStatus" varchar DEFAULT 'PENDING',
	"category" varchar,
	"itemId" text,
	"amazonMetadata" jsonb NOT NULL,
	"marketplaceId" varchar(16) DEFAULT 'ATVPDKIKX0DER' NOT NULL,
	CONSTRAINT "UQ_3c60e35c0919180df3e084ed02a" UNIQUE("asin")
);
--> statement-breakpoint
CREATE TABLE "amazon"."analytics_jobs" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"job_type" text NOT NULL,
	"api_path" text NOT NULL,
	"user_id" bigint NOT NULL,
	"range_start_at" timestamp with time zone NOT NULL,
	"range_end_at" timestamp with time zone NOT NULL,
	"status" "amazon"."job_status" DEFAULT 'queued' NOT NULL,
	"attempts" integer DEFAULT 0 NOT NULL,
	"lease_until" timestamp with time zone,
	"last_error" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "analytics_jobs_unique_range" UNIQUE("job_type","api_path","user_id","range_start_at","range_end_at")
);
--> statement-breakpoint
CREATE TABLE "amazon"."packing_option" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"packingOptionId" varchar,
	"fees" jsonb,
	"discounts" jsonb,
	"supportedShippingConfigurations" jsonb,
	"packingGroups" jsonb,
	"batchId" integer,
	"status" varchar,
	"packingConfigurations" jsonb,
	"amazonMetadata" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "amazon"."fba_shipment" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"shipmentId" varchar,
	"fulfillmentCenterId" varchar,
	"destinationAddress" jsonb,
	"labelPrepType" text,
	"estimatedFee" jsonb,
	"status" text DEFAULT 'CREATED',
	"fromId" integer,
	"batchId" integer,
	"userId" integer,
	"cartonContentFeedId" varchar,
	"cartonContentError" varchar,
	"packingType" text DEFAULT 'INDIVIDUAL',
	"isParnterCarrier" boolean DEFAULT true,
	"transportType" text DEFAULT 'SPD',
	"estimateCurrency" varchar DEFAULT 'USD',
	"estimateAmount" numeric(9, 2),
	"confirmDeadline" timestamp with time zone,
	"voidDeadline" timestamp with time zone,
	"shipmentName" varchar,
	"boxContentSource" varchar,
	"casesRequired" boolean,
	"fromSync" boolean DEFAULT false,
	"itemSyncStatus" varchar,
	"itemSyncErrors" jsonb,
	"itemSyncRetries" integer DEFAULT 0,
	"transportSyncStatus" varchar,
	"transportSyncErrors" jsonb,
	"transportSyncRetries" integer DEFAULT 0,
	"declaredValue" numeric(9, 2),
	"declaredValueCurrency" varchar DEFAULT 'USD',
	"freightClass" text,
	"freightReadyDate" timestamp with time zone,
	"previewFreightClass" text,
	"previewFreightPickupDate" timestamp with time zone,
	"ltlBoxCount" integer,
	"ltlTotalWeight" numeric(7, 2),
	"ltlTotalWeightUnit" varchar DEFAULT 'pounds',
	"previewFreightDeliveryDate" timestamp with time zone,
	"amazonCalculatedValue" numeric(9, 2),
	"amazonValueCurrency" varchar DEFAULT 'USD',
	"amazonLTLReferenceId" varchar,
	"isBillOfLadingAvailable" boolean,
	"carrierName" varchar,
	"last_updated" timestamp,
	"shipped_date" timestamp,
	"transportSubmissionError" varchar,
	"ready_to_ship" timestamp,
	"inboundId" varchar,
	"boxes" jsonb,
	"inboundPlacementOptionId" varchar,
	"placementOptionId" integer,
	"placementError" jsonb,
	"transportationOptionId" varchar,
	"deliveryWindowOptionStatus" varchar,
	"deliveryWindowOptionError" jsonb,
	"billOfLadingUrl" varchar,
	"storedBillOfLadingUrl" varchar,
	"bolErrors" jsonb,
	"shippingLabelUrl" varchar,
	"storedShippingLabelUrl" varchar,
	"billOfLadingNumber" varchar,
	"freightBillNumber" jsonb,
	"contactName" text,
	"contactEmail" text,
	"contactPhone" text,
	"step4EndDate" timestamp with time zone,
	"amazonMetadata" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "amazon"."fba_box" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"width" numeric(6, 2),
	"height" numeric(6, 2),
	"length" numeric(6, 2),
	"dimensionUnit" varchar DEFAULT 'inches' NOT NULL,
	"weight" numeric(7, 2),
	"weightUnit" varchar DEFAULT 'pounds' NOT NULL,
	"insuredValue" numeric(9, 2),
	"insuredValueUnit" varchar DEFAULT 'USD' NOT NULL,
	"packageClientReferenceId" varchar,
	"shipmentId" integer,
	"isStacked" boolean DEFAULT false,
	"carrierName" varchar,
	"trackingId" varchar,
	"inboundPackageStatus" text,
	"cartonId" varchar,
	"displayIndex" integer NOT NULL,
	"fromSync" boolean DEFAULT false,
	"hasPrintedLabel" boolean DEFAULT false,
	"batchId" integer,
	"packingOptionId" integer,
	"packingGroupId" varchar,
	"packingItems" jsonb,
	"fbaBoxId" varchar,
	"amazonMetadata" jsonb
);
--> statement-breakpoint
CREATE TABLE "wfs_listing_sync" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(1000) NOT NULL,
	"wpid" varchar(100),
	"gtin" varchar(100),
	"ean" varchar(100),
	"upc" varchar(100),
	"sku" varchar(200),
	"description" text,
	"condition" varchar(100),
	"price" numeric,
	"type" varchar(200),
	"shelf" varchar(2000),
	"mainImageUrl" text,
	"wfsEligible" boolean,
	"isDuplicate" boolean,
	"userId" integer NOT NULL,
	"variantGroupId" text,
	"isPrimary" boolean,
	"createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"publishedStatus" "wfs_published_status",
	"lifecycleStatus" "wfs_lifecycle_status",
	"itemId" text,
	"reviews" integer,
	"rating" numeric(10, 2),
	"searchable" boolean,
	"fulfillmentLagTime" varchar(30),
	"offerStartDate" timestamp with time zone,
	"offerEndDate" timestamp with time zone,
	"variantGroupAttributes" jsonb,
	"statusChangeReason" text,
	"comparisonPrice" numeric,
	"msrp" numeric,
	"wfsSalesRestriction" text,
	"itemPageUrl" text
);
--> statement-breakpoint
CREATE TABLE "amazon"."inventory_details" (
	"id" serial PRIMARY KEY NOT NULL,
	"fulfillableQuantity" integer,
	"inboundWorkingQuantity" integer,
	"inboundShippedQuantity" integer,
	"inboundReceivingQuantity" integer,
	"reservedQuantity" jsonb,
	"researchingQuantity" jsonb,
	"unfulfillableQuantity" jsonb,
	"futureSupplyQuantity" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"sellerSku" varchar,
	"fnSku" varchar,
	"totalQuantity" integer,
	"pendingCustomerOrderInTransit" integer,
	"latest_notification_updated_at" timestamp with time zone,
	"listingId" integer,
	"asin" varchar,
	"userId" integer,
	"fromSync" boolean DEFAULT false,
	"amazonMetadata" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "amazon"."placement_option" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"expiration" timestamp DEFAULT now() NOT NULL,
	"placementOptionId" varchar,
	"fees" jsonb,
	"discounts" jsonb,
	"shipments" jsonb,
	"batchId" integer,
	"status" varchar,
	"errors" jsonb,
	"transportOptionRetries" integer DEFAULT 0,
	"transportOptionStatus" varchar,
	"amazonMetadata" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "amazon"."shipment_option" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"expiration" timestamp DEFAULT now() NOT NULL,
	"name" varchar,
	"amazonReferenceId" varchar,
	"inboundShipmentId" varchar,
	"boxes" jsonb,
	"fulfillmentCenter" jsonb,
	"freightClass" varchar,
	"estimateAmount" numeric(9, 2),
	"estimateCurrency" varchar DEFAULT 'USD',
	"transportationOptions" jsonb,
	"placementOptionId" integer,
	"status" varchar,
	"loadingStatus" varchar DEFAULT 'PROCESSING',
	"items" jsonb,
	"amazonMetadata" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "amazon"."transportation_option" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"carrier" jsonb,
	"carrierAppointment" jsonb,
	"preconditions" jsonb,
	"cost" numeric(6, 2),
	"costCurrency" varchar DEFAULT 'USD',
	"shippingMode" varchar,
	"shippingSolution" varchar,
	"transportationOptionId" varchar,
	"expiration" timestamp,
	"status" text DEFAULT 'OFFERED',
	"shipmentId" integer,
	"placementOptionId" integer,
	"voidableUntil" timestamp,
	"amazonMetadata" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "amazon"."listing_quantity" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"asin" varchar,
	"sku" varchar,
	"fulfillmentType" text,
	"quantity" integer,
	"inboundWorkingQuantity" integer,
	"inboundShippedQuantity" integer,
	"inboundReceivingQuantity" integer,
	"reservedQuantity" integer,
	"unfulfillableQuantity" integer,
	"researchingQuantity" integer,
	"userId" integer,
	"fnsku" varchar(60),
	"amazonMetadata" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "amazon"."listing_update" (
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"asin" varchar,
	"sku" varchar,
	"fulfillmentType" text,
	"quantity" integer,
	"price" numeric(10, 2),
	"condition" varchar(2048),
	"name" varchar,
	"description" varchar,
	"status" varchar,
	"merchantShippingGroup" varchar,
	"userId" integer,
	"amazonMetadata" jsonb NOT NULL,
	"fbmShippingTemplateId" varchar DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "amazon"."feedback_email_to_send" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_id" varchar(255) NOT NULL,
	"subject" text NOT NULL,
	"email_content" text NOT NULL,
	"buyer_email" varchar(255) NOT NULL,
	"to_send_date" timestamp with time zone NOT NULL,
	"user_id" integer NOT NULL,
	"campaign_id" integer,
	"template_id" integer,
	"status" varchar(50) DEFAULT '''PENDING''' NOT NULL,
	"sent_at" timestamp with time zone,
	"error_message" text,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"amazonMetadata" jsonb NOT NULL,
	CONSTRAINT "unique_order_user" UNIQUE("order_id","user_id")
);
--> statement-breakpoint
CREATE TABLE "update_notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" numeric NOT NULL,
	"name" varchar NOT NULL,
	"tagline" varchar NOT NULL,
	"body" varchar NOT NULL,
	"createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"publishAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"expireAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "amazon"."feedback_campaigns_orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_date" timestamp with time zone NOT NULL,
	"shipping_date" timestamp with time zone,
	"delivery_date" timestamp with time zone,
	"order_id" varchar(255) NOT NULL,
	"marketplace_id" varchar(255) NOT NULL,
	"encrypted_buyer_email" text,
	"user_id" integer NOT NULL,
	"campaign_id" integer,
	"status" varchar(100),
	"order_status" varchar(100),
	"last_sent_date" timestamp with time zone,
	"blacklisted" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"amazonMetadata" jsonb,
	CONSTRAINT "feedback_campaigns_orders_order_id_unique" UNIQUE("order_id")
);
--> statement-breakpoint
CREATE TABLE "carrier_accounts_ups" (
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"clientId" varchar NOT NULL,
	"clientSecret" varchar NOT NULL,
	"billingAccountAkaAccountNumber" varchar NOT NULL,
	"label" varchar DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "carrier_accounts_fedex" (
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"apiKeyAkaClientId" varchar NOT NULL,
	"secretKeyAkaClientSecret" varchar NOT NULL,
	"billingAccount" varchar NOT NULL,
	"label" varchar DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "carrierLabels" (
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"createdAt" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"labelBase64" varchar DEFAULT '' NOT NULL,
	"userUUID" uuid NOT NULL,
	"lastSyncedBoxemDate" bigint DEFAULT 0 NOT NULL,
	"project" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "spapi_stats" (
	"id" uuid PRIMARY KEY NOT NULL,
	"url" varchar NOT NULL,
	"method" "http_method" NOT NULL,
	"startTime" numeric NOT NULL,
	"endTime" numeric NOT NULL,
	"count" integer NOT NULL,
	"userUUID" uuid NOT NULL,
	CONSTRAINT "spapi_stats_url_method_startTime_userUUID_key" UNIQUE("url","method","startTime","userUUID")
);
--> statement-breakpoint
CREATE TABLE "restock" (
	"sourceStoreUrl" varchar NOT NULL,
	"sourcePrice" numeric NOT NULL,
	"asin" varchar(10) NOT NULL,
	"userUUID" uuid NOT NULL,
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"sourceUnits" numeric DEFAULT '1' NOT NULL,
	"amazonUnits" numeric DEFAULT '1' NOT NULL,
	"condition" varchar DEFAULT 'New' NOT NULL,
	"originalEnteredCost" numeric DEFAULT '0' NOT NULL,
	"created" numeric DEFAULT 'trunc((EXTRACT(epoch FROM CURRENT_TIMESTAMP) * (1000)::numeric))' NOT NULL,
	"targetROI" numeric DEFAULT '0.3' NOT NULL,
	"scrapePrice" boolean DEFAULT true NOT NULL,
	"leadDaysOverrideGlobal" numeric DEFAULT '0' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "wfs_shipment_sync" (
	"id" serial PRIMARY KEY NOT NULL,
	"shipmentId" varchar(30),
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"userId" integer,
	"inboundOrderId" varchar(100),
	"fcName" varchar(100),
	"addressLine1" varchar(255),
	"city" varchar(100),
	"stateCode" varchar(20),
	"countryCode" varchar(20),
	"postalCode" varchar(20),
	"status" varchar(100),
	"shipmentUnits" integer,
	"receivedUnits" integer,
	"expectedDeliveryDate" timestamp,
	"updatedExpectedDeliveryDate" timestamp,
	"carrierName" varchar(30),
	"trackingNo" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "wfs_shipment_item_sync" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"shipmentId" varchar(30),
	"gtin" varchar(100),
	"sku" varchar(100),
	"itemQty" integer,
	"vendorPackQty" integer,
	"innerPackQty" integer,
	"damagedQty" integer,
	"receivedQty" integer,
	"fillRate" numeric,
	"expectedDeliveryDate" timestamp,
	"updatedExpectedDeliveryDate" timestamp,
	"shipNodeName" varchar(100),
	"receivingStartDate" timestamp,
	"receivedUnitsAtFc" integer,
	"imageUrl" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "box_templates" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"sellerId" integer,
	"name" varchar(32) DEFAULT 'Default' NOT NULL,
	"length" numeric DEFAULT '0' NOT NULL,
	"width" numeric DEFAULT '0' NOT NULL,
	"height" numeric DEFAULT '0' NOT NULL,
	"weight" numeric DEFAULT '0' NOT NULL,
	"isAutoGenerated" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "wfs_inventory_sync" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer,
	"createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"itemId" text,
	"sku" text,
	"gtin" text,
	"availableUnits" integer,
	"inboundUnits" integer,
	"unavailableUnits" integer,
	"onhandUnits" integer,
	"inventoryAge" jsonb,
	"inventoryInsights" jsonb,
	"imageUrl" text,
	"reviews" integer,
	"rating" numeric,
	"wfsEligible" boolean,
	"upc" text,
	"name" text,
	"price" numeric
);
--> statement-breakpoint
CREATE TABLE "wfs_listing" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(1000) NOT NULL,
	"wpid" varchar(100),
	"gtin" varchar(100),
	"ean" varchar(100),
	"upc" varchar(100),
	"sku" varchar(200) NOT NULL,
	"description" text,
	"condition" varchar(100),
	"price" numeric,
	"type" varchar(255),
	"shelf" varchar(2000),
	"mainImageUrl" text,
	"wfsEligible" boolean DEFAULT false NOT NULL,
	"isDuplicate" boolean,
	"userId" integer NOT NULL,
	"variantGroupId" text,
	"isPrimary" boolean,
	"createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"publishedStatus" "wfs_published_status" NOT NULL,
	"lifecycleStatus" "wfs_lifecycle_status" NOT NULL,
	"itemId" varchar(50),
	"availToSellQuantity" integer,
	"fulfillmentLagTime" varchar(30),
	"offerStartDate" timestamp with time zone,
	"offerEndDate" timestamp with time zone,
	"reviews" integer,
	"rating" numeric(10, 2),
	"searchable" boolean,
	"feedId" varchar(60),
	"listingFailed" boolean,
	"variantGroupAttributes" jsonb,
	"inboundQuantity" integer,
	"statusChangeReason" text,
	"comparisonPrice" numeric,
	"msrp" numeric,
	"wfsSalesRestriction" text,
	"itemPageUrl" text,
	CONSTRAINT "wfs_listing_sku_unique" UNIQUE("sku","userId")
);
--> statement-breakpoint
CREATE TABLE "bulkUngateStats" (
	"start" bigint NOT NULL,
	"end" bigint NOT NULL,
	"ungated" numeric NOT NULL,
	"gated" numeric NOT NULL,
	"restricted" numeric NOT NULL,
	"errored" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"role" varchar DEFAULT 'SELLER',
	"sellerId" varchar,
	"accessToken" varchar(1024),
	"refreshToken" varchar(1024),
	"recurlyPlanCode" varchar,
	"public_uuid" uuid DEFAULT gen_random_uuid() NOT NULL,
	"email_verified" boolean DEFAULT false NOT NULL,
	"password" varchar DEFAULT '' NOT NULL,
	"selectedPlan" text,
	"active_campaign_contact_id" text,
	"inventoryReportId" varchar,
	"listingSyncStatus" text,
	"shipmentSyncStatus" text,
	"isSubscribed" boolean DEFAULT false NOT NULL,
	"phone" varchar,
	"activeMarketplaceId" varchar DEFAULT 'ATVPDKIKX0DER' NOT NULL,
	"shipmentSyncedDate" timestamp with time zone,
	"forceChangePassword" boolean DEFAULT false,
	"last_login_at" timestamp,
	"hasPastDueInvoice" boolean DEFAULT false NOT NULL,
	"activeAllSalesSyncId" varchar,
	"xid" varchar,
	"active_order_backfill_id" varchar,
	"active_finance_backfill_id" varchar,
	"active_estimated_fee_backfill_id" varchar,
	"go_aura_integration" boolean DEFAULT false,
	"strandedReportId" varchar,
	"totalLogins" integer DEFAULT 0,
	"totalMinutesSpentInApp" integer DEFAULT 0,
	"last_canceled_reason_selected" text,
	"last_canceled_reason_feedback" varchar,
	"seller_snap_integration" boolean DEFAULT false,
	"bqool_integration" boolean DEFAULT false,
	"wfsSellerId" varchar(20),
	"wfsRefreshToken" text,
	"wfsItemSyncStatus" varchar(20),
	"wfsShipmentSyncStatus" varchar(20),
	"wfsMarketplace" varchar(50),
	"wfsItemSyncAt" timestamp with time zone,
	"wfsShipmentSyncAt" timestamp with time zone,
	"defaultBoxTemplateId" uuid,
	"conversion_id" varchar(255),
	"lastCreatedShareImage" timestamp DEFAULT now() NOT NULL,
	"boxiCredits" numeric DEFAULT '0' NOT NULL,
	"lastBoxiCreditsApplied" timestamp DEFAULT '1970-01-01 00:00:00' NOT NULL,
	"wfsItemReportId" text,
	"wfsInventoryReportId" text,
	"wfsInitialSyncedAt" timestamp with time zone,
	"wfsInventoryUpdateStatus" text,
	"feedback_orders_sync_status" "sync_job_status",
	"feedback_orders_sync_at" timestamp with time zone,
	"feedback_orders_initial_synced_at" timestamp with time zone,
	"feedback_orders_update_status" "sync_job_status",
	"feedback_orders_update_at" timestamp with time zone,
	"currentEmailOTP" varchar(12) DEFAULT '' NOT NULL,
	"currentEmailOTPGeneratedAt" timestamp DEFAULT '1970-01-01 00:00:00' NOT NULL,
	"bannedFromRaiseAlerting" boolean DEFAULT false NOT NULL,
	"amz_orders_sync_status" "sync_job_status",
	"amz_orders_sync_at" timestamp with time zone,
	"amz_transactions_sync_status" "sync_job_status",
	"amz_transactions_sync_at" timestamp with time zone,
	"readUpdateNotificationIDs" integer[] DEFAULT '{}' NOT NULL,
	"listingReportId" varchar(255),
	"invalidLoginAttempts" integer DEFAULT 0 NOT NULL,
	"loginJwtGenerationIndexForSignoutAllSessions" numeric DEFAULT '0' NOT NULL,
	"lastLoginIP" varchar DEFAULT '' NOT NULL,
	"pastPasswordHashes" varchar[] DEFAULT '{"RAY"}' NOT NULL,
	"passwordLastResetBoxemDate" numeric DEFAULT '(EXTRACT(epoch FROM now()) * (1000)::numeric)' NOT NULL,
	"userFeatures" numeric DEFAULT '0' NOT NULL,
	"paidCarrierBalance" numeric DEFAULT '0' NOT NULL,
	"inventoryQuantitySyncStatus" varchar DEFAULT 'COMPLETED' NOT NULL,
	"emailMFA" boolean DEFAULT false NOT NULL,
	"stripeCustomerId" varchar DEFAULT '' NOT NULL,
	"everSubscribedNoTrial" boolean DEFAULT false NOT NULL,
	"everSubscribedTrialOrNot" boolean DEFAULT false NOT NULL,
	"everFailedPayment" boolean DEFAULT false NOT NULL,
	"everBoughtStripeLookupKeys" varchar[] DEFAULT '{""}' NOT NULL,
	"signupFinishedCheckout" boolean DEFAULT false NOT NULL,
	"isActive" boolean DEFAULT true,
	"status" varchar DEFAULT 'NORMAL' NOT NULL,
	"lastActiveBoxemDate" numeric DEFAULT '0' NOT NULL,
	"isInTrial" boolean DEFAULT true NOT NULL,
	"listingReportRequestedBoxemDate" numeric DEFAULT '0' NOT NULL,
	"listingQuantityReportRequestedBoxemDate" numeric DEFAULT '0' NOT NULL,
	"slackWebhook" varchar DEFAULT '' NOT NULL,
	"discordWebhook" varchar DEFAULT '' NOT NULL,
	"everDisputedPayment" boolean DEFAULT false NOT NULL,
	"daysActive" integer DEFAULT 0 NOT NULL,
	"daysActiveLastMarked" numeric DEFAULT '0' NOT NULL,
	"dateAttemptedCancel" numeric DEFAULT '0' NOT NULL,
	"dateAttemptedRenew" numeric DEFAULT '0' NOT NULL,
	"sellerAccountsConnectedForDisputes" integer DEFAULT 0 NOT NULL,
	"tosAccepted" numeric DEFAULT '0' NOT NULL,
	"scheduledDeleteAt" numeric DEFAULT '0' NOT NULL,
	"lastSubscribedValid" numeric DEFAULT '0' NOT NULL,
	"tosAcceptedOnIp" varchar DEFAULT '' NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email"),
	CONSTRAINT "uuid_unique" UNIQUE("public_uuid")
);
--> statement-breakpoint
CREATE TABLE "activitySnapshot" (
	"snapshotBoxemDate" numeric NOT NULL,
	"activeUsers" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "setting" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"shipmentType" text DEFAULT 'SPD',
	"fulfillmentType" text DEFAULT 'FBA',
	"packingType" text DEFAULT 'INDIVIDUAL',
	"labelingPreference" text DEFAULT 'SELLER_LABEL',
	"boxContentsPreference" text DEFAULT 'Boxem',
	"autoFillListPrice" boolean DEFAULT false,
	"autoFillListPriceFrom" text DEFAULT 'BUY_BOX',
	"autoFillListPriceOperation" text DEFAULT 'INCREASE',
	"autoFillListPriceAmount" numeric(6, 2) DEFAULT '25',
	"userId" integer,
	"fromId" integer,
	"printLabelsEarly" boolean DEFAULT false,
	"skuGenerationOption" text DEFAULT 'boxemGenerated',
	"skuGenerationFormula" text DEFAULT '[{"type":"asin"},{"type":"condition"},{"type":"count"}]',
	"skuGenerationCount" integer DEFAULT 0,
	"printFNSKUAfterAddingToShipment" boolean DEFAULT false,
	"printFNSKUAfterIncreaseQuantityInShipment" boolean DEFAULT false,
	"printFNSKUAfterAssigningToBox" boolean DEFAULT false,
	"printFNSKUAfterIncreaseQuantityInBox" boolean DEFAULT false,
	"fbmShippingTemplateIdNew" varchar DEFAULT '' NOT NULL,
	"restockLeadWeight" jsonb NOT NULL,
	"restockLeadDays" numeric DEFAULT '0' NOT NULL,
	CONSTRAINT "settingUserIdUnique" UNIQUE("userId")
);
--> statement-breakpoint
CREATE TABLE "boxi_message" (
	"uuid" uuid DEFAULT gen_random_uuid() NOT NULL,
	"senderIsUser" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"owner" integer NOT NULL,
	"chat" uuid NOT NULL,
	"message" varchar(65535) DEFAULT '' NOT NULL,
	CONSTRAINT "boxi_message_pkey" PRIMARY KEY("uuid","senderIsUser"),
	CONSTRAINT "boxi_message_uuid_key" UNIQUE("uuid")
);
--> statement-breakpoint
CREATE TABLE "amazon"."amz_order_items" (
	"user_id" integer NOT NULL,
	"order_id" text NOT NULL,
	"name" text NOT NULL,
	"sku" text NOT NULL,
	"asin" text NOT NULL,
	"quantity_ordered" integer DEFAULT 0 NOT NULL,
	"quantity_shipped" integer DEFAULT 0 NOT NULL,
	"item_price" numeric(10, 5) NOT NULL,
	"item_tax" numeric(10, 5),
	"item_promotion_discount" numeric(10, 5),
	"shipping_price" numeric(10, 5),
	"shipping_tax" numeric(10, 5),
	"shipping_promotion_discount" numeric(10, 5),
	"gift_wrap_price" numeric(10, 5),
	"gift_wrap_tax" numeric(10, 5),
	"currency" text,
	"condition_id" text,
	"condition_subtype_id" text,
	"is_gift" boolean DEFAULT false,
	"gift_message_text" text,
	"gift_wrap_level" text,
	"product_info" text,
	"serial_number_required" boolean DEFAULT false,
	"is_transparency" boolean DEFAULT false,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"synced_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"amazonMetadata" jsonb NOT NULL,
	CONSTRAINT "amz_order_items_pkey" PRIMARY KEY("user_id","order_id","sku","asin")
);
--> statement-breakpoint
ALTER TABLE "assistants_to_sellers" ADD CONSTRAINT "assistants_to_sellers_assistantId_user_id_fk" FOREIGN KEY ("assistantId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assistants_to_sellers" ADD CONSTRAINT "assistants_to_sellers_sellerId_user_id_fk" FOREIGN KEY ("sellerId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."listing" ADD CONSTRAINT "listing_catalogId_catalog_id_fk" FOREIGN KEY ("catalogId") REFERENCES "amazon"."catalog"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."listing" ADD CONSTRAINT "listing_supplierId_supplier_id_fk" FOREIGN KEY ("supplierId") REFERENCES "public"."supplier"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."listing" ADD CONSTRAINT "listing_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "fba_pallet" ADD CONSTRAINT "fba_pallet_shipmentId_fba_shipment_id_fk" FOREIGN KEY ("shipmentId") REFERENCES "amazon"."fba_shipment"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."feedback_campaigns_order_items" ADD CONSTRAINT "feedback_campaigns_order_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "amazon"."feedback_campaigns_orders"("order_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bulk_ungate_result" ADD CONSTRAINT "bulk_ungate_result_user_uuid_fkey" FOREIGN KEY ("user_uuid") REFERENCES "public"."user"("public_uuid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "supplier" ADD CONSTRAINT "supplier_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "boxi_chat" ADD CONSTRAINT "boxi_chat_owner_fkey" FOREIGN KEY ("owner") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "fba_batch" ADD CONSTRAINT "fba_batch_fromId_address_id_fk" FOREIGN KEY ("fromId") REFERENCES "public"."address"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "fba_batch" ADD CONSTRAINT "fba_batch_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "disputeSession" ADD CONSTRAINT "disputeSession_userUUID_fkey" FOREIGN KEY ("userUUID") REFERENCES "public"."user"("public_uuid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."fba_shipment_item" ADD CONSTRAINT "fba_shipment_item_fbaItemId_fba_item_id_fk" FOREIGN KEY ("fbaItemId") REFERENCES "amazon"."fba_item"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."fba_shipment_item" ADD CONSTRAINT "fba_shipment_item_shipmentId_fba_shipment_id_fk" FOREIGN KEY ("shipmentId") REFERENCES "amazon"."fba_shipment"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "disputeIpHistory" ADD CONSTRAINT "disputeIpHistory_userUUID_fkey" FOREIGN KEY ("userUUID") REFERENCES "public"."user"("public_uuid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feedback_message_templates" ADD CONSTRAINT "feedback_message_templates_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "public"."feedback_campaigns"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feedback_campaign_products" ADD CONSTRAINT "feedback_campaign_products_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "public"."feedback_campaigns"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "address" ADD CONSTRAINT "address_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."fba_item" ADD CONSTRAINT "fba_item_batchId_fba_batch_id_fk" FOREIGN KEY ("batchId") REFERENCES "public"."fba_batch"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."fba_item" ADD CONSTRAINT "fba_item_listingId_listing_id_fk" FOREIGN KEY ("listingId") REFERENCES "amazon"."listing"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."fba_item" ADD CONSTRAINT "fba_item_supplierId_supplier_id_fk" FOREIGN KEY ("supplierId") REFERENCES "public"."supplier"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."packing_option" ADD CONSTRAINT "packing_option_batchId_fba_batch_id_fk" FOREIGN KEY ("batchId") REFERENCES "public"."fba_batch"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."fba_shipment" ADD CONSTRAINT "fba_shipment_batchId_fba_batch_id_fk" FOREIGN KEY ("batchId") REFERENCES "public"."fba_batch"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."fba_shipment" ADD CONSTRAINT "fba_shipment_fromId_address_id_fk" FOREIGN KEY ("fromId") REFERENCES "public"."address"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."fba_shipment" ADD CONSTRAINT "fba_shipment_placementOptionId_placement_option_id_fk" FOREIGN KEY ("placementOptionId") REFERENCES "amazon"."placement_option"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."fba_shipment" ADD CONSTRAINT "fba_shipment_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."fba_box" ADD CONSTRAINT "fba_box_batchId_fba_batch_id_fk" FOREIGN KEY ("batchId") REFERENCES "public"."fba_batch"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."fba_box" ADD CONSTRAINT "fba_box_packingOptionId_packing_option_id_fk" FOREIGN KEY ("packingOptionId") REFERENCES "amazon"."packing_option"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."fba_box" ADD CONSTRAINT "fba_box_shipmentId_fba_shipment_id_fk" FOREIGN KEY ("shipmentId") REFERENCES "amazon"."fba_shipment"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "wfs_listing_sync" ADD CONSTRAINT "wfs_listing_sync_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "amazon"."inventory_details" ADD CONSTRAINT "inventory_details_listingId_listing_id_fk" FOREIGN KEY ("listingId") REFERENCES "amazon"."listing"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."inventory_details" ADD CONSTRAINT "inventory_details_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."placement_option" ADD CONSTRAINT "placement_option_batchId_fba_batch_id_fk" FOREIGN KEY ("batchId") REFERENCES "public"."fba_batch"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."shipment_option" ADD CONSTRAINT "shipment_option_placementOptionId_placement_option_id_fk" FOREIGN KEY ("placementOptionId") REFERENCES "amazon"."placement_option"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."transportation_option" ADD CONSTRAINT "transportation_option_placementOptionId_placement_option_id_fk" FOREIGN KEY ("placementOptionId") REFERENCES "amazon"."placement_option"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."transportation_option" ADD CONSTRAINT "transportation_option_shipmentId_fba_shipment_id_fk" FOREIGN KEY ("shipmentId") REFERENCES "amazon"."fba_shipment"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."listing_quantity" ADD CONSTRAINT "listing_quantity_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."listing_update" ADD CONSTRAINT "listing_update_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "amazon"."feedback_campaigns_orders" ADD CONSTRAINT "feedback_campaigns_orders_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "public"."feedback_campaigns"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "carrierLabels" ADD CONSTRAINT "user_uuid_fkey" FOREIGN KEY ("userUUID") REFERENCES "public"."user"("public_uuid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "restock" ADD CONSTRAINT "userUUID_fkey" FOREIGN KEY ("userUUID") REFERENCES "public"."user"("public_uuid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "wfs_shipment_sync" ADD CONSTRAINT "wfs_shipment_sync_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "wfs_shipment_item_sync" ADD CONSTRAINT "wfs_shipment_item_sync_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "box_templates" ADD CONSTRAINT "box_templates_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "wfs_inventory_sync" ADD CONSTRAINT "wfs_inventory_sync_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "wfs_listing" ADD CONSTRAINT "wfs_listing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "setting" ADD CONSTRAINT "setting_fromId_address_id_fk" FOREIGN KEY ("fromId") REFERENCES "public"."address"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "setting" ADD CONSTRAINT "setting_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "boxi_message" ADD CONSTRAINT "boxi_message_chat_fkey" FOREIGN KEY ("chat") REFERENCES "public"."boxi_chat"("uuid") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "boxi_message" ADD CONSTRAINT "boxi_message_owner_fkey" FOREIGN KEY ("owner") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "seller_index" ON "assistants_to_sellers" USING btree ("sellerId" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_SKU" ON "amazon"."listing" USING btree ("sku" text_ops);--> statement-breakpoint
CREATE INDEX "IDX_USERID" ON "amazon"."listing" USING btree ("userId" int4_ops);--> statement-breakpoint
CREATE INDEX "listing_product_short_name_index" ON "amazon"."listing" USING btree ("product_short_name" text_ops);--> statement-breakpoint
CREATE INDEX "prepBatchId" ON "amazon"."listing" USING btree ("prepBatchId" text_ops);--> statement-breakpoint
CREATE INDEX "syncBatchIdIdx" ON "amazon"."listing" USING btree ("syncBatchId" text_ops);--> statement-breakpoint
CREATE INDEX "amz_transactions_asin_idx" ON "amazon"."amz_transactions" USING btree ("user_id" int4_ops,"asin" text_ops) WHERE (asin IS NOT NULL);--> statement-breakpoint
CREATE INDEX "amz_transactions_date_user_idx" ON "amazon"."amz_transactions" USING btree ("posted_date" timestamptz_ops,"user_id" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "amz_transactions_date_user_order_sku_idx" ON "amazon"."amz_transactions" USING btree ("posted_date" timestamptz_ops,"user_id" int4_ops,"order_id" timestamptz_ops,"sku" int4_ops);--> statement-breakpoint
CREATE INDEX "amz_transactions_order_idx" ON "amazon"."amz_transactions" USING btree ("order_id" int4_ops,"user_id" text_ops,"sku" int4_ops) WHERE (order_id IS NOT NULL);--> statement-breakpoint
CREATE INDEX "amz_transactions_sku_idx" ON "amazon"."amz_transactions" USING btree ("user_id" int4_ops,"sku" text_ops) WHERE (sku IS NOT NULL);--> statement-breakpoint
CREATE INDEX "idx_amz_transactions_fees_by_user" ON "amazon"."amz_transactions" USING btree ("user_id" text_ops,"order_id" int4_ops,"amount_description" int4_ops,"amount" text_ops) WHERE ((amount_type = 'Debit'::text) AND (transaction_event = ANY (ARRAY['ItemFee'::text, 'ServiceFee'::text, 'ItemFeeAdjustment'::text, 'Promotion'::text])) AND (amount <> (0)::numeric));--> statement-breakpoint
CREATE INDEX "idx_amz_transactions_refunds_by_user" ON "amazon"."amz_transactions" USING btree ("user_id" int4_ops,"order_id" int4_ops,"amount_description" text_ops,"amount" text_ops,"amount_type" text_ops,"posted_date" int4_ops) WHERE ((transaction_type = 'Refund'::text) AND (amount <> (0)::numeric));--> statement-breakpoint
CREATE INDEX "pallet_shipment_index" ON "fba_pallet" USING btree ("shipmentId" int4_ops);--> statement-breakpoint
CREATE INDEX "feedback_campaigns_order_items_asin_index" ON "amazon"."feedback_campaigns_order_items" USING btree ("asin" text_ops);--> statement-breakpoint
CREATE INDEX "feedback_campaigns_order_items_order_id_index" ON "amazon"."feedback_campaigns_order_items" USING btree ("order_id" text_ops);--> statement-breakpoint
CREATE INDEX "feedback_campaigns_order_items_sku_index" ON "amazon"."feedback_campaigns_order_items" USING btree ("sku" text_ops);--> statement-breakpoint
CREATE INDEX "feedback_campaigns_order_items_user_id_index" ON "amazon"."feedback_campaigns_order_items" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX "feedback_campaigns_order_items_user_id_order_id_index" ON "amazon"."feedback_campaigns_order_items" USING btree ("user_id" text_ops,"order_id" int4_ops);--> statement-breakpoint
CREATE INDEX "idx_log_createdAt" ON "log" USING btree ("createdAt" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "idx_log_tag" ON "log" USING gin ("tags" array_ops) WITH (fastupdate=on);--> statement-breakpoint
CREATE INDEX "batch_userId_index" ON "fba_batch" USING btree ("userId" int4_ops);--> statement-breakpoint
CREATE INDEX "shipmentIdItem_index" ON "amazon"."fba_shipment_item" USING btree ("shipmentId" int4_ops);--> statement-breakpoint
CREATE INDEX "amz_orders_date_user_order_idx" ON "amazon"."amz_orders" USING btree ("order_date" int4_ops,"user_id" text_ops,"order_id" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "amz_orders_order_id_idx" ON "amazon"."amz_orders" USING btree ("order_id" text_ops);--> statement-breakpoint
CREATE INDEX "amz_orders_user_id_idx" ON "amazon"."amz_orders" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX "feedback_campaigns_priority_index" ON "feedback_campaigns" USING btree ("priority" int4_ops);--> statement-breakpoint
CREATE INDEX "feedback_campaigns_status_index" ON "feedback_campaigns" USING btree ("status" enum_ops);--> statement-breakpoint
CREATE INDEX "feedback_campaigns_user_id_index" ON "feedback_campaigns" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX "feedback_message_templates_campaign_id_index" ON "feedback_message_templates" USING btree ("campaign_id" int4_ops);--> statement-breakpoint
CREATE INDEX "feedback_message_templates_user_id_index" ON "feedback_message_templates" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX "feedback_campaign_products_campaign_id_index" ON "feedback_campaign_products" USING btree ("campaign_id" int4_ops);--> statement-breakpoint
CREATE INDEX "feedback_campaign_products_sku_index" ON "feedback_campaign_products" USING btree ("sku" text_ops);--> statement-breakpoint
CREATE INDEX "feedback_campaign_products_user_id_index" ON "feedback_campaign_products" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX "idx_address_userId" ON "address" USING btree ("userId" int4_ops);--> statement-breakpoint
CREATE INDEX "batch_index" ON "amazon"."fba_item" USING btree ("batchId" int4_ops);--> statement-breakpoint
CREATE INDEX "listing_index" ON "amazon"."fba_item" USING btree ("listingId" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_3c60e35c0919180df3e084ed02" ON "amazon"."catalog" USING btree ("asin" text_ops);--> statement-breakpoint
CREATE INDEX "catalog_gtin_index" ON "amazon"."catalog" USING btree ("gtin" text_ops);--> statement-breakpoint
CREATE INDEX "catalog_upc_index" ON "amazon"."catalog" USING btree ("upc" text_ops);--> statement-breakpoint
CREATE INDEX "idx_analytics_jobs_claim" ON "amazon"."analytics_jobs" USING btree ("status" enum_ops);--> statement-breakpoint
CREATE INDEX "idx_analytics_jobs_range_start" ON "amazon"."analytics_jobs" USING btree ("range_start_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "idx_analytics_jobs_reclaim" ON "amazon"."analytics_jobs" USING btree ("lease_until" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "packing_option_batch_index" ON "amazon"."packing_option" USING btree ("batchId" int4_ops);--> statement-breakpoint
CREATE INDEX "packing_option_id_index" ON "amazon"."packing_option" USING btree ("packingOptionId" text_ops);--> statement-breakpoint
CREATE INDEX "carton_content_index" ON "amazon"."fba_shipment" USING btree ("cartonContentFeedId" text_ops);--> statement-breakpoint
CREATE INDEX "shipmentId_index" ON "amazon"."fba_shipment" USING btree ("shipmentId" text_ops);--> statement-breakpoint
CREATE INDEX "shipment_batch_index" ON "amazon"."fba_shipment" USING btree ("batchId" int4_ops);--> statement-breakpoint
CREATE INDEX "status_index" ON "amazon"."fba_shipment" USING btree ("status" text_ops);--> statement-breakpoint
CREATE INDEX "userId_index" ON "amazon"."fba_shipment" USING btree ("userId" int4_ops);--> statement-breakpoint
CREATE INDEX "box_batch_index" ON "amazon"."fba_box" USING btree ("batchId" int4_ops);--> statement-breakpoint
CREATE INDEX "box_shipment_index" ON "amazon"."fba_box" USING btree ("shipmentId" int4_ops);--> statement-breakpoint
CREATE INDEX "IDX_1530e623ff87676d2d7b8df315" ON "amazon"."inventory_details" USING btree ("sellerSku" text_ops);--> statement-breakpoint
CREATE INDEX "ID_LISTING_IDX" ON "amazon"."inventory_details" USING btree ("listingId" int4_ops);--> statement-breakpoint
CREATE INDEX "placement_option_batch_index" ON "amazon"."placement_option" USING btree ("batchId" int4_ops);--> statement-breakpoint
CREATE INDEX "shipment_option_placement_option_index" ON "amazon"."shipment_option" USING btree ("placementOptionId" int4_ops);--> statement-breakpoint
CREATE INDEX "transportation_option_placementOptionId_index" ON "amazon"."transportation_option" USING btree ("placementOptionId" int4_ops);--> statement-breakpoint
CREATE INDEX "transportation_option_shipmentId_index" ON "amazon"."transportation_option" USING btree ("shipmentId" int4_ops);--> statement-breakpoint
CREATE INDEX "LISTING_UPDATE_IDX_USERID" ON "amazon"."listing_update" USING btree ("userId" int4_ops);--> statement-breakpoint
CREATE INDEX "feedback_email_to_send_order_id_index" ON "amazon"."feedback_email_to_send" USING btree ("order_id" text_ops);--> statement-breakpoint
CREATE INDEX "feedback_email_to_send_status_index" ON "amazon"."feedback_email_to_send" USING btree ("status" text_ops);--> statement-breakpoint
CREATE INDEX "feedback_email_to_send_status_to_send_date_index" ON "amazon"."feedback_email_to_send" USING btree ("status" timestamptz_ops,"to_send_date" text_ops);--> statement-breakpoint
CREATE INDEX "feedback_email_to_send_to_send_date_index" ON "amazon"."feedback_email_to_send" USING btree ("to_send_date" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "feedback_email_to_send_user_id_index" ON "amazon"."feedback_email_to_send" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX "feedback_campaigns_orders_campaign_id_index" ON "amazon"."feedback_campaigns_orders" USING btree ("campaign_id" int4_ops);--> statement-breakpoint
CREATE INDEX "feedback_campaigns_orders_marketplace_id_index" ON "amazon"."feedback_campaigns_orders" USING btree ("marketplace_id" text_ops);--> statement-breakpoint
CREATE INDEX "feedback_campaigns_orders_order_date_index" ON "amazon"."feedback_campaigns_orders" USING btree ("order_date" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "feedback_campaigns_orders_user_id_index" ON "amazon"."feedback_campaigns_orders" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX "wfs_listing_sku_index" ON "wfs_listing" USING btree ("sku" text_ops);--> statement-breakpoint
CREATE INDEX "bulkUngateEnd" ON "bulkUngateStats" USING btree ("end" int8_ops);--> statement-breakpoint
CREATE INDEX "bulkUngateStart" ON "bulkUngateStats" USING btree ("start" int8_ops);--> statement-breakpoint
CREATE INDEX "public_uuid" ON "user" USING btree ("public_uuid" uuid_ops);--> statement-breakpoint
CREATE INDEX "user_amz_orders_sync_at_index" ON "user" USING btree ("amz_orders_sync_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "user_amz_orders_sync_status_amz_orders_sync_at_index" ON "user" USING btree ("amz_orders_sync_status" enum_ops,"amz_orders_sync_at" enum_ops);--> statement-breakpoint
CREATE INDEX "user_amz_orders_sync_status_index" ON "user" USING btree ("amz_orders_sync_status" enum_ops);--> statement-breakpoint
CREATE INDEX "user_amz_transactions_sync_at_index" ON "user" USING btree ("amz_transactions_sync_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "user_amz_transactions_sync_status_amz_transactions_sync_at_inde" ON "user" USING btree ("amz_transactions_sync_status" timestamptz_ops,"amz_transactions_sync_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "user_amz_transactions_sync_status_index" ON "user" USING btree ("amz_transactions_sync_status" enum_ops);--> statement-breakpoint
CREATE INDEX "user_feedback_orders_sync_at_index" ON "user" USING btree ("feedback_orders_sync_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "user_feedback_orders_sync_status_feedback_orders_sync_at_index" ON "user" USING btree ("feedback_orders_sync_status" timestamptz_ops,"feedback_orders_sync_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "user_feedback_orders_sync_status_index" ON "user" USING btree ("feedback_orders_sync_status" enum_ops);--> statement-breakpoint
CREATE INDEX "user_feedback_orders_update_at_index" ON "user" USING btree ("feedback_orders_update_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "user_feedback_orders_update_status_feedback_orders_update_at_in" ON "user" USING btree ("feedback_orders_update_status" timestamptz_ops,"feedback_orders_update_at" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "user_feedback_orders_update_status_index" ON "user" USING btree ("feedback_orders_update_status" enum_ops);--> statement-breakpoint
CREATE INDEX "snapshotBoxemDate" ON "activitySnapshot" USING btree ("snapshotBoxemDate" numeric_ops);--> statement-breakpoint
CREATE INDEX "amz_order_items_asin_idx" ON "amazon"."amz_order_items" USING btree ("asin" text_ops);--> statement-breakpoint
CREATE INDEX "amz_order_items_sku_idx" ON "amazon"."amz_order_items" USING btree ("sku" text_ops);--> statement-breakpoint
CREATE INDEX "amz_order_items_user_asin_idx" ON "amazon"."amz_order_items" USING btree ("user_id" text_ops,"asin" text_ops);--> statement-breakpoint
CREATE INDEX "amz_order_items_user_id_idx" ON "amazon"."amz_order_items" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX "amz_order_items_user_sku_idx" ON "amazon"."amz_order_items" USING btree ("user_id" text_ops,"sku" text_ops);--> statement-breakpoint
CREATE VIEW "public"."pg_stat_statements_info" AS (SELECT dealloc, stats_reset FROM pg_stat_statements_info() pg_stat_statements_info(dealloc, stats_reset));--> statement-breakpoint
CREATE VIEW "public"."pg_stat_statements" AS (SELECT userid, dbid, toplevel, queryid, query, plans, total_plan_time, min_plan_time, max_plan_time, mean_plan_time, stddev_plan_time, calls, total_exec_time, min_exec_time, max_exec_time, mean_exec_time, stddev_exec_time, rows, shared_blks_hit, shared_blks_read, shared_blks_dirtied, shared_blks_written, local_blks_hit, local_blks_read, local_blks_dirtied, local_blks_written, temp_blks_read, temp_blks_written, blk_read_time, blk_write_time, temp_blk_read_time, temp_blk_write_time, wal_records, wal_fpi, wal_bytes, jit_functions, jit_generation_time, jit_inlining_count, jit_inlining_time, jit_optimization_count, jit_optimization_time, jit_emission_count, jit_emission_time FROM pg_stat_statements(true) pg_stat_statements(userid, dbid, toplevel, queryid, query, plans, total_plan_time, min_plan_time, max_plan_time, mean_plan_time, stddev_plan_time, calls, total_exec_time, min_exec_time, max_exec_time, mean_exec_time, stddev_exec_time, rows, shared_blks_hit, shared_blks_read, shared_blks_dirtied, shared_blks_written, local_blks_hit, local_blks_read, local_blks_dirtied, local_blks_written, temp_blks_read, temp_blks_written, blk_read_time, blk_write_time, temp_blk_read_time, temp_blk_write_time, wal_records, wal_fpi, wal_bytes, jit_functions, jit_generation_time, jit_inlining_count, jit_inlining_time, jit_optimization_count, jit_optimization_time, jit_emission_count, jit_emission_time));--> statement-breakpoint
CREATE VIEW "public"."latest-inventory-details" AS (SELECT DISTINCT ON ("listingId") "listingId" AS pid, id, "fulfillableQuantity", "inboundWorkingQuantity", "inboundShippedQuantity", "inboundReceivingQuantity", "reservedQuantity", "researchingQuantity", "unfulfillableQuantity", "futureSupplyQuantity", created_at, updated_at, "sellerSku", "fnSku", "totalQuantity", "pendingCustomerOrderInTransit", latest_notification_updated_at, "listingId" AS "productId" FROM amazon.inventory_details ORDER BY "listingId", latest_notification_updated_at DESC);--> statement-breakpoint
CREATE VIEW "public"."pg_buffercache" AS (SELECT bufferid, relfilenode, reltablespace, reldatabase, relforknumber, relblocknumber, isdirty, usagecount, pinning_backends FROM pg_buffercache_pages() p(bufferid integer, relfilenode oid, reltablespace oid, reldatabase oid, relforknumber smallint, relblocknumber bigint, isdirty boolean, usagecount smallint, pinning_backends integer));
*/