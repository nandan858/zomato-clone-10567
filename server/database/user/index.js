import mongoose from " mongoose";

const UserSchema = new mongoose.Schema(
    {
        fullName : {type: String, requires: true},
        email: {type:String, required : true},
        password: {type : String},
        address:[{detail: {type: String}, for: {type: String}}],
        phoneNumber: [{ type : Number}],
    },
    {
        timstamps: true,
    }
);

UserSchema.methods.generateJwtToken = function () {};

UserSchema.statics.findByEmailAndPhone = async () => {};

UserSchema.statics.findByEmailAndPassword = async () => {};

export const UserModel = mongoose.model("users", UserSchema);