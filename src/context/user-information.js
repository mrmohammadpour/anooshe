import * as React from 'react';

var DataStateContext = React.createContext();
var DataDispatchContext = React.createContext();

function DataReducer(state, action) {
  switch (action.type) {
    case "SET_NATIONAL_CODE":
      return {...state, NationalCode: action.payload};
    case "SET_MOBILE_NUMBER":
      return {...state, MobileNumber: action.payload};
    case "SET_NAME":
      return {...state, Name: action.payload};
    case "SET_LAST_NAME":
      return {...state, LastName: action.payload};
    case "SET_DATE_BIRTH":
      return {...state, DateBirth: action.payload};
    case "SET_FATHER_NAME":
      return {...state, FatherName: action.payload};
    case "SET_POSTAL_CODE":
      return {...state, PostalCode: action.payload};
    case "SET_LANDLINE_PHONE_NUMBER":
      return {...state, LandlinePhoneNumber: action.payload};
    case "SET_ADDRESS":
      return {...state, Address: action.payload};
    // case "SET_LIKE_TWEET":
    //   return {...state, likeTweet: state.counter + 5};
    // case "DEC":
    //   return {...state, counter: state.counter - 1};
    // case "MUL":
    //   return {...state, counter: state.counter * 2};
    // case "plusNum":
    //   return {...state, TweetText: state.TweetText + parseInt(action.payload)};
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function DataProvider({children}) {
  var [state, dispatch] = React.useReducer(DataReducer, {
    NationalCode: "",
    MobileNumber: "",
    Name: "",
    LastName: "",
    DateBirth: "",
    FatherName: "",
    PostalCode: "",
    LandlinePhoneNumber: "",
    Address: "",
    // LikeTweet: "2",
    FirstState: "66",
  });
  return (
    <DataStateContext.Provider value={state}>
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataStateContext.Provider>
  );
}

function useDataState() {
  var context = React.useContext(DataStateContext);
  if (context === undefined) {
    throw new Error("useDataState must be used within a DataProvider");
  }
  return context;
}

function useDataDispatch() {
  var context = React.useContext(DataDispatchContext);
  if (context === undefined) {
    throw new Error("useDataDispatch must be used within a DataProvider");
  }
  return context;
}

export {DataProvider, useDataState, useDataDispatch, SetNationalCode,SetMobileNumber,SetName,SetLastName,SetDateBirth,SetFatherName,SetPostalCode,SetLandlinePhoneNumber,SetAddress /*SetlikeTweet*/};

// ###########################################################
function SetNationalCode(dispatch , NationalCode) {
  dispatch({
    type: "SET_NATIONAL_CODE",
    payload: NationalCode,
    
  });
}
function SetMobileNumber(dispatch , MobileNumber) {
  dispatch({
    type: "SET_MOBILE_NUMBER",
    payload: MobileNumber,
    
  });
}
function SetName(dispatch , Name) {
  dispatch({
    type: "SET_NAME",
    payload: Name,
    
  });
}
function SetLastName(dispatch , LastName) {
  dispatch({
    type
    : "SET_LAST_NAME",
    payload: LastName,
    
  });
}
function SetDateBirth(dispatch , DateBirth) {
  dispatch({
    type: "SET_DATE_BIRTH",
    payload: DateBirth,
    
  });
}
function SetFatherName(dispatch , FatherName) {
  dispatch({
    type: "SET_FATHER_NAME",
    payload: FatherName,
    
  });
}
function SetPostalCode(dispatch , PostalCode) {
  dispatch({
    type: "SET_POSTAL_CODE",
    payload: PostalCode,
    
  });
}
function SetLandlinePhoneNumber(dispatch , LandlinePhoneNumber) {
  dispatch({
    type: "SET_LANDLINE_PHONE_NUMBER",
    payload: LandlinePhoneNumber,
    
  });
}
function SetAddress(dispatch , Address) {
  dispatch({
    type: "SET_ADDRESS",
    payload: Address,
    
  });
}




// function SetlikeTweet(dispatch , likeTweet) {
//   dispatch({
//     type: "SET_LIKE_TWEET",
//   });
// }

// function minusCounter(dispatch) {
//   dispatch({
//     type: "DEC",
//   });
// }

// function multiple2(dispatch) {
//   dispatch({
//     type: "MUL",
//   });
// }

// function plusNumber(dispatch, number) {
//   dispatch({
//     type: "plusNum",
//     payload: number
//   });
// }
