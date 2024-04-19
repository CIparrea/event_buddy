import axios from "axios";

const apiKey = process.env.REACT_APP_TICKETMASTER_API_KEY;

export const getSportsEvents = async () => {
  try {
    const resp = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&locale=*&size=30&page=1&segmentName=Sports`
    );
    console.log("This is the sportsEvents:", resp.data._embedded.events);
    return resp.data._embedded.events;
  } catch (error) {
    console.error("Error verifying user: ", error);
  }
};

export const getMusicEvents = async () => {
  try {
    const resp = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&locale=*&size=30&page=1&segmentName=Music`
    );
    console.log("This is the musicEvents:", resp.data._embedded.events);
    return resp.data._embedded.events;
  } catch (error) {
    console.error("Error verifying user: ", error);
  }
};




export const getShowsEvents = async () => {
    try {
      const resp = await axios.get(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&locale=*&size=30&page=1&segmentId=KZFzniwnSyZfZ7v7na`
      );
      console.log("This is the showEvents:", resp.data._embedded.events);
      return resp.data._embedded.events;
    } catch (error) {
      console.error("Error verifying user: ", error);
    }
  };