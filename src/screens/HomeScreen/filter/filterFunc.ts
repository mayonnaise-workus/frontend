const sample1 = {
  obj: {id: 3, value: '비대면 회의'},
  num: {id: 2, value: '2 ~ 4인'},
  place: {id: 2, value: '스터디룸'},
};

const sample2 = {
  obj: {id: 2, value: '노트북 작업'},
  num: {id: 2, value: '2 ~ 4인'},
  place: {id: 1, value: '카페'},
};

const sample3 = {
  obj: {id: 4, value: '대면 회의'},
  num: {id: 3, value: '5 ~ 9인'},
  place: {id: 6, value: '도서관'},
};

const sample4 = {
  obj: {id: 4, value: '대면 회의'},
  num: {id: 3, value: '5 ~ 9인'},
  place: {id: 6, value: '도서관'},
};

const sample5 = {
  obj: {id: 3, value: '비대면 회의'},
  num: {id: 3, value: '5 ~ 9인'},
  place: {id: 1, value: '카페'},
};

const sampleData = [sample1, sample2, sample3, sample4, sample5];

interface IFilterObject {
  obj: number[];
  num: number[];
  place: number[];
}

const filterFunc = (filterObject: IFilterObject) => {
  if (filterObject.obj.includes(0)) {
    if (filterObject.place.includes(0)) {
      if (filterObject.num.includes(0)) {
        return sampleData; // 1
      } else {
        return sampleData.filter(singleData =>
          filterObject.num.includes(singleData.num.id),
        ); // 2
      }
    } else {
      if (filterObject.num.includes(0)) {
        return sampleData.filter(singleData =>
          filterObject.place.includes(singleData.place.id),
        ); // 3
      } else {
        return sampleData
          .filter(singleData =>
            filterObject.place.includes(singleData.place.id),
          )
          .filter(singleData => filterObject.num.includes(singleData.num.id)); // 4
      }
    }
  } else {
    if (filterObject.place.includes(0)) {
      if (filterObject.num.includes(0)) {
        return sampleData.filter(singleData =>
          filterObject.obj.includes(singleData.obj.id),
        ); // 5
      } else {
        return sampleData
          .filter(singleData => filterObject.obj.includes(singleData.obj.id))
          .filter(singleData => filterObject.num.includes(singleData.num.id)); // 6
      }
    } else {
      if (filterObject.num.includes(0)) {
        return sampleData
          .filter(singleData => filterObject.obj.includes(singleData.obj.id))
          .filter(singleData =>
            filterObject.place.includes(singleData.place.id),
          ); // 7
      } else {
        return sampleData
          .filter(singleData => filterObject.obj.includes(singleData.obj.id))
          .filter(singleData =>
            filterObject.place.includes(singleData.place.id),
          )
          .filter(singleData => filterObject.num.includes(singleData.num.id)); // 8
      }
    }
  }
};

export default filterFunc;
