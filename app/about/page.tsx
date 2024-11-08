'use client'

import { useState } from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@mui/material';
import { KeyboardDoubleArrowDown } from '@mui/icons-material';

import BackgroundWrapper from '@/components/wrapper/BackgroundWrapper';

import { items } from '@/helpers/constants';

export default function Page() {

  const [expanded, setExpanded] = useState<string | false>();
  
  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <BackgroundWrapper
      title='Information'
    >
      {items.map((item, index) => {
        const currentPanel = "panel".concat((index + 1).toString());
        return (
          <Accordion
            key={index}
            slotProps={{
              transition: { unmountOnExit: true }
            }}
            expanded={expanded === currentPanel}
            onChange={handleChange(currentPanel)}
            sx={{
              marginX: '5px',
            }}
            disableGutters
          >
            <AccordionSummary            
              expandIcon={<KeyboardDoubleArrowDown />}
              aria-controls={currentPanel.concat("d-content")}
              id={currentPanel.concat("d-header")}
              sx={{
                backgroundColor: "Azure",
              }}
            >
              <Typography
                variant='h3'
                fontSize={18}
                fontWeight={700}
              >
                {item.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item.menu}
            </AccordionDetails>
          </Accordion>
        );           
      })}
    </BackgroundWrapper>
  )
}
