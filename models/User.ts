import mongoose, { Schema, Document, Types } from 'mongoose';

// Define the interface for the User document
export interface IUser extends Document {
    SFID?: string;
    accessToken?: string;
    refreshToken?: string;
    deviceToken?: string;
    createdAt?: Date;
    facebookID?: string;
    facebookAccessToken?: string;
    firstName: string;
    oneSignalPlayerId?: string;
    lastName: string;
    email: string;
    emailDeliverable?: boolean;
    hashed_password?: string;
    loginType?: string;
    phoneNumber?: string;
    phoneNumberVerified?: boolean;
    emailVerified?: boolean;
    verificationCode?: number;
    gender?: string;
    idfa?: string;
    idfv?: string;
    profilePicture?: string;
    currentLocation?: { long: number; lat: number };
    addresses?: Array<{
        street1: string;
        street2?: string;
        city: string;
        state: string;
        zipCode: string;
        geoLocation: { long: number; lat: number };
        location_geojson?: object;
        addressString?: string;
        extraInstructions?: string;
    }>;
    ratings?: Array<{
        job_id: Types.ObjectId;
        rater_id: Types.ObjectId;
        rater_name: string;
        raterPic?: string;
        comment?: string;
        setup?: string;
        friendliness?: string;
        cleanliness?: string;
    }>;
    favoriteAgents?: Array<Types.ObjectId>;
    creditCardInfo?: Array<{
        creditCardNumber: string;
        expMonth: string;
        expYear: string;
        cv2: string;
    }>;
    paymentProfiles?: Array<{
        default?: boolean;
        uri?: string;
        checked?: boolean;
        lastVerified?: Date;
        lastVerifiedAmount?: number;
        invalid?: boolean;
        locality?: string;
        type?: string;
        last4?: string;
        cardType?: string;
        imageUrl?: string;
        stripe_card_id?: string;
        isExpired?: boolean;
        expirationDate?: string;
    }>;
    avgRating?: number;
    avgCleanlinessRating?: number;
    avgFriendlinessRating?: number;
    avgSetupRating?: number;
}

// Define the User schema
const userSchema = new Schema<IUser>(
    {
        SFID: String,
        accessToken: String,
        refreshToken: String,
        deviceToken: String,
        createdAt: { type: Date, default: Date.now },
        facebookID: String,
        facebookAccessToken: String,
        firstName: { type: String, required: true },
        oneSignalPlayerId: String,
        lastName: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        emailDeliverable: { type: Boolean, default: true },
        hashed_password: String,
        loginType: String,
        phoneNumber: { type: String, index: true },
        phoneNumberVerified: { type: Boolean, default: false },
        emailVerified: { type: Boolean, default: false },
        verificationCode: Number,
        gender: String,
        idfa: String,
        idfv: String,
        profilePicture: String,
        currentLocation: { long: Number, lat: Number },
        addresses: [
            {
                street1: String,
                street2: String,
                city: String,
                state: String,
                zipCode: String,
                geoLocation: { long: Number, lat: Number },
                location_geojson: Object,
                addressString: String,
                extraInstructions: String,
            },
        ],
        ratings: [
            {
                job_id: { type: Schema.Types.ObjectId, ref: 'Job' },
                rater_id: { type: Schema.Types.ObjectId, ref: 'Agent' },
                rater_name: String,
                raterPic: String,
                comment: String,
                setup: String,
                friendliness: String,
                cleanliness: String,
            },
        ],
        favoriteAgents: [{ type: Schema.Types.ObjectId, ref: 'Agent' }],
        creditCardInfo: [
            {
                creditCardNumber: String,
                expMonth: String,
                expYear: String,
                cv2: String,
            },
        ],
        paymentProfiles: [
            {
                default: { type: Boolean, default: false },
                uri: String,
                checked: { type: Boolean, default: false },
                lastVerified: Date,
                lastVerifiedAmount: Number,
                invalid: { type: Boolean, default: false },
                locality: String,
                type: String,
                last4: String,
                cardType: String,
                imageUrl: String,
                stripe_card_id: String,
                isExpired: { type: Boolean, default: false },
                expirationDate: String,
            },
        ],
        avgRating: { type: Number, default: 5 },
        avgCleanlinessRating: { type: Number, default: 5 },
        avgFriendlinessRating: { type: Number, default: 5 },
        avgSetupRating: { type: Number, default: 5 },
    },
    { timestamps: true }
);

