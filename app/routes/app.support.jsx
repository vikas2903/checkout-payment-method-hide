import { Page, Layout, CalloutCard, LegacyCard, Grid, Icon, Box, VideoThumbnail,MediaCard } from "@shopify/polaris";
import { ArrowRightIcon } from '@shopify/polaris-icons';

import { TitleBar } from "@shopify/app-bridge-react";

export default function support() {
  return (
    <>
      <Page >
        <TitleBar title="Support" />
        <Layout>
          <Layout.Section > 
            <CalloutCard
              padd
              title="Free App Steup"
              illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
              primaryAction={{
                content: "Free Steup Request",
                url: "/app/supportform",
              }}
            >
              <p>
                  let our do the app setup for you. We will make sure app is setup well and looks part of the store in terms of look and feel. 
              </p>
            </CalloutCard>
          </Layout.Section>

          <Layout.Section>
           
              <Grid>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                  <LegacyCard title="Blocks" sectioned>
                    <p>Step Instruction given at each blocks popup</p>
                      <Box style={{ transform: 'translateY(-50%)', right:"10px", position:'absolute', top: '50%' }} >  <Icon source={ArrowRightIcon} tone="base" /> </Box>
                
                  </LegacyCard>
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                  <LegacyCard title="Orders" sectioned>
                    <p>View a summary of your online store’s orders.</p>
                   <Box style={{ transform: 'translateY(-50%)', right:"10px", position:'absolute', top: '50%' }} >  <Icon source={ArrowRightIcon} tone="base" /> </Box>
                  </LegacyCard>
                </Grid.Cell>
              </Grid>
         
          </Layout.Section>

          <Layout.Section>
             <MediaCard
                  title="Turn your side-project into a business"
                  primaryAction={{
                    content: 'Learn more',
                    onAction: () => {},
                  }}
                  description={`In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business.`}
                  popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
                >
                  <VideoThumbnail
                    videoLength={80}
                    thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                    onClick={() => console.log('clicked')}
                  />
                </MediaCard>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
}
