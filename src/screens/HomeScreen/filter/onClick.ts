import {purpose, capacity, workspace} from '../../../data';

const onClick = (
  category: string,
  value: string,
  filterObject: {
    obj: number[];
    num: number[];
    place: number[];
  },
  setFilterObject: React.Dispatch<
    React.SetStateAction<{
      obj: number[];
      num: number[];
      place: number[];
    }>
  >,
) => {
  switch (category) {
    case 'obj':
      const targetObjId = purpose.find(obj => obj.title === value)!.id;
      if (filterObject.obj.some(obj => obj === targetObjId)) {
        if (targetObjId === 0) {
          return;
        } else {
          setFilterObject(prev => {
            const objList = prev.obj;
            objList.splice(objList.indexOf(targetObjId), 1);
            if (objList.length) {
              const newObj = {...prev, obj: objList};
              return newObj;
            } else {
              const newObj = {...prev, obj: [0]};
              return newObj;
            }
          });
        }
      } else {
        setFilterObject(prev => {
          let objList = prev.obj;
          if (objList.includes(0)) {
            objList = [];
          }
          if (targetObjId === 0) {
            const newObj = {...prev, obj: [0]};
            return newObj;
          } else {
            objList = objList.concat([targetObjId]);
            const newObj = {...prev, obj: objList};
            return newObj;
          }
        });
      }
      break;
    case 'num':
      const targetNumId = capacity.find(num => num.title === value)!.id;
      if (filterObject.num.some(num => num === targetNumId)) {
        if (targetNumId === 0) {
          return;
        } else {
          setFilterObject(prev => {
            const numList = prev.num;
            numList.splice(numList.indexOf(targetNumId), 1);
            if (numList.length) {
              const newObj = {...prev, num: numList};
              return newObj;
            } else {
              const newObj = {...prev, num: [0]};
              return newObj;
            }
          });
        }
      } else {
        setFilterObject(prev => {
          let numList = prev.num;
          if (numList.includes(0)) {
            numList = [];
          }
          if (targetNumId === 0) {
            const newObj = {...prev, num: [0]};
            return newObj;
          } else {
            numList = numList.concat([targetNumId]);
            const newObj = {...prev, num: numList};
            return newObj;
          }
        });
      }

      break;
    case 'place':
      const targetPlaceId = workspace.find(place => place.title === value)!.id;
      if (filterObject.place.some(place => place === targetPlaceId)) {
        if (targetPlaceId === 0) {
          return;
        } else {
          setFilterObject(prev => {
            const placeList = prev.place;
            placeList.splice(placeList.indexOf(targetPlaceId), 1);
            if (placeList.length) {
              const newObj = {...prev, place: placeList};
              return newObj;
            } else {
              const newObj = {...prev, place: [0]};
              return newObj;
            }
          });
        }
      } else {
        setFilterObject(prev => {
          let placeList = prev.place;
          if (placeList.includes(0)) {
            placeList = [];
          }
          if (targetPlaceId === 0) {
            const newObj = {...prev, place: [0]};
            return newObj;
          } else {
            placeList = placeList.concat([targetPlaceId]);
            const newObj = {...prev, place: placeList};
            return newObj;
          }
        });
      }
      break;
    default:
      break;
  }
};

export default onClick;
