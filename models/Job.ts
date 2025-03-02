import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    // Core Job Information
    SFID: String,
    request_time: Number,
    accept_time: Date,
    scheduled_time: Date,
    end_time: Date,
    affiliate_id: String,
    address: Object,
    location: { long: Number, lat: Number },
    state: String,
    client: Object,
    agent: Object,

    // Financial Details
    travelFee: { type: Number, default: 0 },
    parkingFee: { type: Number, default: 0 },
    lateFee: { type: Number, default: 0 },
    price: Number,
    salesTax: { type: Number, default: 0 },
    localTaxCharged: Number,
    agent_paid_price: Number,
    serviceTip: Number,
    credits_used: Number,
    giftCreditsUsed: Number,
    priceAddOns: Array,
    serviceAddOn: Boolean,

    // Services and Variations
    services: Array,
    serviceVariationsAddOn: Array,
    selectedServiceVariations: Array,

    // Ratings and Feedback
    ratings: Array,
    messages: Array,
    client_received_comment: { type: Boolean, default: false },
    agent_received_comment: { type: Boolean, default: false },

    // Agent and Client References
    agent_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent', index: true },
    client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
    requested_agent_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent', index: true },

    // Job Status and Flags
    time_type: String, // Differentiate between 'instant' and 'appointment' jobs
    transportationType: String,
    five_min_alert: { type: Boolean, default: false },
    promotionCode: String,
    timeZone: { type: Number, default: 4 },
    shotGunJob: { type: Boolean, default: false },
    wasRegularJob: { type: Boolean, default: false },
    shotGunnedAgents: Array,
    shotGunRejects: Array,
    shotGunJobTaken: { type: Boolean, default: false },
    specialInstructions: String,
    cancelReason: { type: String, cancelReason: "" },
    was_cancelled_by_agent: { type: Boolean, default: false },
    was_cancelled_by_client: { type: Boolean, default: false },
    userCancelCharge: { type: Number, default: 0 },

    // Geographical and Regional Data
    region_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Region', index: true },
    city_id: { type: mongoose.Schema.Types.ObjectId, ref: 'City', index: true },
    city_name: String,

    // Metadata and Timestamps
    test: { type: Boolean, default: false },
    lastUpdated: Date,
    lastUpdatedSF: Date,
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now, index: true },
    updatedAt: { type: Date, default: Date.now, index: true },
}, { strict: false, timestamps: { updatedAt: "modifiedAt" } });

const Job = mongoose.model('Job', jobSchema);
export default Job;