import Head from "next/head";
import Image from "next/image";
import { Box, Heading, Text } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}hello`);
      setPosts(await data.json());
    };
    getPosts();
  }, []);

  console.log(posts);

  return (
    <Box>
      <Head>
        <title>Jokes Library</title>
      </Head>
      <Box>
        <Heading>Jokes Library</Heading>
        <Text>{posts?.joke}</Text>
      </Box>
    </Box>
  );
}
