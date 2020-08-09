class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ["sort"];
    excludedFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);

    console.log("querObj", queryObj);
    // this below line for turning  this to { ratings: { gt: '3' } }  // queryStr  : {"ratings":{"$gt":"3"}}
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt|eq|ne)\b/g, (match) => `$${match}`);
    console.log(JSON.parse(queryStr));

    // console.log("this.query0", this.query);
    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("createdAt");
    }
    return this;
  }
}

module.exports = APIFeatures;
