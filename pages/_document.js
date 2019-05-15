import NextDocument, {Head, Main, NextScript} from 'next/document'

class Document extends NextDocument {
    render() {
        return (
            <html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default Document
