
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
      <About />
      <Projects projects={projects}/>
      <Form />
      <Footer />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const endpoint = "https://api-us-west-2.graphcms.com/v2/ckjfsnc6q5rnk01wacuy69rvs/master";
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
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MDk1OTgwNjYsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NramZzbmM2cTVybmswMXdhY3V5NjlydnMvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMDdhYTRiNjYtYWJkZi00NjM1LWJlZDAtOTI4ZjNjOGUzZDVhIiwianRpIjoiY2tqZnQ0b21yNXd3NzAxeHA5ZGw3ZHkwOSJ9.Uy0Fd5SettS5hmz0JP0M1dptKFBOorZpydWlbh66hU-TrOw5KFypWHUdOPaScbaw8PzB3uSXdGF48OYTw_Gmt-qslwIn5V0udsguedHyUycWnrPy6AVvKNLtaOucqCxgZZEgtXaIRe-htCzM2VVOoaNA1sE5GQUfJKY-TaIb17VOBI4gRzMT7nbgVMZ9dkIY1kGm52khpIvaBxheLWDueV-NmdAQssd4AKKNwbOPZAgxP21-rEi2cIirnNT5Ye5hxF1AhLhascIPIQ6ps-_VGOzi1dCPY0-JI27Gj7TuwoUYomFrJy3BX09iZqandFOgDzneKmVyvv3uTc6qjlhz8h_JEIty7dZd5mSh9hwoaGnCRC3nuAN2_Qv13iTpRH-AdLg93-6p2lmLGp5hzVgW2WgUZ0jD_T1KuaxV7k5Ayf9D9k55zKLR4CSWlKdLEHuWSRmNfh2rFMNEyqA8c5fcHhE4mWKD2p5CqCWVR7dlIILDyJzfxy72s_-jK_PCGhXt80sH7bGmxVqqSx-gPdtimXDdaXQNEeVelRZfWe06l-tBmKTRHX_mX6RDA_JPBLWAtNVZJWjPFMtfzHQ4zH4cBzMOFtecw0ylipssL_RzMotViJPans2WQA0JiHHKTvtuOFqiHVqwAf-zIv6_kEsKYL95F1TKS03reD59XqDJz7s',
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
    revalidate: 300
  }
}
