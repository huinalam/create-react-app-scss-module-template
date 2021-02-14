import * as React from 'react';
import { HorizontalAlignment, SingleComponentGrid, VerticalAlignment } from '../../layouts/Grid';
import { Test } from '../../layouts/Layout';

export interface IMainPageProps {
}

export function MainPage(props: IMainPageProps) {
  return (
    <Test>
      <SingleComponentGrid 
        style={{
          height: "100vh"
        }}
        verticalAlignment={VerticalAlignment.Center} 
        horizontalAlignment={HorizontalAlignment.Center}>
          MainPage
      </SingleComponentGrid>
    </Test>
  );
}
