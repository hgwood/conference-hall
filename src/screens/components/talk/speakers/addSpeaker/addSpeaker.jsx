/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import AddUserModal from 'screens/components/addUserModal'

import './addSpeaker.css'

const AddSpeaker = ({ talkId, talkName, onSelectUser }) => (
  <AddUserModal
    title="Add a co-speaker"
    renderTrigger={({ show }) => (
      <a onClick={show} role="button" className="add-speaker-button">
        <span className="add-speaker-button-icon">
          <i className="fa fa-user fa-lg" />
        </span>
        <span className="add-speaker-button-label">Add a co-speaker</span>
      </a>
    )}
    resultsMessage="Add a co-speaker to your talk"
    onSelectUser={onSelectUser}
    description={
      <>
        <p>
          Search and add a co-speaker to your talk, he/she will be also able to update it and submit
          it to any event.
        </p>
        <p>
          For security and privacy reasons, you can search a speaker only by his/her registered
          email address. Your co-speaker must already have a Conference Hall account.
        </p>
      </>
    }
    inviteEntity="talk"
    inviteEntityId={talkId}
    inviteEntityTitle={talkName}
  />
)

AddSpeaker.propTypes = {
  talkId: PropTypes.string.isRequired,
  talkName: PropTypes.string.isRequired,
  onSelectUser: PropTypes.func.isRequired,
}

export default AddSpeaker
