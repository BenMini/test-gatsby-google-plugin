export default ({ data: { post } }) => (
  <>
    <h1>{post.document.name}</h1>
    <p>{post.document.createdTime}</p>
    <div dangerouslySetInnerHTML={{ __html: post.childMarkdownRemark.html }} />
  </>
)

export const query = graphql`
  query($path: String) {
    post: googleDocs(document: { path: { eq: $path } }) {
      document {
        name
        createdTime
      }
      childMarkdownRemark {
        html
      }
    }
  }
`