// Index for geolocation
userSchema.index({ currentLocation: '2dsphere' });

// Virtual for full name
userSchema.virtual('name').get(function () {
    return `${this.firstName} ${this.lastName}`;
});

// Export the User model
const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);
export default User;





















// var _ = require('lodash');
// var crypto = require('crypto');
// var moment = require('moment-timezone');
// var mongoosastic = require('mongoosastic')
// var sluggable = require('mongoose-sluggable');

// module.exports = function(mongoose){

// 	var addressSchema = mongoose.Schema({
// 	    street1				: String,
// 	    street2				: String,
// 	    city				: String,
// 	    state 				: String,
// 	    zipCode 			: String,
// 	    geoLocation 		: {long : Number, lat: Number},
// 	    location_geojson	: Object,
// 	    addressString 		: String,
// 	    extraInstructions 	: String
	    
// 	});

// 	var consentSchema = mongoose.Schema({
// 		name					: String,
// 		agreedToTermsParent 	: { type : Boolean, default : false},
// 		agreedToTermsGuardian	: { type : Boolean, default : false},
// 		date					: String,
// 		signatureURL			: String,
// 		_id : mongoose.Schema.Types.ObjectId
// 	})

// 	var creditCardSchema = mongoose.Schema({
// 		creditCardNumber	: String,
// 		expMonth			: String,
// 		expYear				: String,
// 		cv2					: String
// 	});

// 	var ratingSchema = mongoose.Schema({
// 	    job_id		: { type: mongoose.Schema.Types.ObjectId, ref: 'Job'},
// 		rater_id	: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent'}, 
// 		rater_name 	: String,
// 		raterPic	: String, 
// 	    comment 	: String,
// 	    setup	 	: String,
// 	    friendliness: String,
// 	    cleanliness : String
// 	});
	
// 	var commentSchema = mongoose.Schema({
// 	    job_id		: { type: mongoose.Schema.Types.ObjectId, ref: 'Job'},
// 		commenter   : { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, 
// 		comment 	: String 
	    
// 	});
// 	var paymentProfileSchema = mongoose.Schema({
// 		default : { type : Boolean, default : false},
// 		uri : String,
// 		checked : { type : Boolean, default : false},
// 		lastVerified : Date,
// 		lastVerifiedAmount: Number,
// 		invalid : { type : Boolean, default : false},
// 		locality : String,
// 		type : String,
// 		last4 : String,
// 		cardType : String,
// 		imageUrl : String,
// 		stripe_card_id : String,
// 		isExpired : { type : Boolean, default : false},
// 		expirationDate : String
// 	});
	
// 	addressSchema.index({
// 		geoLocation: "2d",
// 		location_geojson: "2dsphere"
// 	});

// 	var gcmIdSchema = mongoose.Schema({
// 		installationId	: String,
// 		gcmId 			: String,
// 		gcmAppVersion 	: Number,
// 		deviceId		: String 
// 	});

