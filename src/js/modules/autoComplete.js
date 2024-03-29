import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from "./../helpers/countryList.js";

function autoCompleteFunc() {
  const autoCompleteJS = new autoComplete({
    selector: "#autoCompleteCountry",
    placeHolder: "e.g Bali, Indonesia",
    data: {
      src: countryList,
    },
    resultItem: {
      highlight: true,
      caches: true,
    },
    events: {
      input: {
        selection: (event) => {
          const selection = event.detail.selection.value;
          autoCompleteJS.input.value = selection;
        },
      },
    },
    resultsList: {
      maxResults: 5,
    },
    searchEngine: "strict",
  });
}

export default autoCompleteFunc;
