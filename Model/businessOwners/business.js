const { Schema, default: mongoose } = require('mongoose');

const fileSchema = new Schema({
    url: {
        type: String,
    },
    filename: {
        type: String,
    }
});


const BusinessOwnerSchema = new Schema({
    category: {
        type: String,
        trim: true,
        required: true,
    }
    ,
    subCategory: {
        type: String,
        trim: true,
        default: "None"
    },
    businessName: {
        type: String,
        trim: true,
        required: true,
    },
    shopImage: [fileSchema],
    videoAgreement: fileSchema,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email ID required"]
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        minlength: [10, '{VALUE} is not a valid 10 digit number!'],
        maxlength: [10, '{VALUE} is not a valid 10 digit number!'],
    },
    password: {
        type: String,
        required: true,
    },
    shopNumber: {
        type: String,
        trim: true,
        required: true,
    },
    landmark: {
        type: String,
        trim: true,
    }
    ,
    pincode: {
        type: String,
        trim: true,
        required: true,
        minlength: [6, '{VALUE} is not a valid 6 digit PINCODE'],
        maxlength: [6, '{VALUE} is not a valid 6 digit PINCODE'],
    },
    city: {
        type: String,
        trim: true,
        required: true,
    },
    state: {
        type: String,
        trim: true,
        required: true,
    },
    discount: {
        type: String,
        trim: true,
        min: [1, 'Minimum Discount is 1%'],
        max: [100, 'Maximum Discount is 100%']
    },
    isVerified: {
        type: Boolean,
        default: false,
        required: true
    },
    type: {
        type: String,
        enum: ["business owner"],
        default: "business owner",
    }
}, { timestamps: true });



module.exports = mongoose.model('BusinessDetails', BusinessOwnerSchema);