// 	var userSchema = mongoose.Schema({
// 		SFID   					: String,
// 		accessToken 			: String,
// 		refreshToken 			: String,
// 		deviceToken				: String,
// 		createdAt				: Date,
// 	    facebookID				: String,
// 	    facebookAccessToken     : String,
// 	    firstName				: String,
// 	    oneSignalPlayerId 		: String,
// 	    lastName				: String,
// 	    email					: { type: String, unique : true},
// 	    emailDeliverable       : { type: Boolean, default : true},
// 	    hashed_password			: String,
// 	    loginType				: String,
// 	    phoneNumber				: {type: String, index: true},
// 	    phoneNumberVerified 	: { type : Boolean, default : false},
// 	    emailVerified 			: { type : Boolean, default : false},
// 	    verificationCode 		: Number,
// 	    gender					: String,
// 	    idfa 					: String,
// 	    idfv 					: String,
// 	    profilePicture			: String,
// 	    gcmIds					: [gcmIdSchema],
// 	    currentLocation 		: {long : Number, lat: Number},
// 	    geoJSONCurrentLocation	: {type : Object, index : '2dsphere'},
// 	    addresses 				: [addressSchema],
// 	    ratings 				: [ratingSchema],
// 	    favoriteAgents  		: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Agent'}],
// 	    news 					: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserNews'}],
// 	    creditCardInfo			: [creditCardSchema],
// 	    paymentProfiles 		: [paymentProfileSchema],
// 	    // futureAlerts 			: [userNotificationSchema],
// 	    balancedURI				: String, //This is the Customer URI for the Balanced Payments API
// 	    stripe_customer_id 		: String,
// 	    comments 				: [commentSchema],
// 	    appOpen					: { type : Boolean, default : false },
// 	    discountsUsed			: Array,
// 	    waitList				: { type : Boolean, default : false },
// 	    avgRating 				: { type : Number, default : 5},
// 	    avgCleanlinessRating 	: { type : Number, default : 5},
// 	    avgFriendlinessRating	: { type : Number, default : 5},
// 	    avgSetupRating			: { type : Number, default : 5},
// 	    hasCancelledBefore		: { type : Boolean, default : false},
// 	    token					: String,
// 	    //credit					: {type: Number, default: 0},
// 	    owesUsMoney				: { type : Boolean, default : false},
// 	    photos					: Array,
// 	    salt: { type: String, default: '' },
// 	    referralCode			: String,//users own referral code they can give out to people
// 	    referralSlug 			: String,
// 	    hasUsedReferral			: {type: Boolean, default : false}, //set to true when they've used a referral before
// 	    referralCodeUsed		: String, //someone elses referral code, they have applied it to their account, set to null when they use the credit on a  job
// 	    photos					: Array,
// 	    city_id  				: { type: mongoose.Schema.Types.ObjectId, ref: 'City'},
// 	    location_info			: {lat : Number, long : Number, timeZone : Number},
// 	    firstLogin				: { type : Boolean, default: false},
// 	    salesforce_id			: String,
// 	    corporate_discount		: {type : Number, default : 0},
// 	    corporate_account		: String,
// 	    look_book				: Array,
// 	    test  					: { type : Boolean, default : false},
// 	    tester					: { type : Boolean, default : false},
// 	    lastUpdated 			: Date,
// 	    lastUpdatedSF 			: Date,
// 	    cities_visited 			: Array,
// 	    journeys				: Array,
// 	    braintree_id			: String,
// 	    acquisitionSource 		: String,
// 	    queuedPushes 			: Array,
// 	    last_addr_geojson		: Object,
// 	    money_owed				: Number,
// 	    services_willing_to_test: String,
// 	    created_at			: { type: Date, default: Date.now },
// 	    modifiedAt			: { type: Date, default: Date.now, index : true },
// 	    updatedAt			: { type: Date, default: Date.now, index : true },
// 	    credit_array			: Array,
// 	    last_pinged_unix		: {type : Number, default : 0},
// 	    isBlocked				: { type : Boolean, default : false},
// 	    hasBeenWelcomed			: { type : Boolean, default : false},
// 	    birthday				: Date,
// 	    personalNote			: String,
// 	    lastAddCardTime			: Number,
// 		consentData				: consentSchema,
// 	});

// 	userSchema.index({
// 		location_info: "2d"
// 	});
	
// 	var City = require('./city.js')

// 	var UserESSchema = mongoose.Schema({
//       firstName :  { type: String, default: '', es_indexed:true},
//       lastName :  { type: String, default: '', es_indexed:true},
//       email :  { type: String, default: '', es_indexed:true },
//       tester :  { type: Boolean, default: false, es_indexed:true },
//       phone_number : { type: String, default: '', es_indexed:true},
//       city_id: {type: mongoose.Schema.Types.ObjectId, ref: 'City', es_schema: City, es_indexed:true},
//       created_at: { type : Date, default : "2014-09-12T14:50:07.041Z", es_indexed: true },
//   	});

