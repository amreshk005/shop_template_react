class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    let queryStr = JSON.stringify(queryObj);
    console.log("querObj", queryObj);
    // this below line for turning  this to { ratings: { gt: '3' } }  // queryStr  : {"ratings":{"$gt":"3"}}
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt|eq|ne)\b/g, (match) => `$${match}`);
    console.log(JSON.parse(queryStr));

    // console.log("this.query0", this.query);
    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }
}

module.exports = APIFeatures;
