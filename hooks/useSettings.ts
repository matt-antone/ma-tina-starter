import site from "@content/settings/site.json" assert { type: 'json' }
import contactInfo from "@content/settings/contact-info.json" assert { type: 'json' }
import locations from "@content/settings/locations.json" assert { type: 'json' }

const useSettings = () => {
  return {
    site,
    contactInfo,
    locations,
  }
}

export default useSettings