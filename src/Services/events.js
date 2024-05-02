import axios from "axios";

const apiKey = process.env.REACT_APP_TICKETMASTER_API_KEY;

export const getSpotlight = async () => {
  try {
    const resp = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/attractions?apikey=${apiKey}&locale=en-us&size=5`
    );
    return resp.data._embedded.attractions;
  } catch (error) {
    console.error("Error verifying user: ", error);
  }
};

export const getSportsEvents = async () => {
  try {
    const resp = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&locale=en-us&size=30&page=1&segmentName=Sports`
    );
    return resp.data._embedded.events;
  } catch (error) {
    console.error("Error verifying user: ", error);
  }
};

export const getMusicEvents = async () => {
  try {
    const resp = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&locale=en-us&size=30&page=1&segmentName=Music`
    );
    return resp.data._embedded.events;
  } catch (error) {
    console.error("Error verifying user: ", error);
  }
};

export const getShowsEvents = async () => {
    try {
      const resp = await axios.get(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&locale=en-us&size=30&page=1&segmentId=KZFzniwnSyZfZ7v7na`
      );
      return resp.data._embedded.events;
    } catch (error) {
      console.error("Error verifying user: ", error);
    }
  };