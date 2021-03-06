import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'

import { List, ListItem } from 'components/list'
import Badge from 'components/badge'
import IconLabel from 'components/iconLabel'
import NoEvents from 'screens/components/event/noEvents'
import Status from 'screens/components/talk/status'
import EventDates from 'screens/components/eventDates'

import styles from './eventsSelection.module.css'

const TalksSelection = ({ talkId, events, onSelect }) => (
  <List
    array={events}
    noResult={<NoEvents />}
    renderRow={({ id, name, type, address, conferenceDates }) => (
      <ListItem
        key={id}
        title={
          <div className={styles.title}>
            <span>{name}</span>
            <Badge
              pill
              outline
              success={type === 'meetup'}
              info={type === 'conference'}
              className={styles.type}
            >
              {type}
            </Badge>
          </div>
        }
        subtitle={
          <>
            {type === 'conference' && (
              <EventDates
                dates={conferenceDates}
                className={styles.dates}
                timezone={get(address, 'timezone.id')}
              />
            )}
            <IconLabel icon="fa fa-map-marker" label={address && address.formattedAddress} />
          </>
        }
        info={<Status eventId={id} talkId={talkId} />}
        onSelect={() => onSelect(id)}
      />
    )}
  />
)

TalksSelection.propTypes = {
  talkId: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.object),
}

TalksSelection.defaultProps = {
  events: [],
}

export default TalksSelection
