const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const UserListSchema = new Schema(
    {
        // uniqId: {
        //     type: String,
        //     required: true
        // },
        userId: {
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: "User",
        },
        schema_name: {
            type: String,
        },
        entityId: {
            type: String,
        },
        subscriptionId: {
            type: String,
        },
        portalIds: {
            type: Array,
        },
        subscription: {
            type: {
                id: {
                    type: String,
                },
                subscriptionType: {
                    type: String,
                    required: true,
                },
            },
            default: {
                subscriptionType: 'free',
            },
        },
        subscriptionExpire: {
            type: Boolean,
            require: true,
            default: false,
        },
        // stripeId: {
        //     type: String,
        //     required: true,
        //     private: true, // used by the toJSON plugin
        // },
        // sepaClientSecret: { type: String, required: true, private: true },
        stripePaymentMethod: {
            type: {
                id: {
                    type: String,
                    required: true,
                },
                last4: {
                    type: String,
                    required: true,
                    trim: true,
                    minlength: 4,
                    maxlength: 4,
                    validate(value) {
                        if (!value.match(/^\d+$/)) {
                            throw new Error('last4 must be a number');
                        }
                    },
                },
            },
            required: false,
        },
        listNumber: { type: Number },
        listingTitle: {
            type: String,
        },
        listingType: {
            type: String,
        },
        buildingType: {
            type: String,
        },
        specificBuildingType: {
            type: String,
        },
        newBuilding: {
            type: Boolean,
            default: false
        },
        monumentProtection: {
            type: Boolean,
            default: false
        },
        numberOfFloors: {
            type: String,
        },
        numberOfRooms: {
            type: String,
        },
        numberOfBedrooms: {
            type: String,
        },
        numberOfBathrooms: {
            type: String,
        },
        livingArea: {
            type: String,
        },
        usableArea: {
            type: String,
        },
        plotArea: {
            type: String,
        },
        numberOfGarages: {
            type: String,
        },
        typeOfParkingSpace: {
            type: String,
        },
        numberOfParkingSpaces: {
            type: String,
        },
        flatType: {
            type: String,
        },
        pass_valid_till: {
            type: String,
        },
        floor: {
            type: String,
        },
        monthlyHousepayment: {
            type: String,
        },
        parkingSpacePrice: {
            type: String,
        },
        landArea: {
            type: String,
        },
        stateOfDevelopment: {
            type: String,
        },
        description: {
            type: String,
        },
        features: {
            type: String,
        },
        location: {
            type: String,
        },
        additionalDescription: {
            type: String,
        },
        listingPrice: {
            type: Number,
        },
        rentPrice: {
            type: Number,
        },
        nickName: {
            type: String,
        },
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        zip: {
            type: String,
        },
        contactName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        flowfactContactId: {
            type: String,
        },
        phone: {
            type: String,
        },
        formEmail: {
            type: String,
        },
        nameHide: {
            type: String,
        },
        phoneNumberHide: {
            type: String,
        },
        emailHide: {
            type: String,
        },
        additionalCost: {
            type: String,
        },
        secuirityCost: {
            type: String,
        },
        heatingCostinDetails: {
            type: String,
        },
        energySource: {
            type: String,
        },
        energy: {
            type: Boolean
        },
        energyPass: {
            type: String
        },
        energyPassCreationDate: {
            type: String,
        },
        typeOfHeating: {
            type: String,
        },
        typeOfEnergyPass: {
            type: String,
        },
        yearOfBuilding: {
            type: String,
        },
        imgCollection: {
            type: [String],
            required: false,  // if required, set to true
        },
        planCollection: {
            type: [String],
            required: false,  // if required, set to true
        },
        subscriptionPause: {
            type: Boolean,
            default: false,
        },
        activeUntil: {
            type: Date,
            default: null
        },
        subscriptionUpdatedAt: {
            type: Date
        },
        subscriptionExpired: {
            type: Boolean,
            require: true,
            default: false,
        },
        inactive: {
            type: Boolean,
            default: false,
        },
        pending: {
            type: Boolean,
            default: false,
        },
        deleted: {
            type: Boolean,
            default: false
        },
        hideAddress: {
            type: Boolean,
            default: true
        },
        contactType: {
            type: String
        },
        commission: {
            type: String
        },
        buildingphase: {
            type: String
        },
        energyEfficiencyClass: {
            type: String
        },
        leasablearea: {
            type: String
        },
        totalarea: {
            type: String
        },
        paymentIsSepa: {
            type: Boolean,
            default: false
        },
        estatetype: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

const UserList = model('UserList', UserListSchema);

module.exports = UserList;
