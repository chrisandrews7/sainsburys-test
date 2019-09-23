import Document, { Html, Head, Main, NextScript } from 'next/document'
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';
import { Normalize } from 'styled-normalize';
import colors from '../theme/colors';

const PageStyle = createGlobalStyle`
  html {
    min-height: 100%;
  }
  body {
    width: 100%;
    min-height: 100%;
    background: ${colors.get('lightGrey')}
    font-family: sans-serif;
  }
`;

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
      <Head>
        <PageStyle />
        <Normalize />
        {this.props.styleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}

export default CustomDocument;
