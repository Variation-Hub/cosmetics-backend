const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const paymentModel = new mongoose.Schema({
    id: {
        type: String,
        default: uuid
    },
    data: {
        type: mongoose.Schema.Types.Mixed,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false });

module.exports = mongoose.model('Payment', paymentModel);
