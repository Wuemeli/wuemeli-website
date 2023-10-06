import moment from 'moment-timezone'

async function getTimezoneStatus() {
  const zurichTime = moment().tz('Europe/Zurich')
  const zurichHour = zurichTime.hour()

  if (zurichHour >= 22 || zurichHour < 6) {
    return 'Sleeping 😴'
  } else {
    return 'Awake 🌞'
  }
}

async function getTime() {
  const zurichTime = moment().tz('Europe/Zurich')
  return zurichTime.format('HH:mm')
}

export default defineEventHandler((event) => async () => {
  if (event.httpMethod === 'GET') {
    const time = await getTime();
    const status = await getTimezoneStatus();
    return {
      statusCode: 200,
      body: JSON.stringify({
        time: time,
        status: status
      })
    }
  }
})
