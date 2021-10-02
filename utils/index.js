export const sortDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}
