import { inject } from '@k-ramel/react'
import { compose } from 'redux'
import { forRoute } from '@k-redux-router/react-k-ramel'

import loader from 'components/loader'
import SpeakerSurvey from './survey'

const mapState = (store, props, { router }) => {
  const eventId = router.getParam('eventId')
  const { name } = store.data.events.get(eventId) || {}
  return {
    name,
    loaded: store.data.events.hasKey(eventId),
    load: () => store.dispatch({ type: '@@ui/ON_LOAD_EVENT', payload: eventId }),
  }
}

export default compose(
  forRoute.absolute('speaker-event-survey'), //
  inject(mapState), //
  loader, //
)(SpeakerSurvey)
