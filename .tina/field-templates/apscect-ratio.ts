import type { TinaField } from "tinacms"

const options = [
  { label: "1", value: "1", },
  { label: "2", value: "2", },
  { label: "3", value: "3", },
  { label: "4", value: "4", },
  { label: "5", value: "5", },
  { label: "6", value: "6", },
  { label: "7", value: "7", },
  { label: "8", value: "8", },
  { label: "9", value: "9", },
  { label: "10", value: "10", },
  { label: "11", value: "11", },
  { label: "12", value: "12", },
  { label: "13", value: "13", },
  { label: "14", value: "14", },
  { label: "15", value: "15", },
  { label: "16", value: "16", },
]

const arw: TinaField = {
  label: "Aspect Ratio Width",
  name: "arWidth",
  type: "string",
  ui: {
    defaultValue: "16",
  },
  options
}

const arh: TinaField = {
  label: "Aspect Ratio Height",
  name: "arHeight",
  type: "string",
  ui: {
    defaultValue: "9",
  },
  options
}

export default {
  width: arw, 
  height: arh
}