export default function handler(req, res) {
  const now = new Date();
  const options = { timeZone: 'America/Chicago', 
    hour: 'numeric', minute: '2-digit', 
    hour12: true, weekday: 'long', 
    year: 'numeric', month: 'long', day: 'numeric' };
  res.status(200).json({
    timezone: 'America/Chicago',
    datetime: now.toLocaleString('en-US', { timeZone: 'America/Chicago' }),
    date: now.toLocaleDateString('en-US', { timeZone: 'America/Chicago', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    time: now.toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: 'numeric', minute: '2-digit', hour12: true })
  });
}
