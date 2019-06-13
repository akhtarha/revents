import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, onEventOpen, deleteEvent } = this.props;
    return (
      <div>
        <h1>Event List</h1>
        {events.map(events => (
          <EventListItem
            key={events.id}
            event={events}
            onEventOpen={onEventOpen}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
