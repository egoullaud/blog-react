import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";

const graphcms = new GraphQLClient(
  "https://api-ca-central-1.hygraph.com/v2/cl97i2lj00k9201taajug5h74/master"
);

const query = gql`
  {
    posts {
      id
      slug
      title
      author {
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      date
    }
  }
`;
//get api information
export async function getStaticProps() {
  const { posts } = await graphcms.request(query);
  return {
    props: {
      posts,
    },
    //refresh page every 30secs
    revalidate: 30,
  };
}

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog template</title>
        <meta name="description" content="Blog template " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            key={post.id}
            datePublished={post.date}
            slug={post.slug}
          />
        ))}
      </main>
    </div>
  );
}
