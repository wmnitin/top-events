export const getDateTime = (datestring) => {
  const dateStr = new Date(datestring).toDateString();
  const fullDateTime = new Date(datestring).toLocaleString();
  const today = new Date().toDateString();
  const timeIs = fullDateTime.split(", ")[1];
  return {
    date: datestring ? dateStr : "",
    time: datestring ? timeIs : "",
    today: today === dateStr,
  };
};

export const getSportData = (type) => {
  switch (type) {
    case "politics":
      return {
        name: "Politics",
        color: "#d63384",
      };
    case "football_match":
      return {
        name: "Football",
        color: "#0dcaf0",
      };
    case "ice_hockey_match":
      return {
        name: "Ice Hockey",
        color: "#055160",
      };
    case "basketball_match":
      return {
        name: "Basketball",
        color: "#41464b",
      };
    case "cricket_match":
      return {
        name: "Cricket",
        color: "#084298",
      };
    case "generic":
      return {
        name: type,
        color: "#07bc0c",
      };
    default:
      return {
        name: type,
        color: "#bb86fc",
      };
  }
};

export const getStatus = (status) => {
  if (status === "live") {
    return "🔴 " + status;
  }
  return "🟡 " + status;
};
