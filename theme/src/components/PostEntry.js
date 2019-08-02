/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PostEntryTitle from "./PostEntryTitle"
import PostEntryMedia from "./PostEntryMedia"
import PostEntryContent from "./PostEntryContent"
import PostEntryMeta from "./PostEntryMeta"
import PostEntryInfo from "./PostEntryInfo"

const PostEntry = ({ post, location, postsPrefix }) => {
  return (
    <article>
      <PostEntryMedia
        location={location}
        post={post}
        postsPrefix={postsPrefix}
      />
      <div className="content">
        <PostEntryTitle
          location={location}
          post={post}
          postsPrefix={postsPrefix}
        />
        <PostEntryInfo className="entry-info" post={post} />
        <PostEntryContent location={location} post={post} />
        <div className="entry-footer">
          <PostEntryMeta post={post} />
          {location !== "single" && (
            <Link
              sx={{
                variant: `buttons.secondary`,
                mt: 2,
                py: 3,
                float: [`none`, `none`, `right`],
                mt: [0, 0, `-50px`],
              }}
              to={`${postsPrefix}/${post.uri}`}
              aria-label="Read More from this post"
            >
              Read More
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

export default PostEntry