//     UserESSchema.plugin(mongoosastic, {
//       host: 'aws-us-east-1-portal9.dblayer.com',
//       auth: 'esAdmin:Nice4esadmin!',
//       port: '11582',
//       protocol: "https",
//     }) 

//     mongoose.model('UserES', UserESSchema, 'users');

//     var UserES = mongoose.model('UserES', UserESSchema)

//     userSchema.post('save', function(doc) {
//       UserES.findOne({ _id : doc._id}, function(err, app){
//         app.index(function(err2, res){
//           console.log("User Schema Saved in Mongoose.");
//         });
//       });  
//     });

//     userSchema.pre('save', function(next){

// 	  try{
// 	  	this.modifiedAt = new Date();
// 	  	this.updatedAt = new Date();
// 	  	next();
// 	  }
// 	  catch(err){
// 	  	next();
// 	  }

	  
// 	});

// 	userSchema.methods = {
// 	  authenticate: function (plainText) {
// 	    console.log(this.encryptPassword(plainText), this.hashed_password );
// 	    return this.encryptPassword(plainText) === this.hashed_password
// 	  },

// 	  makeSalt: function () {
// 	    return Math.round((new Date().valueOf() * Math.random())) + ''
// 	  },


// 	  encryptPassword: function (password) {
// 	    if (!password) return ''
// 	    var encrypred;
// 	    try {
// 	      encrypred = crypto.createHmac('sha1', this.salt).update(password).digest('hex')
// 	      return encrypred
// 	    } catch (err) {
// 	      return ''
// 	    }
// 	  }
// 	}
	
// 	userSchema.methods.addPaymentProfile = function(payment_profile_id, pbody, makeDefault){
// 		var shouldPush = true;
// 		shouldBeDefault = makeDefault || false;

// 		if(this.paymentProfiles == null || this.paymentProfiles == undefined)
// 		{
// 			this.paymentProfiles = [];
			
// 		}

// 		if(this.paymentProfiles.length == 0)
// 			shouldBeDefault = true;

// 		this.paymentProfiles.forEach(function(e){
// 			if(e.uri == payment_profile_id )
// 			{

// 				shouldPush = false;
// 			}else if (shouldBeDefault)
// 				e.default = false;		
// 		});

// 		this.paymentProfiles = _.reject(this.paymentProfiles, function(pp){ return pp.invalid; });

// 		if(shouldPush) {
// 			console.log('PUSHING PAYMENT PROFILE', pbody.type)
// 			this.paymentProfiles.push({ uri : payment_profile_id, 
// 									default : shouldBeDefault, 
// 									uri: payment_profile_id,
// 									type : pbody.type || null,
// 									last4 : pbody.last4 || null,
// 									imageUrl : pbody.imageUrl || null,
// 									cardType : pbody.cardType || null, 
// 									locality : pbody.locality || null, 
// 									stripe_card_id : pbody.stripe_card_id || null, 
// 									expirationDate : pbody.expirationDate || null,
// 									braintree_token : payment_profile_id || null});
// 		}
			

// 		return shouldPush;
// 	}

// 	userSchema.methods.removeInvalidProfiles = function()
// 	{
// 		this.paymentProfiles.forEach(function(e){
// 			console.log(e,payment_profile_id);
// 			if(e.uri == payment_profile_id )
// 			{
				
// 				e.invalid = true;
// 			}
			

// 		});
// 		//console.log(this, 'user before save');
// 		this.save();
// 	}

// 	userSchema.methods.invalidatePaymentProfile = function(payment_profile_id, pbody)
// 	{
// 		this.paymentProfiles.forEach(function(e){
// 			console.log(e,payment_profile_id);
// 			if(e.uri == payment_profile_id || e.stripe_card_id == payment_profile_id)
// 			{
				
// 				e.invalid = true;
// 			}
			

// 		});
		
// 		this.save();
// 	}

// 	userSchema.methods.getDefaultPaymentProfile = function()
// 	{
// 		var returnThis = null;

// 		this.paymentProfiles.forEach(function(e){
			

