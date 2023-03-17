import React, { useState } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { useApolloData } from './use-data.hook';
import {
  UIMainNav,
  UIMainNavTitle,
  UIRoot,
  UIAccordion,
  UIAccordionSummary,
  UIAccordionDetails,
  UITypography,
  UIDivider,
  UISidePanel,
  UIInput,
  UIButton,
  UISidePanelFooter,
  UIButtonContainer,
  UIDateTimePicker,
  UIButtonIcon,
  UIMainNavLink,
} from '@apollo/apollo-ui-reactjs';

import { Farm, MOCK_FARM_DATA } from './mocks/farms';

type FarmExpando = Farm & { expanded?: boolean };

export function Sandbox({ title }: { title: string }) {
  const [farms, setFarms] = useApolloData('randomeLegalId');
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [openFirst, setOpenFirst] = useState(false);

  // const show = true;
  const logo = `https://apollo-ui.my-apollo.cloud/skov-simple-logo.b74b1383.svg`;
  const displayAsCard = false;

  // let expanded = false;

  const setExpanded = (farm: FarmExpando, expanded?: boolean) => {
    const farmIndex = farms.findIndex((f: FarmExpando) => f.id === farm.id);
    farms[farmIndex].expanded = !expanded;
    setFarms([...farms]);
  };

  return (
    <UIRoot theme="big-dutchman" layout="default">
      <UIMainNav>
        <UIMainNavTitle title="Apollo" subTitle="Production Planning" />
        <UIMainNavLink
          icon="plus"
          onClick={() => setShowSidePanel(true)}
        />
      </UIMainNav>

      <UISidePanel
        align="right"
        title="Add BE"
        onHide={() => setShowSidePanel(false)}
        show={showSidePanel}
      >
        <form>
          <UIInput label="Farm" />
          <UIInput label="House" />
          <UIInput label="Breed" />
          <UIDateTimePicker
            open={openFirst}
            locale="en-GB"
            date={true}
            timeViews={['hours', 'minutes', 'seconds']}
            timeLabel="Time"
            onClickOutside={() => setOpenFirst(false)}
            onClose={() => setOpenFirst(false)}
            onOpen={() => setOpenFirst(true)}
            value={new Date().valueOf()}
            displayValue={new Date().toLocaleString()}
            label="Placement Date"
          />
        </form>

        <UISidePanelFooter>
          <UIButtonContainer align="right">
            <UIButton onClick={() => setShowSidePanel(false)}>Cancel</UIButton>
            <UIButton theme="confirm" onClick={() => setShowSidePanel(false)}>
              Save
            </UIButton>
          </UIButtonContainer>
        </UISidePanelFooter>
      </UISidePanel>

      {MOCK_FARM_DATA.map((farm: FarmExpando) => (
        <UIAccordion
          key={farm.id}
          displayAsCard={displayAsCard}
          expanded={farm.expanded}
        >
          <UIAccordionSummary
            onClick={() => setExpanded(farm, farm.expanded)}
            title={{ text: `${farm.name}` }}
          />

          <UIAccordionDetails>
            {farm.houses?.map((house) => (
              <div key={house.id}>
                <UITypography variant="h5">{house.name}</UITypography>
                <UIDivider size="small" />
                <UITypography variant="body2">{house.id}</UITypography>
              </div>
            ))}
          </UIAccordionDetails>
        </UIAccordion>
      ))}
    </UIRoot>
  );
}

export default Sandbox;
