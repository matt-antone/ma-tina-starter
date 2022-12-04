import site from "../templates/site"
import locations from "../templates/locations"
import contactInfo from "../templates/contact-info"

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