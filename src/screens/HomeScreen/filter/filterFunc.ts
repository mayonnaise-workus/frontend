interface IFilterObjectProps {
  obj: number[];
  num: number[];
  place: number[];
}

interface IDataObjectProps {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  profile_img: string;
  workspace_type: number;
  workspace_obj: number;
  workspace_capacity: number;
}

const filterFunc = (
  filterObject: IFilterObjectProps,
  dataList: IDataObjectProps[],
) => {
  if (filterObject.obj.includes(0)) {
    if (filterObject.place.includes(0)) {
      if (filterObject.num.includes(0)) {
        return dataList; // 1
      } else {
        return dataList.filter(singleData =>
          filterObject.num.includes(singleData.workspace_capacity),
        ); // 2
      }
    } else {
      if (filterObject.num.includes(0)) {
        return dataList.filter(singleData =>
          filterObject.place.includes(singleData.workspace_type),
        ); // 3
      } else {
        return dataList
          .filter(singleData =>
            filterObject.place.includes(singleData.workspace_type),
          )
          .filter(singleData =>
            filterObject.num.includes(singleData.workspace_capacity),
          ); // 4
      }
    }
  } else {
    if (filterObject.place.includes(0)) {
      if (filterObject.num.includes(0)) {
        return dataList.filter(singleData =>
          filterObject.obj.includes(singleData.workspace_obj),
        ); // 5
      } else {
        return dataList
          .filter(singleData =>
            filterObject.obj.includes(singleData.workspace_obj),
          )
          .filter(singleData =>
            filterObject.num.includes(singleData.workspace_capacity),
          ); // 6
      }
    } else {
      if (filterObject.num.includes(0)) {
        return dataList
          .filter(singleData =>
            filterObject.obj.includes(singleData.workspace_obj),
          )
          .filter(singleData =>
            filterObject.place.includes(singleData.workspace_type),
          ); // 7
      } else {
        return dataList
          .filter(singleData =>
            filterObject.obj.includes(singleData.workspace_obj),
          )
          .filter(singleData =>
            filterObject.place.includes(singleData.workspace_type),
          )
          .filter(singleData =>
            filterObject.num.includes(singleData.workspace_capacity),
          ); // 8
      }
    }
  }
};

export default filterFunc;