// 			if(e.default == true && !e.invalid)
// 			{
				
				
// 				returnThis = e.uri;
// 			}

// 		});

// 	  return returnThis;
// 	}

// 	userSchema.methods.makePaymentProfileDefault = function(payment_profile_id){
// 		this.paymentProfiles.forEach(function(e){
// 			console.log(e,payment_profile_id);
// 			if( e.type == 'brainTree' && ( e.uri == "/v1/marketplaces/MP6fv0LncjnJdAhvGhoebCZ2" + '/cards/' + payment_profile_id ) || e.uri == payment_profile_id || ( e.stripe_card_id && e.stripe_card_id == payment_profile_id ))
// 			{
// 				e.default = true;
// 			}
// 			else
// 			{
// 				e.default = false;
// 			}

// 		});
// 		//console.log(this, 'user before save');
// 		this.save();
// 	}

// 	userSchema.methods.addRating = function(rating){
// 		var shouldPush = true;
// 		console.log(rating, "rating in schema func")
// 		if(shouldPush)
// 			this.ratings.push(rating);

// 		//calculate average rating
		
	
// 		//make sure no avg's are nil
// 		if(this.avgCleanlinessRating == undefined || this.avgCleanlinessRating == null){
// 			this.avgCleanlinessRating = rating.cleanliness;
// 		}else{
// 			this.avgCleanlinessRating = ((this.avgCleanlinessRating * this.ratings.length) + rating.cleanliness)/(this.ratings.length + 1).toFixed(2);
// 		}

// 		if(this.avgFriendlinessRating == undefined || this.avgFriendlinessRating == null){
// 			this.avgFriendlinessRating = rating.friendliness;
// 		}else{
// 			this.avgFriendlinessRating = ((this.avgFriendlinessRating * this.ratings.length) + rating.friendliness)/(this.ratings.length + 1).toFixed(2);
// 		}

// 		if(this.avgSetupRating == undefined || this.avgSetupRating == null){
// 			this.avgSetupRating = rating.setup;
// 		}else{
// 			this.avgSetupRating = ((this.avgSetupRating * this.ratings.length) + rating.setup)/(this.ratings.length + 1).toFixed(2);
// 		}

// 		this.avgRating = ((this.avgCleanlinessRating + this.avgSetupRating + this.avgFriendlinessRating)/3).toFixed(2);


	
// 		console.log('pmw avgCleanlinessRating = ', this.avgCleanlinessRating);
	
		
// 	}	

// 	userSchema.methods.addComment = function(comment){
// 		var shouldPush = true;


// 		if(shouldPush)
// 			this.comments.push(comment);
// 	}
// 	userSchema.methods.addCreditCardInfo = function(cardInfo){
// 		var shouldPush = true;

// 		if(shouldPush){
// 			this.creditCardInfo.push(cardInfo);
// 		}
// 	}

// 	//only send agenda if you plan on using it
// 	userSchema.methods.addCredit = function(amount, end_unix, code, discountType, agenda){
// 		console.log(amount, "credit to add");
// 		obj = {};
// 		obj.amount = parseInt(amount);
// 		obj.original_amount = parseInt(amount);
// 		obj.days_valid = parseInt((end_unix - moment().unix()) /( 24 * 60 * 60));
// 		if(discountType.indexOf('exclusionary') > -1){

// 			obj.exclusionary = true;
// 		}
// 		if(discountType == 'earned_referall'){
			
// 			obj.exclusionary = true;
// 		}
// 		obj.code = code;
// 		obj.discount_type = discountType;
// 		obj.code_entered_unix = moment().unix();
// 		obj.end_unix = end_unix;
// 		//obj.end_unix = (obj.days_valid *  24 * 60 * 60) + moment().unix();
// 		// console.log(obj);
// 		this.credit_array.push(obj);
// 		this.credit_array.sort(creditSortFunc);
// 		if(agenda)
// 			scheduleCreditReminder(obj,this._id, agenda);
// 	}


