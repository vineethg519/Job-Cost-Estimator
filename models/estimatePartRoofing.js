var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , RoofingBasecoat = require('./roofingBasecoat.js')
    , RoofingCoating = require('./roofingCoating.js')
    , RoofingPrimer = require('./roofingPrimer.js')
    , RoofingTopcoat = require('./roofingTopcoat.js')

var EstimatePartRoofingSchema = new Schema({
<<<<<<< HEAD
    roofType: { type: String, required: true, default: 'Metal', enum: ['Metal', 'Mod Bit', 'Single Ply'] },
    processType: { type: String, required: true, default: 'Roof Coatings', enum: ['Roof Coatings', 'Polyurethane Foam & Coatings'] },

    coatingType: { type: String, required: true, default: 'Urethane', enum: ['Urethane', 'Silicone', 'Acrylic'] },
    coatingSelection: [{ type: Schema.Types.ObjectId, ref: RoofingCoating, required: false }],
    coatingCoverageSqFt: { type: Number, required: true },

    usesBasecoat: { type: Boolean, required: true, default: false },
    basecoatSelection: [{ type: Schema.Types.ObjectId, ref: RoofingBasecoat, required: false }],
    basecoatCoverageSqFt: { type: Number, required: true },

    usesPrimer: { type: Boolean, required: true, default: false },
    primerSelection: [{ type: Schema.Types.ObjectId, ref: RoofingPrimer, required: false }],
    primerCoverageSqFt: { type: Number, required: true },

    usesTopcoat: { type: Boolean, required: true, default: false },
    topcoatSelection: [{ type: Schema.Types.ObjectId, ref: RoofingTopcoat, required: false }],
    topcoatCoverageSqFt: { type: Number, required: true },

=======
    _id: { type: Number, required: true},

    roofType: { type: String, required: true, default: 'Metal', enum: ['Metal', 'Mod Bit', 'Single Ply'] },
    processType: { type: String, required: true, default: 'Roof Coatings', enum: ['Roof Coatings', 'Polyurethane Foam & Coatings'] },

    coatingType: { type: String, required: true, default: 'Urethane', enum: ['Urethane', 'Silicone', 'Acrylic'] },
    coatingSelection: [{ type: Schema.Types.ObjectId, ref: RoofingCoating, required: false }],
    coatingCoverageSqFt: { type: Number, required: true },

    usesBasecoat: { type: Boolean, required: true, default: false },
    basecoatSelection: [{ type: Schema.Types.ObjectId, ref: RoofingBasecoat, required: false }],
    basecoatCoverageSqFt: { type: Number, required: true },

    usesPrimer: { type: Boolean, required: true, default: false },
    primerSelection: [{ type: Schema.Types.ObjectId, ref: RoofingPrimer, required: false }],
    primerCoverageSqFt: { type: Number, required: true },

    usesTopcoat: { type: Boolean, required: true, default: false },
    topcoatSelection: [{ type: Schema.Types.ObjectId, ref: RoofingTopcoat, required: false }],
    topcoatCoverageSqFt: { type: Number, required: true },

>>>>>>> 791a35409c00a279f69ca2c1c08979b770114a55
    subtotal: { type: Number, required: true, default: 0 }
})

var estimatePartRoofing = mongoose.model('EstimatePartRoofing', EstimatePartRoofingSchema)
<<<<<<< HEAD
module.exports = estimatePartRoofing
=======
module.exports = estimatePartRoofing

// This model is managed by by team 03-R06
// S.SunilKumar,K.Deepak,P.Subba Reddy
>>>>>>> 791a35409c00a279f69ca2c1c08979b770114a55
