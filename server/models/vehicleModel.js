
const mongoose = require('mongoose');
const slugify = require('slugify');
// const User = require('./userModel');
// const validator = require('validator');

const vehicleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A car must have a name'],
      unique: true,
      trim: true
     
      // validate: [validator.isAlpha, 'Tour name must only contain characters']
    },
    slug: String,
    year: {
      type: Number,
      required: [true, 'A car must have a year']
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
      set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
    },
    price: {
      type: Number,
      required: [true, 'A car must have a price']
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'A car must have a description']
    },
    image: {
      type: String,
      required: [true, 'A car must have a cover image']
    },
   
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
 
    secretVehicle: {
      type: Boolean,
      default: false
    },
   
    guides: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// tourSchema.index({ price: 1 });
vehicleSchema.index({ price: 1, ratingsAverage: -1 });
vehicleSchema.index({ slug: 1 });



// DOCUMENT MIDDLEWARE: runs before .save() and .create()
vehicleSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// tourSchema.pre('save', async function(next) {
//   const guidesPromises = this.guides.map(async id => await User.findById(id));
//   this.guides = await Promise.all(guidesPromises);
//   next();
// });

// tourSchema.pre('save', function(next) {
//   console.log('Will save document...');
//   next();
// });

// tourSchema.post('save', function(doc, next) {
//   console.log(doc);
//   next();
// });

// QUERY MIDDLEWARE
// tourSchema.pre('find', function(next) {
vehicleSchema.pre(/^find/, function(next) {
  this.find({ secretVehicle: { $ne: true } });

  this.start = Date.now();
  next();
});

vehicleSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'guides',
    select: '-__v -passwordChangedAt'
  });

  next();
});

// tourSchema.post(/^find/, function(docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);
//   next();
// });

// AGGREGATION MIDDLEWARE
// tourSchema.pre('aggregate', function(next) {
//   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

//   console.log(this.pipeline());
//   next();
// });

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
