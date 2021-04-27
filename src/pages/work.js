import React from 'react';
import {graphql} from 'gatsby';
import HeaderImage from '../images/WorkCups.png';
import {Layout,Page,WorkTabs} from '../components';
import {WorkTheme} from '../themes';

export default function Work({data}) {
    const workList = data.workTitles.nodes;
    const allWorks = data.allWorks.nodes;
    const allProductions = data.allStrapiProduction.nodes;
    return (
        <Layout>
        <Page sectionTheme={WorkTheme} title='Work' headerImage={HeaderImage}>
        <WorkTabs tabs={workList} panels={allWorks} productions={allProductions}/>
        </Page>
        </Layout>
    );
}

export const query = graphql`
{
    workTitles: allStrapiWork {
        nodes {
            title
            strapiId
        }
    }
    allWorks: allStrapiWork {
        nodes {
          cover {
            url
          }
          description
          presses {
            publication
            title
            url
          }
          reviews {
            author
            publication
            snippet
            source
          }
          title
          strapiId
        }
      }
      allStrapiProduction {
        nodes {
          title
          collaborators {
            id
            name
            role
          }
          work {
              id
          }
        }
      }
}`