// 	userSchema.methods.useCredit = function(jobAmount, jobId){
// 		creditsNeeded = jobAmount;
// 		existing_array = this.credit_array.sort(creditSortFunc);
// 		new_array = [];
// 		today_unix = moment().unix();
// 		var selectedPromos = [];

// 									//this is an extra fail safe but theoritically is unnecessary
// 		while(creditsNeeded > 0 && existing_array.length > 0){
// 			console.log(creditsNeeded, "*** credits neeeded ****");
// 			//take last in promo
// 			obj = existing_array.pop();
			
// 			console.log(obj, 'first object popped');

// 			if(!hasExpired(obj) && obj.amount > 0)
// 			{
// 				subtractAmount = obj.amount - creditsNeeded;
// 				creditsNeeded -= obj.amount;
				
// 				obj.amount = subtractAmount  >= 0 ? subtractAmount  : 0;
				
// 				if(!obj.used_array)
// 					obj.used_array = [];
				
// 				if(jobId)
// 					obj.used_array.push({job_id : jobId, used_unix : moment().unix()});
				
// 				selectedPromos.push(obj);

// 				if(obj.discount_type == 'gilt')
// 				{
// 					new_array.length = 0;
// 					new_array = [];
// 					new_array.push(obj);
// 					break;
// 				}

// 				if(obj.exclusionary)
// 				{
// 					new_array.length = 0;
// 					new_array = [];
// 					new_array.push(obj);
// 					break;
// 				}
	  		
// 	  		}
	  		
// 			new_array.unshift(obj);
			
// 		}

// 		this.credit_array = existing_array.concat(new_array);

// 		return selectedPromos;
// 	}
// 	userSchema.methods.getUserCredit = function(){
// 		return calcUserCredit(this);
// 	}

// 	userSchema.methods.getBalanceLeftOnCode = function(code){

// 		for(var i = 0; i < this.credit_array.length; i++)
// 		{
// 			codeObj = this.credit_array[i];
// 			if(codeObj.code == code )
// 				return(codeObj.amount);

// 		}
// 		return 0;
// 	}


// 	function scheduleCreditReminder(obj,id, agenda){
// 		secondsInADay = 24 * 60 * 60;
// 		console.log(obj.days_valid, " days valid??");
// 		dayB4ExpireInSeconds = (obj.days_valid - 2) * secondsInADay;
// 		console.log(dayB4ExpireInSeconds, "**** day before expiration ****");

// 		// if its a one or two day promotion they dont need to be alerted to shit. 
// 		if(dayB4ExpireInSeconds >= 0)
// 			agenda.schedule("in " + dayB4ExpireInSeconds + " seconds", "notify_credit_expire", {expiringCode : obj.code, userId : id});
// 	}


// 	function creditSortFunc(objA, objB){
// 		var returnValue = 0;
// 		if(objA.discount_type == 'gilt')
// 			returnValue = 1;
// 		else if(objB.discount_type == 'gilt')
// 			returnValue = -1;
// 		else if(objA.discount_type == 'refund')
// 			returnValue = 1;
// 		else if(objB.discount_type == 'refund')
// 			returnValue = -1;
// 		else if(objA.discount_type == 'referral')
// 			returnValue = 1;
// 		else if(objB.discount_type == 'referral')
// 			returnValue = -1;

// 		else if(objA.end_unix > objB.end_unix)
// 			returnValue = 1;
// 		else if(objB.end_unix > objA.end_unix)
// 			returnValue = -1;
// 		else
// 			returnValue = 0;

// 		return returnValue;
// 	}

// 	function calcUserCredit(_this){
// 	  	var creditTotal = 0;
	  	
// 		var giltPromo = _.find(_this.credit_array, {discount_type : 'gilt'});

// 	  	if(giltPromo != undefined && giltPromo.amount > 0 && !hasExpired(giltPromo))
// 	  	{
	  		
// 	  		creditTotal = giltPromo.amount;

// 	  		return creditTotal;
	  		
// 	  	}

// 	  	for(var idx = 0; idx < _this.credit_array.length; idx++){

// 	  		obj = _this.credit_array[idx];
// 	  		// if(obj.discount_type == 'earned_referall'){
// 	  		// 	obj.exclusionary = true;
// 	  		// }
// 	  		if(!hasExpired(obj))
// 	  		{
// 	  			creditTotal += obj.amount;

