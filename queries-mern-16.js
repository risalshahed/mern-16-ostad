// 1 Insert Many
db["database_name"].insertMany([
  {
    name: "Rafi",
    age: 22,
    department: "CSE",
    cgpa: 3.75,
    city: "Dhaka"
  },
  {
    name: "Sakib",
    age: 24,
    department: "EEE",
    cgpa: 3.45,
    city: "Chittagong"
  },
  {
    name: "Nadia",
    age: 21,
    department: "CSE",
    cgpa: 3.90,
    city: "Dhaka"
  },
  {
    name: "Mitu",
    age: 23,
    department: "BBA",
    cgpa: 3.60,
    city: "Dhaka"
  }
])

// 2 Find All
db["database_name"].find()

// 3 Greater than
db.database_name.find({
  cgpa: { $gt: 3.5 }
})

// 4 Greater than or equal
db.database_name.find({
  age: { $gte: 23 }
})

// 5 (Implicit) AND / BETWEEN
db.database_name.find({
  cgpa: {
    $gte: 3.5,
    $lte: 3.8
  }
})

// 6 Another (Implicit) AND
db.database_name.find({
  department: "CSE",
  city: "Dhaka"
})

// 6.1 Explicit AND
db.database_name.find({
  $and: [
    { department: "CSE" },
    { city: "Dhaka" }
  ]
})

// 7 OR
db.database_name.find({
  $or: [
    { department: "CSE" },
    { department: "EEE" }
  ]
})

// 8 Projection
db.database_name.find(
  {},                  // FILTER → সব documents
  {
    name: 1,           // PROJECTION → name দেখাও
    cgpa: 1            // PROJECTION → cgpa দেখাও
  }
)

// 8.1 Another way of Projection Syntax
db.database_name.find({}).projection({
  name: 1,
  cgpa: 1
})

// 9 Sort (Descending Order)
db.database_name.find().sort({
  cgpa: -1
})

// 9.1 Sort (Ascending Order)
db.database_name.find().sort({
  cgpa: 1
})

// 10 Top 2 students (Sort & Limit)
db.database_name.find().sort({
  cgpa: -1
}).limit(2)

// 11 Count
db.database_name.countDocuments()

// UPDATE
// 12 একজন student-এর CGPA update
db.database_name.updateOne(
  { name: "Rafi" },
  {
    $set: {
      cgpa: 3.85
    }
  }
)

// 13 Dhaka-এর সব student-এর "country" property add
db.database_name.updateMany(
  { city: "Dhaka" },
  {
    $set: {
      country: "Bangladesh"
    }
  }
)

// 14 delete one
db.database_name.deleteOne({
  name: "Mitu"
})

// 15 Delete Many
db.database_name.deleteMany({
  department: "CSE"
})

// 16 (group) Department অনুযায়ী student count
db.database_name.aggregate([
  {
    $group: {
      _id: "$department",
      totalStudents: {
        $sum: 1
      }
    }
  }
])

// 17 Department অনুযায়ী average CGPA
db.database_name.aggregate([
  {
    $group: {
      _id: "$department",
      averageCgpa: {
        $avg: "$cgpa"
      }
    }
  }
])

// 18 Highest CGPA
db.database_name.aggregate([
  {
    $group: {
      _id: null,
      highestCgpa: {
        $max: "$cgpa"
      }
    }
  }
])

// 19 Lowest CGPA
db.database_name.aggregate([
  {
    $group: {
      _id: null,
      lowestCgpa: {
        $min: "$cgpa"
      }
    }
  }
])

// 20 Match + Group -> Dhaka-এর students নিয়ে department-wise count
db.database_name.aggregate([
  {
    $match: {
      city: "Dhaka"
    }
  },
  {
    $group: {
      _id: "$department",
      totalStudents: {
        $sum: 1
      }
    }
  }
])