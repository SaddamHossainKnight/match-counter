// Define the initial state
const initialState = {
  value: 0,
};

// Define the reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + Number(action.payload),
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value - Number(action.payload),
      };
    default:
      return state;
  }
}

// Create a Redux store with the reducer
const store = Redux.createStore(reducer);

// Get a reference to the DOM element where the value will be displayed
const displayElement = document.getElementById("display");

// Get a reference to the input element
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

incrementEl.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const value = event.target.value;
    store.dispatch({ type: "INCREMENT", payload: value });
    event.target.value = ""; // Clear the input field
  }
});

decrementEl.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const value = event.target.value;
    store.dispatch({ type: "DECREMENT", payload: value });
    event.target.value = ""; // Clear the input field
  }
});

store.subscribe(
  (reducer = () => {
    const state = store.getState();
    if (state.value >= 0) {
      displayElement.textContent = state.value;
    } else {
      displayElement.textContent = "Invalid ";
    }
  })
);
reducer();

// reset
function resetData(){  
  displayElement.textContent = "0";  
}  

const addMatchBtn = document.getElementById("addMatch");
const matchContainer = document.getElementById("matchContainer");

addMatchBtn.addEventListener("click", function addNewMatch() {
  const newMatch = matchContainer.firstElementChild.cloneNode(true);

  const matchNumber = matchContainer.childElementCount + 1;
  newMatch.querySelector(".lws-matchName").textContent = `Match ${matchNumber}`;

  newMatch.querySelector("#increment").value = "";
  newMatch.querySelector("#decrement").value = "";

  matchContainer.appendChild(newMatch);
}
);



