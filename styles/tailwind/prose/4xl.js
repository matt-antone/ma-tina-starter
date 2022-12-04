const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

const fontSize = 36
const marginXs = 32
const marginSm = 30

exports.default = {
  "4xl": {
    css:
      {
        fontSize: rem(fontSize),
        lineHeight: round(40 / fontSize),
        p: {
          marginTop: em(marginXs, fontSize),
          marginBottom: em(marginXs, fontSize),
        },
        '[class~="lead"]': {
          fontSize: em(30, fontSize),
          lineHeight: round(44 / 30),
          marginTop: em(marginXs, 30),
          marginBottom: em(marginXs, 30),
        },
        blockquote: {
          marginTop: em(64, 36),
          marginBottom: em(64, 36),
          paddingLeft: em(40, 36),
        },
        h1: {
          fontSize: em(64, fontSize),
          marginTop: '0',
          marginBottom: em(56, 64),
          lineHeight: round(64 / 64),
        },
        h2: {
          fontSize: em(48, fontSize),
          marginTop: em(72, 48),
          marginBottom: em(40, 48),
          lineHeight: round(52 / 48),
        },
        h3: {
          fontSize: em(36, fontSize),
          marginTop: em(56, 36),
          marginBottom: em(fontSize, 36),
          lineHeight: round(44 / 36),
        },
        h4: {
          marginTop: em(40, fontSize),
          marginBottom: em(16, fontSize),
          lineHeight: round(36 / fontSize),
        },
        img: {
          marginTop: em(48, fontSize),
          marginBottom: em(48, fontSize),
        },
        video: {
          marginTop: em(48, fontSize),
          marginBottom: em(48, fontSize),
        },
        figure: {
          marginTop: em(48, fontSize),
          marginBottom: em(48, fontSize),
        },
        'figure > *': {
          marginTop: '0',
          marginBottom: '0',
        },
        figcaption: {
          fontSize: em(20, fontSize),
          lineHeight: round(marginXs / 20),
          marginTop: em(20, 20),
        },
        code: {
          fontSize: em(20, fontSize),
        },
        'h2 code': {
          fontSize: em(42, 48),
        },
        'h3 code': {
          fontSize: em(marginXs, 36),
        },
        pre: {
          fontSize: em(20, fontSize),
          lineHeight: round(36 / 20),
          marginTop: em(40, 20),
          marginBottom: em(40, 20),
          borderRadius: rem(8),
          paddingTop: em(fontSize, 20),
          paddingRight: em(marginXs, 20),
          paddingBottom: em(fontSize, 20),
          paddingLeft: em(marginXs, 20),
        },
        ol: {
          marginTop: em(marginXs, fontSize),
          marginBottom: em(marginXs, fontSize),
          paddingLeft: em(38, fontSize),
        },
        ul: {
          marginTop: em(marginXs, fontSize),
          marginBottom: em(marginXs, fontSize),
          paddingLeft: em(38, fontSize),
        },
        li: {
          marginTop: em(12, fontSize),
          marginBottom: em(12, fontSize),
        },
        'ol > li': {
          paddingLeft: em(10, fontSize),
        },
        'ul > li': {
          paddingLeft: em(10, fontSize),
        },
        '> ul > li p': {
          marginTop: em(20, fontSize),
          marginBottom: em(20, fontSize),
        },
        '> ul > li > *:first-child': {
          marginTop: em(marginXs, fontSize),
        },
        '> ul > li > *:last-child': {
          marginBottom: em(marginXs, fontSize),
        },
        '> ol > li > *:first-child': {
          marginTop: em(marginXs, fontSize),
        },
        '> ol > li > *:last-child': {
          marginBottom: em(marginXs, fontSize),
        },
        'ul ul, ul ol, ol ul, ol ol': {
          marginTop: em(16, fontSize),
          marginBottom: em(16, fontSize),
        },
        hr: {
          marginTop: em(72, fontSize),
          marginBottom: em(72, fontSize),
        },
        'hr + *': {
          marginTop: '0',
        },
        'h2 + *': {
          marginTop: '0',
        },
        'h3 + *': {
          marginTop: '0',
        },
        'h4 + *': {
          marginTop: '0',
        },
        table: {
          fontSize: em(20, fontSize),
          lineHeight: round(28 / 20),
        },
        'thead th': {
          paddingRight: em(12, 20),
          paddingBottom: em(16, 20),
          paddingLeft: em(12, 20),
        },
        'thead th:first-child': {
          paddingLeft: '0',
        },
        'thead th:last-child': {
          paddingRight: '0',
        },
        'tbody td, tfoot td': {
          paddingTop: em(16, 20),
          paddingRight: em(12, 20),
          paddingBottom: em(16, 20),
          paddingLeft: em(12, 20),
        },
        'tbody td:first-child, tfoot td:first-child': {
          paddingLeft: '0',
        },
        'tbody td:last-child, tfoot td:last-child': {
          paddingRight: '0',
        },
      },

  }
}