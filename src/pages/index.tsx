
import React from 'react';
import { GraphQLClient, gql } from "graphql-request";

import Presentation from '../components/Presentation';

import Layout from '../components/Layout';
import About from '../components/About';
import Projects from '../components/Projects';
import Form from '../components/FormSection';
import Footer from '../components/Footer';
import { GetStaticProps } from 'next';

interface HomePageProps {
  projects: {
    id: string,
    title: string,
    description: string,
    image_url: string,
    url: string,
  }[]
}

export default function Page ({ projects }: HomePageProps) {
  return (
    <Layout titlePrefix="Home">
      <Presentation />
      {/* {/* <About /> */}
      <Projects projects={projects}/>
      <Form />
      <Footer />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const endpoint = process.env.GRAPHCMS_ENDPOINT;
  
  const query = gql`
    {
      projects {
        title,
        description,
        url,
        image {
          handle
        }
      }
    }
  `;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      ref: "master",
    },
  })

  const { projects } = await graphQLClient.request(query)

  return {
    props: {
      projects: projects.map(project => ({
        ...project,
        image_url: `https://media.graphcms.com/${project.image.handle}`
      })),
    },
    revalidate: 60 * 60 * 24 * 10 // 10 days
  }
}
