import site from "../templates/site"
import locations from "../templates/locations"
import contactInfo from "../templates/locations"

export default {
  name: 'settings',
  label: 'Settings',
  path: 'content/settings',
  format: 'json',
  templates: [
    site,
    contactInfo,
    locations,
  ],
}