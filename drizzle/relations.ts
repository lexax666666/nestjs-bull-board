import { relations } from "drizzle-orm/relations";
import { user, assistants_to_sellers, catalogInAmazon, listingInAmazon, supplier, fba_shipmentInAmazon, fba_pallet, feedback_campaigns_ordersInAmazon, feedback_campaigns_order_itemsInAmazon, bulk_ungate_result, boxi_chat, address, fba_batch, disputeSession, fba_itemInAmazon, fba_shipment_itemInAmazon, disputeIpHistory, feedback_campaigns, feedback_message_templates, feedback_campaign_products, packing_optionInAmazon, placement_optionInAmazon, fba_boxInAmazon, wfs_listing_sync, inventory_detailsInAmazon, shipment_optionInAmazon, transportation_optionInAmazon, listing_quantityInAmazon, listing_updateInAmazon, carrierLabels, restock, wfs_shipment_sync, wfs_shipment_item_sync, box_templates, wfs_inventory_sync, wfs_listing, setting, boxi_message } from "./schema";

export const assistants_to_sellersRelations = relations(assistants_to_sellers, ({one}) => ({
	user_assistantId: one(user, {
		fields: [assistants_to_sellers.assistantId],
		references: [user.id],
		relationName: "assistants_to_sellers_assistantId_user_id"
	}),
	user_sellerId: one(user, {
		fields: [assistants_to_sellers.sellerId],
		references: [user.id],
		relationName: "assistants_to_sellers_sellerId_user_id"
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	assistants_to_sellers_assistantId: many(assistants_to_sellers, {
		relationName: "assistants_to_sellers_assistantId_user_id"
	}),
	assistants_to_sellers_sellerId: many(assistants_to_sellers, {
		relationName: "assistants_to_sellers_sellerId_user_id"
	}),
	listingInAmazons: many(listingInAmazon),
	bulk_ungate_results: many(bulk_ungate_result),
	suppliers: many(supplier),
	boxi_chats: many(boxi_chat),
	fba_batches: many(fba_batch),
	disputeSessions: many(disputeSession),
	disputeIpHistories: many(disputeIpHistory),
	addresses: many(address),
	fba_shipmentInAmazons: many(fba_shipmentInAmazon),
	wfs_listing_syncs: many(wfs_listing_sync),
	inventory_detailsInAmazons: many(inventory_detailsInAmazon),
	listing_quantityInAmazons: many(listing_quantityInAmazon),
	listing_updateInAmazons: many(listing_updateInAmazon),
	carrierLabels: many(carrierLabels),
	restocks: many(restock),
	wfs_shipment_syncs: many(wfs_shipment_sync),
	wfs_shipment_item_syncs: many(wfs_shipment_item_sync),
	box_templates: many(box_templates),
	wfs_inventory_syncs: many(wfs_inventory_sync),
	wfs_listings: many(wfs_listing),
	settings: many(setting),
	boxi_messages: many(boxi_message),
}));

export const listingInAmazonRelations = relations(listingInAmazon, ({one, many}) => ({
	catalogInAmazon: one(catalogInAmazon, {
		fields: [listingInAmazon.catalogId],
		references: [catalogInAmazon.id]
	}),
	supplier: one(supplier, {
		fields: [listingInAmazon.supplierId],
		references: [supplier.id]
	}),
	user: one(user, {
		fields: [listingInAmazon.userId],
		references: [user.id]
	}),
	fba_itemInAmazons: many(fba_itemInAmazon),
	inventory_detailsInAmazons: many(inventory_detailsInAmazon),
}));

export const catalogInAmazonRelations = relations(catalogInAmazon, ({many}) => ({
	listingInAmazons: many(listingInAmazon),
}));

export const supplierRelations = relations(supplier, ({one, many}) => ({
	listingInAmazons: many(listingInAmazon),
	user: one(user, {
		fields: [supplier.userId],
		references: [user.id]
	}),
	fba_itemInAmazons: many(fba_itemInAmazon),
}));

export const fba_palletRelations = relations(fba_pallet, ({one}) => ({
	fba_shipmentInAmazon: one(fba_shipmentInAmazon, {
		fields: [fba_pallet.shipmentId],
		references: [fba_shipmentInAmazon.id]
	}),
}));

export const fba_shipmentInAmazonRelations = relations(fba_shipmentInAmazon, ({one, many}) => ({
	fba_pallets: many(fba_pallet),
	fba_shipment_itemInAmazons: many(fba_shipment_itemInAmazon),
	fba_batch: one(fba_batch, {
		fields: [fba_shipmentInAmazon.batchId],
		references: [fba_batch.id]
	}),
	address: one(address, {
		fields: [fba_shipmentInAmazon.fromId],
		references: [address.id]
	}),
	placement_optionInAmazon: one(placement_optionInAmazon, {
		fields: [fba_shipmentInAmazon.placementOptionId],
		references: [placement_optionInAmazon.id]
	}),
	user: one(user, {
		fields: [fba_shipmentInAmazon.userId],
		references: [user.id]
	}),
	fba_boxInAmazons: many(fba_boxInAmazon),
	transportation_optionInAmazons: many(transportation_optionInAmazon),
}));

export const feedback_campaigns_order_itemsInAmazonRelations = relations(feedback_campaigns_order_itemsInAmazon, ({one}) => ({
	feedback_campaigns_ordersInAmazon: one(feedback_campaigns_ordersInAmazon, {
		fields: [feedback_campaigns_order_itemsInAmazon.order_id],
		references: [feedback_campaigns_ordersInAmazon.order_id]
	}),
}));

export const feedback_campaigns_ordersInAmazonRelations = relations(feedback_campaigns_ordersInAmazon, ({one, many}) => ({
	feedback_campaigns_order_itemsInAmazons: many(feedback_campaigns_order_itemsInAmazon),
	feedback_campaign: one(feedback_campaigns, {
		fields: [feedback_campaigns_ordersInAmazon.campaign_id],
		references: [feedback_campaigns.id]
	}),
}));

export const bulk_ungate_resultRelations = relations(bulk_ungate_result, ({one}) => ({
	user: one(user, {
		fields: [bulk_ungate_result.user_uuid],
		references: [user.public_uuid]
	}),
}));

export const boxi_chatRelations = relations(boxi_chat, ({one, many}) => ({
	user: one(user, {
		fields: [boxi_chat.owner],
		references: [user.id]
	}),
	boxi_messages: many(boxi_message),
}));

export const fba_batchRelations = relations(fba_batch, ({one, many}) => ({
	address: one(address, {
		fields: [fba_batch.fromId],
		references: [address.id]
	}),
	user: one(user, {
		fields: [fba_batch.userId],
		references: [user.id]
	}),
	fba_itemInAmazons: many(fba_itemInAmazon),
	packing_optionInAmazons: many(packing_optionInAmazon),
	fba_shipmentInAmazons: many(fba_shipmentInAmazon),
	fba_boxInAmazons: many(fba_boxInAmazon),
	placement_optionInAmazons: many(placement_optionInAmazon),
}));

export const addressRelations = relations(address, ({one, many}) => ({
	fba_batches: many(fba_batch),
	user: one(user, {
		fields: [address.userId],
		references: [user.id]
	}),
	fba_shipmentInAmazons: many(fba_shipmentInAmazon),
	settings: many(setting),
}));

export const disputeSessionRelations = relations(disputeSession, ({one}) => ({
	user: one(user, {
		fields: [disputeSession.userUUID],
		references: [user.public_uuid]
	}),
}));

export const fba_shipment_itemInAmazonRelations = relations(fba_shipment_itemInAmazon, ({one}) => ({
	fba_itemInAmazon: one(fba_itemInAmazon, {
		fields: [fba_shipment_itemInAmazon.fbaItemId],
		references: [fba_itemInAmazon.id]
	}),
	fba_shipmentInAmazon: one(fba_shipmentInAmazon, {
		fields: [fba_shipment_itemInAmazon.shipmentId],
		references: [fba_shipmentInAmazon.id]
	}),
}));

export const fba_itemInAmazonRelations = relations(fba_itemInAmazon, ({one, many}) => ({
	fba_shipment_itemInAmazons: many(fba_shipment_itemInAmazon),
	fba_batch: one(fba_batch, {
		fields: [fba_itemInAmazon.batchId],
		references: [fba_batch.id]
	}),
	listingInAmazon: one(listingInAmazon, {
		fields: [fba_itemInAmazon.listingId],
		references: [listingInAmazon.id]
	}),
	supplier: one(supplier, {
		fields: [fba_itemInAmazon.supplierId],
		references: [supplier.id]
	}),
}));

export const disputeIpHistoryRelations = relations(disputeIpHistory, ({one}) => ({
	user: one(user, {
		fields: [disputeIpHistory.userUUID],
		references: [user.public_uuid]
	}),
}));

export const feedback_message_templatesRelations = relations(feedback_message_templates, ({one}) => ({
	feedback_campaign: one(feedback_campaigns, {
		fields: [feedback_message_templates.campaign_id],
		references: [feedback_campaigns.id]
	}),
}));

export const feedback_campaignsRelations = relations(feedback_campaigns, ({many}) => ({
	feedback_message_templates: many(feedback_message_templates),
	feedback_campaign_products: many(feedback_campaign_products),
	feedback_campaigns_ordersInAmazons: many(feedback_campaigns_ordersInAmazon),
}));

export const feedback_campaign_productsRelations = relations(feedback_campaign_products, ({one}) => ({
	feedback_campaign: one(feedback_campaigns, {
		fields: [feedback_campaign_products.campaign_id],
		references: [feedback_campaigns.id]
	}),
}));

export const packing_optionInAmazonRelations = relations(packing_optionInAmazon, ({one, many}) => ({
	fba_batch: one(fba_batch, {
		fields: [packing_optionInAmazon.batchId],
		references: [fba_batch.id]
	}),
	fba_boxInAmazons: many(fba_boxInAmazon),
}));

export const placement_optionInAmazonRelations = relations(placement_optionInAmazon, ({one, many}) => ({
	fba_shipmentInAmazons: many(fba_shipmentInAmazon),
	fba_batch: one(fba_batch, {
		fields: [placement_optionInAmazon.batchId],
		references: [fba_batch.id]
	}),
	shipment_optionInAmazons: many(shipment_optionInAmazon),
	transportation_optionInAmazons: many(transportation_optionInAmazon),
}));

export const fba_boxInAmazonRelations = relations(fba_boxInAmazon, ({one}) => ({
	fba_batch: one(fba_batch, {
		fields: [fba_boxInAmazon.batchId],
		references: [fba_batch.id]
	}),
	packing_optionInAmazon: one(packing_optionInAmazon, {
		fields: [fba_boxInAmazon.packingOptionId],
		references: [packing_optionInAmazon.id]
	}),
	fba_shipmentInAmazon: one(fba_shipmentInAmazon, {
		fields: [fba_boxInAmazon.shipmentId],
		references: [fba_shipmentInAmazon.id]
	}),
}));

export const wfs_listing_syncRelations = relations(wfs_listing_sync, ({one}) => ({
	user: one(user, {
		fields: [wfs_listing_sync.userId],
		references: [user.id]
	}),
}));

export const inventory_detailsInAmazonRelations = relations(inventory_detailsInAmazon, ({one}) => ({
	listingInAmazon: one(listingInAmazon, {
		fields: [inventory_detailsInAmazon.listingId],
		references: [listingInAmazon.id]
	}),
	user: one(user, {
		fields: [inventory_detailsInAmazon.userId],
		references: [user.id]
	}),
}));

export const shipment_optionInAmazonRelations = relations(shipment_optionInAmazon, ({one}) => ({
	placement_optionInAmazon: one(placement_optionInAmazon, {
		fields: [shipment_optionInAmazon.placementOptionId],
		references: [placement_optionInAmazon.id]
	}),
}));

export const transportation_optionInAmazonRelations = relations(transportation_optionInAmazon, ({one}) => ({
	placement_optionInAmazon: one(placement_optionInAmazon, {
		fields: [transportation_optionInAmazon.placementOptionId],
		references: [placement_optionInAmazon.id]
	}),
	fba_shipmentInAmazon: one(fba_shipmentInAmazon, {
		fields: [transportation_optionInAmazon.shipmentId],
		references: [fba_shipmentInAmazon.id]
	}),
}));

export const listing_quantityInAmazonRelations = relations(listing_quantityInAmazon, ({one}) => ({
	user: one(user, {
		fields: [listing_quantityInAmazon.userId],
		references: [user.id]
	}),
}));

export const listing_updateInAmazonRelations = relations(listing_updateInAmazon, ({one}) => ({
	user: one(user, {
		fields: [listing_updateInAmazon.userId],
		references: [user.id]
	}),
}));

export const carrierLabelsRelations = relations(carrierLabels, ({one}) => ({
	user: one(user, {
		fields: [carrierLabels.userUUID],
		references: [user.public_uuid]
	}),
}));

export const restockRelations = relations(restock, ({one}) => ({
	user: one(user, {
		fields: [restock.userUUID],
		references: [user.public_uuid]
	}),
}));

export const wfs_shipment_syncRelations = relations(wfs_shipment_sync, ({one}) => ({
	user: one(user, {
		fields: [wfs_shipment_sync.userId],
		references: [user.id]
	}),
}));

export const wfs_shipment_item_syncRelations = relations(wfs_shipment_item_sync, ({one}) => ({
	user: one(user, {
		fields: [wfs_shipment_item_sync.userId],
		references: [user.id]
	}),
}));

export const box_templatesRelations = relations(box_templates, ({one}) => ({
	user: one(user, {
		fields: [box_templates.sellerId],
		references: [user.id]
	}),
}));

export const wfs_inventory_syncRelations = relations(wfs_inventory_sync, ({one}) => ({
	user: one(user, {
		fields: [wfs_inventory_sync.userId],
		references: [user.id]
	}),
}));

export const wfs_listingRelations = relations(wfs_listing, ({one}) => ({
	user: one(user, {
		fields: [wfs_listing.userId],
		references: [user.id]
	}),
}));

export const settingRelations = relations(setting, ({one}) => ({
	address: one(address, {
		fields: [setting.fromId],
		references: [address.id]
	}),
	user: one(user, {
		fields: [setting.userId],
		references: [user.id]
	}),
}));

export const boxi_messageRelations = relations(boxi_message, ({one}) => ({
	boxi_chat: one(boxi_chat, {
		fields: [boxi_message.chat],
		references: [boxi_chat.uuid]
	}),
	user: one(user, {
		fields: [boxi_message.owner],
		references: [user.id]
	}),
}));