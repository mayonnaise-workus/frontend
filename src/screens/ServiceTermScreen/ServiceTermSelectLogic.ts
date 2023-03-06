import {obligationsDetails, optionsDetails} from '../../data';

const serviceTermSelectLogic = (property: string, number: number) => {
  if (property === 'obligation') {
    const newArray = obligationsDetails.filter(
      details => details.id === number,
    );
    return newArray[0].obligation;
  } else {
    const newArray = optionsDetails.filter(details => details.id === number);
    return newArray[0].option;
  }
};

export default serviceTermSelectLogic;