// 		  		if(obj.exclusionary && obj.amount > 0)
// 		  		{
// 		  			console.log("(*************here");
// 		  			creditTotal = obj.amount;
// 		  			break;
// 		  		}
// 	  		}
// 	  		// else
// 	  		// 	console.log("EXPIRED!!!!");
	  		
// 	  	}

// 	  	return creditTotal; 		
// 	}

// 	function calcUserRedeemedCredit(_this){
// 		var totalRedeemed = 0;

// 		for(var idx = 0; idx < _this.credit_array.length; idx++){

// 	  		obj = _this.credit_array[idx];
// 	  		if(obj.amount < obj.original_amount)
// 	  		{
// 	  			totalRedeemed += (obj.original_amount - obj.amount);

		  		
// 	  		}
// 	  		// else
// 	  		// 	console.log("EXPIRED!!!!");
	  		
// 	  	}

// 	  	return totalRedeemed;

// 	}

// 	function hasExpired(obj){
// 		today_unix = moment().unix();
// 		//all codes entered before 4/20/2016 
// 		if(obj.code_entered_unix < 1461194431 )
// 		{	
// 			// console.log("entered before today", obj)
// 			// console.log(obj.discount_type.indexOf('referral') == -1 &&  obj.discount_type.indexOf('referall') == -1)
// 			//any non referall codes
// 			if(obj.discount_type.indexOf('referral') == -1 &&  obj.discount_type.indexOf('referall') == -1)
// 				return true
// 		}
// 		//console.log(obj.end_unix < today_unix, " has expired");
// 		return obj.end_unix < today_unix;
// 	}

// 	userSchema
// 	  .virtual('credit')
// 	  .get(function() { 
// 	  	if(!this.credit_array)
// 	  		return 0;

// 	  	return calcUserCredit(this);

// 	  });

// 	userSchema
// 	  .virtual('redeemed_credit')
// 	  .get(function() { 
// 	  	if(!this.credit_array)
// 	  		return 0;

// 	  	return calcUserRedeemedCredit(this);

// 	  });

// 	userSchema
// 	  .virtual('name')
// 	  .get(function() { return this.firstName + " " + this.lastName; });



// 	userSchema.set('toJSON', { getters : true, virtuals: true });

// 	userSchema
// 	  .virtual('password')
// 	  .set(function(password) {
// 	    this._password = password
// 	    this.salt = this.makeSalt()
// 	    this.hashed_password = this.encryptPassword(password)
// 	  })
// 	  .get(function() { return this._password })

// 	var User = mongoose.model('User', userSchema);

// 	User.mongooseRef = mongoose;

// 	User.fieldsToHideFromSF = '-avgRating -avgFriendlinessRating -avgSetupRating -facebookAccessToken';
	
// 	User.customSFFields = 
// 	[
// 		{
// 			localField 	: 'email',
// 			SFField 	: 'Email',
// 			mapFx		: function(email: string){ return (email.indexOf("@") != -1) ? email.replace(" ","") : email+"@facebook.com"; }
// 		}
// 	]

// 	return User;
// };





































// // import mongoose, { Schema, Document } from 'mongoose';

// // export interface IUser extends Document {
// //     name: string;
// //     email: string;
// //     age?: number; // Optional field
// //     createdAt: Date;
// // }

// // const UserSchema = new Schema<IUser>({
// //     name: { type: String, required: true },
// //     email: { type: String, required: true, unique: true },
// //     age: { type: Number, required: false },
// //     createdAt: { type: Date, default: Date.now },
// // });

// // export const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);















// // // import mongoose, { Schema, Document } from 'mongoose';

// // // export interface IUser extends Document {
// // //     email: string;
// // //     password: string;
// // //     // Add other fields as needed
// // // }

// // // const UserSchema = new Schema<IUser>({
// // //     email: { type: String, required: true, unique: true },
// // //     password: { type: String, required: true },
// // //     // Add other fields as needed
// // // });

// // // export const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);